import { Directive, EventEmitter, HostListener, inject, Input, Output } from "@angular/core";
import { BehaviorSubject, map } from "rxjs";
import { Directionality } from "@angular/cdk/bidi";
import { getDiff } from "recursive-diff";

import { AIPEmailBuilderHistoryService, AIPEmailBuilderMiddlewareService, AIPEmailBuilderService } from "./services";
import { IPEmail } from "./body/body";
import { IMjmlServerResponse } from "./interfaces";

/**
 * The base component for the AIPEmailBuilder library.
 */
export type TPreviewDevice = "desktop" | "tablet" | "mobile";

@Directive()
export abstract class AIPEmailBuilderComponent {
  /**
   * Event emitter for when the IPEmail object changes.
   */
  @Output() valueChange = new EventEmitter<IPEmail>();
  /**
   * Event emitter for after the IPEmail object is saved.
   */
  @Output() afterSave = new EventEmitter<IMjmlServerResponse>();
  /**
   * History service for tracking changes made to the IPEmail object.
   */
  readonly historyService = inject(AIPEmailBuilderHistoryService);
  /**
   * The direction of the text in the IPEmail object.
   */
  readonly direction = inject(Directionality);
  /**
   * The email builder service for converting IPEmail objects to MJML.
   */
  readonly emailBuilderService = inject(AIPEmailBuilderService);
  /**
   * The middleware service for checking user permissions.
   */
  readonly middlewareService = inject(AIPEmailBuilderMiddlewareService);
  /**
   * A behavior subject that represents the current screen the user is on.
   */
  readonly screen = new BehaviorSubject<"preview" | null>(null);
  /**
   * A map of device sizes.
   */
  readonly deviceSizes = new Map<TPreviewDevice, string>([
    ["desktop", "100%"],
    ["tablet", "768px"],
    ["mobile", "360px"]
  ]);
  /**
   * The current preview device that the user has selected.
   */
  readonly #previewDevice$ = new BehaviorSubject<TPreviewDevice>("desktop");
  /**
   * A behavior subject that represents the width of the preview device.
   */
  readonly previewDeviceWidth$ = this.#previewDevice$.pipe(
    map((device) => this.deviceSizes.get(device))
  );

  /**
   * Gets the current preview device that the user has selected.
   */
  get previewDevice(): TPreviewDevice {
    return this.#previewDevice$.getValue();
  }

  private _value = new IPEmail([], { direction: this.direction.value });

  /**
   * Gets or sets the current IPEmail object.
   */
  get value(): IPEmail {
    return this._value;
  }

  @Input()
  set value(value: IPEmail) {
    const diff = getDiff(this._value, value);
    this._value = value;
    if (diff.length) {
      this.valueChange.next(value);
    }
  }

  /**
   * Converts the current IPEmail object to MJML and saves the result.
   * Emits the afterSave event when the conversion is complete.
   * Displays an alert if there are no structures to convert.
   */
  async convert(): Promise<void> {
    if (!this.value.structures.length) {
      this.middlewareService.alert($localize`:@@convert_empty_body:Add some structures before save.`);
    } else {
      const res = await this.emailBuilderService.convert(this.value);
      this.afterSave.next(res);
    }
  }

  /**
   * Switches the current screen to the preview screen.
   * Displays an alert if there are no structures to preview.
   */
  preview(): void {
    if (!this.value.structures.length) {
      this.middlewareService.alert($localize`:@@convert_empty_body:Add some structures before save.`);
    } else {
      this.screen.next("preview");
    }
  }

  /**
   * Update the preview device to the given {@link TPreviewDevice}.
   * @param device The preview device to update to.
   * @returns void
   */
  changePreviewDevice(device: TPreviewDevice): void {
    this.#previewDevice$.next(device);
  }

  /**
   * Handles the window:beforeunload event to check if there are unsaved changes and prompt the user before leaving the page.
   * @param $event The beforeunload event.
   * @returns A promise that resolves to true if the user confirms to leave, false if the user cancels, or a boolean if no user confirmation is needed.
   */
  @HostListener("window:beforeunload", ["$event"])
  canDeactivate($event?: Event): Promise<boolean> | boolean {
    if (this.historyService.hasChanges && !$event) {
      return this.middlewareService.confirm($localize`:@@prevent_unload_message:There are unsaved changes, are you sure you want to leave the page?`);
    } else if (this.historyService.hasChanges && $event) {
      $event.preventDefault();
      return false;
    }
    return true;
  }
}

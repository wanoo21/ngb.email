import { Directive, EventEmitter, HostListener, inject, Input, Output } from "@angular/core";
import { BehaviorSubject, map } from "rxjs";
import { Directionality } from "@angular/cdk/bidi";
import { getDiff } from "recursive-diff";

import { AIPEmailBuilderHistoryService, AIPEmailBuilderMiddlewareService, AIPEmailBuilderService } from "./services";
import { IPEmail } from "./body/body";
import { IMjmlServerResponse } from "./interfaces";

export type TPreviewDevice = "desktop" | "tablet" | "mobile";

@Directive()
export abstract class AIPEmailBuilderComponent {
  @Output() valueChange = new EventEmitter<IPEmail>();
  @Output() afterSave = new EventEmitter<IMjmlServerResponse>();
  readonly historyService = inject(AIPEmailBuilderHistoryService);
  readonly direction = inject(Directionality);
  readonly emailBuilderService = inject(AIPEmailBuilderService);
  readonly middlewareService = inject(AIPEmailBuilderMiddlewareService);
  readonly screen = new BehaviorSubject<"preview" | null>(null);
  // A map of device sizes
  readonly deviceSizes = new Map<TPreviewDevice, string>([
    ["desktop", "100%"],
    ["tablet", "768px"],
    ["mobile", "360px"]
  ]);
  readonly #previewDevice$ = new BehaviorSubject<TPreviewDevice>("desktop");
  readonly previewDeviceWidth$ = this.#previewDevice$.pipe(
    map((device) => this.deviceSizes.get(device))
  );

  get previewDevice(): TPreviewDevice {
    return this.#previewDevice$.getValue();
  }

  private _value = new IPEmail([], { direction: this.direction.value });

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

  async convert(): Promise<void> {
    if (!this.value.structures.length) {
      this.middlewareService.alert($localize`:@@convert_empty_body:Add some structures before save.`);
    } else {
      const res = await this.emailBuilderService.convert(this.value);
      this.afterSave.next(res);
    }
  }

  preview(): void {
    if (!this.value.structures.length) {
      this.middlewareService.alert($localize`:@@convert_empty_body:Add some structures before save.`);
    } else {
      this.screen.next("preview");
    }
  }

  changePreviewDevice(device: TPreviewDevice): void {
    this.#previewDevice$.next(device);
  }

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

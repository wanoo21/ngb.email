import { ChangeDetectorRef, Directive, DoCheck, HostBinding, inject, OnDestroy, viewChild } from "@angular/core";
import { Subject } from "rxjs";

import { AIPEmailBuilderHistoryService, IPEmailBuilderUiService } from "../services";
import { IPEmailBuilderSettingsDirective } from "../directives/email-builder-settings.directive";

/**
 * An abstract class that provides a common interface for components that contain settings.
 * It also provides a common interface for the settings component to interact with the builder.
 *
 * @internal
 */
@Directive()
export abstract class WithSettings implements DoCheck, OnDestroy {
  readonly builderUiService = inject(IPEmailBuilderUiService);
  readonly historyService = inject(AIPEmailBuilderHistoryService);
  readonly changeDetectorRef = inject(ChangeDetectorRef);
  // Settings portal is used to attach the settings component to the builder.
  readonly settingsPortal = viewChild.required(IPEmailBuilderSettingsDirective);
  readonly destroyed = new Subject();

  @HostBinding("class.is-editing")
  get isCurrentlyEditing(): boolean {
    return this.settingsPortal().isAttached;
  }

  /**
   * Detaches the settings portal from the builder.
   */
  detachSettingsPortal(): void {
    this.builderUiService.attachSettingsPortal(null);
  }

  /**
   * Attaches the settings portal to the builder.
   */
  edit(): void {
    this.builderUiService.attachSettingsPortal(this.settingsPortal());
  }

  /**
   * This method is called when the builder is forced to check for changes.
   */
  markForCheck(): boolean {
    return false;
  }

  ngDoCheck(): void {
    if (this.isCurrentlyEditing || this.markForCheck()) {
      this.changeDetectorRef.markForCheck();
    }
  }

  ngOnDestroy(): void {
    this.destroyed.next("");
    this.destroyed.complete();
  }
}

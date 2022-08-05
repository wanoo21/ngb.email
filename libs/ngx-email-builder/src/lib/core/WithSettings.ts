import { ChangeDetectorRef, Directive, DoCheck, HostBinding, inject, ViewChild } from "@angular/core";

import { IPEmailBuilderUiService } from "../services";
import { IPEmailBuilderSettingsDirective } from "../directives/ipemail-builder-settings.directive";

@Directive()
export abstract class WithSettings implements DoCheck {
  readonly builderUiService = inject(IPEmailBuilderUiService);
  readonly changeDetectorRef = inject(ChangeDetectorRef);
  @ViewChild(IPEmailBuilderSettingsDirective, { static: true })
  readonly settingsPortal!: IPEmailBuilderSettingsDirective;

  @HostBinding("class.is-editing")
  get isCurrentlyEditing(): boolean {
    return !!this.settingsPortal?.isAttached;
  }

  detachSettingsPortal(): void {
    this.builderUiService.attachSettingsPortal(null);
  }

  edit(): void {
    this.builderUiService.attachSettingsPortal(this.settingsPortal);
  }

  markForCheck(): boolean {
    return false;
  }

  ngDoCheck(): void {
    if (this.isCurrentlyEditing || this.markForCheck()) {
      this.changeDetectorRef.markForCheck();
    }
  }
}

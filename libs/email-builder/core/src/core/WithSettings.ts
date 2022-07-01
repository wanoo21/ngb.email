import { Directive, DoCheck, HostBinding, inject, ViewChild } from "@angular/core";
import { AbsComponent } from "@ngcomma/ngx-abstract";

import { IPEmailBuilderUiService } from "../services/email-builder-ui.service";
import { IPEmailBuilderSettingsDirective } from "../directives/ipemail-builder-settings.directive";

@Directive()
export abstract class WithSettings extends AbsComponent implements DoCheck {
  readonly builderUiService = inject(IPEmailBuilderUiService);
  @ViewChild(IPEmailBuilderSettingsDirective, { static: true })
  readonly settingsPortal!: IPEmailBuilderSettingsDirective;

  @HostBinding("class.is-editing")
  get isCurrentlyEditing(): boolean {
    return !!this.settingsPortal?.isAttached;
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

import { Directive, DoCheck, HostBinding, inject, ViewChild } from "@angular/core";
import { AbsComponent } from "@ngcomma/ngx-abstract";
import { defaultsDeep } from "@ngcomma/ngx-abstract/utils";

import { IPEmailBuilderUiService } from "../services/email-builder-ui.service";
import { IPEmailBuilderSettingsDirective } from "../directives/ipemail-builder-settings.directive";

export interface AIPEmailBuilderBlockExtendedOptions<T> extends Record<string, any> {
  options: T;
}

@Directive()
export abstract class Configurable<T> extends AbsComponent implements DoCheck {
  abstract options: T;
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

  toObject(options?: Partial<T>, ...args: any[]): AIPEmailBuilderBlockExtendedOptions<T>;
  toObject(options?: Partial<T>): AIPEmailBuilderBlockExtendedOptions<T> {
    return { options: defaultsDeep<T>((options || {}) as T, this.options) };
  }

  ngDoCheck(): void {
    if (this.isCurrentlyEditing || this.markForCheck()) {
      this.changeDetectorRef.markForCheck();
    }
  }
}

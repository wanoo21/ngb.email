import { Directive, DoCheck, inject, ViewChild } from '@angular/core';
import { CdkPortal } from '@angular/cdk/portal';
import { AbsComponent } from '@ngcomma/ngx-abstract';

import { IPEmailBuilderUiService } from '../services/email-builder-ui.service';

@Directive()
export abstract class Configurable<T> extends AbsComponent implements DoCheck {
  @ViewChild(CdkPortal, { static: true })
  readonly settingsPortal!: CdkPortal;
  abstract options: T;
  readonly builderUiService = inject(IPEmailBuilderUiService);

  edit(): void {
    this.builderUiService.attachSettingsPortal(this.settingsPortal);
  }

  toObject(options?: T, ...args: never[]): { options: T } & Record<string, any>;
  toObject(options?: T): { options: T } & Record<string, any> {
    return { options: { ...this.options, ...options } };
  }

  ngDoCheck(): void {
    if (this.settingsPortal?.isAttached) {
      this.changeDetectorRef.markForCheck();
    }
  }
}

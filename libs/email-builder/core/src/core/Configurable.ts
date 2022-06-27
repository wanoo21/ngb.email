import { Directive, DoCheck, inject, ViewChild } from '@angular/core';
import { CdkPortal } from '@angular/cdk/portal';
import { AbsComponent } from '@ngcomma/ngx-abstract';

import { IPEmailBuilderUiService } from '../services/email-builder-ui.service';

@Directive()
export abstract class Configurable<T> extends AbsComponent implements DoCheck {
  abstract options: T;
  readonly builderUiService = inject(IPEmailBuilderUiService);
  @ViewChild(CdkPortal, { static: true })
  private readonly settingsPortal!: CdkPortal;

  get isCurrentlyEditing(): boolean {
    return !!this.settingsPortal?.isAttached;
  }

  edit(): void {
    this.builderUiService.attachSettingsPortal(this.settingsPortal);
  }

  toObject(
    options?: Partial<T>,
    ...args: any[]
  ): { options: T } & Record<string, any>;
  toObject(options?: Partial<T>): { options: T } & Record<string, any> {
    return { options: { ...this.options, ...options } };
  }

  ngDoCheck(): void {
    if (this.isCurrentlyEditing) {
      this.changeDetectorRef.markForCheck();
    }
  }
}

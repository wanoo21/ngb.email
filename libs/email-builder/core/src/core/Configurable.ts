import { Directive, ViewChild } from '@angular/core';
import { CdkPortal } from '@angular/cdk/portal';

@Directive()
export abstract class Configurable<T> {
  @ViewChild(CdkPortal, { static: true })
  readonly settingsPortal!: CdkPortal;
  abstract options: T;
}

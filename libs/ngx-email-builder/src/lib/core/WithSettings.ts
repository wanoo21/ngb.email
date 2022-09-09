import { ChangeDetectorRef, Directive, DoCheck, HostBinding, inject, OnDestroy, ViewChild } from "@angular/core";
import { Subject } from "rxjs";

import { AIPEmailBuilderHistoryService, IPEmailBuilderUiService } from "../services";
import { IPEmailBuilderSettingsDirective } from "../directives/email-builder-settings.directive";

@Directive()
export abstract class WithSettings implements DoCheck, OnDestroy {
  readonly builderUiService = inject(IPEmailBuilderUiService);
  readonly historyService = inject(AIPEmailBuilderHistoryService);
  readonly changeDetectorRef = inject(ChangeDetectorRef);
  @ViewChild(IPEmailBuilderSettingsDirective, { static: true })
  readonly settingsPortal!: IPEmailBuilderSettingsDirective;
  readonly destroyed = new Subject();

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

  ngOnDestroy(): void {
    this.destroyed.next("");
    this.destroyed.complete();
  }
}

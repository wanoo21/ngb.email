import { Directive, OnDestroy, OnInit, Self } from "@angular/core";
import { NgControl } from "@angular/forms";
import { debounceTime, distinctUntilChanged, filter, Subject, takeUntil } from "rxjs";

import { IPEmailBuilderHistoryHostDirective } from "./email-builder-history-host.directive";

/**
 * A directive that triggers the "detectChanges" method on the root {@link IPEmailBuilderHistoryHostDirective}
 * element whenever the value of the form control changes. This directive should be used only if you want to
 * add a record of the value of this form element to the history manager.
 *
 * This directive requires ngModel, formControl or any other directives that extend the {@link NgControl} class.
 * @exportAs ipHistoryModel
 */
@Directive({
  selector: "[ipHistoryModel]",
  exportAs: "ipHistoryModel"
})
export class IPHistoryModelDirective implements OnInit, OnDestroy {
  readonly #destroyed = new Subject();

  constructor(
    @Self() readonly ngControl?: NgControl,
    readonly historyHostDirective?: IPEmailBuilderHistoryHostDirective
  ) {
  }

  ngOnInit() {
    if (this.ngControl && this.historyHostDirective) {
      this.ngControl.valueChanges?.pipe(
        filter(() => !!this.ngControl?.dirty),
        distinctUntilChanged(),
        debounceTime(700),
        takeUntil(this.#destroyed)
      ).subscribe(() => {
        this.ngControl?.control?.markAsPristine();
        this.historyHostDirective?.detectChanges(true);
      });
    } else {
      if (!this.ngControl) {
        console.warn("[ipHistoryModel] host must have ngModel or formControl directives.");
      }
      if (!this.historyHostDirective) {
        console.warn("[ipHistoryModel] host must have ipEmailBuilderHistoryHost directives.");
      }
    }
  }

  ngOnDestroy() {
    this.#destroyed.next("");
    this.#destroyed.complete();
  }
}

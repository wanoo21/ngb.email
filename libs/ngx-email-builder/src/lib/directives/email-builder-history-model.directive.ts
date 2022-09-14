import { Directive, OnDestroy, OnInit, Self } from "@angular/core";
import { NgControl } from "@angular/forms";
import { debounceTime, distinctUntilChanged, filter, Subject, takeUntil } from "rxjs";

import { EmailBuilderHistoryHostDirective } from "./email-builder-history-host.directive";

/**
 * A simple directive that trigger "detectChanges" on root {@link EmailBuilderHistoryHostDirective} element once the formControl value has changed.
 * Use only when if you want to add a record of this form element value onto history manager.
 *
 * It requires ngModel, formControl or any other directives that extends an {@link NgControl} class.
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
    readonly historyHostDirective?: EmailBuilderHistoryHostDirective
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

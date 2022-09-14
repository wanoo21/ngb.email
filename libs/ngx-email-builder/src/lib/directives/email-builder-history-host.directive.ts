import { Directive, inject, Input, OnInit } from "@angular/core";
import { getDiff } from "recursive-diff";

import { AIPEmailBuilderHistoryService } from "../services";
import { AIPEmailBuilderBlock } from "../core/Block";
import { AIPStructure } from "../core/Structure";
import { TIPEmailBuilderStyles } from "../interfaces";
import { AIPEmailBody } from "../core/Body";

/**
 * Context for history host element
 */
export interface IIPOptionsHistoryContext<T extends TIPEmailBuilderStyles = TIPEmailBuilderStyles> {
  // Current host class
  cmp: AIPEmailBuilderBlock<T> | AIPStructure | AIPEmailBody,
  // Object with elements to watch
  watch: T
}

/**
 * This directive watches the options and make sure you don't leave without unsaved changes.
 * Even though History Logic is not ready yet, it's important to use it as root settings element.
 *
 * @exportAs ipEmailBuilderHistoryHost
 */
@Directive({
  selector: "[ipEmailBuilderHistoryHost]",
  exportAs: "ipEmailBuilderHistoryHost"
})
export class EmailBuilderHistoryHostDirective implements OnInit {
  @Input() ipEmailBuilderHistoryHost?: IIPOptionsHistoryContext;
  readonly historyService = inject(AIPEmailBuilderHistoryService);

  ngOnInit(): void {
    this.detectChanges(false);
  }

  // Detect differences in options if user made some changes
  detectChanges(isAction: boolean): void {
    if (this.ipEmailBuilderHistoryHost) {
      const { cmp, watch } = this.ipEmailBuilderHistoryHost;
      if (cmp instanceof AIPEmailBuilderBlock) {
        const diff = getDiff(watch, cmp.toObject());
        this.historyService.addHistory(`block:${cmp.id}`, diff, isAction);
      } else if (cmp instanceof AIPStructure) {
        const diff = getDiff(watch, cmp.value.options);
        this.historyService.addHistory(`structure:${cmp.value.id}`, diff, isAction);
      } else {
        const diff = getDiff(watch, cmp.value.general);
        this.historyService.addHistory("body", diff, isAction);
      }
    } else {
      console.warn("You must define [ipEmailBuilderHistoryHost] as [ipEmailBuilderHistoryHost]=\"this | toHistoryOptions\" to work properly.");
    }
  }
}

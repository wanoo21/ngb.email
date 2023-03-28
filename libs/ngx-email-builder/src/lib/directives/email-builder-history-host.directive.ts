import { Directive, inject, Input, OnInit } from "@angular/core";
import { getDiff } from "recursive-diff";

import { AIPEmailBuilderHistoryService } from "../services";
import { AIPEmailBuilderBlock } from "../core/Block";
import { AIPStructure } from "../core/Structure";
import { TIPEmailBuilderStyles } from "../interfaces";
import { AIPEmailBody } from "../core/Body";

/**
 * Context for the history host element.
 */
export interface IIPOptionsHistoryContext<T extends TIPEmailBuilderStyles = TIPEmailBuilderStyles> {
  /**
   * The current host class.
   */
  cmp: AIPEmailBuilderBlock<T> | AIPStructure | AIPEmailBody,
  /**
   * An object with elements to watch.
   */
  watch: T
}

/**
 * Watches the options and ensures that changes are not left unsaved.
 * Use it as the root settings element.
 *
 * @exportAs ipEmailBuilderHistoryHost
 */
@Directive({
  selector: "[ipEmailBuilderHistoryHost]",
  exportAs: "ipEmailBuilderHistoryHost"
})
export class IPEmailBuilderHistoryHostDirective implements OnInit {

  /**
   * The history context.
   */
  @Input() ipEmailBuilderHistoryHost?: IIPOptionsHistoryContext;

  /**
   * The history service.
   */
  readonly historyService = inject(AIPEmailBuilderHistoryService);

  ngOnInit(): void {
    this.detectChanges(false);
  }

  /**
   * Detects differences in options if the user made some changes.
   * @param isAction A boolean indicating if the change is an action.
   */
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

import { Directive, HostListener, Input } from "@angular/core";

import { AIPEmailBuilderHistoryService } from "../services";

@Directive({
  selector: "[ipEmailBuilderHistory]",
  exportAs: "ipHistory"
})
export class IPEmailBuilderHistoryDirective {
  @Input() ipHistory!: "next" | "prev";

  constructor(readonly historyService: AIPEmailBuilderHistoryService) {
  }

  @HostListener("click")
  onClick() {
    this.ipHistory === "next" ? this.historyService.runNext() : this.historyService.runPrev();
  }
}

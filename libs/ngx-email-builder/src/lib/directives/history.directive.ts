import { Directive, HostListener, Input } from "@angular/core";

import { AIPEmailBuilderHistoryService } from "../services";

@Directive({
  selector: "[ipHistory]"
})
export class IPHistoryDirective {
  @Input() ipHistory!: "next" | "prev";

  constructor(readonly historyService: AIPEmailBuilderHistoryService) {
  }

  @HostListener("click")
  onClick() {
    this.ipHistory === "next" ? this.historyService.runNext() : this.historyService.runPrev();
  }
}

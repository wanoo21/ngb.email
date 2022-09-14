import { Directive, HostBinding, HostListener, Inject, Input } from "@angular/core";
import { BooleanInput, coerceBooleanProperty } from "@angular/cdk/coercion";

import { AIPEmailBuilderHistoryService } from "../services";
import { IP_EMAIL_BUILDER_CONFIG, IPEmailBuilderConfig } from "../private-tokens";

/**
 * Implement Undo/Redo.
 * Not ready yet to use.
 *
 * @exportAs ipHistory
 */
@Directive({
  selector: "[ipEmailBuilderHistoryAction]",
  exportAs: "ipHistory"
})
export class IPEmailBuilderHistoryActionDirective {
  @Input() ipEmailBuilderHistoryAction!: "redo" | "undo";

  constructor(
    readonly historyService: AIPEmailBuilderHistoryService,
    @Inject(IP_EMAIL_BUILDER_CONFIG) readonly factory: IPEmailBuilderConfig
  ) {
  }

  private _enableKeybinding = true;

  get enableKeybinding(): boolean {
    return this._enableKeybinding;
  }

  @Input()
  set enableKeybinding(value: BooleanInput) {
    this._enableKeybinding = coerceBooleanProperty(value);
  }

  @HostBinding("disabled") get isDisabled(): boolean {
    return this.ipEmailBuilderHistoryAction === "redo" ? !this.historyService.hasRedo : !this.historyService.hasUndo;
  }

  // Bind 'undo' and 'redo' actions to 'Ctrl+Z', 'Ctrl+Y' & 'Ctrl+Shift+Z' hot keys.
  @HostListener("document:keydown", ["$event"]) keyDown(e: KeyboardEvent) {
    if (!this.factory.isFreeVersion && this._enableKeybinding) {
      const Y = 89, Z = 90;
      if (e.keyCode === Z && e.ctrlKey && !e.shiftKey && this.ipEmailBuilderHistoryAction === "undo") {
        this.historyService.undo();
      } else if ((e.keyCode === Z && e.ctrlKey && e.shiftKey || e.keyCode === Y && e.ctrlKey) && this.ipEmailBuilderHistoryAction === "redo") {
        this.historyService.redo();
      }
    }
  }

  @HostListener("click")
  onClick() {
    this.ipEmailBuilderHistoryAction === "redo" ? this.historyService.redo() : this.historyService.undo();
  }
}

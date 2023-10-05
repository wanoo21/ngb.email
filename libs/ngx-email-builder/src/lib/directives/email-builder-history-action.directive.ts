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
  /**
   * Specifies the action to perform, either "redo" or "undo".
   */
  @Input() ipEmailBuilderHistoryAction!: "redo" | "undo";

  constructor(
    readonly historyService: AIPEmailBuilderHistoryService,
    @Inject(IP_EMAIL_BUILDER_CONFIG) readonly factory: IPEmailBuilderConfig
  ) {
  }

  private _enableKeybinding = true;

  /**
   * Specifies whether the hotkey bindings are enabled or not.
   */
  get enableKeybinding(): boolean {
    return this._enableKeybinding;
  }

  @Input()
  set enableKeybinding(value: BooleanInput) {
    this._enableKeybinding = coerceBooleanProperty(value);
  }

  /**
   * Gets whether the directive is disabled or not.
   */
  @HostBinding("disabled") get isDisabled(): boolean {
    return this.ipEmailBuilderHistoryAction === "redo"
      ? !this.historyService.hasRedo
      : !this.historyService.hasUndo;
  }

  /**
   * Binds 'undo' and 'redo' actions to 'Ctrl+Z', 'Ctrl+Y' & 'Ctrl+Shift+Z' hot keys.
   */
  @HostListener("document:keydown", ["$event"]) keyDown(e: KeyboardEvent) {
    if (this._enableKeybinding) {
      const Y = "y", Z = "z";
      if (e.key === Z && e.ctrlKey && !e.shiftKey && this.ipEmailBuilderHistoryAction === "undo") {
        this.historyService.undo();
      } else if ((e.key === Z && e.ctrlKey && e.shiftKey || e.key === Y && e.ctrlKey) && this.ipEmailBuilderHistoryAction === "redo") {
        this.historyService.redo();
      }
    }
  }

  /**
   * Performs the undo or redo action based on the specified `ipEmailBuilderHistoryAction`.
   */
  @HostListener("click")
  onClick() {
    this.ipEmailBuilderHistoryAction === "redo" ? this.historyService.redo() : this.historyService.undo();
  }
}

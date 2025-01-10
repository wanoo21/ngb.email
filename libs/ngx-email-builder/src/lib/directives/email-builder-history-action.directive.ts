import { Directive, HostBinding, HostListener, Input, inject, input } from "@angular/core";
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
  readonly historyService = inject(AIPEmailBuilderHistoryService);
  readonly factory = inject<IPEmailBuilderConfig>(IP_EMAIL_BUILDER_CONFIG);

  /**
   * Specifies the action to perform, either "redo" or "undo".
   */
  readonly ipEmailBuilderHistoryAction = input.required<"redo" | "undo">();

  private _enableKeybinding = true;

  /**
   * Specifies whether the hotkey bindings are enabled or not.
   */
  get enableKeybinding(): boolean {
    return this._enableKeybinding;
  }

  // TODO: Skipped for migration because:
  //  Accessor inputs cannot be migrated as they are too complex.
  @Input()
  set enableKeybinding(value: BooleanInput) {
    this._enableKeybinding = coerceBooleanProperty(value);
  }

  /**
   * Gets whether the directive is disabled or not.
   */
  @HostBinding("disabled") get isDisabled(): boolean {
    return this.ipEmailBuilderHistoryAction() === "redo"
      ? !this.historyService.hasRedo
      : !this.historyService.hasUndo;
  }

  /**
   * Binds 'undo' and 'redo' actions to 'Ctrl+Z', 'Ctrl+Y' & 'Ctrl+Shift+Z' hot keys.
   */
  @HostListener("document:keydown", ["$event"]) keyDown(e: KeyboardEvent) {
    if (this._enableKeybinding) {
      const Y = "y", Z = "z";
      const ipEmailBuilderHistoryAction = this.ipEmailBuilderHistoryAction();
      if (e.key === Z && e.ctrlKey && !e.shiftKey && ipEmailBuilderHistoryAction === "undo") {
        this.historyService.undo();
      } else if ((e.key === Z && e.ctrlKey && e.shiftKey || e.key === Y && e.ctrlKey) && ipEmailBuilderHistoryAction === "redo") {
        this.historyService.redo();
      }
    }
  }

  /**
   * Performs the undo or redo action based on the specified `ipEmailBuilderHistoryAction`.
   */
  @HostListener("click")
  onClick() {
    this.ipEmailBuilderHistoryAction() === "redo" ? this.historyService.redo() : this.historyService.undo();
  }
}

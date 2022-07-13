import { Directive, EventEmitter, Input, Output } from "@angular/core";

@Directive()
export abstract class AIPColor {
  @Input() color: string | undefined;
  @Output() colorChange = new EventEmitter();
  @Input() disabled = false;
}

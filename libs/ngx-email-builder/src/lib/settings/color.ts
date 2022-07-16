import { Directive, EventEmitter, Input, Output } from "@angular/core";

import { IIPValueChanged } from "../core/ValueChanged";

@Directive()
export abstract class AIPColor implements IIPValueChanged<string | undefined> {
  @Input() value: string | undefined;
  @Output() valueChange = new EventEmitter();
  @Input() disabled = false;
}

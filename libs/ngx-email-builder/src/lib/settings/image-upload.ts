import { Directive, EventEmitter, Input, Output } from "@angular/core";

import { IIPValueChanged } from "../core/ValueChanged";

@Directive()
export abstract class AIPImageUpload implements IIPValueChanged<string> {
  @Input() value!: string;
  @Output() valueChange = new EventEmitter();
}

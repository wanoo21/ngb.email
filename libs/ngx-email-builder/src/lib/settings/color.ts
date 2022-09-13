import { Directive, Input } from "@angular/core";
import { BooleanInput, coerceBooleanProperty } from "@angular/cdk/coercion";

import { AIPValueChanged } from "../core/ValueChanged";

@Directive()
export abstract class AIPColor extends AIPValueChanged<any> {
  @Input() override value!: string | undefined;
  @Input() disabled = false;
  private _allowTransparent = true;

  get allowTransparent(): boolean {
    return this._allowTransparent;
  }

  @Input()
  set allowTransparent(value: BooleanInput) {
    this._allowTransparent = coerceBooleanProperty(value);
  }
}

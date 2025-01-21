import { Directive, Input, input } from "@angular/core";
import { BooleanInput, coerceBooleanProperty } from "@angular/cdk/coercion";

import { AIPValueChanged } from "../core/ValueChanged";

@Directive()
export abstract class AIPColor extends AIPValueChanged<any> {
  // TODO: Skipped for migration because:
  //  Your application code writes to the input. This prevents migration.
  @Input() override value!: string | undefined;
  readonly disabled = input(false);
  private _allowTransparent = true;

  get allowTransparent(): boolean {
    return this._allowTransparent;
  }

  // TODO: Skipped for migration because:
  //  Accessor inputs cannot be migrated as they are too complex.
  @Input()
  set allowTransparent(value: BooleanInput) {
    this._allowTransparent = coerceBooleanProperty(value);
  }
}

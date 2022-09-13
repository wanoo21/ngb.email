import { Directive, Input } from "@angular/core";
import { BooleanInput, coerceBooleanProperty } from "@angular/cdk/coercion";

import { AIPValueChanged } from "../core/ValueChanged";

@Directive()
export abstract class AIPImageUpload extends AIPValueChanged<string> {
  private _isBackgroundImage = true;

  get isBackgroundImage(): boolean {
    return this._isBackgroundImage;
  }

  @Input()
  set isBackgroundImage(value: BooleanInput) {
    this._isBackgroundImage = coerceBooleanProperty(value);
  }
}

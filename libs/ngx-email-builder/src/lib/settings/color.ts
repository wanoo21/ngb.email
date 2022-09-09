import { Directive, Input } from "@angular/core";

import { AIPValueChanged } from "../core/ValueChanged";

@Directive()
export abstract class AIPColor extends AIPValueChanged<any> {
  @Input() override value!: string | undefined;
  @Input() disabled = false;
}

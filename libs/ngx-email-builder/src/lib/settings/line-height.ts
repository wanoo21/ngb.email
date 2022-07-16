import { Directive, Input } from "@angular/core";

import { ILineHeight, TLineHeight } from "../interfaces";
import { AIPValueChanged } from "../core/ValueChanged";

@Directive()
export abstract class AIPLineHeight extends AIPValueChanged<ILineHeight> {
  @Input() units: TLineHeight[] = ["%", "px", "none"];

  #unitsLabels: Map<string, string> = new Map<TLineHeight, string>([
    ["%", $localize`:@@unit:Percent`],
    ["px", $localize`:@@unit:Pixels`],
    ["none", $localize`:@@unit:None`]
  ]);

  getUnitLabel(unit: TLineHeight): string {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.#unitsLabels.get(unit)!;
  }
}

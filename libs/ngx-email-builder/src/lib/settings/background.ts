import { Directive } from "@angular/core";

import { IBackground, TBackgroundRepeat, TUnits } from "../interfaces";
import { AIPValueChanged } from "../core/ValueChanged";

@Directive()
export abstract class AIPBackground extends AIPValueChanged<IBackground> {
  readonly #repeatLabels = new Map<TBackgroundRepeat, string>([
    ["no-repeat", $localize`:@@repeat_no:No Repeat`],
    ["repeat", $localize`:@@repeat_repeat:Repeat`],
    ["repeat-x", $localize`:@@repeat_x:Repeat X`],
    ["repeat-y", $localize`:@@repeat_y:Repeat Y`]
  ]);
  readonly #unitLabels = new Map<TUnits, string>([
    ["%", $localize`:@@unit_percent:Percent`],
    ["px", $localize`:@@unit_pixels:Pixels`],
    ["cover", $localize`:@@unit_cover:Cover`],
    ["contain", $localize`:@@unit_contain:Contain`]
  ]);

  get unitsOptions() {
    return this.value.size.units.map(unit => ({ value: unit, label: this.getUnitLabel(unit) }));
  }

  get repeatOptions() {
    return this.repeatKeys.map(key => ({ value: key, label: this.getRepeatLabel(key) }));
  }

  get repeatKeys(): TBackgroundRepeat[] {
    return [...this.#repeatLabels.keys()];
  }

  getRepeatLabel(repeat: TBackgroundRepeat): string {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.#repeatLabels.get(repeat)!;
  }

  getUnitLabel(unit: TUnits): string {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.#unitLabels.get(unit)!;
  }
}

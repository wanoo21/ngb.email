import { AbsComponent } from "@ngcomma/ngx-abstract";
import { Directive, Input } from "@angular/core";

import { IBackground, TBackgroundRepeat, TUnits } from "../interfaces";

@Directive()
export abstract class AIPBackground extends AbsComponent {
  @Input() background!: IBackground;

  readonly #repeatLabels = new Map<TBackgroundRepeat, string>([
    ["no-repeat", $localize`:@@no_repeat:No`],
    ["repeat", $localize`:@@repeat:Repeat`],
    ["repeat-x", $localize`:@@repeat_x:X`],
    ["repeat-y", $localize`:@@repeat_y:Y`]
  ]);

  readonly #unitLabels = new Map<TUnits, string>([
    ["%", $localize`:@@unit:Percent`],
    ["px", $localize`:@@unit:Pixels`],
    ["cover", $localize`:@@unit:Cover`],
    ["contain", $localize`:@@unit:Contain`],
  ]);

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

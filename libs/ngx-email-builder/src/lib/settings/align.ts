import { Directive, Input } from "@angular/core";

import { AIPValueChanged } from "../core/ValueChanged";
import { TAlign, TVerticalAlign } from "../interfaces";

@Directive()
export abstract class AIPAlign extends AIPValueChanged<any> {
  @Input() override value!: TAlign | TVerticalAlign;
  @Input() mode: "vertical" | "horizontal" = "horizontal";
  @Input() disabled = false;
  #horizontalLabels = new Map<TAlign, string>([
    ["left", $localize`:@@horizontal_left_align:Left`],
    ["center", $localize`:@@horizontal_center_align:Center`],
    ["right", $localize`:@@horizontal_right_align:Right`]
  ]);
  #verticalLabels = new Map<TVerticalAlign, string>([
    ["top", $localize`:@@vertical_top_align:Top`],
    ["middle", $localize`:@@vertical_middle_align:Middle`],
    ["bottom", $localize`:@@vertical_bottom_align:Bottom`]
  ]);

  get horizontalLabels(): TAlign[] {
    return [...this.#horizontalLabels.keys()];
  }

  get verticalLabels(): TVerticalAlign[] {
    return [...this.#verticalLabels.keys()];
  }

  get verticalOptions() {
    return this.verticalLabels.map(label => ({ value: label, label: this.getVerticalAlignLabel(label) }));
  }

  get horizontalOptions() {
    return this.horizontalLabels.map(label => ({ value: label, label: this.getHorizontalAlignLabel(label) }));
  }

  getHorizontalAlignLabel(key: TAlign): string {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.#horizontalLabels.get(key)!;
  }

  getVerticalAlignLabel(key: TVerticalAlign): string {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.#verticalLabels.get(key)!;
  }
}

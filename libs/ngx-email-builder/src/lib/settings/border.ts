import { Directive } from "@angular/core";

import { AIPValueChanged } from "../core/ValueChanged";
import { IBorder } from "../interfaces";

@Directive()
export abstract class AIPBorder extends AIPValueChanged<IBorder> {
  readonly #styleLabels = new Map<IBorder["style"], string>([
    ["solid", $localize`:@@border_style:Solid`],
    ["dotted", $localize`:@@border_style:Dotted`],
    ["dashed", $localize`:@@border_style:Dashed`],
    ["double", $localize`:@@border_style:Double`],
    ["groove", $localize`:@@border_style:Groove`]
  ]);

  get styleLabels(): IBorder["style"][] {
    return [...this.#styleLabels.keys()];
  }

  hasOwn(key: keyof IBorder): boolean {
    return Object.keys(this.value).includes(key);
  }

  getStyleLabel(style: IBorder["style"]): string {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.#styleLabels.get(style)!;
  }
}

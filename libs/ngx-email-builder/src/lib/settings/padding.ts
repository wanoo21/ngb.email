import { Directive } from "@angular/core";

import { IPadding } from "../interfaces";
import { AIPValueChanged } from "../core/ValueChanged";

@Directive()
export abstract class AIPPadding extends AIPValueChanged<IPadding> {
  readonly #paddingLabels = new Map<keyof IPadding, string>([
    ["top", $localize`:@@padding_top:Top`],
    ["right", $localize`:@@padding_right:Right`],
    ["bottom", $localize`:@@padding_bottom:Bottom`],
    ["left", $localize`:@@padding_left:Left`]
  ]);

  get paddingKeys() {
    return [...this.#paddingLabels.keys()];
  }

  getPaddingLabel(key: keyof IPadding): string {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.#paddingLabels.get(key)!;
  }
}

import { Directive } from "@angular/core";

import { AIPValueChanged } from "../core/ValueChanged";
import { IMargin } from "../interfaces";

@Directive()
export abstract class AIPMargin extends AIPValueChanged<IMargin> {
  readonly #marginLabels = new Map<keyof IMargin, string>([
    ["top", $localize`:@@padding_top:Top`],
    ["bottom", $localize`:@@padding_bottom:Bottom`]
  ]);

  get marginKeys() {
    return [...this.#marginLabels.keys()];
  }

  getMarginLabel(key: keyof IMargin): string {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.#marginLabels.get(key)!;
  }
}

import { Directive } from "@angular/core";

import { AIPValueChanged } from "../core/ValueChanged";
import { IMargin } from "../interfaces";

@Directive()
export abstract class AIPMargin extends AIPValueChanged<IMargin> {
  readonly #marginLabels = new Map<keyof IMargin, string>([
    ["top", $localize`:@@margin_top:Margin Top`],
    ["bottom", $localize`:@@margin_bottom:Margin Bottom`]
  ]);

  get marginKeys() {
    return [...this.#marginLabels.keys()];
  }

  getMarginLabel(key: keyof IMargin): string {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.#marginLabels.get(key)!;
  }
}

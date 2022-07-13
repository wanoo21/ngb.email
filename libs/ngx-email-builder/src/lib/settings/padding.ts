import { Directive, Input } from "@angular/core";
import { IPadding } from "../interfaces";

@Directive()
export abstract class AIPPadding {
  @Input() padding!: IPadding;

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

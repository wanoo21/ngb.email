import { IMargin } from "@wlocalhost/ngx-email-builder/core";
import { Directive, Input } from "@angular/core";

@Directive()
export abstract class AIPMargin {
  @Input() margin!: IMargin;

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

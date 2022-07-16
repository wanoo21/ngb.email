import { Directive, inject } from "@angular/core";

import { AIPValueChanged } from "../core/ValueChanged";
import { IFont } from "../interfaces";
import { AIPEmailBuilderService } from "../services";

@Directive()
export abstract class AIPFont extends AIPValueChanged<IFont> {
  builderService = inject(AIPEmailBuilderService);
  #standardWeights = [100, 400, 500, 700, 900];
  #stylesMap = new Map<IFont["style"], string>([
    ["normal", $localize`:@@font_style:Normal`],
    ["italic", $localize`:@@font_style:Italic`],
    ["oblique", $localize`:@@font_style:Oblique`]
  ]);

  get standardFonts(): string[] {
    return this.builderService.standardFonts;
  }

  get weight(): string {
    return String(this.value.weight);
  }

  set weight(value: string) {
    if (this.weights.includes(+value)) {
      this.value.weight = +value;
    } else {
      this.value.weight = this.weights[0];
    }
  }

  get styles(): IFont["style"][] {
    return [...this.#stylesMap.keys()];
  }

  get weights(): number[] {
    if (this.googleFont) {
      const [, weights = "400"] = this.googleFont.split(":wght@");
      return weights.split(";").filter(Boolean).map(n => parseInt(n, 10));
    } else {
      return this.#standardWeights;
    }
  }

  get family(): string {
    const { family, fallback } = this.value;
    return this.standardFonts.includes(family) ? family : fallback;
  }

  set family(value: string) {
    if (!this.googleFont) {
      this.value.family = value;
    } else {
      this.value.fallback = value;
    }
  }

  get googleFont(): string {
    const { family } = this.value;
    return !this.standardFonts.includes(family) ? family : "";
  }

  set googleFont(value: string) {
    if (value) {
      this.value.family = value;
    } else {
      this.value.family = this.value.fallback;
      this.weight = "400";
    }
  }

  getStyleLabel(style: IFont["style"]): string {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.#stylesMap.get(style)!;
  }
}

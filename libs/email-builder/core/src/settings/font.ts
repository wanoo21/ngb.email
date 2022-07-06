import { Directive, inject, Input } from "@angular/core";
import { AIPEmailBuilderService, IFont } from "@wlocalhost/ngx-email-builder/core";

@Directive()
export abstract class AIPFont {
  @Input() font!: IFont;
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

  get weight(): number {
    return this.font.weight;
  }

  set weight(value: number) {
    if (this.weights.includes(value)) {
      this.font.weight = value;
    } else {
      this.font.weight = this.weights[0];
    }
  }

  get styles(): IFont["style"][] {
    return [...this.#stylesMap.keys()];
  }

  get weights(): number[] {
    if (this.googleFont) {
      const [, weights = "400"] = this.googleFont.split("wght@");
      return weights.split(";").map(n => parseInt(n, 10));
    } else {
      return this.#standardWeights;
    }
  }

  get family(): string {
    const { family, fallback } = this.font;
    return this.standardFonts.includes(family) ? family : fallback;
  }

  set family(value: string) {
    if (!this.googleFont) {
      this.font.family = value;
    } else {
      this.font.fallback = value;
    }
  }

  get googleFont(): string {
    const { family } = this.font;
    return !this.standardFonts.includes(family) ? family : "";
  }

  set googleFont(value: string) {
    if (value) {
      this.font.family = value;
    } else {
      this.font.family = this.font.fallback;
      this.weight = 400;
    }
  }

  getStyleLabel(style: IFont["style"]): string {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.#stylesMap.get(style)!;
  }
}

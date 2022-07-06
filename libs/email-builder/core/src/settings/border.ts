import { Directive, Input } from "@angular/core";
import { IBorder } from "@wlocalhost/ngx-email-builder/core";

@Directive()
export abstract class AIPBorder {
  @Input() border!: Partial<IBorder>;

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
    // eslint-disable-next-line no-prototype-builtins
    return this.border.hasOwnProperty(key);
  }

  getStyleLabel(style: IBorder["style"]): string {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.#styleLabels.get(style)!;
  }
}

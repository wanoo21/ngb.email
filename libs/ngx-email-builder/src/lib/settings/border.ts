import { Directive, Input } from "@angular/core";

import { AIPValueChanged } from "../core/ValueChanged";
import {IBorder, IPadding, ISizes} from "../interfaces";

@Directive()
export abstract class AIPBorder extends AIPValueChanged<any> {
  // TODO: Skipped for migration because:
  //  Your application code writes to the input. This prevents migration.
  @Input() override value!: IBorder | Omit<IBorder, "radius">;
  readonly #styleLabels = new Map<IBorder["style"], string>([
    ["solid", $localize`:@@border_style_solid:Solid`],
    ["dotted", $localize`:@@border_style_dotted:Dotted`],
    ["dashed", $localize`:@@border_style_dashed:Dashed`],
    ["double", $localize`:@@border_style_double:Double`],
    ["groove", $localize`:@@border_style_groove:Groove`]
  ]);


  readonly #borderLabels = new Map<keyof ISizes, string>([
    ["top", $localize`:@@border_top:Border Top`],
    ["right", $localize`:@@border_right:Border Right`],
    ["left", $localize`:@@border_left:Border Left`],
    ["bottom", $localize`:@@border_bottom:Border Bottom`],
  ]);

  get borderKeys() {
    return [...this.#borderLabels.keys()];
  }

  getBorderLabels(key: keyof ISizes): string {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.#borderLabels.get(key)!;
  }

  get styleLabels(): IBorder["style"][] {
    return [...this.#styleLabels.keys()];
  }

  get styleOptions() {
    return this.styleLabels.map(style => ({ value: style, label: this.getStyleLabel(style) }));
  }

  get ngValue(): IBorder {
    return this.value as IBorder;
  }

  hasOwn(key: keyof IBorder): boolean {
    return Object.keys(this.value).includes(key);
  }

  getStyleLabel(style: IBorder["style"]): string {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.#styleLabels.get(style)!;
  }
}

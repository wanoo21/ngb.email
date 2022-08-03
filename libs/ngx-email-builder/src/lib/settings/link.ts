import { Directive } from "@angular/core";

import { AIPValueChanged } from "../core/ValueChanged";
import { ILink, TLinkTarget } from "../interfaces";

@Directive()
export abstract class AIPLink extends AIPValueChanged<ILink> {
  #targetLabels = new Map<TLinkTarget, string>([
    ["_blank", $localize`:@@link_target:Blank`],
    ["_self", $localize`:@@link_target:Self`],
    ["_parent", $localize`:@@link_target:Parent`],
    ["_top", $localize`:@@link_target:Top`]
  ]);

  get targets(): TLinkTarget[] {
    return [...this.#targetLabels.keys()];
  }

  get targetOptions() {
    return this.targets.map(target => ({ value: target, label: this.getTargetLabel(target) }));
  }

  getTargetLabel(target: TLinkTarget): string {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.#targetLabels.get(target)!;
  }
}

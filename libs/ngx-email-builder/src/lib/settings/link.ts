import { Directive, Input } from "@angular/core";
import { ILink, TLinkTarget } from "@wlocalhost/ngx-email-builder";

@Directive()
export abstract class AIPLink {
  @Input() link!: ILink;

  #targetLabels = new Map<TLinkTarget, string>([
    ["_blank", $localize`:@@link_target:Blank`],
    ["_self", $localize`:@@link_target:Self`],
    ["_parent", $localize`:@@link_target:Parent`],
    ["_top", $localize`:@@link_target:Top`]
  ]);

  get targets(): TLinkTarget[] {
    return [...this.#targetLabels.keys()];
  }

  getTargetLabel(target: TLinkTarget): string {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.#targetLabels.get(target)!;
  }
}

import { Directive, HostBinding, HostListener, Input, OnInit } from "@angular/core";

import { WithSettings } from "./WithSettings";
import { IIPEmail } from "../body/body";
import { createBackground, createPadding } from "../tools/utils";
import { TDirection } from "../interfaces";

@Directive()
export abstract class AIPEmailBody extends WithSettings implements OnInit {
  @Input() options!: IIPEmail["general"];
  @Input() structures!: IIPEmail["structures"];
  #directionLabels = new Map<TDirection, string>([
    ["ltr", $localize`:@@direction:Left to right`],
    ["rtl", $localize`:@@direction:Right to left`]
  ]);

  get directionKeys() {
    return this.#directionLabels.keys();
  }

  @HostBinding("style")
  get hostStyles(): Record<string, string | number> {
    const { padding, background } = this.options;
    return {
      ...createPadding(padding),
      background: createBackground(background),
      display: "flex",
      justifyContent: "start",
      alignItems: "center",
      flexDirection: "column"
    };
  }

  @HostBinding("attr.dir")
  get dir(): string {
    return this.options.direction;
  }

  getDirectionLabel(dir: TDirection): string {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.#directionLabels.get(dir)!;
  }

  @HostListener("click") onClick() {
    this.edit();
  }

  ngOnInit() {
    // Always show general settings if nothing is editing
    this.builderUiService.setDefaultSettingsPortal(this.settingsPortal);
  }

  override markForCheck(): boolean {
    return this.builderUiService.portalOutletHasAttached();
  }
}

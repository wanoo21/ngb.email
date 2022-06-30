import { Directive, HostBinding, Input, OnInit } from "@angular/core";

import { WithSettings } from "./WithSettings";
import { IIPEmail } from "../body/body";
import { createBackground, createPadding } from "../tools/utils";

@Directive()
export abstract class AIPEmailBody extends WithSettings implements OnInit {
  @Input() options!: IIPEmail["general"];
  @Input() structures!: IIPEmail["structures"];

  @HostBinding("style")
  get bodyStyles(): Record<string, string | number> {
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

  ngOnInit() {
    // Always show general settings if nothing is editing
    this.builderUiService.setDefaultSettingsPortal(this.settingsPortal);
  }

  override markForCheck(): boolean {
    return this.builderUiService.portalOutletHasAttached();
  }
}

import { ChangeDetectionStrategy, Component, ViewEncapsulation } from "@angular/core";
import { AbstractDemoEmailBuilder } from "../../../abstract/abstract-demo-email-builder";

@Component({
  selector: "wlocalhost-material-email-builder",
  template: `
    <link rel="stylesheet" [attr.href]="linkHref$ | async">
    <md-email-builder></md-email-builder>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class MaterialEmailBuilderComponent extends AbstractDemoEmailBuilder {
  override skins = ["deeppurple-amber", "indigo-pink", "pink-bluegrey", "purple-green"];
  override skinTheme = "https://cdn.jsdelivr.net/npm/@angular/material@14.1.0/prebuilt-themes/{skin}.css";
}

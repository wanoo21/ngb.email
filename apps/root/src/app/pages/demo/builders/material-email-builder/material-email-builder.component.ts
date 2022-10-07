/*
 * Copyright (c) 2022.
 */

import { ChangeDetectionStrategy, Component, ViewEncapsulation } from "@angular/core";
import { IPEmail } from "@wlocalhost/ngx-email-builder";
import { MaterialEmailBuilderModule } from "@wlocalhost/ngx-md-email-builder";
import { CommonModule } from "@angular/common";

import { AbstractDemoEmailBuilder } from "../abstract-demo-email-builder";

@Component({
  selector: "wlocalhost-material-email-builder",
  template: `
    <link rel="stylesheet" [attr.href]="linkHref$ | async">
    <md-email-builder [(value)]="email"></md-email-builder>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
  standalone: true,
  imports: [CommonModule, MaterialEmailBuilderModule]
})
export class MaterialEmailBuilderComponent extends AbstractDemoEmailBuilder {
  override skins = ["deeppurple-amber", "indigo-pink", "pink-bluegrey", "purple-green"];
  override skinTheme = "https://cdn.jsdelivr.net/npm/@angular/material@14.1.0/prebuilt-themes/{skin}.css";
  email = new IPEmail();
  npmName = "@wlocalhost/ngx-md-email-builder";
  title = "Angular Material Email Template Builder";
  description = "An Angular Material email builder with different skins";
}

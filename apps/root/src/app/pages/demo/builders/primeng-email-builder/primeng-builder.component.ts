/*
 * Copyright (c) 2022.
 */

import { ChangeDetectionStrategy, Component, ViewEncapsulation } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PrimengEmailBuilderModule } from "@wlocalhost/ngx-primeng-email-builder";

import { AbstractDemoEmailBuilder } from "../abstract-demo-email-builder";

@Component({
  selector: "wlocalhost-primeng-email-builder",
  template: `
    <link rel="stylesheet" [attr.href]="linkHref$ | async">
    <prime-email-builder></prime-email-builder>
  `,
  styleUrls: ["primeng-builder.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
  standalone: true,
  imports: [CommonModule, PrimengEmailBuilderModule]
})
export class PrimengBuilderComponent extends AbstractDemoEmailBuilder {
  override skins = ["md-light-indigo", "bootstrap4-dark-blue", "md-dark-deeppurple", "mdc-light-indigo", "lara-dark-purple", "luna-pink"];
  override skinTheme = "https://cdn.jsdelivr.net/npm/primeng@14.0.0/resources/themes/{skin}/theme.css";
  npmName = "@wlocalhost/ngx-primeng-email-builder";
  title = "PrimeNG Email Template Builder";
  description = "A PrimeNG email builder with different skins";
}

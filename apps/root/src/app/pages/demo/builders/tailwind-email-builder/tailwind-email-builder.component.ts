/*
 * Copyright (c) 2022.
 */

import { ChangeDetectionStrategy, Component, ViewEncapsulation } from "@angular/core";
import { TailwindEmailBuilderModule } from "@wlocalhost/ngx-tailwind-email-builder";

import { AbstractDemoEmailBuilder } from "../abstract-demo-email-builder";

@Component({
  selector: "wlocalhost-tailwind-email-builder",
  template: `
    <tail-email-builder></tail-email-builder>
  `,
  styleUrls: ["./tailwind-email-builder.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
  standalone: true,
  imports: [TailwindEmailBuilderModule]
})
export class TailwindEmailBuilderComponent extends AbstractDemoEmailBuilder {
  override skins = null;
  npmName = "@wlocalhost/ngx-tailwind-email-builder";
  title = "Tailwind Email Template Builder";
  description = "A Tailwind email template builder";
}

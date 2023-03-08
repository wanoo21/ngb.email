import { ChangeDetectionStrategy, Component, ViewEncapsulation } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BootstrapEmailBuilderModule } from "@wlocalhost/ngx-bootstrap-email-builder";

import { AbstractDemoEmailBuilder } from "../abstract-demo-email-builder";

@Component({
  selector: "wlocalhost-bootstrap-email-builder",
  standalone: true,
  imports: [CommonModule, BootstrapEmailBuilderModule],
  template: `
    <link  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
           integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <bt-email-builder></bt-email-builder>`,
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
export class BootstrapEmailBuilderComponent extends AbstractDemoEmailBuilder {
  description = "Bootstrap Email Builder Demo";
  npmName = "ngx-bootstrap-email-builder";
  title = "Bootstrap Email Builder";
}

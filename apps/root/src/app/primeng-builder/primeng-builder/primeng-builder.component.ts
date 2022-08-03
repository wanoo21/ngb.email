import { ChangeDetectionStrategy, Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "wlocalhost-primeng-builder",
  template: `
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/primeng@14.0.0/resources/themes/md-dark-deeppurple/theme.css">
    <prime-email-builder></prime-email-builder>
  `,
  styleUrls: ["primeng-builder.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class PrimengBuilderComponent {
}

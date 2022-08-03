import { ChangeDetectionStrategy, Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "wlocalhost-tailwind-email-builder",
  template: `
    <tail-email-builder></tail-email-builder>
  `,
  styleUrls: ["./tailwind-email-builder.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TailwindEmailBuilderComponent {
}

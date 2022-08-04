import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from "@angular/core";
import { SkinsService } from "../../../services/skins.service";

@Component({
  selector: "wlocalhost-tailwind-email-builder",
  template: `
    <tail-email-builder></tail-email-builder>
  `,
  styleUrls: ["./tailwind-email-builder.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TailwindEmailBuilderComponent implements OnInit {
  constructor(readonly skinsService: SkinsService) {
  }

  ngOnInit(): void {
    this.skinsService.addSkins(null);
  }
}

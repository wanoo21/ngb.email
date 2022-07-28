import { ChangeDetectionStrategy, Component, ViewEncapsulation } from "@angular/core";
import { ButtonBlock } from "@wlocalhost/ngx-email-builder";

@Component({
  selector: "prime-button-block-block",
  templateUrl: "button-block.component.html",
  styleUrls: ["button-block.component.scss"],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonBlockComponent extends ButtonBlock {
}

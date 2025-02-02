import { ChangeDetectionStrategy, Component, ViewEncapsulation } from "@angular/core";
import { ButtonBlock } from "@wlocalhost/ngx-email-builder";

@Component({
  selector: "tail-button-block-block",
  templateUrl: "button-block.component.html",
  styleUrls: ["button-block.component.scss"],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class ButtonBlockComponent extends ButtonBlock {
}

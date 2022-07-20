import { ChangeDetectionStrategy, Component, ViewEncapsulation } from "@angular/core";
import { SocialBlock } from "@wlocalhost/ngx-email-builder";

@Component({
  selector: "tail-social-block",
  templateUrl: "social-block.component.html",
  styleUrls: ["social-block.component.scss"],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialBlockComponent extends SocialBlock {
}

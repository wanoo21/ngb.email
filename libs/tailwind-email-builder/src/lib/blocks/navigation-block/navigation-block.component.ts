import { ChangeDetectionStrategy, Component, ViewEncapsulation } from "@angular/core";
import { NavigationBlock } from "@wlocalhost/ngx-email-builder";

@Component({
  selector: "tail-navigation-block",
  templateUrl: "./navigation-block.component.html",
  styleUrls: ["./navigation-block.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class NavigationBlockComponent extends NavigationBlock {
}

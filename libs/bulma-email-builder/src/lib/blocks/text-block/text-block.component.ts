import { ChangeDetectionStrategy, Component, ViewEncapsulation } from "@angular/core";
import { TextBlock } from "@wlocalhost/ngx-email-builder";

@Component({
  selector: "bulma-text-block",
  templateUrl: "text-block.component.html",
  styleUrls: ["text-block.component.scss"],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextBlockComponent extends TextBlock {
}

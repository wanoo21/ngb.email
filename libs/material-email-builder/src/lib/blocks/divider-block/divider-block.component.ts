import { ChangeDetectionStrategy, Component, ViewEncapsulation } from "@angular/core";
import { DividerBlock } from "@wlocalhost/ngx-email-builder";

@Component({
  selector: "md-divider-block",
  templateUrl: 'divider-block.component.html',
  styleUrls: ['divider-block.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DividerBlockComponent extends DividerBlock {
}

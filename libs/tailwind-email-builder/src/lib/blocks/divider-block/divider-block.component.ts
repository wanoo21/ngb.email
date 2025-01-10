import { ChangeDetectionStrategy, Component, ViewEncapsulation } from "@angular/core";
import { DividerBlock } from "@wlocalhost/ngx-email-builder";

@Component({
  selector: "tail-divider-block",
  templateUrl: 'divider-block.component.html',
  styleUrls: ['divider-block.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class DividerBlockComponent extends DividerBlock {
}

import { ChangeDetectionStrategy, Component, ViewEncapsulation } from "@angular/core";
import { ImageBlock } from "@wlocalhost/ngx-email-builder";

@Component({
  selector: "tail-image-block",
  templateUrl: 'image-block.component.html',
  styleUrls: ['image-block.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class ImageBlockComponent extends ImageBlock {
}

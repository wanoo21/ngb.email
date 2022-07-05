import { ChangeDetectionStrategy, Component, ViewEncapsulation } from "@angular/core";
import { ImageBlock } from "@wlocalhost/ngx-email-builder/core";

@Component({
  selector: "ip-image-block",
  templateUrl: 'image-block.component.html',
  styleUrls: ['image-block.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageBlockComponent extends ImageBlock {
}

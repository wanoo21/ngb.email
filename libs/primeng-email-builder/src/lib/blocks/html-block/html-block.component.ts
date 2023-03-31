import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {HtmlBlock} from "@wlocalhost/ngx-email-builder";

@Component({
  selector: 'prime-html-block',
  templateUrl: './html-block.component.html',
  styleUrls: ['./html-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HtmlBlockComponent extends HtmlBlock {

}

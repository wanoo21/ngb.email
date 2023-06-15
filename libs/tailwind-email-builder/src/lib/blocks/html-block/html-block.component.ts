import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {HtmlBlock} from "@wlocalhost/ngx-email-builder";

@Component({
  selector: 'tail-html-block',
  templateUrl: './html-block.component.html',
  styleUrls: ['./html-block.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HtmlBlockComponent extends HtmlBlock{

}

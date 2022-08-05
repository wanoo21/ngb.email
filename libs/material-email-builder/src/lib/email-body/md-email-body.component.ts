import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AIPEmailBody } from '@wlocalhost/ngx-email-builder';

@Component({
  selector: 'md-email-body',
  templateUrl: './md-email-body.component.html',
  styleUrls: ['./md-email-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdEmailBodyComponent extends AIPEmailBody {
}

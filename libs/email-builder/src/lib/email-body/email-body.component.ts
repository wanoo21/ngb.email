import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AIPEmailBody } from '@wlocalhost/ngx-email-builder/core';

@Component({
  selector: 'ip-email-body',
  templateUrl: './email-body.component.html',
  styleUrls: ['./email-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailBodyComponent extends AIPEmailBody {
}

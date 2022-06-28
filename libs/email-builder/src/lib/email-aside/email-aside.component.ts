import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AIPEmailBuilderAside } from '@wlocalhost/ngx-email-builder/core';

@Component({
  selector: 'ip-email-aside',
  templateUrl: './email-aside.component.html',
  styleUrls: ['./email-aside.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailAsideComponent extends AIPEmailBuilderAside {}

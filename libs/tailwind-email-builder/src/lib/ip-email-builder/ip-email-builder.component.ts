import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AIPEmailBuilderComponent } from '@wlocalhost/ngx-email-builder';

@Component({
  selector: 'ip-email-builder',
  templateUrl: './ip-email-builder.component.html',
  styleUrls: ['./ip-email-builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IpEmailBuilderComponent extends AIPEmailBuilderComponent {}

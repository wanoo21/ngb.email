import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AIPEmailBuilderComponent } from '@wlocalhost/ngx-email-builder';

@Component({
  selector: 'bt-email-builder',
  templateUrl: './bt-email-builder.component.html',
  styleUrls: ['./bt-email-builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtEmailBuilderComponent extends AIPEmailBuilderComponent {}

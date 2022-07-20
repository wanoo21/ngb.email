import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AIPEmailBuilderComponent } from '@wlocalhost/ngx-email-builder';

@Component({
  selector: 'tail-email-builder',
  templateUrl: './tail-email-builder.component.html',
  styleUrls: ['./tail-email-builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TailEmailBuilderComponent extends AIPEmailBuilderComponent {}

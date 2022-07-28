import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AIPEmailBuilderComponent } from '@wlocalhost/ngx-email-builder';

@Component({
  selector: 'prime-email-builder',
  templateUrl: './prime-email-builder.component.html',
  styleUrls: ['./prime-email-builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrimeEmailBuilderComponent extends AIPEmailBuilderComponent {}

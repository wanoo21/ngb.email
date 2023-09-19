import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AIPEmailBody } from '@wlocalhost/ngx-email-builder';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'bulma-email-body',
  templateUrl: './email-body.component.html',
  styleUrls: ['./email-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailBodyComponent extends AIPEmailBody {
  control = new FormControl()
}

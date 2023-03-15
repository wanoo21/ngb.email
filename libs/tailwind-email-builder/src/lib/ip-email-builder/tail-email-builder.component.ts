import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AIPEmailBuilderComponent } from '@wlocalhost/ngx-email-builder';

export type Device = 'desktop' | 'tablet' | 'mobile';

@Component({
  selector: 'tail-email-builder',
  templateUrl: './tail-email-builder.component.html',
  styleUrls: ['./tail-email-builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TailEmailBuilderComponent extends AIPEmailBuilderComponent {
  widthDisplay = '100%';
  device: Device = 'desktop';

  changeDevice(device: Device): void {
    switch (device) {
      case "tablet":
        this.widthDisplay = '768px';
        this.device = 'tablet';
      break;
      case "mobile":
        this.widthDisplay = '360px';
        this.device = 'mobile';
      break;
      default:
        this.widthDisplay = '100%';
        this.device = 'desktop';
    }
  }
}

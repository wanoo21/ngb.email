import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AIPEmailBuilderService } from '@wlocalhost/ngx-email-builder/core';

import { IpEmailBuilderComponent } from './ip-email-builder/ip-email-builder.component';
import { IPEmailBuilderService } from './services/ipemail-builder.service';

@NgModule({
  imports: [CommonModule],
  declarations: [IpEmailBuilderComponent],
  exports: [IpEmailBuilderComponent],
})
export class IPEmailBuilderModule {
  static forRoot(): ModuleWithProviders<IPEmailBuilderModule> {
    return {
      ngModule: IPEmailBuilderModule,
      providers: [
        { provide: AIPEmailBuilderService, useClass: IPEmailBuilderService },
      ],
    };
  }
}

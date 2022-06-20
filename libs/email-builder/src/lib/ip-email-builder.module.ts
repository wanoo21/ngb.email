import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  addNewBlock,
  IIPEmailBuilderConfig,
  IPEmailBuilderBlockComponent,
  withConfig,
} from '@wlocalhost/ngx-email-builder/core';

import { IpEmailBuilderComponent } from './ip-email-builder/ip-email-builder.component';

@NgModule({
  imports: [CommonModule],
  declarations: [IpEmailBuilderComponent],
  exports: [IpEmailBuilderComponent],
  providers: [addNewBlock(IPEmailBuilderBlockComponent)],
})
export class IPEmailBuilderModule {
  static forRoot(
    config?: IIPEmailBuilderConfig
  ): ModuleWithProviders<IPEmailBuilderModule> {
    return {
      ngModule: IPEmailBuilderModule,
      providers: [...withConfig(config)],
    };
  }
}

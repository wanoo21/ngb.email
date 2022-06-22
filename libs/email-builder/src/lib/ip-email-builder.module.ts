import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  addNewIPEmailBuilderBlock,
  IIPEmailBuilderConfig,
  IPEmailBuilderBlockDataPipe,
  TextBlockComponent,
  withConfig,
} from '@wlocalhost/ngx-email-builder/core';
import { PortalModule } from '@angular/cdk/portal';
import { FormsModule } from '@angular/forms';

import { IpEmailBuilderComponent } from './ip-email-builder/ip-email-builder.component';

@NgModule({
  imports: [CommonModule, PortalModule, FormsModule],
  declarations: [
    IpEmailBuilderComponent,
    TextBlockComponent,
    IPEmailBuilderBlockDataPipe,
  ],
  exports: [IpEmailBuilderComponent],
  providers: [
    ...addNewIPEmailBuilderBlock(TextBlockComponent, 'text_format', 'text'),
  ],
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

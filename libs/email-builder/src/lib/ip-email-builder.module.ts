import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkMenuModule } from '@angular/cdk/menu';
import {
  IIPEmailBuilderConfig,
  IPEmailBuilderCoreModule,
  withConfig,
} from '@wlocalhost/ngx-email-builder/core';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { IpEmailBuilderComponent } from './ip-email-builder/ip-email-builder.component';
import { StructureComponent } from './structure/structure.component';
import { EmailBodyComponent } from './email-body/email-body.component';
import { EmailAsideComponent } from './email-aside/email-aside.component';
import { IpFormUIModule } from './directives/form/form-input.directive';
import {
  TooltipComponent,
  TooltipDirective,
} from './directives/tooltip/tooltip.directive';
import { BackgroundComponent } from './settings/background/background.component';
import { ColorComponent } from './settings/color/color.component';
import { ImageUploadComponent } from './settings/image-upload/image-upload.component';
import { BorderComponent } from './settings/border/border.component';
import { PaddingComponent } from './settings/padding/padding.component';
import { MarginComponent } from './settings/margin/margin.component';

@NgModule({
  imports: [
    CommonModule,
    IPEmailBuilderCoreModule,
    IpFormUIModule,
    CdkMenuModule,
    CdkStepperModule,
    DragDropModule,
  ],
  declarations: [
    IpEmailBuilderComponent,
    StructureComponent,
    EmailBodyComponent,
    EmailAsideComponent,
    TooltipDirective,
    TooltipComponent,
    BackgroundComponent,
    ColorComponent,
    ImageUploadComponent,
    BorderComponent,
    PaddingComponent,
    MarginComponent,
  ],
  exports: [IpEmailBuilderComponent, IPEmailBuilderCoreModule],
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

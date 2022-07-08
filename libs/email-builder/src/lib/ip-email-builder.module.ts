import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkMenuModule } from '@angular/cdk/menu';
import {
  addDefaultBlock,
  IIPEmailBuilderConfig,
  IPEmailBuilderCoreModule,
  withConfig,
} from '@wlocalhost/ngx-email-builder/core';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TextFieldModule } from '@angular/cdk/text-field';

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

import { TextBlockComponent } from './blocks/text-block/text-block.component';
import { ButtonBlockComponent } from './blocks/button-block/button-block.component';
import { DividerBlockComponent } from './blocks/divider-block/divider-block.component';
import { ImageBlockComponent } from './blocks/image-block/image-block.component';
import { SocialBlockComponent } from './blocks/social-block/social-block.component';
import { SpacerBlockComponent } from './blocks/spacer-block/spacer-block.component';
import { FontComponent } from './settings/font/font.component';
import { LineHeightComponent } from './settings/line-height/line-height.component';
import { LinkComponent } from './settings/link/link.component';
import { AlignComponent } from './settings/align/align.component';
import { WidthHeightComponent } from './settings/width-height/width-height.component';

@NgModule({
  imports: [
    CommonModule,
    IPEmailBuilderCoreModule,
    IpFormUIModule,
    CdkMenuModule,
    CdkStepperModule,
    DragDropModule,
    TextFieldModule,
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
    TextBlockComponent,
    ButtonBlockComponent,
    DividerBlockComponent,
    ImageBlockComponent,
    SocialBlockComponent,
    SpacerBlockComponent,
    FontComponent,
    LineHeightComponent,
    LinkComponent,
    AlignComponent,
    WidthHeightComponent,
  ],
  exports: [IpEmailBuilderComponent, IPEmailBuilderCoreModule],
  providers: [
    ...addDefaultBlock(TextBlockComponent, $localize`:@@block:Text`),
    ...addDefaultBlock(ButtonBlockComponent, $localize`:@@block:Button`),
    ...addDefaultBlock(ImageBlockComponent, $localize`:@@block:Image`),
    ...addDefaultBlock(DividerBlockComponent, $localize`:@@block:Divider`),
    ...addDefaultBlock(SocialBlockComponent, $localize`:@@block:Social`),
    ...addDefaultBlock(SpacerBlockComponent, $localize`:@@block:Spacer`),
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

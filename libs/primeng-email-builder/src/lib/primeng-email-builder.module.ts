import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  addDefaultBlock,
  IIPEmailBuilderConfig,
  NgxEmailBuilderModule,
  withConfig,
} from '@wlocalhost/ngx-email-builder';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TextFieldModule } from '@angular/cdk/text-field';
import { OverlayModule } from '@angular/cdk/overlay';

import { PrimeEmailBuilderComponent } from './ip-email-builder/prime-email-builder.component';
import { StructureComponent } from './structure/structure.component';
import { EmailBodyComponent } from './email-body/email-body.component';
import { EmailAsideComponent } from './email-aside/email-aside.component';
import { IpFormUIModule } from './directives/form/form-input.directive';
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
import { TemplateListComponent } from './template-list/template-list.component';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ColorPickerModule } from 'primeng/colorpicker';
import { DropdownModule } from 'primeng/dropdown';
import { BlockUIModule } from 'primeng/blockui';
import { PanelModule } from 'primeng/panel';
import { TooltipModule } from 'primeng/tooltip';
import { InputNumberModule } from 'primeng/inputnumber';
import { NavigationBlockComponent } from './blocks/navigation-block/navigation-block.component';
import { HtmlBlockComponent } from './blocks/html-block/html-block.component';

@NgModule({
  imports: [
    CommonModule,
    NgxEmailBuilderModule,
    IpFormUIModule,
    CdkStepperModule,
    DragDropModule,
    TextFieldModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    ColorPickerModule,
    DropdownModule,
    BlockUIModule,
    PanelModule,
    OverlayModule,
    TooltipModule,
    InputNumberModule,
  ],
  declarations: [
    PrimeEmailBuilderComponent,
    StructureComponent,
    EmailBodyComponent,
    EmailAsideComponent,
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
    TemplateListComponent,
    NavigationBlockComponent,
    HtmlBlockComponent,
  ],
  exports: [PrimeEmailBuilderComponent, NgxEmailBuilderModule],
  providers: [
    ...addDefaultBlock(TextBlockComponent, $localize`:@@block_text_title:Text`),
    ...addDefaultBlock(
      ButtonBlockComponent,
      $localize`:@@block_button_title:Button`
    ),
    ...addDefaultBlock(
      ImageBlockComponent,
      $localize`:@@block_image_title:Image`
    ),
    ...addDefaultBlock(
      DividerBlockComponent,
      $localize`:@@block_divider_title:Divider`
    ),
    ...addDefaultBlock(
      SocialBlockComponent,
      $localize`:@@block_social_title:Social`
    ),
    ...addDefaultBlock(
      SpacerBlockComponent,
      $localize`:@@block_spacer_title:Spacer`
    ),
    ...addDefaultBlock(
      NavigationBlockComponent,
      $localize`:@@block_navigation_title:Navigation`
    ),
    ...addDefaultBlock(
      HtmlBlockComponent,
      $localize`:@@block_html_title:Html`
    )
  ],
})
export class PrimengEmailBuilderModule {
  static withConfig(
    config?: IIPEmailBuilderConfig
  ): ModuleWithProviders<PrimengEmailBuilderModule> {
    return {
      ngModule: PrimengEmailBuilderModule,
      providers: [...withConfig(config)],
    };
  }
}

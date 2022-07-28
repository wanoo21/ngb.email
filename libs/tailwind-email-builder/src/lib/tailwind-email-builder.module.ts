import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// import { CdkMenuModule } from "@angular/cdk/menu";
import {
  addDefaultBlock,
  IIPEmailBuilderConfig,
  NgxEmailBuilderModule,
  withConfig
} from "@wlocalhost/ngx-email-builder";
import { CdkStepperModule } from "@angular/cdk/stepper";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { TextFieldModule } from "@angular/cdk/text-field";

import { TailEmailBuilderComponent } from "./ip-email-builder/tail-email-builder.component";
import { StructureComponent } from "./structure/structure.component";
import { EmailBodyComponent } from "./email-body/email-body.component";
import { EmailAsideComponent } from "./email-aside/email-aside.component";
import { IpFormUIModule } from "./directives/form/form-input.directive";
import { TooltipComponent, TooltipDirective } from "./directives/tooltip/tooltip.directive";
import { BackgroundComponent } from "./settings/background/background.component";
import { ColorComponent } from "./settings/color/color.component";
import { ImageUploadComponent } from "./settings/image-upload/image-upload.component";
import { BorderComponent } from "./settings/border/border.component";
import { PaddingComponent } from "./settings/padding/padding.component";
import { MarginComponent } from "./settings/margin/margin.component";

import { TextBlockComponent } from "./blocks/text-block/text-block.component";
import { ButtonBlockComponent } from "./blocks/button-block/button-block.component";
import { DividerBlockComponent } from "./blocks/divider-block/divider-block.component";
import { ImageBlockComponent } from "./blocks/image-block/image-block.component";
import { SocialBlockComponent } from "./blocks/social-block/social-block.component";
import { SpacerBlockComponent } from "./blocks/spacer-block/spacer-block.component";
import { FontComponent } from "./settings/font/font.component";
import { LineHeightComponent } from "./settings/line-height/line-height.component";
import { LinkComponent } from "./settings/link/link.component";
import { AlignComponent } from "./settings/align/align.component";
import { WidthHeightComponent } from "./settings/width-height/width-height.component";
import { TemplateListComponent } from "./template-list/template-list.component";

@NgModule({
  imports: [
    CommonModule,
    NgxEmailBuilderModule,
    IpFormUIModule,
    // CdkMenuModule,
    CdkStepperModule,
    DragDropModule,
    TextFieldModule
  ],
  declarations: [
    TailEmailBuilderComponent,
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
    TemplateListComponent
  ],
  exports: [TailEmailBuilderComponent, NgxEmailBuilderModule],
  providers: [
    ...addDefaultBlock(TextBlockComponent, $localize`:@@block:Text`),
    ...addDefaultBlock(ButtonBlockComponent, $localize`:@@block:Button`),
    ...addDefaultBlock(ImageBlockComponent, $localize`:@@block:Image`),
    ...addDefaultBlock(DividerBlockComponent, $localize`:@@block:Divider`),
    ...addDefaultBlock(SocialBlockComponent, $localize`:@@block:Social`),
    ...addDefaultBlock(SpacerBlockComponent, $localize`:@@block:Spacer`)
  ]
})
export class TailwindEmailBuilderModule {
  static forRoot(
    config?: IIPEmailBuilderConfig
  ): ModuleWithProviders<TailwindEmailBuilderModule> {
    return {
      ngModule: TailwindEmailBuilderModule,
      providers: [...withConfig(config)]
    };
  }
}

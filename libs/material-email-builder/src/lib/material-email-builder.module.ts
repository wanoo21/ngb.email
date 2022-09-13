import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  addDefaultBlock,
  IIPEmailBuilderConfig,
  NgxEmailBuilderModule,
  withConfig
} from "@wlocalhost/ngx-email-builder";

import { MdEmailBuilderComponent } from "./ip-email-builder/md-email-builder.component";
import { MdStructureComponent } from "./structure/md-structure.component";
import { MdEmailBodyComponent } from "./email-body/md-email-body.component";
import { MdEmailAsideComponent } from "./email-aside/md-email-aside.component";
import { IpFormUIModule } from "./directives/form/form-input.directive";
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
import { MdTemplateListComponent } from "./template-list/md-template-list.component";

import { MatTooltipModule } from "@angular/material/tooltip";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTabsModule } from "@angular/material/tabs";
import { MatRippleModule } from "@angular/material/core";
import { MatChipsModule } from "@angular/material/chips";
import { MatDividerModule } from "@angular/material/divider";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatExpansionModule } from "@angular/material/expansion";

@NgModule({
  imports: [
    CommonModule,
    NgxEmailBuilderModule,
    IpFormUIModule,
    DragDropModule,
    MatTooltipModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatTabsModule,
    MatRippleModule,
    MatChipsModule,
    MatDividerModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatExpansionModule
  ],
  declarations: [
    MdEmailBuilderComponent,
    MdStructureComponent,
    MdEmailAsideComponent,
    MdEmailBodyComponent,
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
    MdTemplateListComponent
  ],
  exports: [MdEmailBuilderComponent, NgxEmailBuilderModule],
  providers: [
    ...addDefaultBlock(TextBlockComponent, $localize`:@@block:Text`),
    ...addDefaultBlock(ButtonBlockComponent, $localize`:@@block:Button`),
    ...addDefaultBlock(ImageBlockComponent, $localize`:@@block:Image`),
    ...addDefaultBlock(DividerBlockComponent, $localize`:@@block:Divider`),
    ...addDefaultBlock(SocialBlockComponent, $localize`:@@block:Social`),
    ...addDefaultBlock(SpacerBlockComponent, $localize`:@@block:Spacer`)
  ]
})
export class MaterialEmailBuilderModule {
  static forRoot(config?: IIPEmailBuilderConfig): ModuleWithProviders<MaterialEmailBuilderModule> {
    return {
      ngModule: MaterialEmailBuilderModule,
      providers: [...withConfig(config)]
    };
  }
}

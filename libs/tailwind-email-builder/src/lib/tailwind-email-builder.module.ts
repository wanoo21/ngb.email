import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  addIPEmailBuilderBlock,
  NgxEmailBuilderModule,
} from '@wlocalhost/ngx-email-builder';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TextFieldModule } from '@angular/cdk/text-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TailEmailBuilderComponent } from './ip-email-builder/tail-email-builder.component';
import { StructureComponent } from './structure/structure.component';
import { EmailBodyComponent } from './email-body/email-body.component';
import { EmailAsideComponent } from './email-aside/email-aside.component';
import { UIFormModule } from './directives/form/form-input.directive';
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

import { FontComponent } from './settings/font/font.component';
import { LineHeightComponent } from './settings/line-height/line-height.component';
import { LinkComponent } from './settings/link/link.component';
import { AlignComponent } from './settings/align/align.component';
import { WidthHeightComponent } from './settings/width-height/width-height.component';
import { TemplateListComponent } from './template-list/template-list.component';
import { CdkPortalOutlet } from '@angular/cdk/portal';
import { StructureSettingsComponent } from './structure/structure-settings/structure-settings.component';
import { EmailBodySettingsComponent } from './email-body/email-body-settings/email-body-settings.component';

@NgModule({
  imports: [
    CommonModule,
    NgxEmailBuilderModule,
    UIFormModule,
    DragDropModule,
    TextFieldModule,
    ReactiveFormsModule,
    FormsModule,
    CdkPortalOutlet,
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
    FontComponent,
    LineHeightComponent,
    LinkComponent,
    AlignComponent,
    WidthHeightComponent,
    TemplateListComponent,
    StructureSettingsComponent,
    EmailBodySettingsComponent,
  ],
  exports: [TailEmailBuilderComponent],
  providers: [
    addIPEmailBuilderBlock($localize`:@@block_text_title:Text`, {
      type: 'text',
      component: import('./blocks/text-block/text-block.component').then(
        (m) => m.TextBlockComponent
      ),
    }),
    addIPEmailBuilderBlock($localize`:@@block_button_title:Button`, {
      type: 'button',
      component: import('./blocks/button-block/button-block.component').then(
        (m) => m.ButtonBlockComponent
      ),
    }),
    addIPEmailBuilderBlock($localize`:@@block_image_title:Image`, {
      type: 'image',
      component: import('./blocks/image-block/image-block.component').then(
        (m) => m.ImageBlockComponent
      ),
    }),
    addIPEmailBuilderBlock($localize`:@@block_divider_title:Divider`, {
      type: 'divider',
      component: import('./blocks/divider-block/divider-block.component').then(
        (m) => m.DividerBlockComponent
      ),
    }),
    addIPEmailBuilderBlock($localize`:@@block_social_title:Social`, {
      type: 'social',
      component: import('./blocks/social-block/social-block.component').then(
        (m) => m.SocialBlockComponent
      ),
    }),
    addIPEmailBuilderBlock($localize`:@@block_spacer_title:Spacer`, {
      type: 'spacer',
      component: import('./blocks/spacer-block/spacer-block.component').then(
        (m) => m.SpacerBlockComponent
      ),
    }),
    addIPEmailBuilderBlock($localize`:@@block_navigation_title:Navigation`, {
      type: 'navigation',
      component: import(
        './blocks/navigation-block/navigation-block.component'
      ).then((m) => m.NavigationBlockComponent),
    }),
  ],
})
export class TailwindEmailBuilderModule {}

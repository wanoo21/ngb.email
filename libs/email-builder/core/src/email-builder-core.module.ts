import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { FormsModule } from '@angular/forms';

import { addNewIPEmailBuilderBlock } from './tools/core';
import { IPEmailBuilderBlockDataPipe } from './pipes/ipemail-builder-block-data.pipe';
import { IPEmailBuilderDynamicDirective } from './directives/email-builder-dynamic.directive';

import { TextBlockComponent } from './blocks/text-block/text-block.component';
import { ImageBlockComponent } from './blocks/image-block/image-block.component';
import { ButtonBlockComponent } from './blocks/button-block/button-block.component';
import { DividerBlockComponent } from './blocks/divider-block/divider-block.component';
import { SocialBlockComponent } from './blocks/social-block/social-block.component';
import { SpacerBlockComponent } from './blocks/spacer-block/spacer-block.component';
import { IPEmailBuilderSettingsDirective } from './directives/ipemail-builder-settings.directive';

@NgModule({
  declarations: [
    TextBlockComponent,
    ImageBlockComponent,
    ButtonBlockComponent,
    DividerBlockComponent,
    SocialBlockComponent,
    SpacerBlockComponent,
    IPEmailBuilderBlockDataPipe,
    IPEmailBuilderDynamicDirective,
    IPEmailBuilderSettingsDirective,
  ],
  imports: [CommonModule, PortalModule, FormsModule],
  exports: [
    TextBlockComponent,
    ImageBlockComponent,
    ButtonBlockComponent,
    DividerBlockComponent,
    SocialBlockComponent,
    SpacerBlockComponent,
    IPEmailBuilderBlockDataPipe,
    IPEmailBuilderDynamicDirective,
    PortalModule,
    FormsModule,
    IPEmailBuilderSettingsDirective,
  ],
  providers: [
    ...addNewIPEmailBuilderBlock(
      TextBlockComponent,
      'text_format',
      $localize`:@@block:Text`,
      { disabled: true, message: 'Disabled' }
    ),
    ...addNewIPEmailBuilderBlock(
      ImageBlockComponent,
      'image',
      $localize`:@@block:Image`
    ),
    ...addNewIPEmailBuilderBlock(
      ButtonBlockComponent,
      'button',
      $localize`:@@block:Button`
    ),
    ...addNewIPEmailBuilderBlock(
      DividerBlockComponent,
      'divider',
      $localize`:@@block:Divider`
    ),
    ...addNewIPEmailBuilderBlock(
      SocialBlockComponent,
      'social',
      $localize`:@@block:Social`
    ),
    ...addNewIPEmailBuilderBlock(
      SpacerBlockComponent,
      'spacer',
      $localize`:@@block:Spacer`
    ),
  ],
})
export class IPEmailBuilderCoreModule {}

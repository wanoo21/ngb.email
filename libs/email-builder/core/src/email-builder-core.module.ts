import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { FormsModule } from '@angular/forms';

import { addNewIPEmailBuilderBlock } from './tools/core';
import { IPEmailBuilderBlockDataPipe } from './pipes/ipemail-builder-block-data.pipe';
import { IPEmailBuilderDynamicDirective } from './directives/email-builder-dynamic.directive';

import { TextBlockComponent } from './components/text-block/text-block.component';
import { ImageBlockComponent } from './components/image-block/image-block.component';
import { ButtonBlockComponent } from './components/button-block/button-block.component';
import { DividerBlockComponent } from './components/divider-block/divider-block.component';
import { SocialBlockComponent } from './components/social-block/social-block.component';
import { SpacerBlockComponent } from './components/spacer-block/spacer-block.component';

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

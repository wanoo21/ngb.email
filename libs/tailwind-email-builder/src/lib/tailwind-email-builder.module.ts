import { NgModule } from '@angular/core';

import { TailEmailBuilderComponent } from './ip-email-builder/tail-email-builder.component';
import { TextBlock } from './blocks/text-block/text-block.component';
import { ButtonBlock } from './blocks/button-block/button-block.component';
import { DividerBlock } from './blocks/divider-block/divider-block.component';
import { ImageBlock } from './blocks/image-block/image-block.component';
import { NavigationBlock } from './blocks/navigation-block/navigation-block.component';
import { SocialBlock } from './blocks/social-block/social-block.component';
import { SpacerBlock } from './blocks/spacer-block/spacer-block.component';

@NgModule({
  imports: [TailEmailBuilderComponent],
  exports: [TailEmailBuilderComponent],
  providers: [
    TextBlock,
    ButtonBlock,
    DividerBlock,
    ImageBlock,
    NavigationBlock,
    SocialBlock,
    SpacerBlock,
  ],
})
export class TailwindEmailBuilderModule {}

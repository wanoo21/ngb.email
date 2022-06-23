import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { FormsModule } from '@angular/forms';

import { addNewIPEmailBuilderBlock } from './tools/core';
import { TextBlockComponent } from './components/text-block/text-block.component';
import { IPEmailBuilderBlockDataPipe } from './pipes/ipemail-builder-block-data.pipe';
import { IPEmailBuilderDynamicDirective } from './directives/email-builder-dynamic.directive';

@NgModule({
  declarations: [
    TextBlockComponent,
    IPEmailBuilderBlockDataPipe,
    IPEmailBuilderDynamicDirective,
  ],
  imports: [CommonModule, PortalModule, FormsModule],
  exports: [
    TextBlockComponent,
    IPEmailBuilderBlockDataPipe,
    IPEmailBuilderDynamicDirective,
    PortalModule,
    FormsModule,
  ],
  providers: [
    ...addNewIPEmailBuilderBlock(
      TextBlockComponent,
      'text_format',
      $localize`:@@block:Text`
    ),
  ],
})
export class IPEmailBuilderCoreModule {}

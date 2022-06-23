import { inject, Pipe, PipeTransform, Type } from '@angular/core';

import { IP_EMAIL_BUILDER_BLOCKS_DATA } from '../private-tokens';
import { AIPEmailBuilderBlock } from '../core/block';

@Pipe({
  name: 'AIPEmailBuilderBlockData',
})
export class IPEmailBuilderBlockDataPipe implements PipeTransform {
  readonly blocks = inject(IP_EMAIL_BUILDER_BLOCKS_DATA);

  transform(
    block: Type<AIPEmailBuilderBlock<any>>,
    q: 'icon' | 'type'
  ): string {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.blocks.find((b) => b.block === block)![q];
  }
}

import { inject, Pipe, PipeTransform, Type } from '@angular/core';

import {
  IIPEmailBuilderBlockData,
  IP_EMAIL_BUILDER_BLOCKS_DATA,
} from '../private-tokens';
import { AIPEmailBuilderBlock } from '../core/Block';
import { IBlockState } from '../interfaces';

@Pipe({
  name: 'AIPEmailBuilderBlockData',
})
export class IPEmailBuilderBlockDataPipe implements PipeTransform {
  readonly blocks = inject(IP_EMAIL_BUILDER_BLOCKS_DATA);

  transform(
    block: Type<AIPEmailBuilderBlock<never>>,
    q: keyof Omit<IIPEmailBuilderBlockData, 'block'>
  ): string | IBlockState {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.blocks.find((b) => b.block === block)![q];
  }
}
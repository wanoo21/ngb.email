import { Directive, Inject, Input } from '@angular/core';
import { AbsDirective } from '@ngcomma/ngx-abstract';

import {
  IIPEmailBuilderBlockData,
  IP_EMAIL_BUILDER_BLOCKS_DATA,
} from '../private-tokens';
import { AIPEmailBuilderBlock } from '../core/block';

interface IBlockData
  extends Partial<Pick<AIPEmailBuilderBlock<never>, 'type' | 'options'>>,
    Record<string, any> {}

@Directive({
  selector: '[ipEmailBuilderDynamicBlockDirective]',
})
export class IPEmailBuilderDynamicDirective extends AbsDirective {
  cmpInstance: AIPEmailBuilderBlock<any> | undefined;
  constructor(
    @Inject(IP_EMAIL_BUILDER_BLOCKS_DATA)
    readonly blocksData: IIPEmailBuilderBlockData[]
  ) {
    super();
  }

  @Input()
  set ipEmailBuilderDynamicBlockDirective(context: IBlockData) {
    const foundBlock = this.blocksData.find(
      (block) => context.type === block.type
    );
    if (foundBlock) {
      this.cmpInstance = this.viewContainerRef.createComponent(
        foundBlock.block
      ).instance;
      Object.assign(this.cmpInstance, context);
    } else {
      throw TypeError(`No such block found: ${context.type}`);
    }
  }
}

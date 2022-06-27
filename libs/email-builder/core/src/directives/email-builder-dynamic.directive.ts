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
      const component = this.viewContainerRef.createComponent(foundBlock.block);
      Object.assign(component.instance, context);
    } else {
      throw TypeError(`No such block found: ${context.type}`);
    }
  }
}

import { Directive, Inject, Input, ViewContainerRef } from '@angular/core';

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
export class IPEmailBuilderDynamicDirective {
  constructor(
    readonly viewContainerRef: ViewContainerRef,
    @Inject(IP_EMAIL_BUILDER_BLOCKS_DATA)
    readonly blocksData: IIPEmailBuilderBlockData[]
  ) {}

  @Input()
  set ipEmailBuilderDynamicBlockDirective(context: IBlockData) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const { block } = this.blocksData.find(
      (block) => context.type === block.type
    )!;
    const component = this.viewContainerRef.createComponent(block);
    Object.assign(component.instance, context);
  }
}

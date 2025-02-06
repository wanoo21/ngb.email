import { Directive, input } from '@angular/core';

import { AIPEmailBuilderBlock } from '../core/Block';
import { IBorder, IPadding, TIPEmailBuilderStyles } from '../interfaces';
import { createBorder, createPadding } from '../tools/utils';

/**
 * Builder {@link DividerBlock} options interface.
 */
export interface IDividerBlockOptions {
  border: Omit<IBorder, 'radius'>;
  padding: IPadding;
}

@Directive()
export class DividerBlock extends AIPEmailBuilderBlock<IDividerBlockOptions> {
  options = input<IDividerBlockOptions>({
    border: {
      color: '#000000',
      style: 'solid',
      width: 4,
    },
    padding: {
      top: 10,
      right: 25,
      bottom: 10,
      left: 25,
    },
  });

  get hostStyles(): TIPEmailBuilderStyles {
    return createPadding(this.options().padding);
  }

  get borderStyles(): TIPEmailBuilderStyles {
    return createBorder(this.options().border, 'borderTop');
  }
}

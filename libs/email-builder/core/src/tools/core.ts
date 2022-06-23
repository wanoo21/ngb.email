import { Provider, Type } from '@angular/core';
import {
  AIPEmailBuilderBlock,
  IIPEmailBuilderConfig,
} from '@wlocalhost/ngx-email-builder/core';

import {
  IP_EMAIL_BUILDER_BLOCKS,
  IP_EMAIL_BUILDER_BLOCKS_DATA,
  IP_EMAIL_BUILDER_CONFIG,
  IPEmailBuilderConfig,
} from '../private-tokens';

export function withConfig(config?: IIPEmailBuilderConfig): Provider[] {
  return [
    {
      provide: IP_EMAIL_BUILDER_CONFIG,
      useValue: new IPEmailBuilderConfig(config),
    },
  ];
}

export function addNewIPEmailBuilderBlock(
  block: Type<AIPEmailBuilderBlock<Record<string, any>>>,
  type: string,
  title: string
): Provider[] {
  block.prototype.type = type;
  return [
    { provide: IP_EMAIL_BUILDER_BLOCKS, useValue: block, multi: true },
    {
      provide: IP_EMAIL_BUILDER_BLOCKS_DATA,
      useValue: { block, type, title },
      multi: true,
    },
  ];
}

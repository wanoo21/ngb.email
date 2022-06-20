import { Provider, Type } from '@angular/core';
import {
  AIPEmailBuilderBlock,
  IIPEmailBuilderConfig,
} from '@wlocalhost/ngx-email-builder/core';

import {
  IP_EMAIL_BUILDER_BLOCKS,
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

export function addNewBlock(block: Type<AIPEmailBuilderBlock<any>>): Provider {
  return { provide: IP_EMAIL_BUILDER_BLOCKS, useValue: block, multi: true };
}

import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import {
  IP_EMAIL_BUILDER_BLOCKS,
  IP_EMAIL_BUILDER_BLOCKS_DATA,
} from '../private-tokens';
import type { TIPInjectedBlock } from '../interfaces';

export function addIPEmailBuilderBlock<T>(
  title: string,
  block: TIPInjectedBlock<T>
): EnvironmentProviders {
  return makeEnvironmentProviders([
    { provide: IP_EMAIL_BUILDER_BLOCKS, useValue: block, multi: true },
    {
      provide: IP_EMAIL_BUILDER_BLOCKS_DATA,
      useValue: { type: block.type, title, context: block.context },
      multi: true,
    },
  ]);
}

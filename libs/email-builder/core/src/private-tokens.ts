import { InjectionToken, Type } from '@angular/core';

import { IIPEmailBuilderConfig } from './public-tokens';
import { AIPEmailBuilderBlock } from './core/block';

export class IPEmailBuilderConfig {
  protected defConfig: IIPEmailBuilderConfig = {
    xApiKey: '',
  };

  constructor(config?: IIPEmailBuilderConfig) {
    this.defConfig = { ...this.defConfig, ...config };
  }

  get config(): IIPEmailBuilderConfig {
    return this.defConfig;
  }

  get isFreeVersion(): boolean {
    return !this.defConfig.xApiKey;
  }

  get providers(): IIPEmailBuilderConfig['providers'] {
    return this.defConfig.providers;
  }
}

export const IP_EMAIL_BUILDER_CONFIG = new InjectionToken<IPEmailBuilderConfig>(
  'Wlocalhost configurations',
  {
    providedIn: 'root',
    factory: () => {
      return new IPEmailBuilderConfig();
    },
  }
);

export const IP_EMAIL_BUILDER_BLOCKS = new InjectionToken<
  Type<AIPEmailBuilderBlock<any>>[]
>('', {
  providedIn: 'root',
  factory: () => [],
});

export const IP_EMAIL_BUILDER_BLOCKS_DATA = new InjectionToken<
  { block: Type<AIPEmailBuilderBlock<any>>; icon: string; type: string }[]
>('', {
  providedIn: 'root',
  factory: () => [],
});

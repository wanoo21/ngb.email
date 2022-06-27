import { InjectionToken, Type } from '@angular/core';

import { IIPEmailBuilderConfig } from './public-tokens';
import { AIPEmailBuilderBlock } from './core/block';
import { IBlockState } from './interfaces';

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
>('Wlocalhost blocks map', {
  providedIn: 'root',
  factory: () => [],
});

export interface IIPEmailBuilderBlockData {
  block: Type<AIPEmailBuilderBlock<any>>;
  type: string;
  title: string;
  state: IBlockState;
}

export const IP_EMAIL_BUILDER_BLOCKS_DATA = new InjectionToken<
  IIPEmailBuilderBlockData[]
>("Wlocalhost blocks' info map", {
  providedIn: 'root',
  factory: () => [],
});

import { InjectionToken } from '@angular/core';

import { IIPEmailBuilderConfig } from './public-tokens';

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

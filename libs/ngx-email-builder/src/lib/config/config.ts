import {
  EnvironmentProviders,
  InjectionToken,
  makeEnvironmentProviders,
  Provider,
} from '@angular/core';

export interface IPConfig {
  /**
   * Use custom social icons' path
   *
   * @default https://www.mailjet.com/images/theme/v1/icons/ico-social
   */
  socialIconsPath: string;
  /**
   * Custom convertor path
   *
   * @default ""
   */
  convertorPath: string;
}

class IPEmailBuilderConfig {
  readonly #defConfig: IPConfig = {
    socialIconsPath: 'https://www.mailjet.com/images/theme/v1/icons/ico-social',
    convertorPath: '',
  };

  constructor(config?: Partial<IPConfig>) {
    this.#defConfig = { ...this.#defConfig, ...config };
  }

  get socialIconsPath(): NonNullable<IPConfig['socialIconsPath']> {
    return this.#defConfig.socialIconsPath;
  }

  get convertorPath(): string {
    return this.#defConfig.convertorPath;
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

// @deprecated Use `provideNgxEmailBuilderConfig` instead
export function withConfig(config?: Partial<IPConfig>): EnvironmentProviders {
  return provideNgxEmailBuilderConfig(config);
}

export function provideNgxEmailBuilderConfig(
  config?: Partial<IPConfig>,
  ...providers: Provider[]
): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: IP_EMAIL_BUILDER_CONFIG,
      useFactory: () => {
        return new IPEmailBuilderConfig(config);
      },
    },
    ...providers,
  ]);
}

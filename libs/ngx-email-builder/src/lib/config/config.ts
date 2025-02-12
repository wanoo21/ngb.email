import { EnvironmentProviders, InjectionToken, makeEnvironmentProviders, Provider } from '@angular/core';

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

  /**
   * Path to get all templates
   */
  templatesPath: string;

  /**
   * Use different templates thumbs path
   *
   * @default https://ngb-templates.s3.amazonaws.com
   */
  templatesThumbsPath: string;
}

class IPEmailBuilderConfig {
  protected defConfig: IPConfig = {
    socialIconsPath: 'https://www.mailjet.com/images/theme/v1/icons/ico-social',
    convertorPath: '',
    templatesThumbsPath: 'https://ngb-templates.s3.amazonaws.com',
    templatesPath: 'https://ngb-api.wlocalhost.org/v1/templates',
  };

  constructor(config?: Partial<IPConfig>) {
    this.defConfig = { ...this.defConfig, ...config };
  }

  get socialIconsPath(): NonNullable<IPConfig['socialIconsPath']> {
    return this.defConfig.socialIconsPath;
  }

  get templatesThumbsPath(): NonNullable<
    IPConfig['templatesThumbsPath']
  > {
    return this.defConfig.templatesThumbsPath;
  }

  get templatesPath(): NonNullable<IPConfig['templatesPath']> {
    return this.defConfig.templatesPath;
  }

  get convertorPath(): string {
    return this.defConfig.convertorPath;
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

export function provideNgxEmailBuilderConfig(config?: Partial<IPConfig>, ...providers: Provider[]): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: IP_EMAIL_BUILDER_CONFIG,
      useFactory: () => {
        return new IPEmailBuilderConfig(config);
      }
    },
    ...providers
  ]);
}

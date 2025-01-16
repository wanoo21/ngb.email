import { EnvironmentProviders, makeEnvironmentProviders } from "@angular/core";

import { IP_EMAIL_BUILDER_CONFIG, IPEmailBuilderConfig } from "../private-tokens";
import { IIPEmailBuilderConfig } from "../public-tokens";

// @deprecated Use `provideNgxEmailBuilderConfig` instead
export function withConfig(config?: Partial<IIPEmailBuilderConfig>): EnvironmentProviders {
  return provideNgxEmailBuilderConfig(config);
}

export function provideNgxEmailBuilderConfig(config?: Partial<IIPEmailBuilderConfig>): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: IP_EMAIL_BUILDER_CONFIG,
      useFactory: () => {
        return new IPEmailBuilderConfig(config);
      }
    }
  ]);
}

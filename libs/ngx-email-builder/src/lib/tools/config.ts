import { EnvironmentProviders, makeEnvironmentProviders } from "@angular/core";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { IP_EMAIL_BUILDER_CONFIG, IPEmailBuilderConfig } from "../private-tokens";
import { IpEmailBuilderInterceptor } from "../ip-email-builder.interceptor";
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
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: IpEmailBuilderInterceptor,
      multi: true
    }
  ]);
}

import { Provider } from '@angular/core';
import { IIPEmailBuilderConfig } from '@wlocalhost/ngx-email-builder/core';

import {
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

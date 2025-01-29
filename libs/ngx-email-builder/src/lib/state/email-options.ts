import { DeepPartial, defaultsDeep } from '@wlocalhost/ngx-email-builder';
import { IIPEmail } from './tokens';
import { WritableSignal } from '@angular/core';

export function generalOptions(state: WritableSignal<IIPEmail>) {
  return (options: DeepPartial<IIPEmail['general']>) => {
    state.update((prev) => {
      return {
        ...prev,
        general: defaultsDeep(prev.general, options) as IIPEmail['general'],
      };
    });
  };
}

import { WritableSignal } from '@angular/core';

import { DeepPartial, IIPEmail } from '../interfaces';
import { defaultsDeep } from '../tools/utils';

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

import { inject, Injectable } from '@angular/core';
import {
  IP_EMAIL_BUILDER_CONFIG,
  IPEmailBuilderConfig,
} from '../../private-tokens';

@Injectable({
  providedIn: 'root',
  useFactory: (factory: IPEmailBuilderConfig) => {
    const [, useExisting] = factory.providers || [];
    if (factory.isFreeVersion) {
      if (useExisting) {
        console.warn(
          'It seems you try to rewrite AIPEmailBuilderStorageService, but this is not allowed in free version.'
        );
      }
      return new FreeEmailBuilderStorageService();
    } else if (!factory.isFreeVersion && useExisting) {
      return inject(useExisting);
    }
    return new ProEmailBuilderStorageService();
  },
  deps: [IP_EMAIL_BUILDER_CONFIG],
})
export abstract class AIPEmailBuilderStorageService {}

class ProEmailBuilderStorageService extends AIPEmailBuilderStorageService {}

class FreeEmailBuilderStorageService extends AIPEmailBuilderStorageService {}

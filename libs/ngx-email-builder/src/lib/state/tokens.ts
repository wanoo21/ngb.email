import { inject, InjectionToken, signal } from '@angular/core';
import { Directionality } from '@angular/cdk/bidi';

import { IIPEmail } from '../interfaces';
import { randomString } from '../tools/utils';

export const AIP_EMAIL_BUILDER = new InjectionToken('AIP_EMAIL_BUILDER', {
  providedIn: 'root',
  factory: () => {
    const { value: direction } = inject(Directionality);

    return signal<Readonly<IIPEmail>>(
      {
        structures: [],
        general: {
          name: '',
          previewText: '',
          // @ts-expect-error - The auto is not defined
          width: {
            value: 600,
            unit: 'px',
            units: ['px'],
          },
          background: {
            color: '#f1f1f1',
          },
          padding: {
            top: 16,
            right: 10,
            bottom: 10,
            left: 10,
          },
          direction,
          global: {
            // fonts: [],
            padding: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            },
          },
        },
      },
      {
        debugName: 'AIP_EMAIL_BUILDER',
      }
    );
  },
});

export const AIP_EMAIL_BUILDER_RESET_STATE = new InjectionToken(
  'AIP_EMAIL_BUILDER_RESET_STATE',
  {
    providedIn: 'root',
    factory: () => signal(randomString()),
  }
);

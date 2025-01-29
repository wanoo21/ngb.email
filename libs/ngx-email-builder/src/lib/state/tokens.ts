import { inject, InjectionToken, signal } from '@angular/core';
import { Directionality } from '@angular/cdk/bidi';

import { IBackground, IPadding, IWidthHeight, TDirection } from '../interfaces';
import { IStructure } from '../structure/structure';

/**
 * Builder general options interface.
 */
export interface IGeneralOptions {
  width: IWidthHeight & { auto?: boolean };
  background: Pick<IBackground, 'color'>;
  padding: IPadding;
  direction: TDirection;
  name: string;
  previewText: string;
  global: {
    // fonts?: string[];
    // padding?: IPadding;
  };
}

/**
 * Main builder Email Object interface.
 */
export interface IIPEmail {
  general: IGeneralOptions;
  structures: IStructure[];
}

export const AIP_EMAIL_BUILDER = new InjectionToken('AIP_EMAIL_BUILDER', {
  providedIn: 'root',
  factory: () => {
    const { value: direction } = inject(Directionality);

    return signal<IIPEmail>(
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

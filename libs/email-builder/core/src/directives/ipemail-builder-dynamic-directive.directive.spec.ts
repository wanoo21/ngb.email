import { IPEmailBuilderDynamicDirective } from './email-builder-dynamic.directive';
import { inject } from '@angular/core';

import { IP_EMAIL_BUILDER_BLOCKS_DATA } from '../private-tokens';

class IPEmailBuilderDynamicDirectiveTest extends IPEmailBuilderDynamicDirective {}

describe('IPEmailBuilderDynamicDirectiveDirective', () => {
  it('should create an instance', () => {
    const directive = new IPEmailBuilderDynamicDirectiveTest(
      inject(IP_EMAIL_BUILDER_BLOCKS_DATA)
    );
    expect(directive).toBeTruthy();
  });
});

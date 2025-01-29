import {
  assertInInjectionContext,
  inject,
  Injector,
  runInInjectionContext,
} from '@angular/core';

import { AIP_EMAIL_BUILDER } from './tokens';
import { AIPEmailBuilderRestService } from '../services';
import {
  addStructure,
  duplicateStructure,
  removeStructure,
  updateStructure,
} from './structure';
import { generalOptions } from './email-options';
import { duplicateBlock, removeBlock, updateBlock } from './block';

export function injectIIPEmail({ injector }: { injector?: Injector } = {}) {
  !injector && assertInInjectionContext(injectIIPEmail);
  const assertedInjector = injector || inject(Injector);

  return runInInjectionContext(assertedInjector, () => {
    const state = inject(AIP_EMAIL_BUILDER);
    // const injectedBlocks = inject(IP_EMAIL_BUILDER_BLOCKS_DATA).map((block) => block.type);
    const restService = inject(AIPEmailBuilderRestService);

    // injectedBlocks.forEach((block) => {
    //   console.log(block);
    // });

    return {
      /**
       * The email state, readonly.
       */
      value: state.asReadonly(),
      set: state.set,
      asReadonly: state.asReadonly,
      options: generalOptions(state),
      structures: {
        add: addStructure(state),
        remove: removeStructure(state),
        duplicate: duplicateStructure(state),
        update: updateStructure(state),
      },
      blocks: {
        add: () => {
          throw new Error('Not implemented');
        },
        remove: removeBlock(state),
        duplicate: duplicateBlock(state),
        update: updateBlock(state),
      },
      /**
       * Converts the email to HTML and MJML.
       */
      convert() {
        return restService.convert(state());
      },
    };
  });
}

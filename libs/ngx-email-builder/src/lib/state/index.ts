import {
  assertInInjectionContext,
  inject,
  Injector,
  runInInjectionContext,
} from '@angular/core';

import { AIP_EMAIL_BUILDER, AIP_EMAIL_BUILDER_RESET_STATE } from './tokens';
import {
  addStructure,
  duplicateStructure,
  getStructure,
  moveStructure,
  removeStructure,
  updateStructure,
} from './structure';
import { generalOptions } from './email-options';
import {
  addBlock,
  duplicateBlock,
  moveBlock,
  removeBlock,
  updateBlock,
} from './block';
import { IIPEmail, PartialBy } from '../interfaces';
import { defaultsDeep, randomString } from '../tools/utils';
import {
  IP_EMAIL_BUILDER_BLOCKS_DATA,
  TIPInjectedBlock,
} from '../config/blocks';
import { IPEmailRestService } from '../http/rest.service';
import { setState } from './state';

export function injectIIPEmail({ injector }: { injector?: Injector } = {}) {
  !injector && assertInInjectionContext(injectIIPEmail);
  const assertedInjector = injector || inject(Injector);

  return runInInjectionContext(assertedInjector, () => {
    const state = inject(AIP_EMAIL_BUILDER);
    const resetState = inject(AIP_EMAIL_BUILDER_RESET_STATE);
    const blocks = inject(IP_EMAIL_BUILDER_BLOCKS_DATA);
    const restService = inject(IPEmailRestService);

    return {
      value: state.asReadonly(),
      set: (newState: IIPEmail) => {
        setState(state, newState);
        resetState.set(randomString());
      },
      onSet: resetState.asReadonly(),
      options: generalOptions(state),
      structures: {
        add: addStructure(state),
        remove: removeStructure(state),
        duplicate: duplicateStructure(state),
        update: updateStructure(state),
        at: getStructure(state),
        move: moveStructure(state),
      },
      blocks: {
        add: (
          structureIndex: number,
          columnIndex: number,
          atIndex: number,
          block: PartialBy<
            Omit<TIPInjectedBlock<never>, 'component'>,
            'context'
          >
        ) => {
          const foundBlock = blocks.find(({ type }) => type === block.type);
          if (!foundBlock) {
            throw new Error(`Block type "${block.type}" is not registered.`);
          }
          const context = defaultsDeep(
            { ...foundBlock.context },
            { ...block.context }
          );
          return addBlock(state, { type: foundBlock.type, ...context })(
            structureIndex,
            columnIndex,
            atIndex
          );
        },
        remove: removeBlock(state),
        duplicate: duplicateBlock(state),
        update: updateBlock(state),
        move: moveBlock(state),
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

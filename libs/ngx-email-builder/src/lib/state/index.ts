import {
  assertInInjectionContext,
  inject,
  Injector,
  runInInjectionContext,
} from '@angular/core';

import { AIP_EMAIL_BUILDER, AIP_EMAIL_BUILDER_RESET_STATE } from './tokens';
import { AIPEmailBuilderRestService } from '../http';
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
import { IIPEmail } from '../interfaces';
import { randomString } from '../tools/utils';
import { IP_EMAIL_BUILDER_BLOCKS_DATA, TIPEmailBuilderBlock } from '../config/blocks';

export function injectIIPEmail({ injector }: { injector?: Injector } = {}) {
  !injector && assertInInjectionContext(injectIIPEmail);
  const assertedInjector = injector || inject(Injector);

  return runInInjectionContext(assertedInjector, () => {
    const state = inject(AIP_EMAIL_BUILDER);
    const resetState = inject(AIP_EMAIL_BUILDER_RESET_STATE);
    const blocks = inject(IP_EMAIL_BUILDER_BLOCKS_DATA);
    const restService = inject(AIPEmailBuilderRestService);

    return {
      value: state.asReadonly(),
      set: (newState: IIPEmail) => {
        state.set(structuredClone(newState));
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
          block: Omit<TIPEmailBuilderBlock, 'id' | 'options'>
        ) => {
          const foundBlock = blocks.find(({ type }) => type === block.type);
          if (!foundBlock) {
            throw new Error(`Block type "${block.type}" is not registered.`);
          }
          return addBlock(state, { ...block, ...foundBlock.context })(
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

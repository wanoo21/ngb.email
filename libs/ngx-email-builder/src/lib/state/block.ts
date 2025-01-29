import { WritableSignal } from '@angular/core';

import { IIPEmail } from './tokens';
import {
  AIPEmailBuilderBlockExtendedOptions,
  DeepPartial,
  defaultsDeep,
} from '@wlocalhost/ngx-email-builder';

export function addBlock(state: WritableSignal<IIPEmail>, type: string) {
  return () => {};
}

export function removeBlock(state: WritableSignal<IIPEmail>) {
  return (structureIndex: number, columnIndex: number, index: number) => {
    state.update((prev) => {
      return {
        ...prev,
        structures: prev.structures.map((structure, i) => {
          if (i === structureIndex) {
            return {
              ...structure,
              elements: structure.elements.map((column, j) => {
                if (j === columnIndex) {
                  return column.filter((_, k) => k !== index);
                }
                return column;
              }),
            };
          }
          return structure;
        }),
      };
    });
  };
}

export function duplicateBlock(state: WritableSignal<IIPEmail>) {
  return (structureIndex: number, columnIndex: number, index: number) => {
    state.update((prev) => {
      return {
        ...prev,
        structures: prev.structures.map((structure, i) => {
          if (i === structureIndex) {
            return {
              ...structure,
              elements: structure.elements.map((column, j) => {
                if (j === columnIndex) {
                  const block = structuredClone(column[index]);
                  return [
                    ...column.slice(0, index),
                    block,
                    ...column.slice(index),
                  ];
                }
                return column;
              }),
            };
          }
          return structure;
        }),
      };
    });
  };
}

export function updateBlock(state: WritableSignal<IIPEmail>) {
  return (
    structureIndex: number,
    columnIndex: number,
    index: number,
    options: DeepPartial<AIPEmailBuilderBlockExtendedOptions['options']>
  ) => {
    state.update((prev) => {
      return {
        ...prev,
        structures: prev.structures.map((structure, i) => {
          if (i === structureIndex) {
            return {
              ...structure,
              elements: structure.elements.map((column, j) => {
                if (j === columnIndex) {
                  return column.map((block, k) => {
                    if (k === index) {
                      return {
                        ...block,
                        options: defaultsDeep(
                          block.options,
                          options
                        ) as AIPEmailBuilderBlockExtendedOptions['options'],
                      };
                    }
                    return block;
                  });
                }
                return column;
              }),
            };
          }
          return structure;
        }),
      };
    });
  };
}

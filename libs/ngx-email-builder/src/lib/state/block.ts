import { WritableSignal } from '@angular/core';
import { transferArrayItem } from '@angular/cdk/drag-drop';

import { DeepPartial, IIPEmail } from '../interfaces';
import { defaultsDeep, randomString } from '../tools/utils';
import { TIPEmailBuilderBlock } from '../core/Block';

export function addBlock(
  state: WritableSignal<IIPEmail>,
  block: TIPEmailBuilderBlock | { type: string }
) {
  return (structureIndex: number, columnIndex: number, atIndex: number) => {
    state.update((prev) => {
      return {
        ...prev,
        structures: prev.structures.map((structure, i) => {
          if (i === structureIndex) {
            return {
              ...structure,
              elements: structure.elements.map((column, j) => {
                if (j === columnIndex) {
                  const newColumn = structuredClone(column);
                  newColumn.splice(atIndex, 0, {
                    ...block,
                    id: randomString(),
                  });
                  return newColumn;
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

type moveData = {
  structureIndex: number;
  columnIndex: number;
  index: number;
  toStructureIndex: number;
  toColumnIndex: number;
  toIndex: number;
};

export function moveBlock(state: WritableSignal<IIPEmail>) {
  return (data: moveData) => {
    state.update((prev) => {
      const structures = structuredClone(prev.structures);
      console.log(structures);
      const fromColumn =
        structures[data.structureIndex].elements[data.columnIndex];
      const toColumn =
        structures[data.toStructureIndex].elements[data.toColumnIndex];
      transferArrayItem(fromColumn, toColumn, data.index, data.toIndex);

      return {
        ...prev,
        structures,
      };
    });
  };
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
    options: DeepPartial<TIPEmailBuilderBlock['options']>
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
                          block.options || {},
                          options || {}
                        ),
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

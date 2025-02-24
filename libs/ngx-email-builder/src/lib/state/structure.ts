import { WritableSignal } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';

import { DeepPartial, IIPEmail } from '../interfaces';
import { Structure } from '../ui/structure/structure';
import { IStructureOptions, TStructureTypes } from '../ui/structure/interfaces';
import { defaultsDeep, randomString } from '../tools/utils';

export function addStructure(state: WritableSignal<IIPEmail>) {
  return (
    type: TStructureTypes = 'cols_1',
    options?: DeepPartial<IStructureOptions>,
    atIndex = 0
  ) => {
    const newStructure = new Structure(type, [], options);
    state.update((prev) => {
      const structures = structuredClone(prev.structures);
      structures.splice(atIndex, 0, { ...newStructure });
      return {
        ...prev,
        structures,
      };
    });
    return atIndex;
  };
}

export function removeStructure(state: WritableSignal<IIPEmail>) {
  return (index: number) => {
    state.update((prev) => {
      return {
        ...prev,
        structures: prev.structures.filter((_, i) => i !== index),
      };
    });
  };
}

export function duplicateStructure(state: WritableSignal<IIPEmail>) {
  return (index: number) => {
    state.update((prev) => {
      const structures = structuredClone(prev.structures);
      const structure = structuredClone({
        ...structures[index],
        id: randomString(),
      });
      structures.splice(index + 1, 0, structure);
      return {
        ...prev,
        structures,
      };
    });
  };
}

export function updateStructure(state: WritableSignal<IIPEmail>) {
  return (index: number, options: DeepPartial<IStructureOptions>) => {
    const structure = state().structures[index];

    if (!structure) {
      console.error(`Structure with index ${index} not found`);
      return;
    }

    state.update((prev) => {
      return {
        ...prev,
        structures: prev.structures.map((structure, i) => {
          if (i === index) {
            return {
              ...structure,
              options: defaultsDeep(
                structure.options,
                options
              ) as IStructureOptions,
            };
          }
          return structure;
        }),
      };
    });
  };
}

export function getStructure(state: WritableSignal<IIPEmail>) {
  return (index: number) => {
    return state().structures[index];
  };
}

export function moveStructure(state: WritableSignal<IIPEmail>) {
  return (fromIndex: number, toIndex: number) => {
    state.update((prev) => {
      const structures = [...prev.structures];
      // const [removed] = structures.splice(fromIndex, 1);
      // structures.splice(toIndex, 0, removed);
      moveItemInArray(structures, fromIndex, toIndex);
      return {
        ...prev,
        structures,
      };
    });
  };
}

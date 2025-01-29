import { WritableSignal } from '@angular/core';

import { DeepPartial, TStructureTypes } from '../interfaces';
import { IStructureOptions, Structure } from '../structure/structure';
import { IIPEmail } from './tokens';
import { defaultsDeep } from '../tools/utils';

export function addStructure(state: WritableSignal<IIPEmail>) {
  return (
    type: TStructureTypes = 'cols_1',
    options?: DeepPartial<IStructureOptions>
  ) => {
    const newStructure = new Structure(type, [], options);
    state.update((prev) => {
      return {
        ...prev,
        structures: [...prev.structures, newStructure],
      };
    });
    return state().structures.indexOf(newStructure);
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
    const structure = structuredClone(state().structures[index]);
    state.update((prev) => {
      return {
        ...prev,
        structures: [
          ...prev.structures.slice(0, index),
          structure,
          ...prev.structures.slice(index),
        ],
      };
    });

    return state().structures.indexOf(structure);
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

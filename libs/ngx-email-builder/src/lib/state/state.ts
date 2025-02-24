import { WritableSignal } from '@angular/core';

import { IIPEmail } from '../interfaces';
import { randomString } from '../tools/utils';

export function setState(state: WritableSignal<IIPEmail>, newState: IIPEmail) {
  try {
    // Let's check if each structure and block inside has a unique id
    // If not, we will generate a new one
    const newStateWithUniqueIds = {
      ...newState,
      structures: newState.structures.map((structure) => ({
        ...structure,
        id: structure.id || randomString(),
        elements: structure.elements.map((element) => {
          return element.map((block) => ({
            ...block,
            id: block.id || randomString(),
          }));
        }),
      })),
    };
    state.set(Object.freeze(structuredClone(newStateWithUniqueIds)));
  } catch (error) {
    console.error('Error setting state', error);
  }
}

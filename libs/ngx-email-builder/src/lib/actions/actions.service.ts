import { inject, Injectable } from '@angular/core';

import type { IStructure } from '../ui/structure/interfaces';
import type { AIPEmailBuilderBlock } from '../ui/block/block.ng';

/**
 * Service for handling user actions.
 */
@Injectable({
  providedIn: 'root',
  useFactory: () => inject(DefaultIPActionsService),
})
export abstract class IPActionsService {
  abstract delete(
    entity: IStructure | AIPEmailBuilderBlock<unknown>
  ): Promise<boolean>;

  abstract alert(message: string): void;

  abstract confirm(message: string): Promise<boolean>;
}

/**
 * Default implementation of `IPActionsService`.
 */
@Injectable({ providedIn: 'root' })
export class DefaultIPActionsService implements IPActionsService {
  /**
   * Prompts the user with a confirmation dialog to delete an entity.
   *
   * @param entity The entity to be deleted.
   * @returns A promise that resolves to `true` if the user confirms deletion, `false` otherwise.
   */
  delete(entity: IStructure | AIPEmailBuilderBlock<unknown>): Promise<boolean> {
    return this.confirm('Are you sure?');
  }

  /**
   * Displays an alert with the given message.
   *
   * @param message The message to be displayed.
   */
  alert(message: string): void {
    alert(message);
  }

  /**
   * Prompts the user with a confirmation dialog.
   *
   * @param message The message to be displayed in the dialog.
   * @returns A promise that resolves to `true` if the user confirms, `false` otherwise.
   */
  confirm(message: string): Promise<boolean> {
    const ask = confirm(message);
    return Promise.resolve(ask);
  }
}

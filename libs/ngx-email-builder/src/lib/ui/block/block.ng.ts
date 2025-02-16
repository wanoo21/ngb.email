import { Directive, inject, input, Signal } from '@angular/core';

import { SettingsNg } from '../settings/settings.ng';
import { DeepPartial, TIPEmailBuilderStyles } from '../../interfaces';
import { injectIIPEmail } from '../../state';
import { AIPBlockContext } from '../../config/blocks';
import { IPEmailBuilderColumnDirective } from '../column/column-drop.directive';
import { IPActionsService } from '../../actions/actions.service';

/**
 * The abstract class for a builder block component.
 * It provides a common interface for the settings component to interact with the builder.
 * @template T The options interface for the block.
 */
@Directive({
  host: {
    '[style]': 'hostStyles()',
  },
})
export abstract class AIPEmailBuilderBlock<T> extends SettingsNg {
  readonly myIndex = input.required<number>();
  abstract readonly options: Signal<T>;
  abstract readonly hostStyles: Signal<TIPEmailBuilderStyles>;
  readonly #coordinates = inject(IPEmailBuilderColumnDirective).data;
  readonly #currentEmail = injectIIPEmail();
  readonly #middlewareService = inject(IPActionsService);

  /**
   * Updates the block's context in the current email.
   */
  updateMyContext(ctx: DeepPartial<AIPBlockContext<T>>) {
    const { row, col } = this.#coordinates;
    this.#currentEmail.blocks.update(row, col, this.myIndex(), ctx);
  }

  /**
   * Duplicates the block.
   */
  duplicateMe() {
    const { row, col } = this.#coordinates;
    this.#currentEmail.blocks.duplicate(row, col, this.myIndex());
  }

  /**
   * Deletes the block.
   */
  async removeMe() {
    const confirm = await this.#middlewareService.delete(this);
    if (confirm) {
      const { row, col } = this.#coordinates;
      this.#currentEmail.blocks.remove(row, col, this.myIndex());
    }
  }
}

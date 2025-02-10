import { Directive, inject, input, Signal } from '@angular/core';

import { SettingsNg } from '../settings/settings.ng';
import { DeepPartial, TIPEmailBuilderStyles } from '../../interfaces';
import { injectIIPEmail } from '../../state';
import { AIPBlockContext } from '../../config/blocks';
import { IPEmailBuilderColumnDirective } from '../column/column-drop.directive';

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
  readonly coordinates = inject(IPEmailBuilderColumnDirective).data;
  readonly currentEmail = injectIIPEmail();

  updateMyContext(ctx: DeepPartial<AIPBlockContext<T>>) {
    const { row, col } = this.coordinates;
    this.currentEmail.blocks.update(row, col, this.myIndex(), ctx);
  }

  // readonly #builderService = inject(AIPEmailBuilderService);
  // readonly #renderer2 = inject(Renderer2);
  // #document = inject(DOCUMENT);
  // #googleFontLink = this.#document.createElement('link');
  //
  // /**
  //  * A debounced function that adds a font to the head if it is not already there.
  //  */
  // #addFontToHead = debounce((family: string) => {
  //   const fontIsIncluded = Array.from(
  //     this.#document.querySelectorAll('link')
  //   ).some(({ href }) => href.includes(family));
  //   if (!fontIsIncluded) {
  //     this.#googleFontLink.href = `https://fonts.googleapis.com/css2?family=${family}&display=swap`;
  //     this.#googleFontLink.rel = 'stylesheet';
  //     this.#renderer2.appendChild(this.#document.head, this.#googleFontLink);
  //   }
  // }, 1000);
  //
  // /**
  //  * Parses the font family and adds the font to the head if it is not a standard font.
  //  * @param font The font object to be parsed and added.
  //  * @returns The parsed font object.
  //  */
  // parseFont(font: IFont): IFont {
  //   let family = font.family;
  //   if (!this.#builderService.standardFonts.includes(font.family)) {
  //     family = font.family.split(':wght@')[0].replace(/\+/g, ' ');
  //     this.#addFontToHead(font.family);
  //   } else {
  //     this.#googleFontLink.remove();
  //   }
  //   return { ...font, family };
  // }

  // ngOnDestroy() {
  // this.#googleFontLink.remove();
  // }
}

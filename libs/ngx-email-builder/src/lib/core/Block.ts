import { Directive, InputSignal, Signal } from '@angular/core';
import { WithSettings } from './WithSettings';
import { TIPEmailBuilderStyles } from '../interfaces';

export type TIPEmailBuilderBlock<T = Record<PropertyKey, any>> = {
  readonly type: string;
  readonly id?: string;
  options?: T;
};

export interface AIPBlockContext<T> extends Record<PropertyKey, unknown> {
  options: T;
}

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
export abstract class AIPEmailBuilderBlock<T> extends WithSettings {
  abstract readonly options: InputSignal<T>;
  abstract readonly hostStyles: Signal<TIPEmailBuilderStyles>;

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

import { Directive, input, model } from '@angular/core';

import { IFont, ILineHeight, IPadding, TIPEmailBuilderStyles } from '../interfaces';
import { AIPEmailBuilderBlock } from '../core/Block';
import { createLineHeight, createPadding } from '../tools/utils';

/**
 * Builder {@link TextBlock} options interface.
 */
export interface ITextBlockOptions {
  color: string;
  font: IFont;
  lineHeight: ILineHeight;
  padding: IPadding;
}

@Directive()
export class TextBlock extends AIPEmailBuilderBlock<ITextBlockOptions> {
  innerText = model('TEXT');

  options = input<ITextBlockOptions>({
    color: '#000000',
    font: {
      fallback: 'Arial, Helvetica, sans-serif',
      family: 'Roboto',
      style: 'normal',
      size: 16,
      weight: 400,
    },
    lineHeight: {
      value: 16,
      unit: 'none',
    },
    padding: {
      top: 10,
      right: 25,
      bottom: 10,
      left: 25,
    },
  });

  get hostStyles(): TIPEmailBuilderStyles {
    const { color, font, lineHeight, padding } = this.options();

    return {
      color,
      'word-break': 'break-all',
      ...createLineHeight(lineHeight),
      // ...createFont(this.parseFont(font)),
      ...createPadding(padding),
    };
  }
}

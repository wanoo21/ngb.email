import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { AIPEmailBuilderBlock } from '../../core/block';

interface TextOptions {
  type: string;
}

@Component({
  template: ` <p>ipemail-builder-block {{ options | json }}!</p> `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  imports: [CommonModule],
  standalone: true,
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IPEmailBuilderBlockComponent extends AIPEmailBuilderBlock<TextOptions> {
  options = {
    type: '',
  };
}

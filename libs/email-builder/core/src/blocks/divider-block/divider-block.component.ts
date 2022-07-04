import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

import { AIPEmailBuilderBlock } from '../../core/Block';
import { IBorder, IPadding } from '../../interfaces';

/**
 * Builder {@link DividerBlockComponent} options interface.
 */
export interface IDividerBlockOptions {
  border: Omit<IBorder, "radius">;
  padding: IPadding;
}

@Component({
  selector: 'ip-divider-block',
  template: `
    <p>divider-block works! {{ options.padding.top | number }}</p>
    <ng-container *ipEmailBuilderSettings>
      <input
        type="number"
        [(ngModel)]="options.padding.top"
        placeholder="Change me"
      />
    </ng-container>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DividerBlockComponent extends AIPEmailBuilderBlock<IDividerBlockOptions> {
  options: IDividerBlockOptions = {
    border: {
      color: '#000000',
      style: 'solid',
      width: 4,
    },
    padding: {
      top: 10,
      right: 25,
      bottom: 10,
      left: 25,
    },
  };
}

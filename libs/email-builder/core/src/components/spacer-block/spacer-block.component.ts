import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

import { AIPEmailBuilderBlock } from '../../core/block';
import { IWidthHeight } from '../../interfaces';

/**
 * Builder {@link SpacerBlockComponent} options interface.
 */
export interface ISpacerBlockOptions {
  height: IWidthHeight;
  width: IWidthHeight;
}

@Component({
  selector: 'ip-spacer-block',
  template: `
    <p>spacer-block works!</p>
    <ng-container *cdk-portal>
      <input
        type="number"
        [(ngModel)]="options.height.value"
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
export class SpacerBlockComponent extends AIPEmailBuilderBlock<ISpacerBlockOptions> {
  options: ISpacerBlockOptions = {
    height: {
      value: 20,
      unit: 'px',
      units: ['px'],
    },
    width: {
      value: 100,
      unit: '%',
    },
  };
}

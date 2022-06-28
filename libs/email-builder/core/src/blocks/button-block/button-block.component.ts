import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

import { AIPEmailBuilderBlock } from '../../core/block';
import {
  IBorder,
  IFont,
  ILineHeight,
  ILink,
  IPadding,
  TAlign,
} from '../../interfaces';

/**
 * Builder {@link ButtonBlockComponent} options interface.
 */
export interface IButtonBlockOptions {
  backgroundColor: string;
  border: IBorder;
  color: string;
  font: IFont;
  align: TAlign;
  fullWidth: boolean;
  lineHeight: ILineHeight;
  link: ILink;
  innerPadding: IPadding;
  padding: IPadding;
}

@Component({
  selector: 'ip-button-block',
  template: `
    <p>button-block works! {{ innerText }}</p>
    <ng-container *cdk-portal>
      <input type="text" [(ngModel)]="innerText" placeholder="Change me" />
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
export class ButtonBlockComponent extends AIPEmailBuilderBlock<IButtonBlockOptions> {
  innerText = $localize`:@@button_block_default_innerText:Click on me`;
  options: IButtonBlockOptions = {
    backgroundColor: '#414141',
    border: {
      color: '#414141',
      style: 'solid',
      width: 0,
      radius: 3,
    },
    color: '#ffffff',
    font: {
      fallback: 'Arial, Helvetica, sans-serif',
      family: 'Roboto',
      size: 13,
      style: 'normal',
      weight: 400,
    },

    align: 'center',
    fullWidth: false,
    // verticalAlign: 'middle',
    lineHeight: {
      value: 120,
      unit: '%',
    },
    link: {
      href: '',
      target: '_blank',
    },
    innerPadding: {
      top: 10,
      right: 25,
      bottom: 10,
      left: 25,
    },
    padding: {
      top: 10,
      right: 25,
      bottom: 10,
      left: 25,
    },
  };
}

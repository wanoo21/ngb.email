import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

import { AIPEmailBuilderBlock } from '../../core/block';
import {
  IBorder,
  ILink,
  IPadding,
  IWidthHeight,
  TAlign,
} from '../../interfaces';

/**
 * Builder {@link ImageBlockComponent} options interface.
 */
export interface IImageBlockOptions {
  border: IBorder;
  width: IWidthHeight;
  height: IWidthHeight;
  link: ILink;
  align: TAlign;
  title: string;
  padding: IPadding;
}

@Component({
  selector: 'ip-image-block',
  template: `
    <p>image-block works! {{ options.title }}</p>
    <ng-container *cdk-portal>
      <input type="text" [(ngModel)]="options.title" placeholder="Change me" />
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
export class ImageBlockComponent extends AIPEmailBuilderBlock<IImageBlockOptions> {
  src = 'https://via.placeholder.com/600x200?text=CHANGE+ME';
  options: IImageBlockOptions = {
    border: {
      color: '#cccccc',
      style: 'solid',
      width: 0,
      radius: 0,
    },
    width: {
      value: 100,
      unit: 'px',
      auto: true,
      units: ['px'],
    },
    height: {
      value: 100,
      unit: 'px',
      auto: true,
      units: ['px'],
    },
    link: {
      href: '',
      target: '_blank',
    },
    align: 'center',
    title: '',
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  };

  override toObject(options?: Partial<IImageBlockOptions>, src = this.src) {
    return { ...super.toObject(options), src };
  }
}

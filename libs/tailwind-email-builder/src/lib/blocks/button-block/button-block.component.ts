import {
  ChangeDetectionStrategy,
  Component,
  computed,
  model,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import {
  addIPEmailBuilderBlock,
  AIPEmailBuilderBlock,
  createBorder,
  createLineHeight,
  createPadding,
  IBorder,
  IFont,
  ILineHeight,
  ILink,
  injectIPFonts,
  IPadding,
  IPEmailBuilderSettingsDirective,
  TAlign,
  TIPEmailBuilderStyles,
} from '@wlocalhost/ngx-email-builder';
import { NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UIFormModule } from '../../directives/form/form-input.directive';
import { ButtonSettingsComponent } from './button-settings.component';

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
  selector: 'tail-button-block-block',
  templateUrl: 'button-block.component.html',
  styleUrls: ['button-block.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgStyle,
    IPEmailBuilderSettingsDirective,
    UIFormModule,
    FormsModule,
    ButtonSettingsComponent,
  ],
})
export class ButtonBlockComponent
  extends AIPEmailBuilderBlock<IButtonBlockOptions>
  implements OnInit
{
  readonly innerText = model.required<string>();
  readonly options = model.required<IButtonBlockOptions>();
  readonly fonts = injectIPFonts();

  readonly hostStyles = computed<TIPEmailBuilderStyles>(() => {
    const { align, padding } = this.options();

    return {
      'text-align': align,
      ...createPadding(padding),
    };
  });

  readonly buttonStyles = computed<TIPEmailBuilderStyles>(() => {
    const {
      backgroundColor,
      border,
      color,
      font,
      lineHeight,
      innerPadding,
      fullWidth,
    } = this.options();

    return {
      color,
      width: fullWidth ? '100%' : 'auto',
      backgroundColor,
      ...this.fonts.parser.createFont(font),
      ...createPadding(innerPadding),
      ...createBorder(border),
      ...createLineHeight(lineHeight),
    };
  });

  ngOnInit() {
    this.innerText.subscribe((innerText) => {
      this.updateMyContext({ innerText });
    });
    this.options.subscribe((options) => {
      this.updateMyContext({ options });
    });
  }
}

export const ButtonBlock = addIPEmailBuilderBlock<IButtonBlockOptions>(
  $localize`:@@block_button_title:Button`,
  {
    type: 'button',
    component: ButtonBlockComponent,
    context: {
      innerText: 'Click on me',
      options: {
        backgroundColor: '#414141',
        border: {
          color: '#414141',
          style: 'solid',
          sizes: {
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          },
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
      },
    },
  }
);

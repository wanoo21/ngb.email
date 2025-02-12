import {
  ChangeDetectionStrategy,
  Component,
  computed,
  model,
  OnInit,
  viewChild,
  ViewEncapsulation,
} from '@angular/core';
import {
  addIPEmailBuilderBlock,
  AIPEmailBuilderBlock,
  createLineHeight,
  createPadding,
  IFont,
  ILineHeight,
  injectIPFonts,
  IPadding,
  IPEmailBuilderSettingsDirective,
  TAlign,
  TIPEmailBuilderStyles,
} from '@wlocalhost/ngx-email-builder';
import { NgStyle } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { NavigationSettingsComponent } from './settings/navigation-settings.component';

export interface INavigationBlockOptions {
  align: TAlign;
  hamburger: boolean;
  color: string;
  font: IFont;
  lineHeight: ILineHeight;
  letterSpacing: number;
  padding: IPadding;
  target: string;
  textDecoration: 'underline' | 'overline' | 'none';
  elements: { label: string; href: string }[];
}

@Component({
  selector: 'tail-navigation-block',
  templateUrl: './navigation-block.component.html',
  styleUrls: ['./navigation-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
  imports: [
    NgStyle,
    IPEmailBuilderSettingsDirective,
    FormsModule,
    NavigationSettingsComponent,
  ],
})
export class NavigationBlockComponent
  extends AIPEmailBuilderBlock<INavigationBlockOptions>
  implements OnInit
{
  readonly options = model.required<INavigationBlockOptions>();
  readonly form = viewChild.required(NgForm);
  readonly fontParser = injectIPFonts().parser;

  readonly hostStyles = computed<TIPEmailBuilderStyles>(() => {
    const {
      color,
      font,
      lineHeight,
      padding,
      align,
      letterSpacing,
      textDecoration,
    } = this.options();

    return {
      color,
      'word-break': 'break-all',
      'text-align': align,
      'text-decoration': textDecoration,
      'letter-spacing': `${letterSpacing}px`,
      ...createLineHeight(lineHeight),
      ...this.fontParser.createFont(font),
      ...createPadding(padding),
    };
  });

  readonly linkItemsStyles = computed<TIPEmailBuilderStyles>(() => {
    const {
      color,
      font,
      lineHeight,
      padding,
      align,
      letterSpacing,
      textDecoration,
    } = this.options();

    return {
      color,
      ...this.fontParser.createFont(font),
      ...createLineHeight(lineHeight),
      'letter-spacing': `${letterSpacing}px`,
      'text-decoration': textDecoration,
      'text-align': align,
      ...createPadding(padding),
    };
  });

  ngOnInit() {
    this.options.subscribe((options) => {
      this.updateMyContext({ options });
    });
  }
}

export const NavigationBlock = addIPEmailBuilderBlock<INavigationBlockOptions>(
  $localize`:@@block_navigation_title:Navigation`,
  {
    type: 'navigation',
    component: NavigationBlockComponent,
    context: {
      options: {
        align: 'center',
        hamburger: true,
        color: '#000000',
        font: {
          fallback: 'Arial, Helvetica, sans-serif',
          family: 'Roboto',
          style: 'normal',
          size: 16,
          weight: 400,
        },
        lineHeight: {
          value: 22,
          unit: 'px',
        },
        letterSpacing: 0,
        padding: {
          top: 10,
          right: 25,
          bottom: 10,
          left: 25,
        },
        target: '_blank',
        textDecoration: 'none',
        elements: [{ href: 'https://', label: 'Home' }],
      },
    },
  }
);

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
  createLineHeight,
  createPadding,
  IFont,
  ILineHeight,
  ILink,
  injectIPFonts,
  IPadding,
  IPEmailBuilderSettingsDirective,
  SocialPathPipe,
  TAlign,
  TIPEmailBuilderStyles,
} from '@wlocalhost/ngx-email-builder';
import { NgClass, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SocialSettingsComponent } from './settings/social-settings.component';

export interface ISocialBlockOptions {
  align: TAlign;
  mode: 'vertical' | 'horizontal';
  font: IFont;
  iconSize: ILineHeight;
  lineHeight: ILineHeight;
  color: string;
  innerPadding: IPadding;
  padding: IPadding;
}

/**
 * Builder {@link ISocialBlockOptions} network options interface.
 */
export interface ISocialNetwork extends ILink {
  // href: string;
  // target?: string;
  label: string;
  name:
    | 'github'
    | 'instagram'
    | 'web'
    | 'snapchat'
    | 'youtube'
    | 'vimeo'
    | 'medium'
    | 'soundcloud'
    | 'facebook'
    | 'twitter'
    | 'pinterest'
    | 'linkedin'
    | 'tumblr'
    | 'xing';
  padding?: IPadding;
}

@Component({
  selector: 'tail-social-block',
  templateUrl: 'social-block.component.html',
  styleUrls: ['social-block.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IPEmailBuilderSettingsDirective,
    SocialPathPipe,
    NgStyle,
    FormsModule,
    SocialSettingsComponent,
    NgClass,
  ],
})
export class SocialBlockComponent
  extends AIPEmailBuilderBlock<ISocialBlockOptions>
  implements OnInit
{
  readonly networks = model.required<ISocialNetwork[]>();
  readonly options = model.required<ISocialBlockOptions>();

  readonly fontParser = injectIPFonts().parser;

  readonly hostStyles = computed<TIPEmailBuilderStyles>(() => {
    const { color, font, lineHeight, padding, align, mode } = this.options();

    return {
      color,
      display: 'flex',
      placeContent:
        (align === 'left' && 'flex-start') ||
        (align === 'right' && 'flex-end') ||
        align,
      flexWrap: 'wrap',
      flexDirection: mode === 'horizontal' ? 'row' : 'column',
      ...createLineHeight(lineHeight),
      ...this.fontParser.createFont(font),
      ...createPadding(padding),
    };
  });
  readonly iconStyles = computed(() => {
    const { innerPadding } = this.options();
    return createPadding(innerPadding);
  });

  ngOnInit() {
    this.networks.subscribe((networks) => {
      this.updateMyContext({ networks });
    });
    this.options.subscribe((options) => {
      this.updateMyContext({ options });
    });
  }
}

export const SocialBlock = addIPEmailBuilderBlock<ISocialBlockOptions>(
  $localize`:@@block_social_title:Social`,
  {
    type: 'social',
    component: SocialBlockComponent,
    context: {
      networks: [],
      options: {
        align: 'center',
        mode: 'horizontal',
        font: {
          fallback: 'Arial, Helvetica, sans-serif',
          family: 'Roboto',
          style: 'normal',
          size: 16,
          weight: 400,
        },
        iconSize: {
          value: 30,
          unit: 'px',
        },
        lineHeight: {
          value: 16,
          unit: 'px',
        },
        color: '#333333',
        innerPadding: {
          top: 4,
          right: 4,
          bottom: 4,
          left: 4,
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

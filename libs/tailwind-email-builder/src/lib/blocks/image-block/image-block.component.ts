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
  createPadding,
  createWidthHeight,
  IBorder,
  ILink,
  IPadding,
  IPEmailBuilderSettingsDirective,
  IWidthHeight,
  TAlign,
  TIPEmailBuilderStyles,
} from '@wlocalhost/ngx-email-builder';
import { NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UIFormModule } from '../../directives/form/form-input.directive';
import { ImageSettingsComponent } from './image-settings.component';

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
  selector: 'tail-image-block',
  templateUrl: 'image-block.component.html',
  styleUrls: ['image-block.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgStyle,
    UIFormModule,
    IPEmailBuilderSettingsDirective,
    FormsModule,
    ImageSettingsComponent,
  ],
})
export class ImageBlockComponent
  extends AIPEmailBuilderBlock<IImageBlockOptions>
  implements OnInit
{
  readonly src = model.required<string>();
  readonly options = model.required<IImageBlockOptions>();

  readonly hostStyles = computed(() => {
    return {
      textAlign: this.options().align,
      lineHeight: 0,
    };
  });
  readonly imageStyles = computed<TIPEmailBuilderStyles>(() => {
    const { border, width, height, padding } = this.options();

    return {
      maxWidth: '100%',
      boxSizing: 'border-box',
      width: createWidthHeight(width),
      height: createWidthHeight(height),
      ...createPadding(padding),
      ...createBorder(border),
    };
  });

  ngOnInit() {
    this.options.subscribe((options) => {
      this.updateMyContext({ options });
    });
    this.src.subscribe((src) => {
      this.updateMyContext({ src });
    });
  }
}

export const ImageBlock = addIPEmailBuilderBlock<IImageBlockOptions>(
  $localize`:@@block_image_title:Image`,
  {
    type: 'image',
    component: ImageBlockComponent,
    context: {
      src: 'https://placehold.co/600x400',
      options: {
        border: {
          color: '#cccccc',
          style: 'solid',
          sizes: {
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          },
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
      },
    },
  }
);

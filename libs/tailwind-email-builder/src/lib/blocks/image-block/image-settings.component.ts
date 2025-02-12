import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
  model,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime } from 'rxjs';

import { AlignComponent } from '../../settings/align/align.component';
import { BorderComponent } from '../../settings/border/border.component';
import { UIFormModule } from '../../directives/form/form-input.directive';
import { ImageUploadComponent } from '../../settings/image-upload/image-upload.component';
import { LinkComponent } from '../../settings/link/link.component';
import { WidthHeightComponent } from '../../settings/width-height/width-height.component';
import { PaddingComponent } from '../../settings/padding/padding.component';
import type { IImageBlockOptions } from './image-block.component';
import { formViewProvider } from '../../directives/form-providers';

@Component({
  selector: 'tail-image-settings',
  imports: [
    CommonModule,
    AlignComponent,
    BorderComponent,
    UIFormModule,
    ImageUploadComponent,
    LinkComponent,
    WidthHeightComponent,
    PaddingComponent,
    FormsModule,
  ],
  viewProviders: [formViewProvider()],
  template: `
    <h2 tailH2 i18n="@@image_block_image">Image</h2>
    <div tailPanel>
      <tail-image-upload ngModelName="src" />
    </div>
    <ng-container ngModelGroup="options">
      <h2 tailH2 i18n="@@image_block_attributes">Attributes</h2>
      <div tailPanel>
        <div class="grid grid-cols-3 gap-2">
          <div class="flex flex-col col-span-2">
            <label [tailLabel]="a" i18n="@@image_block_alternative">Alternative text</label>
            <input type="text" tailInput #a="input" name="title" ngModel />
            <p tailHint i18n="@@image_block_alternative_description">Alternative text to show in case image was
              blocked.</p>
          </div>
          <tail-align />
        </div>
        <tail-link class="pt-2" />
        <p tailHint i18n="@@image_block_link_description">Link to redirect to on click</p>
      </div>
      <h2 tailH2 i18n="@@image_block_sizes">Sizes</h2>
      <div tailPanel>
        <h3 tailH3 i18n="@@width">Width</h3>
        <tail-width-height showAutoToggle />
        <h3 tailH3 class="pt-2" i18n="@@height">Height</h3>
        <tail-width-height showAutoToggle ngModelName="height" />
      </div>
      <h2 tailH2 i18n="@@border">Border</h2>
      <div tailPanel>
        <tail-border />
      </div>
      <h2 tailH2 i18n="@@padding">Padding</h2>
      <div tailPanel>
        <tail-padding />
      </div>
    </ng-container>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageSettingsComponent implements AfterViewInit {
  readonly src = model.required<string>();
  readonly options = model.required<IImageBlockOptions>();
  readonly form = inject(NgForm);
  readonly takeUntilDestroyed = takeUntilDestroyed<{
    src: string;
    options: IImageBlockOptions;
  }>();

  ngAfterViewInit() {
    const { form } = this.form;
    setTimeout(() => {
      form.patchValue(
        { src: this.src(), options: this.options() },
        { emitEvent: false }
      );
      form.valueChanges
        .pipe(debounceTime(300), this.takeUntilDestroyed)
        .subscribe(({ src, options }) => {
          this.src.set(src);
          this.options.set(options);
        });
    });
  }
}

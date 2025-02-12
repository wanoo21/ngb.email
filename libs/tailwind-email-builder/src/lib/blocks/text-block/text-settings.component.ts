import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
  model,
} from '@angular/core';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { FormsModule, NgForm } from '@angular/forms';

import { ColorComponent } from '../../settings/color/color.component';
import { FontComponent } from '../../settings/font/font.component';
import { UIFormModule } from '../../directives/form/form-input.directive';
import { LineHeightComponent } from '../../settings/line-height/line-height.component';
import { PaddingComponent } from '../../settings/padding/padding.component';
import { formViewProvider } from '../../directives/form-providers';
import type { ITextBlockOptions } from './text-block.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'tail-text-settings',
  imports: [
    CdkTextareaAutosize,
    ColorComponent,
    FontComponent,
    UIFormModule,
    FormsModule,
    LineHeightComponent,
    PaddingComponent,
  ],
  template: `
    <div tailPanel class="mt-4">
      <textarea tailInput ngModel name="innerText" cdkTextareaAutosize
                cdkAutosizeMinRows="4"></textarea>
    </div>
    <ng-container ngModelGroup="options">
      <h2 tailH2 i18n="@@font">Font</h2>
      <div tailPanel>
        <h3 tailH3 i18n="@@text_color">Color</h3>
        <tail-color />
        <tail-font class="pt-2" />
        <tail-line-height class="pt-2" />
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
  viewProviders: [formViewProvider()],
})
export class TextSettingsComponent implements AfterViewInit {
  readonly innerText = model.required<string>();
  readonly options = model.required<ITextBlockOptions>();
  readonly form = inject(NgForm);
  readonly takeUntilDestroyed = takeUntilDestroyed<{
    innerText: string;
    options: ITextBlockOptions;
  }>();

  ngAfterViewInit() {
    const { form } = this.form;
    setTimeout(() => {
      form.patchValue(
        { innerText: this.innerText(), options: this.options() },
        { emitEvent: false }
      );
      form.valueChanges
        .pipe(debounceTime(300), this.takeUntilDestroyed)
        .subscribe(({ innerText, options }) => {
          this.innerText.set(innerText);
          this.options.set(options);
        });
    });
  }
}

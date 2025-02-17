import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
  model,
} from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime } from 'rxjs';

import { AlignComponent } from '../../../settings/align/align.component';
import { ColorComponent } from '../../../settings/color/color.component';
import { FontComponent } from '../../../settings/font/font.component';
import { UIFormModule } from '../../../directives/form/form-input.directive';
import { formViewProvider } from '../../../directives/form-providers';
import { LineHeightComponent } from '../../../settings/line-height/line-height.component';
import { PaddingComponent } from '../../../settings/padding/padding.component';
import type { INavigationBlockOptions } from '../navigation-block.component';

type TTextDecoration = 'underline' | 'overline' | 'none';

// A map of text decoration options
const textDecoration = new Map<TTextDecoration, string>([
  ['none', $localize`:@@none:None`],
  ['underline', $localize`:@@underline:Underline`],
  ['overline', $localize`:@@overline:Overline`],
]);

@Component({
  selector: 'tail-navigation-settings',
  imports: [
    AlignComponent,
    ColorComponent,
    FontComponent,
    UIFormModule,
    LineHeightComponent,
    PaddingComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './navigation-settings.component.html',
  styles: `
    :host {
      display: block;

      .button:active {
        border: 1px solid #3f729b !important;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [formViewProvider()],
})
export class NavigationSettingsComponent implements AfterViewInit {
  readonly options = model.required<INavigationBlockOptions>();
  readonly form = inject(NgForm);
  readonly takeUntilDestroyed = takeUntilDestroyed<INavigationBlockOptions>();

  readonly decorationOptions = [...textDecoration.keys()].map((key) => ({
    key,
    label: textDecoration.get(key),
  }));

  ngAfterViewInit() {
    const { form } = this.form;
    setTimeout(() => {
      form.patchValue(this.options(), { emitEvent: false });
      form.valueChanges
        .pipe(debounceTime(300), this.takeUntilDestroyed)
        .subscribe((options) => {
          this.options.update((prev) => ({ ...prev, ...options }));
        });
    });
  }

  updateElement(index: number, key: 'label' | 'href', value: string): void {
    this.options.update((options) => {
      const elements = [...options.elements];
      elements[index] = { ...elements[index], [key]: value };
      return { ...options, elements };
    });
  }

  addNewLink(): void {
    this.options.update((options) => {
      return {
        ...options,
        elements: [...options.elements, { label: 'Link', href: 'https://' }],
      };
    });
  }

  delete(index: number): void {
    this.options.update((options) => {
      // If there is only one element, don't delete it
      if (options.elements.length === 1) {
        return options;
      }
      return {
        ...options,
        elements: options.elements.filter((_, i) => i !== index),
      };
    });
  }
}

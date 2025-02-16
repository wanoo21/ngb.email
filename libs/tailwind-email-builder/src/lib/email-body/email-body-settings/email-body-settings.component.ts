import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';
import {
  IIPEmail,
  injectIIPEmail,
  TDirection,
} from '@wlocalhost/ngx-email-builder';
import { debounceTime, filter } from 'rxjs';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';

import { formViewProvider } from '../../directives/form-providers';
import { UIFormModule } from '../../directives/form/form-input.directive';
import { ColorComponent } from '../../settings/color/color.component';
import { WidthHeightComponent } from '../../settings/width-height/width-height.component';
import { PaddingComponent } from '../../settings/padding/padding.component';

const directionLabels = new Map<TDirection, string>([
  ['ltr', $localize`:@@direction_ltr:Left to right`],
  ['rtl', $localize`:@@direction_rtl:Right to left`],
]);

@Component({
  selector: 'tail-email-body-settings',
  templateUrl: './email-body-settings.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [formViewProvider()],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CdkTextareaAutosize,
    ColorComponent,
    WidthHeightComponent,
    PaddingComponent,
    UIFormModule,
  ],
})
export class EmailBodySettingsComponent implements AfterViewInit {
  readonly currentEmail = injectIIPEmail();
  readonly form = inject(NgForm);
  readonly directionOptions = [...directionLabels.keys()].map((value) => ({
    label: directionLabels.get(value),
    value,
  }));
  readonly takeUntilDestroyed = takeUntilDestroyed<IIPEmail['general']>();

  ngAfterViewInit() {
    const { form } = this.form;
    setTimeout(() => {
      form.patchValue(this.currentEmail.value().general, {
        onlySelf: true,
      });
      form.valueChanges
        ?.pipe(
          filter(() => form.valid),
          debounceTime(300),
          this.takeUntilDestroyed
        )
        .subscribe((value) => {
          this.currentEmail.options(value);
        });
    });
  }
}

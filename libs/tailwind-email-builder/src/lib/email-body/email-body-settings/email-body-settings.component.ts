import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core';
import {
  IIPEmail,
  injectIIPEmail,
  TDirection,
} from '@wlocalhost/ngx-email-builder';
import { debounceTime, filter } from 'rxjs';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { formViewProvider } from '../../directives/form-providers';
import {
  FormH2Directive,
  FormH3Directive,
  FormHintDirective,
  FormInputDirective,
  FormLabelDirective,
  FormPanelDirective,
} from '../../directives/form/form-input.directive';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
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
    FormPanelDirective,
    FormLabelDirective,
    ReactiveFormsModule,
    FormInputDirective,
    FormsModule,
    CdkTextareaAutosize,
    FormHintDirective,
    FormH2Directive,
    ColorComponent,
    FormH3Directive,
    WidthHeightComponent,
    PaddingComponent,
  ],
})
export class EmailBodySettingsComponent implements OnInit {
  readonly currentEmail = injectIIPEmail();
  readonly form = inject(NgForm).form;
  readonly directionOptions = [...directionLabels.keys()].map((value) => ({
    label: directionLabels.get(value),
    value,
  }));
  readonly destroyRef = inject(DestroyRef);

  #render = afterNextRender(() => {
    setTimeout(() => {
      this.form.patchValue(this.currentEmail.value().general, {
        onlySelf: true,
      });
      this.form.markAsPristine({ onlySelf: true });
    });
  });

  ngOnInit() {
    this.form.valueChanges
      ?.pipe(
        filter(() => this.form.valid && this.form.dirty),
        debounceTime(100),
        takeUntilDestroyed<IIPEmail['general']>(this.destroyRef)
      )
      .subscribe((value) => {
        this.currentEmail.options(value);
      });
  }
}

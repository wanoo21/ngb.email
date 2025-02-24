import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  inject,
  model,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime } from 'rxjs';

import { BorderComponent } from '../../settings/border/border.component';
import {
  FormH2Directive,
  FormPanelDirective,
} from '../../directives/form/form-input.directive';
import { PaddingComponent } from '../../settings/padding/padding.component';
import type { IDividerBlockOptions } from './divider-block.component';

@Component({
  selector: 'tail-divider-settings',
  template: `
    <h2 tailH2 i18n="@@divider_color">Divider Color</h2>
    <div tailPanel>
      <tail-border hidePositions hideRadiusInput />
    </div>
    <h2 tailH2 i18n="@@padding">Padding</h2>
    <div tailPanel>
      <tail-padding />
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    BorderComponent,
    FormH2Directive,
    FormPanelDirective,
    PaddingComponent,
  ],
})
export class DividerSettingsComponent {
  readonly options = model.required<IDividerBlockOptions>();
  readonly form = inject(NgForm);
  readonly untilDestroyed = takeUntilDestroyed<{
    options: IDividerBlockOptions;
  }>();

  #afterNextRender = afterNextRender(() => {
    setTimeout(() => {
      this.form.form.patchValue(
        { options: this.options() },
        { onlySelf: true }
      );
      this.form.form.valueChanges
        .pipe(
          debounceTime(300),
          this.untilDestroyed
        )
        .subscribe((value) => {
          this.options.set(value.options);
        });
    });
  });
}

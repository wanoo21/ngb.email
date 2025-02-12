import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
  model,
} from '@angular/core';
import { debounceTime } from 'rxjs';
import { NgForm } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { WidthHeightComponent } from '../../settings/width-height/width-height.component';
import type { ISpacerBlockOptions } from './spacer-block.component';
import { UIFormModule } from '../../directives/form/form-input.directive';

@Component({
  selector: 'tail-spacer-settings',
  imports: [UIFormModule, WidthHeightComponent],
  template: `
    <h2 tailH2 i18n="@@spacer_block_size">Size</h2>
    <div tailPanel>
      <tail-width-height ngModelName="height" [units]="options().height.units" />
    </div>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpacerSettingsComponent implements AfterViewInit {
  readonly options = model.required<ISpacerBlockOptions>();
  readonly form = inject(NgForm);
  readonly takeUntilDestroyed = takeUntilDestroyed<ISpacerBlockOptions>();

  ngAfterViewInit() {
    const { form } = this.form;
    setTimeout(() => {
      form.patchValue(this.options(), { emitEvent: false });
      form.valueChanges
        .pipe(debounceTime(300), this.takeUntilDestroyed)
        .subscribe((options) => {
          this.options.set(options);
        });
    });
  }
}

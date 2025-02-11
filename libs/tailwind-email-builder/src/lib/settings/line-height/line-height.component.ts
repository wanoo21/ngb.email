import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { TLineHeight } from '@wlocalhost/ngx-email-builder';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { formViewProvider } from '../../directives/form-providers';
import {
  FormInputDirective,
  FormLabelDirective,
} from '../../directives/form/form-input.directive';

const unitsLabels = new Map<TLineHeight, string>([
  ['%', $localize`:@@unit_percent:Percent`],
  ['px', $localize`:@@unit_pixels:Pixels`],
  ['none', $localize`:@@unit_none:None`],
]);

@Component({
  selector: 'tail-line-height',
  templateUrl: './line-height.component.html',
  styleUrls: ['./line-height.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [formViewProvider()],
  imports: [
    FormLabelDirective,
    ReactiveFormsModule,
    FormInputDirective,
    FormsModule,
  ],
})
export class LineHeightComponent {
  readonly units = input<TLineHeight[]>(['%', 'px', 'none']);
  readonly uniOptions = computed(() => {
    return this.units().map((value) => ({
      value,
      label: unitsLabels.get(value),
    }));
  });
}

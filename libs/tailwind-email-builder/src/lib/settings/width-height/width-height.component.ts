import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { TUnits } from '@wlocalhost/ngx-email-builder';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

import { formViewProvider } from '../../directives/form-providers';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormBtnDirective, FormInputDirective } from '../../directives/form/form-input.directive';

const unitsLabels: Map<TUnits, string> = new Map([
  ['%', $localize`:@@unit_percent:Percent`],
  ['px', $localize`:@@unit_pixels:Pixels`],
  ['contain', $localize`:@@unit_contain:Contain`],
  ['cover', $localize`:@@unit_cover:Cover`],
]);

@Component({
    selector: 'tail-width-height',
    templateUrl: './width-height.component.html',
    styleUrls: ['./width-height.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    viewProviders: [formViewProvider()],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        FormBtnDirective,
        FormInputDirective,
    ],
})
export class WidthHeightComponent {
  readonly modelGroupName = input<'width' | 'height'>('width');
  readonly units = input<TUnits[]>(['%', 'px']);
  readonly showAutoToggle = input(false, { transform: coerceBooleanProperty });
  readonly options = computed(() =>
    this.units().map((unit) => ({
      label: unitsLabels.get(unit),
      value: unit,
    }))
  );
}

import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { TUnits } from '@wlocalhost/ngx-email-builder';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { formViewProvider } from '../../directives/form-providers';
import { UIFormModule } from '../../directives/form/form-input.directive';

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
  imports: [ReactiveFormsModule, FormsModule, UIFormModule],
})
export class WidthHeightComponent {
  readonly ngModelName = input<'width' | 'height'>('width');
  readonly units = input<TUnits[]>(['%', 'px']);
  readonly showAutoToggle = input(false, { transform: coerceBooleanProperty });
  readonly options = computed(() =>
    this.units().map((unit) => ({
      label: unitsLabels.get(unit),
      value: unit,
    }))
  );
}

import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TAlign, TVerticalAlign } from '@wlocalhost/ngx-email-builder';

import { formViewProvider } from '../../directives/form-providers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormInputDirective, FormLabelDirective } from '@wlocalhost/ngx-tailwind-email-builder';

const horizontalLabels = new Map<TAlign, string>([
  ['left', $localize`:@@horizontal_left_align:Left`],
  ['center', $localize`:@@horizontal_center_align:Center`],
  ['right', $localize`:@@horizontal_right_align:Right`],
]);
const verticalLabels = new Map<TVerticalAlign, string>([
  ['top', $localize`:@@vertical_top_align:Top`],
  ['middle', $localize`:@@vertical_middle_align:Middle`],
  ['bottom', $localize`:@@vertical_bottom_align:Bottom`],
]);

@Component({
  selector: 'tail-align',
  templateUrl: './align.component.html',
  styleUrls: ['./align.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [formViewProvider()],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    FormInputDirective,
    FormLabelDirective,
  ],
})
export class AlignComponent {
  readonly mode = input<'vertical' | 'horizontal'>('horizontal');
  readonly disabled = input(false);
  readonly verticalOptions = [...verticalLabels.keys()].map((value) => ({
    value,
    label: verticalLabels.get(value),
  }));
  readonly horizontalOptions = [...horizontalLabels.keys()].map((value) => ({
    value,
    label: horizontalLabels.get(value),
  }));
}

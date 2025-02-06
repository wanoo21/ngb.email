import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { IPadding } from '@wlocalhost/ngx-email-builder';

import { formViewProvider } from '../../directives/form-providers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  FormInputDirective,
  FormLabelDirective,
} from '../../directives/form/form-input.directive';

const paddingLabels = new Map<keyof IPadding, string>([
  ['top', $localize`:@@padding_top:Top`],
  ['right', $localize`:@@padding_right:Right`],
  ['bottom', $localize`:@@padding_bottom:Bottom`],
  ['left', $localize`:@@padding_left:Left`],
]);

@Component({
  selector: 'tail-padding',
  templateUrl: './padding.component.html',
  styleUrls: ['./padding.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [formViewProvider()],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    FormLabelDirective,
    FormInputDirective,
  ],
})
export class PaddingComponent {
  readonly paddingOptions = [...paddingLabels.keys()].map((value) => ({
    value,
    label: paddingLabels.get(value),
  }));
  modelGroupName = input<'padding' | 'innerPadding'>('padding');
}

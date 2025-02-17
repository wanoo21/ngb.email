import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { formViewProvider } from '../../directives/form-providers';
import {
  FormHintDirective,
  FormInputDirective,
} from '../../directives/form/form-input.directive';

@Component({
  selector: 'tail-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [formViewProvider()],
  imports: [
    ReactiveFormsModule,
    FormInputDirective,
    FormsModule,
    FormHintDirective,
  ],
})
export class ColorComponent {
  readonly ngModelName = input<string>('color');
  readonly allowTransparent = input(true, { transform: coerceBooleanProperty });
}

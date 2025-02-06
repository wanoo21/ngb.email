import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

import { formViewProvider } from '../../directives/form-providers';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormInputDirective, FormHintDirective } from '../../directives/form/form-input.directive';

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
  readonly allowTransparent = input(true, { transform: coerceBooleanProperty });
}

import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

import { formViewProvider } from '../../directives/form-providers';
import { FormLabelDirective, FormInputDirective } from '../../directives/form/form-input.directive';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
    selector: 'tail-image-upload',
    templateUrl: './image-upload.component.html',
    styleUrls: ['./image-upload.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    viewProviders: [formViewProvider()],
    imports: [
        FormLabelDirective,
        ReactiveFormsModule,
        FormInputDirective,
        FormsModule,
    ],
})
export class ImageUploadComponent {
  readonly isBackgroundImage = input(true, {
    transform: coerceBooleanProperty,
  });
}

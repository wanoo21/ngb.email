import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

import { formViewProvider } from '../../directives/form-providers';
import {
  FormInputDirective,
  FormLabelDirective,
} from '../../directives/form/form-input.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
  readonly ngModelName = input<string>('url');
  readonly isBackgroundImage = input(true, {
    transform: coerceBooleanProperty,
  });
}

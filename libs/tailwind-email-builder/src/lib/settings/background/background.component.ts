import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TBackgroundRepeat, TUnits } from '@wlocalhost/ngx-email-builder';

import { formViewProvider } from '../../directives/form-providers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColorComponent } from '../color/color.component';
import { ImageUploadComponent } from '../image-upload/image-upload.component';
import { UIFormModule } from '../../directives/form/form-input.directive';
import { AsyncPipe } from '@angular/common';

const repeatLabels = new Map<TBackgroundRepeat, string>([
  ['no-repeat', $localize`:@@repeat_no:No Repeat`],
  ['repeat', $localize`:@@repeat_repeat:Repeat`],
  ['repeat-x', $localize`:@@repeat_x:Repeat X`],
  ['repeat-y', $localize`:@@repeat_y:Repeat Y`],
]);
const unitLabels = new Map<TUnits, string>([
  ['%', $localize`:@@unit_percent:Percent`],
  ['px', $localize`:@@unit_pixels:Pixels`],
  ['cover', $localize`:@@unit_cover:Cover`],
  ['contain', $localize`:@@unit_contain:Contain`],
]);

@Component({
  selector: 'tail-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [formViewProvider()],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    ColorComponent,
    ImageUploadComponent,
    UIFormModule,
    AsyncPipe,
  ],
})
export class BackgroundComponent {
  readonly unitsOptions = [...unitLabels.keys()].map((value) => ({
    value,
    label: unitLabels.get(value),
  }));
  readonly repeatOptions = [...repeatLabels.keys()].map((value) => ({
    value,
    label: repeatLabels.get(value),
  }));
}

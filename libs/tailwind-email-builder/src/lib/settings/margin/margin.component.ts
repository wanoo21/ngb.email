import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IMargin } from '@wlocalhost/ngx-email-builder';

import { formViewProvider } from '../../directives/form-providers';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormLabelDirective, FormInputDirective } from '../../directives/form/form-input.directive';

const marginLabels = new Map<keyof IMargin, string>([
  ['top', $localize`:@@margin_top:Top`],
  ['bottom', $localize`:@@margin_bottom:Bottom`],
]);

@Component({
    selector: 'tail-margin',
    templateUrl: './margin.component.html',
    styleUrls: ['./margin.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    viewProviders: [formViewProvider()],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        FormLabelDirective,
        FormInputDirective,
    ],
})
export class MarginComponent {
  readonly marginOptions = [...marginLabels.keys()].map((value) => ({
    value,
    label: marginLabels.get(value),
  }));
}

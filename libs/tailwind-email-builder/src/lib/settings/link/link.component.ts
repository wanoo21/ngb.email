import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TLinkTarget } from '@wlocalhost/ngx-email-builder';

import { formViewProvider } from '../../directives/form-providers';
import { FormLabelDirective, FormInputDirective } from '../../directives/form/form-input.directive';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const targetLabels = new Map<TLinkTarget, string>([
  ['_blank', $localize`:@@link_target_blank:Blank`],
  ['_self', $localize`:@@link_target_self:Self`],
  ['_parent', $localize`:@@link_target_parent:Parent`],
  ['_top', $localize`:@@link_target_top:Top`],
]);

@Component({
    selector: 'tail-link',
    templateUrl: './link.component.html',
    styleUrls: ['./link.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    viewProviders: [formViewProvider()],
    imports: [
        FormLabelDirective,
        ReactiveFormsModule,
        FormInputDirective,
        FormsModule,
    ],
})
export class LinkComponent {
  readonly targetOptions = [...targetLabels.keys()].map((value) => ({
    value,
    label: targetLabels.get(value),
  }));
}

import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { IBorder, ISizes } from '@wlocalhost/ngx-email-builder';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { NgModelGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';

import { formViewProvider } from '../../directives/form-providers';
import { ColorComponent } from '../color/color.component';
import { FormLabelDirective, FormInputDirective, FormH3Directive, FormBtnDirective } from '../../directives/form/form-input.directive';
import { AsyncPipe } from '@angular/common';

const styleLabels = new Map<IBorder['style'], string>([
  ['solid', $localize`:@@border_style_solid:Solid`],
  ['dotted', $localize`:@@border_style_dotted:Dotted`],
  ['dashed', $localize`:@@border_style_dashed:Dashed`],
  ['double', $localize`:@@border_style_double:Double`],
  ['groove', $localize`:@@border_style_groove:Groove`],
]);

const borderLabels = new Map<keyof ISizes, string>([
  ['top', $localize`:@@border_top:Border Top`],
  ['right', $localize`:@@border_right:Border Right`],
  ['left', $localize`:@@border_left:Border Left`],
  ['bottom', $localize`:@@border_bottom:Border Bottom`],
]);

@Component({
    selector: 'tail-border',
    templateUrl: './border.component.html',
    styleUrls: ['./border.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    viewProviders: [formViewProvider()],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        ColorComponent,
        FormLabelDirective,
        FormInputDirective,
        FormH3Directive,
        FormBtnDirective,
        AsyncPipe,
    ],
})
export class BorderComponent {
  readonly hidePositions = input(false, { transform: coerceBooleanProperty });
  readonly hideColorInput = input(false, { transform: coerceBooleanProperty });
  readonly hideRadiusInput = input(false, { transform: coerceBooleanProperty });
  readonly styleOptions = [...styleLabels.keys()].map((value) => ({
    value,
    label: styleLabels.get(value),
  }));
  readonly borderOptions = [...borderLabels.keys()].map((value) => ({
    value,
    label: borderLabels.get(value),
  }));
}

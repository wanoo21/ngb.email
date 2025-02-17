import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import {
  AIPEmailBody,
  IIPEmail,
  IPEmailBuilderSettingsDirective,
  IPStructuresDropDirective,
} from '@wlocalhost/ngx-email-builder';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';

import { TemplateListComponent } from '../template-list/template-list.component';
import { StructureComponent } from '../structure/structure.component';
import { FormBtnDirective } from '../directives/form/form-input.directive';
import { EmailBodySettingsComponent } from './email-body-settings/email-body-settings.component';

@Component({
  selector: 'tail-email-body',
  templateUrl: './email-body.component.html',
  styleUrls: ['./email-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    TemplateListComponent,
    CdkDropList,
    IPStructuresDropDirective,
    StructureComponent,
    CdkDrag,
    FormBtnDirective,
    IPEmailBuilderSettingsDirective,
    EmailBodySettingsComponent,
  ],
  host: {
    '(click)': 'edit()',
  },
})
export class EmailBodyComponent extends AIPEmailBody {
  readonly generalOptions = computed(() => this.currentEmail.value().general);
  readonly contentPart = signal<null | 'templates'>(null);

  setNewEmailFromTemplate(template: IIPEmail): void {
    this.currentEmail.set(template);
    this.contentPart.set(null);
  }
}

import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { AIPEmailBody, IIPEmail } from '@wlocalhost/ngx-email-builder';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TemplateListComponent } from '../template-list/template-list.component';
import { CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';
import { IPEmailBuilderStructuresDirective } from '../../../../ngx-email-builder/src/lib/directives/email-builder-structures.directive';
import { StructureComponent } from '../structure/structure.component';
import { FormBtnDirective } from '../directives/form/form-input.directive';
import { IPEmailBuilderSettingsDirective } from '../../../../ngx-email-builder/src/lib/directives/email-builder-settings.directive';
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
        IPEmailBuilderStructuresDirective,
        StructureComponent,
        CdkDrag,
        FormBtnDirective,
        IPEmailBuilderSettingsDirective,
        EmailBodySettingsComponent,
    ],
})
export class EmailBodyComponent extends AIPEmailBody {
  readonly generalOptions = computed(() => this.currentEmail.value().general);
  readonly contentPart = signal<null | 'templates'>(null);

  showTemplateList($event: Event): void {
    $event.preventDefault();
    this.contentPart.set('templates');
  }

  setNewEmailFromTemplate(template: IIPEmail): void {
    this.currentEmail.set(template);
    this.contentPart.set(null);
  }
}

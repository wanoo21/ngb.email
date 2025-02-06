import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  AIPStructure,
  ColumnStylesPipe,
  IpCanPipe,
  IPEmailBuilderColumnDirective,
  IPEmailBuilderDynamicDirective,
  IPEmailBuilderSettingsDirective,
} from '@wlocalhost/ngx-email-builder';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkDrag, CdkDragHandle, CdkDropList } from '@angular/cdk/drag-drop';
import { NgStyle } from '@angular/common';

import { StructureSettingsComponent } from './structure-settings/structure-settings.component';
import {
  FormBtnDirective,
  FormH2Directive,
} from '../directives/form/form-input.directive';
import { TooltipDirective } from '../directives/tooltip/tooltip.directive';

@Component({
  selector: 'tail-structure',
  templateUrl: 'structure.component.html',
  styleUrls: ['structure.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CdkDropList,
    NgStyle,
    IPEmailBuilderColumnDirective,
    CdkDrag,
    IPEmailBuilderDynamicDirective,
    CdkDragHandle,
    IPEmailBuilderSettingsDirective,
    StructureSettingsComponent,
    FormH2Directive,
    FormBtnDirective,
    TooltipDirective,
    ColumnStylesPipe,
    IpCanPipe,
  ],
})
export class StructureComponent extends AIPStructure {}

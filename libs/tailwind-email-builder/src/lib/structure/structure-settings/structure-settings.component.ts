import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { NgForm, ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  injectIIPEmail,
  IStructureOptions,
  TVerticalAlign,
} from '@wlocalhost/ngx-email-builder';
import { debounceTime, skip } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { formViewProvider } from '../../directives/form-providers';
import { FormH2Directive, FormPanelDirective, FormLabelDirective, FormInputDirective, FormBtnDirective, FormH3Directive } from '../../directives/form/form-input.directive';
import { BackgroundComponent } from '../../settings/background/background.component';
import { BorderComponent } from '../../settings/border/border.component';
import { PaddingComponent } from '../../settings/padding/padding.component';
import { MarginComponent } from '../../settings/margin/margin.component';
import { ColorComponent } from '../../settings/color/color.component';

const verticalLabels = new Map<TVerticalAlign, string>([
  ['top', $localize`:@@vertical_align_top:Top`],
  ['middle', $localize`:@@vertical_align_middle:Middle`],
  ['bottom', $localize`:@@vertical_align_bottom:Bottom`],
]);

@Component({
    selector: 'tail-structure-settings',
    templateUrl: './structure-settings.component.html',
    styles: `
    :host {
      display: block;
    }
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    viewProviders: [formViewProvider()],
    imports: [
        FormH2Directive,
        BackgroundComponent,
        FormPanelDirective,
        BorderComponent,
        PaddingComponent,
        MarginComponent,
        ReactiveFormsModule,
        FormsModule,
        FormLabelDirective,
        FormInputDirective,
        FormBtnDirective,
        FormH3Directive,
        ColorComponent,
    ],
})
export class StructureSettingsComponent {
  readonly index = input.required<number>();
  readonly form = inject(NgForm);
  readonly structures = injectIIPEmail().structures;
  readonly currentStructure = computed(() => this.structures.at(this.index()));
  readonly takeUntilDestroyed = takeUntilDestroyed();

  // Column to edit
  editColumnIndex = 0;

  constructor() {
    afterNextRender(() => {
      setTimeout(() => {
        this.form.form.patchValue(this.currentStructure().options, {
          onlySelf: true,
        });
        this.form.form.markAsPristine({ onlySelf: true });
        this.form.valueChanges
          ?.pipe(skip(1), debounceTime(100), this.takeUntilDestroyed)
          .subscribe((value) => {
            this.structures.update(this.index(), value as IStructureOptions);
          });
      });
    });
  }

  readonly columnsSize = computed(() =>
    this.currentStructure().options.columns.map((_, index) => index)
  );

  readonly verticalOptions = [...verticalLabels.keys()].map((value) => ({
    value,
    label: verticalLabels.get(value),
  }));

  editColumn(index: number): void {
    this.editColumnIndex = index;
  }
}

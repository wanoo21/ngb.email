import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  signal,
  viewChild,
} from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import {
  injectIIPEmail,
  IStructureOptions,
  TVerticalAlign,
} from '@wlocalhost/ngx-email-builder';
import { debounceTime } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { formViewProvider } from '../../directives/form-providers';
import { BackgroundComponent } from '../../settings/background/background.component';
import { BorderComponent } from '../../settings/border/border.component';
import { PaddingComponent } from '../../settings/padding/padding.component';
import { MarginComponent } from '../../settings/margin/margin.component';
import { ColorComponent } from '../../settings/color/color.component';
import { UIFormModule } from '../../directives/form/form-input.directive';

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
    BackgroundComponent,
    BorderComponent,
    PaddingComponent,
    MarginComponent,
    ReactiveFormsModule,
    FormsModule,
    ColorComponent,
    UIFormModule,
  ],
})
export class StructureSettingsComponent implements AfterViewInit {
  readonly index = input.required<number>();
  readonly form = inject(NgForm);
  readonly structures = injectIIPEmail().structures;
  readonly currentStructure = computed(() => this.structures.at(this.index()));
  readonly takeUntilDestroyed = takeUntilDestroyed<IStructureOptions>();

  readonly columnsSize = computed(() =>
    this.currentStructure().options.columns.map((_, index) => index)
  );

  readonly verticalOptions = [...verticalLabels.keys()].map((value) => ({
    value,
    label: verticalLabels.get(value),
  }));

  readonly columnForm = viewChild.required('columnForm', { read: NgForm });
  readonly editColumnIndex = signal<number>(0);

  ngAfterViewInit() {
    const { form } = this.form;
    const { form: columnForm } = this.columnForm();
    setTimeout(() => {
      form.patchValue(this.currentStructure().options, {
        onlySelf: true,
      });
      columnForm.patchValue(
        this.currentStructure().options.columns[this.editColumnIndex()],
        {
          onlySelf: true,
        }
      );

      form.valueChanges
        .pipe(debounceTime(300), this.takeUntilDestroyed)
        .subscribe((value) => {
          this.structures.update(this.index(), value);
        });

      columnForm.valueChanges
        .pipe(debounceTime(300), this.takeUntilDestroyed)
        .subscribe((value) => {
          const updatedColumns = this.currentStructure().options.columns.map(
            (column, index) => {
              if (index === this.editColumnIndex()) {
                return value;
              }
              return column;
            }
          );
          this.structures.update(this.index(), { columns: updatedColumns });
        });
    });
  }

  editColumn(index: number): void {
    this.editColumnIndex.set(index);
    this.columnForm().form.patchValue(
      this.currentStructure().options.columns[index],
      { emitEvent: false }
    );
  }
}

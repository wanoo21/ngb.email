import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
  model,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { debounceTime, filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BorderComponent } from '../../settings/border/border.component';
import { ColorComponent } from '../../settings/color/color.component';
import { FontComponent } from '../../settings/font/font.component';
import { UIFormModule } from '../../directives/form/form-input.directive';
import { IButtonBlockOptions } from './button-block.component';
import { formViewProvider } from '../../directives/form-providers';
import { PaddingComponent } from '../../settings/padding/padding.component';
import { AlignComponent } from '../../settings/align/align.component';
import { LinkComponent } from '../../settings/link/link.component';
import { LineHeightComponent } from '../../settings/line-height/line-height.component';

@Component({
  selector: 'tail-button-settings',
  template: `
    <h2 tailH2 i18n="@@button_block_text">Button text</h2>
    <div tailPanel>
      <input type="text" tailInput name="innerText" required ngModel />
    </div>
    <ng-container ngModelGroup="options">
      <h2 tailH2 i18n="@@font">Font</h2>
      <div tailPanel>
        <tail-font />
        <tail-line-height class="pt-2" />
      </div>
      <h2 tailH2 i18n="@@button_color">Button Color</h2>
      <div tailPanel>
        <tail-color allowTransparent="false" />
      </div>
      <h2 tailH2 i18n="@@button_block_background_color">Background color</h2>
      <div tailPanel>
        <tail-color ngModelName="backgroundColor" />
      </div>
      <h2 tailH2 i18n="@@border">Border</h2>
      <div tailPanel>
        <tail-border />
      </div>
      <h2 tailH2 i18n="@@button_block_attributes">Attributes</h2>
      <div tailPanel>
        <div class="grid grid-cols-3 gap-2">
          <tail-align class="col-span-2" mode="horizontal" />
          <button tailBtn (click)="options().fullWidth = !options().fullWidth" [class.active]="options().fullWidth"
                  i18n="@@button_block_full_width">
            Full Width
          </button>
        </div>
        <tail-link class="pt-2" />
        <div class="flex flex-col pt-2">
          <h3 tailH3 i18n="@@button_block_inner_padding">Inner Padding</h3>
          <tail-padding modelGroupName="innerPadding" />
        </div>
        <div class="flex flex-col pt-2">
          <h3 tailH3 i18n="@@padding">Padding</h3>
          <tail-padding />
        </div>
      </div>
    </ng-container>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    BorderComponent,
    ColorComponent,
    FontComponent,
    UIFormModule,
    FormsModule,
    PaddingComponent,
    AlignComponent,
    LinkComponent,
    LineHeightComponent,
  ],
  viewProviders: [formViewProvider()],
})
export class ButtonSettingsComponent implements AfterViewInit {
  readonly options = model.required<IButtonBlockOptions>();
  readonly innerText = model.required<string>();

  readonly form = inject(NgForm);
  readonly untilDestroyed = takeUntilDestroyed<{
    options: IButtonBlockOptions;
    innerText: string;
  }>();

  ngAfterViewInit() {
    const { form } = this.form;
    setTimeout(() => {
      form.patchValue(
        { options: this.options(), innerText: this.innerText() },
        { emitEvent: false }
      );
      form.valueChanges
        .pipe(
          filter(() => form.valid),
          debounceTime(300),
          this.untilDestroyed
        )
        .subscribe((value) => {
          this.innerText.set(value.innerText);
          this.options.set(value.options);
        });
    });
  }
}

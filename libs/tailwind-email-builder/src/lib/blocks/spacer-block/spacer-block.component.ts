import {
  ChangeDetectionStrategy,
  Component,
  computed,
  model,
  OnInit,
} from '@angular/core';
import {
  addIPEmailBuilderBlock,
  AIPEmailBuilderBlock,
  createWidthHeight,
  IPEmailBuilderSettingsDirective,
  IWidthHeight,
  TIPEmailBuilderStyles,
} from '@wlocalhost/ngx-email-builder';
import { FormsModule } from '@angular/forms';
import { UIFormModule } from '../../directives/form/form-input.directive';
import { SpacerSettingsComponent } from './spacer-settings.component';

export interface ISpacerBlockOptions {
  height: Omit<IWidthHeight, 'auto'>;
}

@Component({
  selector: 'tail-spacer-block',
  templateUrl: './spacer-block.component.html',
  styleUrls: ['./spacer-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IPEmailBuilderSettingsDirective,
    UIFormModule,
    FormsModule,
    SpacerSettingsComponent,
  ],
})
export class SpacerBlockComponent
  extends AIPEmailBuilderBlock<ISpacerBlockOptions>
  implements OnInit
{
  readonly options = model.required<ISpacerBlockOptions>();

  readonly hostStyles = computed<TIPEmailBuilderStyles>(() => {
    return {
      height: createWidthHeight(this.options().height),
    };
  });

  ngOnInit() {
    this.options.subscribe((options) => {
      this.updateMyContext({ options });
    });
  }
}

export const SpacerBlock = addIPEmailBuilderBlock<ISpacerBlockOptions>(
  $localize`:@@block_spacer_title:Spacer`,
  {
    type: 'spacer',
    component: SpacerBlockComponent,
    context: {
      options: {
        height: {
          value: 20,
          unit: 'px',
          units: ['px'],
        },
      },
    },
  }
);

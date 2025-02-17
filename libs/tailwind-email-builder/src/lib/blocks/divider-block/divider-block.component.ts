import {
  ChangeDetectionStrategy,
  Component,
  computed,
  model,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import {
  addIPEmailBuilderBlock,
  AIPEmailBuilderBlock,
  createBorder,
  createPadding,
  IBorder,
  IPadding,
  IPEmailBuilderSettingsDirective,
} from '@wlocalhost/ngx-email-builder';
import { FormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';
import { DividerSettingsComponent } from './divider-settings.component';

export interface IDividerBlockOptions {
  border: Omit<IBorder, 'radius'>;
  padding: IPadding;
}

@Component({
  selector: 'tail-divider-block',
  templateUrl: 'divider-block.component.html',
  styleUrls: ['divider-block.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    IPEmailBuilderSettingsDirective,
    NgStyle,
    DividerSettingsComponent,
  ],
})
export class DividerBlockComponent
  extends AIPEmailBuilderBlock<IDividerBlockOptions>
  implements OnInit
{
  readonly options = model.required<IDividerBlockOptions>();

  readonly hostStyles = computed(() => createPadding(this.options().padding));
  readonly borderStyles = computed(() =>
    createBorder(this.options().border, 'borderTop')
  );

  ngOnInit() {
    this.options.subscribe((options) => {
      this.updateMyContext({ options });
    });
  }
}

export const DividerBlock = addIPEmailBuilderBlock<IDividerBlockOptions>(
  $localize`:@@block_divider_title:Divider`,
  {
    type: 'divider',
    component: DividerBlockComponent,
    context: {
      options: {
        border: {
          color: '#000000',
          style: 'solid',
          width: 4,
        },
        padding: {
          top: 10,
          right: 25,
          bottom: 10,
          left: 25,
        },
      },
    },
  }
);

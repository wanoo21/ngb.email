import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TailwindEmailBuilderModule } from '@wlocalhost/ngx-tailwind-email-builder';
import { CdkStepperModule } from '@angular/cdk/stepper';

@Component({
  standalone: true,
  imports: [CommonModule, TailwindEmailBuilderModule, CdkStepperModule],
  template: ` <tail-email-builder></tail-email-builder> `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuilderComponent {}

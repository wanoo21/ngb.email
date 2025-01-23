import { Component, inject, model } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  IpFormUIModule,
  TailwindEmailBuilderModule,
} from '@wlocalhost/ngx-tailwind-email-builder';
import {
  AIPEmailBuilderRestService,
  ButtonBlock,
  DividerBlock,
  IPEmail,
  Structure,
  TextBlock,
} from '@wlocalhost/ngx-email-builder';
import {
  CdkMenu,
  CdkMenuBar,
  CdkMenuItem,
  CdkMenuTrigger,
} from '@angular/cdk/menu';
import { lastValueFrom } from 'rxjs';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    TailwindEmailBuilderModule,
    IpFormUIModule,
    CdkMenuBar,
    CdkMenuItem,
    CdkMenuTrigger,
    CdkMenu,
  ],
  selector: 'app-root',
  template: `
    <tail-email-builder [(value)]="email">
      <div class="top-actions flex gap-2" cdkMenuBar>
        <button tailBtn cdkMenuItem [cdkMenuTriggerFor]="exportMenu">
          Export Email
        </button>
      </div>
    </tail-email-builder>

    <ng-template #exportMenu>
      <div class="flex bg-white shadow-lg p-4 rounded gap-4" cdkMenu>
        <button class="hover:bg-gray-200" tailBtn (click)="exportEmail('HTML')" cdkMenuItem>HTML</button>
        <button class="hover:bg-gray-200" tailBtn (click)="exportEmail('MJML')" cdkMenuItem>MJML</button>
        <button class="hover:bg-gray-200" tailBtn (click)="exportEmail('JSON')" cdkMenuItem>JSON</button>
      </div>
    </ng-template>
  `,
})
export class AppComponent {
  readonly restService = inject(AIPEmailBuilderRestService);
  readonly email = model(
    new IPEmail([
      new Structure('cols_1', [
        [
          new DividerBlock().toObject({
            border: { width: 20, color: '#5e5d5d', style: 'double' },
          }),
          new TextBlock().toObject(
            {
              // @ts-expect-error TODO: fix this
              font: {
                family: 'Roboto:wght@400',
                size: 40,
                style: 'normal',
                weight: 400,
              },
            },
            'This is a sample email, you can edit it as you like.'
          ),
          new DividerBlock().toObject({ padding: { top: 40, bottom: 40 } }),
          new ButtonBlock().toObject(
            {
              link: {
                href: 'https://example.com',
                target: '_blank',
              },
            },
            'Click on me'
          ),
        ],
      ]),
    ])
  );

  async exportEmail(type: 'HTML' | 'MJML' | 'JSON') {
    let exportedFile = JSON.stringify(this.email(), null, 2);
    if (type !== 'JSON') {
      const { html, mjml } = await lastValueFrom(
        this.restService.convert(this.email())
      );
      exportedFile = type === 'HTML' ? html : mjml;
    }
    const blob = new Blob([exportedFile], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `email.${type.toLowerCase()}`;
    a.click();
    URL.revokeObjectURL(url);
    a.remove();
  }
}

import { Component, effect, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  TailwindEmailBuilderModule,
  UIFormModule,
} from '@wlocalhost/ngx-tailwind-email-builder';
import { injectIIPEmail } from '@wlocalhost/ngx-email-builder';
import { CdkMenu, CdkMenuBar, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { lastValueFrom } from 'rxjs';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    TailwindEmailBuilderModule,
    UIFormModule,
    CdkMenuBar,
    CdkMenu,
    CdkMenuItem,
    CdkMenuTrigger,
  ],
  selector: 'app-root',
  template: `
    <tail-email-builder>
      <div class="top-actions flex gap-2" cdkMenuBar>
        <button tailBtn cdkMenuItem [cdkMenuTriggerFor]="exportMenu">
          Export Email
        </button>
        <label tailBtn cdkMenuItem class="cursor-pointer">
          Import JSON
          <input type="file" (input)="importJSON($event)" class="hidden" />
        </label>
      </div>
    </tail-email-builder>

    <ng-template #exportMenu>
      <div class="flex bg-white shadow-lg p-4 rounded gap-4" cdkMenu>
        <button
          class="hover:bg-gray-200"
          tailBtn
          (click)="exportEmail('HTML')"
          cdkMenuItem
        >
          HTML
        </button>
        <button
          class="hover:bg-gray-200"
          tailBtn
          (click)="exportEmail('MJML')"
          cdkMenuItem
        >
          MJML
        </button>
        <button
          class="hover:bg-gray-200"
          tailBtn
          (click)="exportEmail('JSON')"
          cdkMenuItem
        >
          JSON
        </button>
      </div>
    </ng-template>
  `,
})
export class AppComponent implements OnInit {
  readonly currentEmail = injectIIPEmail();

  #effect = effect(() => {
    const email = this.currentEmail.value();
    console.log(email);
  });

  ngOnInit() {
    this.currentEmail.options({
      name: 'Test Email',
      previewText: 'This is a preview text',
    });
    const structure = this.currentEmail.structures.add('cols_1');
    this.currentEmail.blocks.add(structure, 0, 0, {
      type: 'text',
      context: { innerText: "I'm coming from SSR." },
    });
    this.currentEmail.blocks.add(structure, 0, 1, {
      type: 'social',
      context: { networks: [{ name: 'twitter', link: 'dsomething' }] },
    });
  }

  /**
   * An example of how to export the email to a file
   *
   * @param type
   */
  async exportEmail(type: 'HTML' | 'MJML' | 'JSON') {
    try {
      let exportedFile = JSON.stringify(this.currentEmail.value(), null, 2);
      if (type !== 'JSON') {
        const { html, mjml } = await lastValueFrom(this.currentEmail.convert());
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
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * An example of how to import a JSON file to the email
   * TODO: Add support for new `model` API, now `set` method is raising some issues with DnD
   *
   * @param event
   */
  importJSON(event: Event) {
    try {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (!file || !file.type.includes('json')) {
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        this.currentEmail.set(JSON.parse(reader.result as string));
      };
      reader.readAsText(file);
    } catch (error) {
      console.error(error);
    } finally {
      (event.target as HTMLInputElement).value = '';
    }
  }
}

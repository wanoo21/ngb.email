import { Component } from '@angular/core';
import { TailwindEmailBuilderModule } from "@wlocalhost/ngx-tailwind-email-builder";

@Component({
  standalone: true,
  selector: 'wlocalhost-tailwind-demo-app-entry',
  imports: [TailwindEmailBuilderModule],
  template: `
    <tail-email-builder></tail-email-builder>
  `,
})
export default class RemoteEntryComponent {}

import { Component } from '@angular/core';
import { PrimengEmailBuilderModule } from "@wlocalhost/ngx-primeng-email-builder";

@Component({
  standalone: true,
  selector: 'wlocalhost-primeng-demo-app-entry',
  imports: [PrimengEmailBuilderModule],
  template: `
    <prime-email-builder></prime-email-builder>
  `,
})
export default class RemoteEntryComponent {}

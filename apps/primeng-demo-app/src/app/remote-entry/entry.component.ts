import { Component } from '@angular/core';
import { PrimengEmailBuilderModule } from "@wlocalhost/ngx-primeng-email-builder";
import { IPEmail, Structure, TextBlock } from "@wlocalhost/ngx-email-builder";

@Component({
  standalone: true,
  selector: 'wlocalhost-primeng-demo-app-entry',
  imports: [PrimengEmailBuilderModule],
  template: `
    <prime-email-builder [(value)]="email"></prime-email-builder>
  `,
})
export default class RemoteEntryComponent {
  email = new IPEmail([
    new Structure("cols_1", [
      [
        new TextBlock().toObject({}, `
          <h1 style="margin-bottom: 10px">Hello World</h1>
          <p>This is a simple email template built with PrimeNG</p>
        `.trim()
        )
      ]
    ])
  ]);
}

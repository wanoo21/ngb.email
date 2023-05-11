import { Component } from '@angular/core';
import { MaterialEmailBuilderModule } from "@wlocalhost/ngx-md-email-builder";
import { IPEmail, Structure, TextBlock } from "@wlocalhost/ngx-email-builder";

@Component({
  standalone: true,
  selector: 'wlocalhost-material-demo-app-entry',
  imports: [MaterialEmailBuilderModule],
  template: `
    <md-email-builder [(value)]="email"></md-email-builder>`,
})
export default class RemoteEntryComponent {
  email = new IPEmail([
    new Structure("cols_1", [
      [
        new TextBlock().toObject({}, `
          <h1 style="margin-bottom: 10px">Hello World</h1>
          <p>This is a simple email template built with Angular Material</p>
        `.trim()
        )
      ]
    ])
  ]);
}

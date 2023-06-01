import { Component } from "@angular/core";
import { BootstrapEmailBuilderModule } from "@wlocalhost/ngx-bootstrap-email-builder";
import { IPEmail, Structure, TextBlock } from "@wlocalhost/ngx-email-builder";

@Component({
  standalone: true,
  selector: "wlocalhost-bootstrap-demo-app-entry",
  imports: [BootstrapEmailBuilderModule],
  template: `
    <bt-email-builder [(value)]="email"></bt-email-builder>
  `
})
export default class RemoteEntryComponent {
  email = new IPEmail([
    new Structure("cols_1", [
      [
        new TextBlock().toObject({}, `
          <h1 style="margin-bottom: 10px">Hello World</h1>
          <p>This is a simple email template built with Bootstrap 5</p>
        `)
      ]
    ])
  ]);
}

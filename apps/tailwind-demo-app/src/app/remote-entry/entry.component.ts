import { Component } from "@angular/core";
import { TailwindEmailBuilderModule } from "@wlocalhost/ngx-tailwind-email-builder";
import { IPEmail, Structure, TextBlock } from "@wlocalhost/ngx-email-builder";

@Component({
  standalone: true,
  selector: "wlocalhost-tailwind-demo-app-entry",
  imports: [
    TailwindEmailBuilderModule
  ],
  providers: [],
  template: `
    <tail-email-builder [(value)]="email"></tail-email-builder>
  `
})
export default class RemoteEntryComponent {
  email = new IPEmail([
    new Structure("cols_1", [
      [
        new TextBlock().toObject({}, `
          <h1 style="margin-bottom: 10px">Hello World</h1>
          <p>This is a simple email template built with Tailwind CSS</p>
        `.trim()
        )
      ]
    ])
  ]);
}

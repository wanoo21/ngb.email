import { Component, inject } from "@angular/core";
import { TailwindEmailBuilderModule } from "@wlocalhost/ngx-tailwind-email-builder";
import { AIPEmailBuilderService, ImageBlock, IPEmail, Structure, TextBlock } from "@wlocalhost/ngx-email-builder";

@Component({
  standalone: true,
  selector: "wlocalhost-tailwind-demo-app-entry",
  imports: [
    TailwindEmailBuilderModule
  ],
  template: `
    <tail-email-builder [(value)]="email"></tail-email-builder>
  `
})
export default class RemoteEntryComponent {
  readonly emailBuilderService = inject(AIPEmailBuilderService);

  // Create a new email object
  email = new IPEmail([
    // A structure with one column, which contains two blocks
    new Structure("cols_1", [
      [
        // The first block is an image block with a link
        new ImageBlock().toObject({
          link: {
            href: "https://google.com",
            target: "_blank"
          }
        }, "https://picsum.photos/seed/picsum/600/400"),
        // The second block is a text block with a title and a paragraph
        new TextBlock().toObject(
          { padding: { top: 10, right: 10 } }, `
          <h1 style="margin-bottom: 10px">Hello World</h1>
          <p>This is a simple email template built with Tailwind CSS</p>
        `.trim()
        )
      ]
    ])
  ]);

  async createEmail() {
    // Convert the email to MJML and HTML
    const { html, mjml } = await this.emailBuilderService.convert(this.email);

    console.log(html); // <html>...</html>
    console.log(mjml); // <mjml>...</mjml>
  }
}

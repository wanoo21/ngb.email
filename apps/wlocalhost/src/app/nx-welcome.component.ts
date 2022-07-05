import { Component } from "@angular/core";
import {
  AIPEmailBuilderService,
  ImageBlock,
  IPEmail,
  Structure,
  TextBlock
} from "@wlocalhost/ngx-email-builder/core";
import { AbsPage } from "@ngcomma/ngx-abstract";

@Component({
  selector: "wlocalhost-nx-welcome",
  template: `
    <ip-email-builder [email]="email"></ip-email-builder> `,
  styles: []
})
export class NxWelcomeComponent extends AbsPage {
  email = new IPEmail([
    new Structure("cols_2", [
      [new TextBlock(), new ImageBlock()], [new TextBlock()]
    ]),
    new Structure("cols_6", [
      [new TextBlock()]
    ])
  ]);

  constructor(readonly ngb: AIPEmailBuilderService) {
    super("Home", "Wlocalhost description", true);
  }
}

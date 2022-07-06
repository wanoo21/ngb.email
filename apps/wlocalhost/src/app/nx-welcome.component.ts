import { Component } from "@angular/core";
import {
  AIPEmailBuilderService,
  ButtonBlock,
  DividerBlock,
  ImageBlock,
  IPEmail,
  SpacerBlock,
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
    new Structure("cols_3", [
      [new DividerBlock()], [new SpacerBlock()], [new ButtonBlock()]
    ])
  ]);

  constructor(readonly ngb: AIPEmailBuilderService) {
    super("Home", "Wlocalhost description", true);
  }
}

import { Component } from "@angular/core";
import { AIPEmailBuilderService } from "@wlocalhost/ngx-email-builder";
import { AbsPage } from "@ngcomma/ngx-abstract";

@Component({
  selector: "wlocalhost-nx-welcome",
  template: `
    <tail-email-builder></tail-email-builder> `,
  styles: []
})
export class NxWelcomeComponent extends AbsPage {
  // email = new IPEmail([
  //   new Structure("cols_2", [
  //     [new TextBlock(), new ImageBlock()], [new TextBlock()]
  //   ]),
  //   new Structure("cols_1", [
  //     [new SocialBlock()]
  //   ])
  // ]);

  constructor(readonly ngb: AIPEmailBuilderService) {
    super("Home", "Wlocalhost description", true);
  }
}

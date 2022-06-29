import { Component } from "@angular/core";
import { AIPEmailBuilderService, IPEmail, Structure } from "@wlocalhost/ngx-email-builder/core";
import { AbsPage } from "@ngcomma/ngx-abstract";

@Component({
  selector: "wlocalhost-nx-welcome",
  template: `
    <ip-email-builder></ip-email-builder> `,
  styles: []
})
export class NxWelcomeComponent extends AbsPage {
  email = new IPEmail([new Structure("cols_6")]);

  constructor(readonly ngb: AIPEmailBuilderService) {
    super("Home", "Wlocalhost description", true);
  }
}

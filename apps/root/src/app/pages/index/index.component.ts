import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

import { AbstractPage } from "../../abstract/AbstractPage";
import { SharedModule } from "../../shared/shared.module";
import { V14InfoComponent } from "./v14-info/v14-info.component";

@Component({
  selector: "wlocalhost-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"],
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    SharedModule,
    V14InfoComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexComponent extends AbstractPage {
  constructor() {
    super("MJML and Angular WYSIWYG Email Template Editor", "A developer-first email template builder based on Angular and MJML.", false);
  }
}

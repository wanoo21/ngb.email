import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MatLegacyTabsModule as MatTabsModule } from "@angular/material/legacy-tabs";
import { CommonModule } from "@angular/common";
import { RouterLinkActive, RouterLink, RouterOutlet } from "@angular/router";

import { AbstractPage } from "../../abstract/AbstractPage";
import { SharedModule } from "../../shared/shared.module";

@Component({
  selector: "wlocalhost-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"],
  standalone: true,
  imports: [
    MatTabsModule,
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    SharedModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexComponent extends AbstractPage {
  links = [
    {
      link: "./",
      label: "Brand new Email Builder for Angular v14+"
    },
    {
      link: "v9",
      label: "Old Email Builder for Angular below v14"
    }
  ];
  activeLink = this.links[0];

  constructor() {
    super("MJML and Angular WYSIWYG Email Template Editor", "A developer-first email template builder based on Angular and MJML.", false);
  }
}

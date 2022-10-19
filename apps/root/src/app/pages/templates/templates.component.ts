import { ChangeDetectionStrategy, Component } from "@angular/core";

import { AbstractPage } from "../../abstract/AbstractPage";
import { SharedModule } from "../../shared/shared.module";

@Component({
  selector: "wlocalhost-templates",
  templateUrl: "./templates.component.html",
  styleUrls: ["./templates.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    SharedModule
  ],
  standalone: true
})
export class TemplatesComponent extends AbstractPage {
  constructor() {
    super("Email Template", "A collection of email templates built by Angular email template builder", true);
  }
}

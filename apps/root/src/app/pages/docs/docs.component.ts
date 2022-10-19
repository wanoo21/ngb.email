import { ChangeDetectionStrategy, Component } from "@angular/core";

import { AbstractPage } from "../../abstract/AbstractPage";
import { SharedModule } from "../../shared/shared.module";

@Component({
  selector: "wlocalhost-docs",
  templateUrl: "./docs.component.html",
  styleUrls: ["./docs.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    SharedModule
  ],
  standalone: true
})
export class DocsComponent extends AbstractPage {
  links: number[] = [1, 2, 3, 4, 5];

  constructor() {
    super("Get started", "Get started with email template builder", true);
  }
}

import { ChangeDetectionStrategy, Component } from "@angular/core";

import { AbstractPage } from "../../abstract/AbstractPage";
import { SharedModule } from "../../shared/shared.module";

@Component({
  selector: "wlocalhost-converter",
  templateUrl: "./converter.component.html",
  styleUrls: ["./converter.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [SharedModule]
})
export class ConverterComponent extends AbstractPage {
  constructor() {
    super("MJML Converter", "Angular email builder MJML Converter", true);
  }
}

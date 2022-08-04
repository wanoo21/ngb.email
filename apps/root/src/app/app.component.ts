import { ChangeDetectionStrategy, Component } from "@angular/core";

import { SkinsService } from "./services/skins.service";

@Component({
  selector: "wlocalhost-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(readonly skinService: SkinsService) {
  }
}

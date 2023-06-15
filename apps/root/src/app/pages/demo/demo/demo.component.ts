import { ChangeDetectionStrategy, Component } from "@angular/core";

import { SkinService } from "../skin.service";

@Component({
  selector: "wlocalhost-demo",
  templateUrl: "./demo.component.html",
  styleUrls: ["./demo.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoComponent {
  constructor(readonly skinService: SkinService) {
  }

  npmLinkCopied(success: boolean): void {
    // success && this.matSnackBar.open("Copied to clipboard!", "Thanks", { duration: 3000 });
  }
}

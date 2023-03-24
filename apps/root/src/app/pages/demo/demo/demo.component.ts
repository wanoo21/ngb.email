import { ChangeDetectionStrategy, Component } from "@angular/core";
import { SkinService } from "../skin.service";
import { MatLegacySnackBar as MatSnackBar } from "@angular/material/legacy-snack-bar";

@Component({
  selector: "wlocalhost-demo",
  templateUrl: "./demo.component.html",
  styleUrls: ["./demo.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoComponent {
  constructor(readonly skinService: SkinService, readonly matSnackBar: MatSnackBar) {
  }

  npmLinkCopied(success: boolean): void {
    success && this.matSnackBar.open("Copied to clipboard!", 'Thanks', {duration: 3000});
  }
}

import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AIPBorder } from "@wlocalhost/ngx-email-builder/core";

@Component({
  selector: "ip-border",
  templateUrl: "./border.component.html",
  styleUrls: ["./border.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BorderComponent extends AIPBorder {
}

import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AIPBorder } from "@wlocalhost/ngx-email-builder";

@Component({
  selector: "bulma-border",
  templateUrl: "./border.component.html",
  styleUrls: ["./border.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BorderComponent extends AIPBorder {
}

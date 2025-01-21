import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AIPBorder } from "@wlocalhost/ngx-email-builder";

@Component({
  selector: "tail-border",
  templateUrl: "./border.component.html",
  styleUrls: ["./border.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class BorderComponent extends AIPBorder {
}

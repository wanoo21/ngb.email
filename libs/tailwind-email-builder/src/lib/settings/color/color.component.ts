import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AIPColor } from "@wlocalhost/ngx-email-builder";

@Component({
  selector: "tail-color",
  templateUrl: "./color.component.html",
  styleUrls: ["./color.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class ColorComponent extends AIPColor {
}

import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AIPColor } from "@wlocalhost/ngx-email-builder";

@Component({
  selector: "prime-color",
  templateUrl: "./color.component.html",
  styleUrls: ["./color.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorComponent extends AIPColor {
}

import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AIPWidthHeight } from "@wlocalhost/ngx-email-builder";

@Component({
  selector: "tail-width-height",
  templateUrl: "./width-height.component.html",
  styleUrls: ["./width-height.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class WidthHeightComponent extends AIPWidthHeight {
}

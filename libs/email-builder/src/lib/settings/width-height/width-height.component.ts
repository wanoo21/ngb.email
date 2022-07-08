import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AIPWidthHeight } from "@wlocalhost/ngx-email-builder/core";

@Component({
  selector: "ip-width-height",
  templateUrl: "./width-height.component.html",
  styleUrls: ["./width-height.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidthHeightComponent extends AIPWidthHeight {
}

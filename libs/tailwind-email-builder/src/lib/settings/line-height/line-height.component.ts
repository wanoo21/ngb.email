import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AIPLineHeight } from "@wlocalhost/ngx-email-builder";

@Component({
  selector: "tail-line-height",
  templateUrl: "./line-height.component.html",
  styleUrls: ["./line-height.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class LineHeightComponent extends AIPLineHeight {
}

import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AIPAlign } from "@wlocalhost/ngx-email-builder";

@Component({
  selector: "bt-align",
  templateUrl: "./align.component.html",
  styleUrls: ["./align.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlignComponent extends AIPAlign {
}

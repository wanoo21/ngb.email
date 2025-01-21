import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AIPAlign } from "@wlocalhost/ngx-email-builder";

@Component({
  selector: "tail-align",
  templateUrl: "./align.component.html",
  styleUrls: ["./align.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class AlignComponent extends AIPAlign {
}

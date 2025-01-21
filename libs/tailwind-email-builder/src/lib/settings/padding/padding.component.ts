import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AIPPadding } from "@wlocalhost/ngx-email-builder";

@Component({
  selector: "tail-padding",
  templateUrl: "./padding.component.html",
  styleUrls: ["./padding.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class PaddingComponent extends AIPPadding {
}

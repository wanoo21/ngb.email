import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AIPPadding } from "@wlocalhost/ngx-email-builder";

@Component({
  selector: "ip-padding",
  templateUrl: "./padding.component.html",
  styleUrls: ["./padding.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaddingComponent extends AIPPadding {
}

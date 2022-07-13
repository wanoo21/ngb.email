import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AIPMargin } from "@wlocalhost/ngx-email-builder";

@Component({
  selector: "ip-margin",
  templateUrl: "./margin.component.html",
  styleUrls: ["./margin.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarginComponent extends AIPMargin {

}

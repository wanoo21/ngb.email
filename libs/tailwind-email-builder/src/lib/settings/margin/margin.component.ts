import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AIPMargin } from "@wlocalhost/ngx-email-builder";

@Component({
  selector: "tail-margin",
  templateUrl: "./margin.component.html",
  styleUrls: ["./margin.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class MarginComponent extends AIPMargin {

}

import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AIPEmailBuilderComponent } from "@wlocalhost/ngx-email-builder";

@Component({
  selector: "md-email-builder",
  templateUrl: "./md-email-builder.component.html",
  styleUrls: ["./md-email-builder.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MdEmailBuilderComponent extends AIPEmailBuilderComponent {
}

import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AIPEmailBuilderComponent } from "@wlocalhost/ngx-email-builder";

@Component({
  selector: "bulma-email-builder",
  templateUrl: "./bulma-email-builder.component.html",
  styleUrls: ["./bulma-email-builder.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BulmaEmailBuilderComponent extends AIPEmailBuilderComponent {
}

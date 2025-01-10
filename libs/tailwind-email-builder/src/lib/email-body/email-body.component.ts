import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AIPEmailBody } from "@wlocalhost/ngx-email-builder";

@Component({
  selector: "tail-email-body",
  templateUrl: "./email-body.component.html",
  styleUrls: ["./email-body.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class EmailBodyComponent extends AIPEmailBody {
}

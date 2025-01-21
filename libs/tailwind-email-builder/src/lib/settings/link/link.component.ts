import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AIPLink } from "@wlocalhost/ngx-email-builder";

@Component({
  selector: "tail-link",
  templateUrl: "./link.component.html",
  styleUrls: ["./link.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class LinkComponent extends AIPLink {
}

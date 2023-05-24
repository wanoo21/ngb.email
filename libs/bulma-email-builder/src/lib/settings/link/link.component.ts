import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AIPLink } from "@wlocalhost/ngx-email-builder";

@Component({
  selector: "bulma-link",
  templateUrl: "./link.component.html",
  styleUrls: ["./link.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkComponent extends AIPLink {
}

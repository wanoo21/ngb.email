import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AIPBackground } from "@wlocalhost/ngx-email-builder";

@Component({
  selector: "md-background",
  templateUrl: "./background.component.html",
  styleUrls: ["./background.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackgroundComponent extends AIPBackground {
}

import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AIPFont } from "@wlocalhost/ngx-email-builder";

@Component({
  selector: "tail-font",
  templateUrl: "./font.component.html",
  styleUrls: ["./font.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FontComponent extends AIPFont {
}

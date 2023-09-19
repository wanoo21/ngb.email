import { ChangeDetectionStrategy, Component } from "@angular/core";
import { SpacerBlock } from "@wlocalhost/ngx-email-builder";

@Component({
  selector: "bulma-spacer-block",
  templateUrl: "./spacer-block.component.html",
  styleUrls: ["./spacer-block.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpacerBlockComponent extends SpacerBlock {
}

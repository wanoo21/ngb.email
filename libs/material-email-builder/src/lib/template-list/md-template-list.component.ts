import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AIPTemplateList } from "@wlocalhost/ngx-email-builder";

@Component({
  selector: "md-template-list",
  templateUrl: "./md-template-list.component.html",
  styleUrls: ["./md-template-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MdTemplateListComponent extends AIPTemplateList {
}

import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AIPTemplateList } from "@wlocalhost/ngx-email-builder";

@Component({
  selector: "tail-ng-add-list",
  templateUrl: "./template-list.component.html",
  styleUrls: ["./template-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateListComponent extends AIPTemplateList {
}

import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AIPStructure } from "@wlocalhost/ngx-email-builder";

@Component({
  selector: "md-structure",
  templateUrl: "md-structure.component.html",
  styleUrls: ["md-structure.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MdStructureComponent extends AIPStructure {
}

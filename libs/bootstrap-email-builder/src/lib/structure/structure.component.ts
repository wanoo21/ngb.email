import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AIPStructure } from "@wlocalhost/ngx-email-builder";

@Component({
  selector: "bt-structure",
  templateUrl: 'structure.component.html',
  styleUrls: ['structure.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StructureComponent extends AIPStructure {
}

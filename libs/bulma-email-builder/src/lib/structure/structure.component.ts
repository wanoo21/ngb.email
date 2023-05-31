import { ChangeDetectionStrategy, Component, HostBinding, HostListener } from "@angular/core";
import { AIPStructure } from "@wlocalhost/ngx-email-builder";

@Component({
  selector: 'bulma-structure',
  templateUrl: 'structure.component.html',
  styleUrls: ['structure.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StructureComponent extends AIPStructure {
  isHovering = false;

  @HostListener('mouseover')
  mouseover() {
    this.isHovering = true;
  }

  @HostListener('mouseout')
  mouseout() {
    this.isHovering = false;
  }

  @HostBinding('class.hovering')
  get hovering() {
    return this.isHovering;
  }
}

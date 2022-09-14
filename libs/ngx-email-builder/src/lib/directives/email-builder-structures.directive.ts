import { Directive, HostBinding, Input } from "@angular/core";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";

import { IStructure, Structure } from "../structure/structure";
import { TStructureTypes } from "../interfaces";
import { AbstractEmailBuilderDropList } from "./abstract-email-builder-drop-list";

/**
 * Connect all structures' drop lists between each other.
 *
 * @exportAs ipStructures
 */
@Directive({
  selector: "[ipEmailBuilderStructures]",
  exportAs: "ipStructures"
})
export class IPEmailBuilderStructuresDirective extends AbstractEmailBuilderDropList {
  @Input("ipEmailBuilderStructures") data!: IStructure[];
  @HostBinding("style.minHeight.%") readonly minHeight = 100;

  // Structures' drop lists
  get dropListCollection() {
    return this.builderUiService.structuresDropLists;
  }

  dropListDropped(event: CdkDragDrop<IStructure[], IStructure[], TStructureTypes>) {
    const { container, previousContainer, currentIndex, previousIndex, item } = event;
    if (this.builderUiService.structuresDropLists.has(previousContainer)) {
      moveItemInArray(container.data, previousIndex, currentIndex);
    } else {
      container.data.splice(currentIndex, 0, new Structure(item.data));
    }
  }
}

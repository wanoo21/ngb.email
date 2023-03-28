import { Directive, HostBinding, Input } from "@angular/core";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";

import { IStructure, Structure } from "../structure/structure";
import { TStructureTypes } from "../interfaces";
import { AbstractEmailBuilderDropList } from "./abstract-email-builder-drop-list";

/**
 * Connects all structures' drop lists between each other, allowing structures to be dropped and reordered within the drop lists.
 *
 * @exportAs ipStructures
 */
@Directive({
  selector: "[ipEmailBuilderStructures]",
  exportAs: "ipStructures"
})
export class IPEmailBuilderStructuresDirective extends AbstractEmailBuilderDropList {
  data!: IStructure[];
  /**
   * The minimum height of the drop list, as a percentage of its parent's height.
   */
  @HostBinding("style.minHeight.%") readonly minHeight = 100;

  /**
   * The list of structures to be connected to the drop list.
   */
  @Input() set ipEmailBuilderStructures(structures: IStructure[]) {
    this.data = structures;
  }

  /**
   * The collection of all structures' drop lists in the builder UI service.
   */
  get dropListCollection() {
    return this.builderUiService.structuresDropLists;
  }

  /**
   * Handles when an item is dropped into the drop list. If the item was previously in another drop list, it is moved to
   * the new location. Otherwise, it is added to the new location.
   *
   * @param event The drag-and-drop event object.
   */
  dropListDropped(event: CdkDragDrop<IStructure[], IStructure[], TStructureTypes>) {
    const { container, previousContainer, currentIndex, previousIndex, item } = event;
    if (this.builderUiService.structuresDropLists.has(previousContainer)) {
      moveItemInArray(container.data, previousIndex, currentIndex);
    } else {
      container.data.splice(currentIndex, 0, new Structure(item.data));
    }
  }
}

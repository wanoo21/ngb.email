import { Directive, DoCheck, HostBinding, Input } from "@angular/core";
import { CdkDragDrop, CdkDropList, transferArrayItem } from "@angular/cdk/drag-drop";

import { AIPEmailBuilderBlockExtendedOptions } from "../core/Block";
import { AbstractEmailBuilderDropList } from "./abstract-email-builder-drop-list";
import { cloneDeep } from "../tools/utils";

/**
 * A directive which connects columns between each other.
 * It requires to have [cdkDropList] directive to host or current element.
 *
 * @exportAs ipColumn
 */
@Directive({
  selector: "[ipEmailBuilderColumn]",
  exportAs: "ipColumn"
})
export class IPEmailBuilderColumnDirective extends AbstractEmailBuilderDropList implements DoCheck {
  @Input("ipEmailBuilderColumn") data!: AIPEmailBuilderBlockExtendedOptions[];
  @HostBinding("class.column") withClass = true;

  // A list of connected columns drop lists
  get connectedTo(): CdkDropList[] {
    return Array.from(this.builderUiService.columnsDropLists);
  }

  // A list of all columns drop lists
  get dropListCollection() {
    return this.builderUiService.columnsDropLists;
  }

  // Add a new block inside current column
  dropListDropped(drop: CdkDragDrop<AIPEmailBuilderBlockExtendedOptions[]>) {
    const { previousContainer, container, previousIndex, currentIndex, item } = drop;
    if (this.builderUiService.columnsDropLists.has(previousContainer)) {
      transferArrayItem(previousContainer.data, container.data, previousIndex, currentIndex);
    } else {
      container.data.splice(currentIndex, 0, cloneDeep(item.data));
    }
  }

  ngDoCheck(): void {
    if (this.dropList) {
      this.dropList.connectedTo = this.connectedTo;
    }
  }
}

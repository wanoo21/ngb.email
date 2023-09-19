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
  data!: any[];
  /**
   * An array of block data.
   */
  @Input() set ipEmailBuilderColumn(blocks: AIPEmailBuilderBlockExtendedOptions[]) {
    this.data = blocks;
  }

  /**
   * Whether to apply the `.column` class to the host element.
   */
  @HostBinding("class.column") withClass = true;

  /**
   * Returns a list of connected columns drop lists.
   *
   * @returns {CdkDropList[]} The list of connected columns drop lists.
   */
  get connectedTo(): CdkDropList[] {
    return Array.from(this.builderUiService.columnsDropLists);
  }

  /**
   * Returns a list of all columns drop lists.
   *
   * @returns {Set<CdkDropList>} The list of all columns drop lists.
   */
  get dropListCollection(): Set<CdkDropList> {
    return this.builderUiService.columnsDropLists;
  }

  /**
   * Adds a new block inside the current column.
   *
   * @param {CdkDragDrop<AIPEmailBuilderBlockExtendedOptions[]>} drop The drop event.
   */
  dropListDropped(drop: CdkDragDrop<AIPEmailBuilderBlockExtendedOptions[]>): void {
    const { previousContainer, container, previousIndex, currentIndex, item } = drop;
    if (this.builderUiService.columnsDropLists.has(previousContainer)) {
      transferArrayItem(previousContainer.data, container.data, previousIndex, currentIndex);
    } else {
      container.data.splice(currentIndex, 0, cloneDeep(item.data));
    }
  }

  /**
   * Implements the `ngDoCheck` method.
   *
   * @returns {void}
   */
  ngDoCheck(): void {
    if (this.dropList) {
      this.dropList.connectedTo = this.connectedTo;
    }
  }
}

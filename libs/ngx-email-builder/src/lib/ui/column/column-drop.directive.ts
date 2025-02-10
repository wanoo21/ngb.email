import { Directive, DoCheck, Input } from '@angular/core';
import { CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';

import { DropNg } from '../drop.ng';
import { injectIIPEmail } from '../../state';
import { TIPEmailBuilderBlock } from '../../config/blocks';

export type TColumnDropData = {
  col: number;
  row: number;
};

/**
 * A directive which connects columns between each other.
 * It requires to have [cdkDropList] directive to host or current element.
 *
 * @exportAs ipColumn
 */
@Directive({
  selector: '[ipColumnDrop]',
  host: {
    class: 'column',
  },
})
export class IPEmailBuilderColumnDirective
  extends DropNg
  implements DoCheck
{
  override data = {} as TColumnDropData;
  readonly currentEmail = injectIIPEmail();

  /**
   * The column index.
   */
  @Input({ required: true }) set ipColumnDrop(col: number) {
    this.data.col = col;
  }

  /**
   * The parent structure index.
   */
  @Input({ required: true }) set ipColumnStructure(row: number) {
    this.data.row = row;
  }

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

  dropListDropped(
    drop: CdkDragDrop<TColumnDropData, TColumnDropData, TIPEmailBuilderBlock>
  ): void {
    const { previousContainer, container, previousIndex, currentIndex, item } =
      drop;
    const { col, row } = container.data;
    if (this.builderUiService.columnsDropLists.has(previousContainer)) {
      const { col: prevCol, row: prevRow } = previousContainer.data;
      this.currentEmail.blocks.move({
        structureIndex: prevRow,
        columnIndex: prevCol,
        index: previousIndex,
        toStructureIndex: row,
        toColumnIndex: col,
        toIndex: currentIndex,
      });
    } else {
      this.currentEmail.blocks.add(row, col, currentIndex, {
        type: item.data.type,
      });
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

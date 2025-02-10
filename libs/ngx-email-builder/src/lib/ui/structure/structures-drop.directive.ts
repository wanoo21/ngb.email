import { Directive } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

import { DropNg } from '../drop.ng';
import { injectIIPEmail } from '../../state';
import { IStructure, TStructureTypes } from './interfaces';

/**
 * Connects all structures' drop lists between each other, allowing structures to be dropped and reordered within the drop lists.
 *
 * @exportAs ipStructures
 */
@Directive({
  selector: '[ipStructuresDrop]',
  host: {
    '[style.minHeight.%]': '100',
  },
})
export class IPStructuresDropDirective extends DropNg {
  readonly currentEmail = injectIIPEmail();

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
  dropListDropped(
    event: CdkDragDrop<IStructure[], IStructure[], TStructureTypes>
  ) {
    const { previousContainer, currentIndex, previousIndex, item } = event;
    if (this.builderUiService.structuresDropLists.has(previousContainer)) {
      this.currentEmail.structures.move(previousIndex, currentIndex);
    } else {
      this.currentEmail.structures.add(item.data, {}, currentIndex);
    }
  }
}

import { Directive, DoCheck, Input } from "@angular/core";
import { CdkDragDrop, CdkDropList, transferArrayItem } from "@angular/cdk/drag-drop";

import { AIPEmailBuilderBlockExtendedOptions } from "../core/Block";
import { AbstractEmailBuilderDropList } from "./abstract-email-builder-drop-list";

@Directive({
  selector: "[ipEmailBuilderColumn]",
  exportAs: "ipColumn"
})
export class IPEmailBuilderColumnDirective extends AbstractEmailBuilderDropList implements DoCheck {
  @Input("ipEmailBuilderColumn") data!: AIPEmailBuilderBlockExtendedOptions[];

  get connectedTo(): CdkDropList[] {
    return Array.from(this.builderUiService.columnsDropLists);
  }

  get dropListCollection() {
    return this.builderUiService.columnsDropLists;
  };

  dropListDropped(drop: CdkDragDrop<AIPEmailBuilderBlockExtendedOptions[]>) {
    const { previousContainer, container, previousIndex, currentIndex, item } = drop;
    if (this.builderUiService.columnsDropLists.has(previousContainer)) {
      transferArrayItem(previousContainer.data, container.data, previousIndex, currentIndex);
    } else {
      container.data.splice(currentIndex, 0, item.data);
    }
  }

  ngDoCheck(): void {
    this.dropList.connectedTo = this.connectedTo;
  }
}

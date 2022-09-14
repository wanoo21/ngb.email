import { AfterViewInit, Directive, Host, HostBinding, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { CdkDragDrop, CdkDropList } from "@angular/cdk/drag-drop";

import { IPEmailBuilderUiService } from "../services";

/**
 * @internal
 */
@Directive()
export abstract class AbstractEmailBuilderDropList implements AfterViewInit, OnDestroy {
  abstract data: any[];
  abstract dropListCollection: Set<CdkDropList>;
  #subscription = new Subscription();

  constructor(
    readonly builderUiService: IPEmailBuilderUiService,
    @Host() readonly dropList?: CdkDropList
  ) {
  }

  @HostBinding("class.empty")
  get hasEmptyData(): boolean {
    return !this.data.length;
  }

  ngAfterViewInit(): void {
    if (this.dropList) {
      this.dropList.data = this.data;
      this.dropList.autoScrollDisabled = false;
      this.#subscription.add(this.dropList.dropped.subscribe(event => this.dropListDropped(event)));
      this.dropListCollection.add(this.dropList);
    } else {
      console.warn('You must add [cdkDropList] directive to host element.')
    }
  }

  abstract dropListDropped(drop: CdkDragDrop<any[]>): void;

  ngOnDestroy(): void {
    this.dropList?.ngOnDestroy();
    this.#subscription.unsubscribe();
  }

}

import { AfterViewInit, Directive, Host, HostBinding, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { CdkDragDrop, CdkDropList } from "@angular/cdk/drag-drop";

import { IPEmailBuilderUiService } from "../services";

/**
 * Abstract class that implements a drop list for email builder blocks or structures
 *
 * @internal
 */
@Directive()
export abstract class AbstractEmailBuilderDropList implements AfterViewInit, OnDestroy {
  /**
   * The data to be displayed in the drop list
   */
  abstract data: any[];

  /**
   * The collection of drop lists
   */
  abstract dropListCollection: Set<CdkDropList>;

  /**
   * The subscription for the drop list
   */
  #subscription = new Subscription();

  /**
   * Creates an instance of `AbstractEmailBuilderDropList`.
   *
   * @param builderUiService The email builder UI service
   * @param dropList The `CdkDropList` instance
   */
  constructor(
    readonly builderUiService: IPEmailBuilderUiService,
    @Host() readonly dropList?: CdkDropList
  ) {
  }

  @HostBinding("class.empty")
  get hasEmptyData(): boolean {
    return !this.data.length;
  }

  /**
   * Adds the data to the `CdkDropList` instance after the view has been initialized.
   */
  ngAfterViewInit(): void {
    if (this.dropList) {
      this.dropList.data = this.data;
      this.dropList.autoScrollDisabled = false;
      this.#subscription.add(this.dropList.dropped.subscribe(event => this.dropListDropped(event)));
      this.dropListCollection.add(this.dropList);
    } else {
      console.warn("You must add [cdkDropList] directive to host element.");
    }
  }

  /**
   * Abstract method that is called when a block is dropped in the list.
   *
   * @param drop The `CdkDragDrop` event
   */
  abstract dropListDropped(drop: CdkDragDrop<any[]>): void;

  /**
   * Unsubscribes from the drop list's events and removes the instance.
   */
  ngOnDestroy(): void {
    this.dropList?.ngOnDestroy();
    this.#subscription.unsubscribe();
  }
}

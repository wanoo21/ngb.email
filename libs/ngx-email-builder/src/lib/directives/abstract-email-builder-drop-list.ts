import { AfterViewInit, Directive, Host, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { CdkDragDrop, CdkDropList } from "@angular/cdk/drag-drop";

import { IPEmailBuilderUiService } from "../services";

@Directive()
export abstract class AbstractEmailBuilderDropList implements AfterViewInit, OnDestroy {
  abstract data: any[];
  abstract dropListCollection: Set<CdkDropList>;
  #subscription = new Subscription();

  constructor(
    readonly builderUiService: IPEmailBuilderUiService,
    @Host() readonly dropList: CdkDropList
  ) {
  }


  ngAfterViewInit(): void {
    if (this.dropList) {
      this.dropList.data = this.data;
      this.dropList.autoScrollDisabled = false;
      this.#subscription.add(this.dropList.dropped.subscribe(event => this.dropListDropped(event)));
      this.dropListCollection.add(this.dropList);
    }
  }

  abstract dropListDropped(drop: CdkDragDrop<any[]>): void;

  ngOnDestroy(): void {
    this.dropList?.ngOnDestroy();
    this.#subscription.unsubscribe()
  }

}

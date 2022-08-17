import { Directive, DoCheck, inject, Input, KeyValueDiffers, NgZone, OnInit } from "@angular/core";
import { CdkPortal } from "@angular/cdk/portal";
import { debounce } from "@ngcomma/ngx-abstract/utils";

// import { AIPEmailBuilderHistoryService } from "../services";
import { AIPEmailBuilderBlock } from "../core/Block";
import { AIPStructure } from "../core/Structure";
import { AIPEmailBody } from "../core/Body";
import { TIPEmailBuilderStyles } from "../interfaces";

export interface IIPOptionsHistoryContext<T extends TIPEmailBuilderStyles = TIPEmailBuilderStyles> {
  cmp: AIPEmailBuilderBlock<T> | AIPStructure | AIPEmailBody,
  watch: T
}

@Directive({
  selector: "[ipEmailBuilderSettings]",
  exportAs: "ipSettings"
})
export class IPEmailBuilderSettingsDirective extends CdkPortal implements DoCheck, OnInit {
  readonly differs = inject(KeyValueDiffers);
  readonly zone = inject(NgZone);
  @Input() ipEmailBuilderSettings!: IIPOptionsHistoryContext;
  // #valueDiffer!: KeyValueDiffer<keyof IIPOptionsHistoryContext["watch"], any>;
  // #deepDiffers: Map<keyof IIPOptionsHistoryContext["watch"], KeyValueDiffer<IIPOptionsHistoryContext["watch"], any>> = new Map();
  // #historyService = inject(AIPEmailBuilderHistoryService);
  #debounceDoCheck = debounce(() => {
    // this.zone.runOutsideAngular(() => {
    //   const changes = this.#valueDiffer.diff(this.ipEmailBuilderSettings.watch);
    //   const deepChanges = Object.keys(this.ipEmailBuilderSettings.watch).map(key => {
    //     const option = this.ipEmailBuilderSettings.watch[key];
    //     if (typeof option === "object") {
    //       return this.#deepDiffers.get(key)?.diff(option);
    //     }
    //     return null;
    //   });
    //
    //   [...deepChanges, changes].forEach(change => {
    //     change?.forEachChangedItem(({ key, currentValue, previousValue }) => {
    //       // console.log({ key, currentValue, previousValue }, this.ipEmailBuilderSettings.cmp);
    //       // this.#historyService.addHistory(() => {
    //       //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //       //   // @ts-ignore
    //       //   Object.assign(this.ipEmailBuilderSettings.cmp, { [key]: previousValue });
    //       //   // console.log(previousValue);
    //       //   this.ipEmailBuilderSettings.cmp.changeDetectorRef.detectChanges();
    //       //   // if (!(this.ipEmailBuilderSettings.cmp instanceof AIPEmailBuilderBlock)) {
    //       //   //   this.ipEmailBuilderSettings.cmp.valueChange.next(this.ipEmailBuilderSettings.cmp.value)
    //       //   // }
    //       // });
    //     });
    //   });
    // });
  }, 700);

  ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
      // this.#valueDiffer = this.differs.find(this.ipEmailBuilderSettings.watch).create();
      // Object.keys(this.ipEmailBuilderSettings.watch).forEach(key => {
      //   const option = this.ipEmailBuilderSettings.watch[key];
      //   if (typeof option === "object") {
      //     this.#deepDiffers.set(key, this.differs.find(option).create());
      //   }
      // });
    });
  }

  ngDoCheck(): void {
    this.#debounceDoCheck();
  }
}

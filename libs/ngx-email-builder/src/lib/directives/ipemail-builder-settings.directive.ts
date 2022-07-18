import { Directive, DoCheck, inject, Input, KeyValueDiffer, KeyValueDiffers, OnInit } from "@angular/core";
import { CdkPortal } from "@angular/cdk/portal";
import { debounce } from "@ngcomma/ngx-abstract/utils";
import { AIPEmailBuilderHistoryService } from "../services";

@Directive({
  selector: "[ipEmailBuilderSettings]",
  exportAs: "settings"
})
export class IPEmailBuilderSettingsDirective<T extends Record<string, any> = Record<string, any>> extends CdkPortal implements DoCheck, OnInit {
  readonly differs = inject(KeyValueDiffers);
  @Input() ipEmailBuilderSettings!: T;
  #valueDiffer!: KeyValueDiffer<keyof T, any>;
  #deepDiffers: Map<keyof T, KeyValueDiffer<keyof T, any>> = new Map();
  #historyService = inject(AIPEmailBuilderHistoryService);
  #debounceDoCheck = debounce(() => {
    const changes = this.#valueDiffer.diff(this.ipEmailBuilderSettings);
    const deepChanges = Object.keys(this.ipEmailBuilderSettings).map(key => {
      const option = this.ipEmailBuilderSettings[key];
      if (typeof option === "object") {
        return this.#deepDiffers.get(key)?.diff(option);
      }
      return null;
    });

    [...deepChanges, changes].forEach(change => {
      change?.forEachChangedItem(({ key, currentValue, previousValue }) => {
        console.log({ key, currentValue, previousValue });
        this.#historyService.addHistory(() => {
          alert(); // TODO
        });
      });
    });
  }, 700);

  ngOnInit(): void {
    this.#valueDiffer = this.differs.find(this.ipEmailBuilderSettings).create();
    Object.keys(this.ipEmailBuilderSettings).forEach(key => {
      const option = this.ipEmailBuilderSettings[key];
      if (typeof option === "object") {
        this.#deepDiffers.set(key, this.differs.find(option).create());
      }
    });
  }

  ngDoCheck(): void {
    this.#debounceDoCheck();
  }
}

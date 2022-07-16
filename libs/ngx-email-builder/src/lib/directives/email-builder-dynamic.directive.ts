import { Directive, DoCheck, Inject, Input, KeyValueDiffer, KeyValueDiffers, OnInit } from "@angular/core";
import { AbsDirective } from "@ngcomma/ngx-abstract";

import { IIPEmailBuilderBlockData, IP_EMAIL_BUILDER_BLOCKS_DATA } from "../private-tokens";
import { AIPEmailBuilderBlock, AIPEmailBuilderBlockExtendedOptions } from "../core/Block";

@Directive({
  selector: "[ipEmailBuilderDynamicBlockDirective]",
  exportAs: "instance"
})
export class IPEmailBuilderDynamicDirective extends AbsDirective implements OnInit, DoCheck {
  cmpInstance: AIPEmailBuilderBlock | undefined;
  #valueDiffer!: KeyValueDiffer<string, any>;
  #context!: AIPEmailBuilderBlockExtendedOptions;

  constructor(
    @Inject(IP_EMAIL_BUILDER_BLOCKS_DATA)
    readonly blocksData: IIPEmailBuilderBlockData[],
    readonly differs: KeyValueDiffers
  ) {
    super();
  }

  @Input()
  set ipEmailBuilderDynamicBlockDirective(context: AIPEmailBuilderBlockExtendedOptions) {
    this.#context = context;
    const foundBlock = this.blocksData.find((block) => context.type === block.type);
    if (foundBlock) {
      this.cmpInstance = this.viewContainerRef.createComponent(foundBlock.block).instance;
      Object.assign(this.cmpInstance, context);
    } else {
      throw TypeError(`No such block found: ${context.type}`);
    }
  }

  ngDoCheck(): void {
    if (this.cmpInstance?.isCurrentlyEditing) {
      const changes = this.#valueDiffer.diff(this.cmpInstance.toObject());
      changes?.forEachChangedItem(({ key, currentValue }) => {
        // console.log({ key, currentValue });
        Object.assign(this.#context, { [key]: currentValue });
      });
    }
  }

  ngOnInit(): void {
    if (this.cmpInstance) {
      this.#valueDiffer = this.differs.find(this.cmpInstance.toObject()).create();
    }
  }
}

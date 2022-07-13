import { Directive, Inject, Input } from "@angular/core";
import { AbsDirective } from "@ngcomma/ngx-abstract";

import { IIPEmailBuilderBlockData, IP_EMAIL_BUILDER_BLOCKS_DATA } from "../private-tokens";
import { AIPEmailBuilderBlock, AIPEmailBuilderBlockExtendedOptions } from "../core/Block";

@Directive({
  selector: "[ipEmailBuilderDynamicBlockDirective]",
  exportAs: "instance"
})
export class IPEmailBuilderDynamicDirective extends AbsDirective {
  cmpInstance: AIPEmailBuilderBlock | undefined;

  constructor(
    @Inject(IP_EMAIL_BUILDER_BLOCKS_DATA)
    readonly blocksData: IIPEmailBuilderBlockData[]
  ) {
    super();
  }

  @Input()
  set ipEmailBuilderDynamicBlockDirective(context: AIPEmailBuilderBlockExtendedOptions) {
    const foundBlock = this.blocksData.find((block) => context.type === block.type);
    if (foundBlock) {
      this.cmpInstance = this.viewContainerRef.createComponent(foundBlock.block).instance;
      Object.assign(this.cmpInstance, context);
    } else {
      throw TypeError(`No such block found: ${context.type}`);
    }
  }
}

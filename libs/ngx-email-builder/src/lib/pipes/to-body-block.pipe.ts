import { Inject, Pipe, PipeTransform } from "@angular/core";
import { AIPEmailBuilderBlockExtendedOptions } from "@wlocalhost/ngx-email-builder";

import { IIPEmailBuilderBlockData, IP_EMAIL_BUILDER_BLOCKS_DATA } from "../private-tokens";

@Pipe({
  name: "toBodyBlock"
})
export class ToBodyBlockPipe implements PipeTransform {
  blocks: AIPEmailBuilderBlockExtendedOptions[];

  constructor(@Inject(IP_EMAIL_BUILDER_BLOCKS_DATA) readonly blocksData: IIPEmailBuilderBlockData[]) {
    this.blocks = this.blocksData.map(({ block }) => new block().toObject());
  }

  transform({ type }: IIPEmailBuilderBlockData): AIPEmailBuilderBlockExtendedOptions {
    const foundBlock = this.blocks.find((block) => type === block.type);
    if (foundBlock) {
      return foundBlock;
    }
    throw TypeError(`No such block found: ${type}`);
  }
}

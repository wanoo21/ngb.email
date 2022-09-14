import { Inject, Pipe, PipeTransform } from "@angular/core";

import { AIPEmailBuilderBlockExtendedOptions } from "../core/Block";
import { IIPEmailBuilderBlockData, IP_EMAIL_BUILDER_BLOCKS_DATA } from "../private-tokens";

/**
 * Return the right {@link AIPEmailBuilderBlockExtendedOptions} block based on {@link IIPEmailBuilderBlockData}.
 * Triggers an error if not found.
 *
 * Most used for [cdkDragData] inside blocks list.
 */
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

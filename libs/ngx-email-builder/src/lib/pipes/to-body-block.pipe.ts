import { Inject, Pipe, PipeTransform } from "@angular/core";

import { AIPEmailBuilderBlockExtendedOptions } from "../core/Block";
import { IIPEmailBuilderBlockData, IP_EMAIL_BUILDER_BLOCKS_DATA } from "../private-tokens";

/**
 * A pipe that returns the corresponding `AIPEmailBuilderBlockExtendedOptions` object based on the provided `IIPEmailBuilderBlockData`.
 * It is commonly used for [cdkDragData] inside blocks list.
 *
 * @remarks
 * This pipe will throw a `TypeError` if the provided block type is not found.
 */
@Pipe({
  name: "toBodyBlock"
})
export class ToBodyBlockPipe implements PipeTransform {

  /**
   * An array of `AIPEmailBuilderBlockExtendedOptions` objects.
   */
  blocks: AIPEmailBuilderBlockExtendedOptions[];

  /**
   * Constructs a new instance of `ToBodyBlockPipe`.
   *
   * @param blocksData - An array of `IIPEmailBuilderBlockData` objects.
   */
  constructor(@Inject(IP_EMAIL_BUILDER_BLOCKS_DATA) readonly blocksData: IIPEmailBuilderBlockData[]) {
    this.blocks = this.blocksData.map(({ block }) => new block().toObject());
  }

  /**
   * Returns the corresponding `AIPEmailBuilderBlockExtendedOptions` object based on the provided `IIPEmailBuilderBlockData`.
   *
   * @param data - The `IIPEmailBuilderBlockData` object to transform.
   * @returns The corresponding `AIPEmailBuilderBlockExtendedOptions` object.
   *
   * @throws `TypeError` if the block type is not found.
   */
  transform({ type }: IIPEmailBuilderBlockData): AIPEmailBuilderBlockExtendedOptions {
    const foundBlock = this.blocks.find((block) => type === block.type);
    if (foundBlock) {
      return foundBlock;
    }
    throw TypeError(`No such block found: ${type}`);
  }
}

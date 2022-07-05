import { AIPEmailBuilderBlock } from "../../core/Block";
import { IBorder, IPadding } from "../../interfaces";

/**
 * Builder {@link DividerBlock} options interface.
 */
export interface IDividerBlockOptions {
  border: Omit<IBorder, "radius">;
  padding: IPadding;
}

export class DividerBlock extends AIPEmailBuilderBlock<IDividerBlockOptions> {
  override type = "divider";
  options: IDividerBlockOptions = {
    border: {
      color: "#000000",
      style: "solid",
      width: 4
    },
    padding: {
      top: 10,
      right: 25,
      bottom: 10,
      left: 25
    }
  };
}

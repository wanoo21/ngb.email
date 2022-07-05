import { AIPEmailBuilderBlock } from "../../core/Block";
import { IWidthHeight } from "../../interfaces";

/**
 * Builder {@link SpacerBlock} options interface.
 */
export interface ISpacerBlockOptions {
  height: IWidthHeight;
  width: IWidthHeight;
}

export class SpacerBlock extends AIPEmailBuilderBlock<ISpacerBlockOptions> {
  override type = "spacer";
  options: ISpacerBlockOptions = {
    height: {
      value: 20,
      unit: "px",
      units: ["px"]
    },
    width: {
      value: 100,
      unit: "%"
    }
  };
}

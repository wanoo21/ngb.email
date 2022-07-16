import { Directive } from "@angular/core";

import { AIPEmailBuilderBlock } from "../../core/Block";
import { IWidthHeight, TIPEmailBuilderStyles } from "../../interfaces";
import { createWidthHeight } from "../../tools/utils";

/**
 * Builder {@link SpacerBlock} options interface.
 */
export interface ISpacerBlockOptions {
  height: Omit<IWidthHeight, "auto">;
}

@Directive()
export class SpacerBlock extends AIPEmailBuilderBlock<ISpacerBlockOptions> {
  override type = "spacer";
  options: ISpacerBlockOptions = {
    height: {
      value: 20,
      unit: "px",
      units: ["px"]
    }
  };

  get hostStyles(): TIPEmailBuilderStyles {
    return {
      height: createWidthHeight(this.options.height)
    };
  };
}

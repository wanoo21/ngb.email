import { AIPEmailBuilderBlock } from "../../core/Block";
import { IWidthHeight } from "../../interfaces";
import { Directive, HostBinding } from "@angular/core";
import { createWidthHeight } from "../../tools/utils";

/**
 * Builder {@link SpacerBlock} options interface.
 */
export interface ISpacerBlockOptions {
  height: IWidthHeight;
  width: IWidthHeight;
}

@Directive()
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

  @HostBinding("style.height") get height() {
    return createWidthHeight(this.options.height);
  }
}

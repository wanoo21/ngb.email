import { IFont, ILineHeight, IPadding } from "../../interfaces";
import { AIPEmailBuilderBlock } from "../../core/Block";

/**
 * Builder {@link TextBlock} options interface.
 */
export interface ITextBlockOptions {
  color: string;
  font: IFont;
  lineHeight: ILineHeight;
  padding: IPadding;
}

export class TextBlock extends AIPEmailBuilderBlock<ITextBlockOptions> {
  override type = "text_format";
  innerText = "TEXT";
  options: ITextBlockOptions = {
    color: "#000000",
    font: {
      fallback: "Arial, Helvetica, sans-serif",
      family: "Roboto",
      style: "normal",
      size: 16,
      weight: 400
    },
    lineHeight: {
      value: 40,
      unit: "none"
    },
    padding: {
      top: 10,
      right: 25,
      bottom: 10,
      left: 25
    }
  };

  override toObject(options?: Partial<ITextBlockOptions>, innerText = this.innerText) {
    return { ...super.toObject(options), innerText };
  }
}

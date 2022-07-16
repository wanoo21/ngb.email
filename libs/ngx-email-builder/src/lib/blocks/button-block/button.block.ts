import { Directive } from "@angular/core";

import { AIPEmailBuilderBlock } from "../../core/Block";
import { IBorder, IFont, ILineHeight, ILink, IPadding, TAlign, TIPEmailBuilderStyles } from "../../interfaces";
import { createBorder, createFont, createLineHeight, createPadding } from "../../tools/utils";

/**
 * Builder {@link ButtonBlock} options interface.
 */
export interface IButtonBlockOptions {
  backgroundColor: string;
  border: IBorder;
  color: string;
  font: IFont;
  align: TAlign;
  fullWidth: boolean;
  lineHeight: ILineHeight;
  link: ILink;
  innerPadding: IPadding;
  padding: IPadding;
}

@Directive()
export class ButtonBlock extends AIPEmailBuilderBlock<IButtonBlockOptions> {
  override type = "button";
  innerText = $localize`:@@button_block_default_innerText:Click on me`;
  options: IButtonBlockOptions = {
    backgroundColor: "#414141",
    border: {
      color: "#414141",
      style: "solid",
      width: 0,
      radius: 3
    },
    color: "#ffffff",
    font: {
      fallback: "Arial, Helvetica, sans-serif",
      family: "Roboto",
      size: 13,
      style: "normal",
      weight: 400
    },

    align: "center",
    fullWidth: false,
    // verticalAlign: 'middle',
    lineHeight: {
      value: 120,
      unit: "%"
    },
    link: {
      href: "",
      target: "_blank"
    },
    innerPadding: {
      top: 10,
      right: 25,
      bottom: 10,
      left: 25
    },
    padding: {
      top: 10,
      right: 25,
      bottom: 10,
      left: 25
    }
  };

  get hostStyles(): TIPEmailBuilderStyles {
    const { align, padding } = this.options;

    return {
      textAlign: align,
      ...createPadding(padding)
    };
  }

  get buttonStyles(): TIPEmailBuilderStyles {
    const {
      backgroundColor,
      border,
      color,
      font,
      lineHeight,
      innerPadding,
      fullWidth
    } = this.options;

    return {
      color,
      width: fullWidth ? "100%" : "auto",
      backgroundColor,
      ...createFont(this.parseFont(font)),
      ...createPadding(innerPadding),
      ...createBorder(border),
      ...createLineHeight(lineHeight)
    };
  }
}

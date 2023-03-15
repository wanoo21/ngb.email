import { Directive } from "@angular/core";

import { IFont, ILineHeight, IPadding, TAlign, TIPEmailBuilderStyles } from "../../interfaces";
import { createFont, createLineHeight, createPadding } from "../../tools/utils";
import { AIPEmailBuilderBlock } from "../../core/Block";

export interface INavigationBlockOptions {
  align: TAlign;
  hamburger: boolean;
  color: string;
  font: IFont;
  lineHeight: ILineHeight;
  letterSpacing: number | "none";
  padding: IPadding;
  target: string;
  textDecoration: "underline" | "overline" | "none";
}

@Directive()
export abstract class NavigationBlock extends AIPEmailBuilderBlock<INavigationBlockOptions> {
  override type = "navigation";

  options: INavigationBlockOptions = {
    align: "center",
    hamburger: true,
    color: "#000000",
    font: {
      fallback: "Arial, Helvetica, sans-serif",
      family: "Roboto",
      style: "normal",
      size: 16,
      weight: 400
    },
    lineHeight: {
      value: 22,
      unit: "px"
    },
    letterSpacing: "none",
    padding: {
      top: 10,
      right: 25,
      bottom: 10,
      left: 25
    },
    target: "_blank",
    textDecoration: "none"
  };

  get hostStyles(): TIPEmailBuilderStyles {
    const { color, font, lineHeight, padding, align, letterSpacing, textDecoration } = this.options;

    return {
      color,
      "word-break": "break-all",
      "text-align": align,
      "text-decoration": textDecoration,
      "letter-spacing": letterSpacing === "none" ? "normal" : letterSpacing,
      ...createLineHeight(lineHeight),
      ...createFont(this.parseFont(font)),
      ...createPadding(padding)
    };
  }
}

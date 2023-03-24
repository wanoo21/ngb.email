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
  letterSpacing: number;
  padding: IPadding;
  target: string;
  textDecoration: "underline" | "overline" | "none";
  elements: { label: string, href: string }[];
}

export type TTextDecoration = "underline" | "overline" | "none";

@Directive()
export class NavigationBlock extends AIPEmailBuilderBlock<INavigationBlockOptions> {
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
    letterSpacing: 0,
    padding: {
      top: 10,
      right: 25,
      bottom: 10,
      left: 25
    },
    target: "_blank",
    textDecoration: "none",
    elements: [
      { href: "", label: "Home" }
    ]
  };

  // A map of text decoration options
  #textDecoration = new Map<TTextDecoration, string>([
    ["none", $localize`:@@none:None`],
    ["underline", $localize`:@@underline:Underline`],
    ["overline", $localize`:@@overline:Overline`]
  ]);

  // A list of text decoration options
  get textDecorationKeys(): TTextDecoration[] {
    return [...this.#textDecoration.keys()];
  }

  get hostStyles(): TIPEmailBuilderStyles {
    const { color, font, lineHeight, padding, align, letterSpacing, textDecoration } = this.options;

    return {
      color,
      "word-break": "break-all",
      "text-align": align,
      "text-decoration": textDecoration,
      "letter-spacing": `${letterSpacing}px`,
      ...createLineHeight(lineHeight),
      ...createFont(this.parseFont(font)),
      ...createPadding(padding)
    };
  }

  // Get the label for a decoration option
  getTextDecorationLabel(key: TTextDecoration): string {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.#textDecoration.get(key)!;
  }
}

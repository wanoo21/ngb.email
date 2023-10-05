import { Directive, ViewChild } from "@angular/core";

import { IFont, ILineHeight, IPadding, TIPEmailBuilderStyles } from "../../interfaces";
import { AIPEmailBuilderBlock } from "../../core/Block";
import { createFont, createLineHeight, createPadding } from "../../tools/utils";
import { IPEmailBuilderTextEditorDirective } from "../../directives/email-builder-text-editor.directive";

/**
 * Builder {@link TextBlock} options interface.
 */
export interface ITextBlockOptions {
  color: string;
  font: IFont;
  lineHeight: ILineHeight;
  padding: IPadding;
}

@Directive()
export class TextBlock extends AIPEmailBuilderBlock<ITextBlockOptions> {
  override type = "text";
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
      value: 16,
      unit: "none"
    },
    padding: {
      top: 10,
      right: 25,
      bottom: 10,
      left: 25
    }
  };

  @ViewChild(IPEmailBuilderTextEditorDirective, { static: true }) textEditor!: IPEmailBuilderTextEditorDirective;

  get hostStyles(): TIPEmailBuilderStyles {
    const { color, font, lineHeight, padding } = this.options;

    return {
      color,
      "word-break": "break-all",
      ...createLineHeight(lineHeight),
      ...createFont(this.parseFont(font)),
      ...createPadding(padding)
    };
  }

  override edit() {
    this.textEditor.open();
    super.edit();
  }

  override unedited() {
    this.textEditor.close();
    super.unedited();
  }

  override toObject(options?: Partial<ITextBlockOptions>, innerText = this.innerText) {
    return { ...super.toObject(options), innerText };
  }
}

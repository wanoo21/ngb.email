import { Directive, HostBinding, inject, OnDestroy } from "@angular/core";

import { IFont, ILineHeight, IPadding, TIPEmailBuilderStyles } from "../../interfaces";
import { AIPEmailBuilderBlock } from "../../core/Block";
import { createFont, createLineHeight, createPadding } from "../../tools/utils";
import { AIPEmailBuilderService } from "../../services/email-builder-service/email-builder.service";

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
export class TextBlock extends AIPEmailBuilderBlock<ITextBlockOptions> implements OnDestroy {
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
  builderService = inject(AIPEmailBuilderService);
  #googleFontLink = this.renderer2.createElement("link") as HTMLLinkElement;

  @HostBinding("style")
  get hostStyles(): TIPEmailBuilderStyles {
    const { color, font, lineHeight, padding } = this.options;

    let family = font.family;
    // If font family is not standard, it means is Google Font
    if (!this.builderService.standardFonts.includes(family)) {
      if (this.#googleFontLink.dataset["font"] !== font.family) {
        this.#googleFontLink.dataset["font"] = font.family;
        family = font.family.split(":wght@")[0].replace(/\+/g, " ");
        this.#googleFontLink.href = `https://fonts.googleapis.com/css2?family=${font.family}&display=swap`;
        this.#googleFontLink.rel = "stylesheet";
        this.renderer2.appendChild(document.head, this.#googleFontLink);
      }
    } else {
      this.#googleFontLink.dataset["font"] = "";
      this.#googleFontLink.remove();
    }

    return {
      color,
      "word-break": "break-all",
      ...createLineHeight(lineHeight),
      ...createFont({ ...font, family }),
      ...createPadding(padding)
    };
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
    this.#googleFontLink.remove();
  }

  override toObject(options?: Partial<ITextBlockOptions>, innerText = this.innerText) {
    return { ...super.toObject(options), innerText };
  }
}

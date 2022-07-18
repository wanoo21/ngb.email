import { Directive, HostBinding, inject, OnDestroy } from "@angular/core";
import { debounce, defaultsDeep } from "@ngcomma/ngx-abstract/utils";
import { DOCUMENT } from "@angular/common";
import { IFont, TIPEmailBuilderStyles } from "../interfaces";
import { AIPEmailBuilderService } from "../services";
import { WithSettings } from "./WithSettings";

export interface AIPEmailBuilderBlockExtendedOptions<T = Record<string, any>> extends Record<string, any> {
  options: T;
  type: string;
}

@Directive()
export abstract class AIPEmailBuilderBlock<T = Record<string, any>> extends WithSettings implements OnDestroy {
  type!: string;
  abstract options: T;
  builderService = inject(AIPEmailBuilderService);
  @HostBinding("style")
  abstract hostStyles: TIPEmailBuilderStyles;
  // readonly optionsToWatch = this.toObject();
  #document = inject(DOCUMENT);
  #googleFontLink = this.#document.createElement("link");
  #addFontToHead = debounce((family: string) => {
    const fontIsIncluded = Array.from(this.#document.querySelectorAll("link")).some(({ href }) => href.includes(family));
    if (!fontIsIncluded) {
      this.#googleFontLink.href = `https://fonts.googleapis.com/css2?family=${family}&display=swap`;
      this.#googleFontLink.rel = "stylesheet";
      this.renderer2.appendChild(this.#document.head, this.#googleFontLink);
    }
  }, 1000);

  parseFont(font: IFont): IFont {
    let family = font.family;
    if (!this.builderService.standardFonts.includes(font.family)) {
      family = font.family.split(":wght@")[0].replace(/\+/g, " ");
      this.#addFontToHead(font.family);
    } else {
      this.#googleFontLink.remove();
    }
    return { ...font, family };
  }

  override ngOnDestroy() {
    super.ngOnDestroy();
    this.#googleFontLink.remove();
  }

  toObject(options?: Partial<T>, ...args: never[]): AIPEmailBuilderBlockExtendedOptions<T>;
  toObject(options?: Partial<T>): AIPEmailBuilderBlockExtendedOptions<T> {
    return { options: defaultsDeep<T>((options || {}) as T, this.options), type: this.type };
  }
}

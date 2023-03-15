import { Directive, HostBinding, inject, OnDestroy, OnInit, Renderer2 } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { filter, takeUntil } from "rxjs";
import { applyDiff } from "recursive-diff";

import { IFont, TIPEmailBuilderStyles } from "../interfaces";
import { AIPEmailBuilderService } from "../services";
import { WithSettings } from "./WithSettings";
import { debounce, defaultsDeep, mergeObjects, randomString } from "../tools/utils";


export interface AIPEmailBuilderBlockExtendedOptions<T = Record<string, any>> extends Record<string, any> {
  options: T;
  type: string;
}

/**
 * The abstract class for a builder block component. It provides a common interface for the settings component to interact with the builder.
 * @template T The options interface for the block.
 */
@Directive()
export abstract class AIPEmailBuilderBlock<T extends Record<string, any> = Record<string, any>> extends WithSettings implements OnInit, OnDestroy {
  type!: string;
  abstract options: T;
  readonly id = randomString();
  @HostBinding("style")
  abstract hostStyles: TIPEmailBuilderStyles;
  private readonly builderService = inject(AIPEmailBuilderService);
  private readonly renderer2 = inject(Renderer2);
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

  /**
   * Parses the font family and adds the font to the head if it is not a standard font.
   * @param font
   */
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

  ngOnInit(): void {
    this.historyService.commitPush$.pipe(
      filter(({ id }) => {
        const [type, changeId] = id.split(":");
        return type === "block" && changeId === this.id;
      }),
      takeUntil(this.destroyed)
    ).subscribe(({ diff }) => {
      mergeObjects(this, applyDiff(this.toObject(), diff));
      this.changeDetectorRef.markForCheck();
    });
  }

  override ngOnDestroy() {
    super.ngOnDestroy();
    this.#googleFontLink.remove();
  }

  /**
   * Returns the block as an object.
   * @param options
   * @param args
   */
  toObject(options?: Partial<T>, ...args: never[]): AIPEmailBuilderBlockExtendedOptions<T>;
  toObject(options?: Partial<T>): AIPEmailBuilderBlockExtendedOptions<T> {
    return { options: defaultsDeep<T>((options || {}) as T, this.options), type: this.type };
  }
}

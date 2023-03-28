import { Directive, HostBinding, inject, OnDestroy, OnInit, Renderer2 } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { filter, takeUntil } from "rxjs";
import { applyDiff } from "recursive-diff";

import { IFont, TIPEmailBuilderStyles } from "../interfaces";
import { AIPEmailBuilderService } from "../services";
import { WithSettings } from "./WithSettings";
import { debounce, defaultsDeep, mergeObjects, randomString } from "../tools/utils";

/**
 * An extended options interface for an email builder block, which includes a `type` and `options` property.
 * @template T The options interface for the block.
 */
export interface AIPEmailBuilderBlockExtendedOptions<T = Record<string, any>> extends Record<string, any> {
  options: T;
  type: string;
}

/**
 * The abstract class for a builder block component.
 * It provides a common interface for the settings component to interact with the builder.
 * @template T The options interface for the block.
 */
@Directive()
export abstract class AIPEmailBuilderBlock<T extends Record<string, any> = Record<string, any>> extends WithSettings implements OnInit, OnDestroy {

  /**
   * The type of the block. Must be unique.
   */
  type!: string;

  /**
   * The options of the block.
   */
  abstract options: T;

  /**
   * A unique identifier for the block.
   */
  readonly id = randomString();

  /**
   * The styles of the block.
   */
  @HostBinding("style")
  abstract hostStyles: TIPEmailBuilderStyles;

  private readonly builderService = inject(AIPEmailBuilderService);
  private readonly renderer2 = inject(Renderer2);
  #document = inject(DOCUMENT);
  #googleFontLink = this.#document.createElement("link");

  /**
   * A debounced function that adds a font to the head if it is not already there.
   */
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
   * @param font The font object to be parsed and added.
   * @returns The parsed font object.
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
   * @param options The options to be merged with the block options before returning.
   * @returns An object of type `AIPEmailBuilderBlockExtendedOptions`.
   */
  toObject(options?: Partial<T>): AIPEmailBuilderBlockExtendedOptions<T> {
    return { options: defaultsDeep<T>((options || {}) as T, this.options), type: this.type };
  }
}

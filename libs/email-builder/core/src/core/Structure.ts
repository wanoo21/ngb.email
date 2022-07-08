import { Directive, HostBinding, HostListener, Input, QueryList, ViewChildren } from "@angular/core";

import { WithSettings } from "./WithSettings";
import { Structure } from "../structure/structure";
import { IPEmailBuilderDynamicDirective } from "../directives/email-builder-dynamic.directive";
import { TIPEmailBuilderStyles, TVerticalAlign } from "../interfaces";
import { createBorder, createMargin, createPadding, createWidthHeight } from "../tools/utils";
import { AIPEmailBody } from "./Body";

@Directive()
export abstract class AIPStructure extends WithSettings {
  @Input() structure = new Structure();
  @Input() bodyWidth!: AIPEmailBody["options"]["width"];
  @ViewChildren(IPEmailBuilderDynamicDirective)
  readonly blocks!: QueryList<IPEmailBuilderDynamicDirective>;
  editColumnIndex = 0;
  // Allow change detection to run last time in case no more inside editing blocks
  #hasLastEditedBlock = false;
  #verticalLabels = new Map<TVerticalAlign, string>([
    ["top", $localize`:@@vertical_align:Top`],
    ["middle", $localize`:@@vertical_align:Middle`],
    ["bottom", $localize`:@@vertical_align:Bottom`]
  ]);

  @HostBinding("style")
  get bodyStyles(): TIPEmailBuilderStyles {
    const { padding, background, border, margin, columnsWidth } = this.structure.options;
    return {
      display: "grid",
      ...createPadding(padding),
      ...(background.url ? { backgroundImage: `url(${background.url})` } : {}),
      backgroundRepeat: background.repeat,
      backgroundColor: background.color,
      backgroundSize: createWidthHeight(background.size),
      backgroundPosition: "top center",
      ...createBorder(border),
      ...createMargin(margin),
      maxWidth: "100%",
      gridTemplateColumns: columnsWidth.map(fr => `${fr}fr`).join(" ")
      // gap: gaps.map(gap => `${gap}px`).join(" ")
    };
  }

  @HostBinding("style.width")
  get width(): string {
    return this.structure.options.fullWidth ? "100%" : createWidthHeight(this.bodyWidth);
  }

  get columnsSize(): number[] {
    return this.structure.options.columns.map((_, index) => index).slice();
  }

  get verticalLabels(): TVerticalAlign[] {
    return [...this.#verticalLabels.keys()];
  }

  getVerticalAlignLabel(key: TVerticalAlign): string {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.#verticalLabels.get(key)!;
  }

  @HostListener("click", ["$event"]) onClick(ev: Event) {
    ev.stopPropagation();
  }

  columnStyles(columnKey: number): TIPEmailBuilderStyles {
    const { gaps } = this.structure.options;
    const column = this.structure.options.columns[columnKey];

    let verticalAlign = "center";
    if (column.verticalAlign === "bottom") {
      verticalAlign = "flex-end";
    } else if (column.verticalAlign === "top") {
      verticalAlign = "flex-start";
    }

    return {
      margin: gaps.map(gap => `${gap}px`).join(" "),
      placeSelf: `${verticalAlign} stretch`,
      wordBreak: "break-word",
      backgroundColor: column.background.color,
      ...createBorder(column.border)
    };
  }

  editColumn(index: number): void {
    this.editColumnIndex = index;
  }

  override markForCheck(): boolean {
    const mustCheckNow = this.blocks?.some(({ cmpInstance }) => !!cmpInstance?.isCurrentlyEditing);
    if (mustCheckNow || this.#hasLastEditedBlock) {
      this.#hasLastEditedBlock = mustCheckNow;
      return true;
    }
    return false;
  }
}

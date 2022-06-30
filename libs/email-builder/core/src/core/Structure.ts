import { Directive, HostBinding, Input, QueryList, ViewChildren } from "@angular/core";

import { WithSettings } from "./WithSettings";
import { defaultColumnsOptions, Structure } from "../structure/structure";
import { IPEmailBuilderDynamicDirective } from "../directives/email-builder-dynamic.directive";
import { IWidthHeight, TIPEmailBuilderStyles } from "../interfaces";
import { createBackground, createBorder, createMargin, createPadding, createWidthHeight } from "../tools/utils";

@Directive()
export abstract class AIPStructure extends WithSettings {
  @Input() structure = new Structure();
  @Input() bodyWidth!: IWidthHeight;
  @ViewChildren(IPEmailBuilderDynamicDirective)
  readonly blocks!: QueryList<IPEmailBuilderDynamicDirective>;

  // Allow change detection to run last time in case no more inside editing blocks
  #hasLastEditedBlock = false;

  @HostBinding("style")
  get bodyStyles(): TIPEmailBuilderStyles {
    const { padding, background, border, margin, columnsWidth, gaps } = this.structure.options;
    return {
      display: "grid",
      ...createPadding(padding),
      background: createBackground(background),
      ...createBorder(border),
      ...createMargin(margin),
      gridTemplateColumns: columnsWidth.map(fr => `${fr}fr`).join(" "),
      gap: gaps.map(gap => `${gap}px`).join(" ")
    };
  }

  @HostBinding("style.width")
  get width(): string {
    return this.structure.options.fullWidth ? "100%" : createWidthHeight(this.bodyWidth);
  }

  columnStyles(columnKey: number): TIPEmailBuilderStyles {
    const column = this.structure.options.columns[columnKey] || defaultColumnsOptions;

    let verticalAlign = "center";
    if (column.verticalAlign === "bottom") {
      verticalAlign = "flex-end";
    } else if (column.verticalAlign === "top") {
      verticalAlign = "flex-start";
    }

    return {
      placeSelf: `${verticalAlign} stretch`,
      wordBreak: "break-word",
      ...createBorder(column.border)
    };
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

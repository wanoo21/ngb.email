import { Directive, HostBinding, Input, QueryList, ViewChildren } from "@angular/core";

import { WithSettings } from "./WithSettings";
import { Structure } from "../structure/structure";
import { IPEmailBuilderDynamicDirective } from "../directives/email-builder-dynamic.directive";
import { IWidthHeight } from "../interfaces";
import { createBackground, createBorder, createMargin, createPadding, createWidthHeight } from "../tools/utils";

@Directive()
export abstract class AIPStructure extends WithSettings {
  @Input() structure = new Structure();
  @Input() bodyWidth!: IWidthHeight;
  @ViewChildren(IPEmailBuilderDynamicDirective)
  readonly blocks!: QueryList<IPEmailBuilderDynamicDirective>;

  @HostBinding("style")
  get bodyStyles(): Record<string, string | number> {
    const { padding, background, border, margin, columnsWidth } = this.structure.options;
    return {
      display: "grid",
      ...createPadding(padding),
      background: createBackground(background),
      ...createBorder(border),
      ...createMargin(margin),
      gridTemplateColumns: columnsWidth.map(fr => `${fr}fr`).join(" ")
    };
  }

  @HostBinding("style.width")
  get width(): string {
    return this.structure.options.fullWidth ? "100%" : createWidthHeight(this.bodyWidth);
  }

  override markForCheck(): boolean {
    return this.blocks?.some(({ cmpInstance }) => !!cmpInstance?.isCurrentlyEditing);
  }
}

import { Directive } from "@angular/core";

import { AIPEmailBuilderBlock } from "../../core/Block";
import { IBorder, ILink, IPadding, IWidthHeight, TAlign, TIPEmailBuilderStyles } from "../../interfaces";
import { createBorder, createPadding, createWidthHeight } from "../../tools/utils";

/**
 * Builder {@link ImageBlock} options interface.
 */
export interface IImageBlockOptions {
  border: IBorder;
  width: IWidthHeight;
  height: IWidthHeight;
  link: ILink;
  align: TAlign;
  title: string;
  padding: IPadding;
}

@Directive()
export class ImageBlock extends AIPEmailBuilderBlock<IImageBlockOptions> {
  override type = "image";
  src = "https://via.placeholder.com/600x200?text=CHANGE+ME";
  options: IImageBlockOptions = {
    border: {
      color: "#cccccc",
      style: "solid",
      sizes: {
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      },
      width: 0,
      radius: 0
    },
    width: {
      value: 100,
      unit: "px",
      auto: true,
      units: ["px"]
    },
    height: {
      value: 100,
      unit: "px",
      auto: true,
      units: ["px"]
    },
    link: {
      href: "",
      target: "_blank"
    },
    align: "center",
    title: "",
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  };

  get hostStyles() {
    return {
      textAlign: this.options.align,
      lineHeight: 0
    };
  }

  get imageStyles(): TIPEmailBuilderStyles {
    const { border, width, height, padding } = this.options;

    return {
      maxWidth: "100%",
      boxSizing: "border-box",
      width: createWidthHeight(width),
      height: createWidthHeight(height),
      ...createPadding(padding),
      ...createBorder(border)
    };
  }

  override toObject(options?: Partial<IImageBlockOptions>, src = this.src) {
    return { ...super.toObject(options), src };
  }
}

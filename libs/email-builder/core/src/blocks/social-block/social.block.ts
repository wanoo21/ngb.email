import { AIPEmailBuilderBlock } from "../../core/Block";
import { IFont, ILineHeight, IPadding, TAlign } from "../../interfaces";

/**
 * Builder {@link SocialBlock} options interface.
 */
export interface ISocialBlockOptions {
  align: TAlign;
  mode: "vertical" | "horizontal";
  font: IFont;
  iconSize: ILineHeight;
  lineHeight: ILineHeight;
  color: string;
  innerPadding: IPadding;
  padding: IPadding;
}

/**
 * Builder {@link ISocialBlockOptions} network options interface.
 */
export interface ISocialNetwork {
  href: string;
  // target?: string;
  label: string;
  name:
    | "github"
    | "instagram"
    | "web"
    | "snapchat"
    | "youtube"
    | "vimeo"
    | "medium"
    | "soundcloud"
    | "dribbble"
    | "facebook"
    | "twitter"
    | "pinterest"
    | "linkedin"
    | "tumblr"
    | "xing";
  padding?: IPadding;
}

export class SocialBlock extends AIPEmailBuilderBlock<ISocialBlockOptions> {
  override type = "social";
  networks: ISocialNetwork[] = [];
  options: ISocialBlockOptions = {
    align: "center",
    mode: "horizontal",
    font: {
      fallback: "Arial, Helvetica, sans-serif",
      family: "Roboto",
      style: "normal",
      size: 16,
      weight: 400
    },
    iconSize: {
      value: 30,
      unit: "px"
    },
    lineHeight: {
      value: 16,
      unit: "px"
    },
    color: "#333333",
    innerPadding: {
      top: 4,
      right: 4,
      bottom: 4,
      left: 4
    },
    padding: {
      top: 10,
      right: 25,
      bottom: 10,
      left: 25
    }
  };

  override toObject(options?: Partial<ISocialBlockOptions>, networks = this.networks) {
    return { ...super.toObject(options), networks };
  }
}

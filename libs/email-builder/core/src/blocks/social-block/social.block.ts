import { AIPEmailBuilderBlock } from "../../core/Block";
import { IFont, ILineHeight, ILink, IPadding, TAlign, TIPEmailBuilderStyles } from "../../interfaces";
import { createFont, createLineHeight, createPadding } from "../../tools/utils";

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
export interface ISocialNetwork extends ILink {
  // href: string;
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
  supportedNetworks: ISocialNetwork["name"][] = ["github", "instagram", "web", "snapchat", "youtube", "vimeo", "medium", "soundcloud", "facebook", "twitter", "pinterest", "linkedin", "tumblr", "xing"];

  currentNetwork: ISocialNetwork | undefined;
  readonly #modeLabels = new Map([
    ["horizontal", $localize`:@@social_horizontal:Horizontal`],
    ["vertical", $localize`:@@social_vertical:Vertical`]
  ]);

  get modeKeys() {
    return this.#modeLabels.keys();
  }

  get hostStyles(): TIPEmailBuilderStyles {
    const { color, font, lineHeight, padding, align, mode } = this.options;

    return {
      color,
      display: "flex",
      placeContent: (align === "left" && "flex-start") || (align === "right" && "flex-end") || align,
      flexWrap: "wrap",
      flexDirection: mode === "horizontal" ? "row" : "column",
      ...createLineHeight(lineHeight),
      ...createFont(this.parseFont(font)),
      ...createPadding(padding)
    };
  }

  get labelStyles() {
    const { innerPadding } = this.options;
    return { ...createPadding(innerPadding), lineHeight: 0 };
  }

  getModeLabel(mode: string) {
    return this.#modeLabels.get(mode);
  }

  networkIsActive(network: ISocialNetwork["name"]): boolean {
    return this.networks.some(({ name }) => name === network);
  }

  addOrEditNetwork(network: ISocialNetwork["name"]): void {
    if (this.networks.some(({ name }) => name === network)) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.currentNetwork = this.networks.find(({ name }) => name === network)!;
    } else {
      this.currentNetwork = { name: network, href: "", label: "", target: "_blank" };
      this.networks.push(this.currentNetwork);
    }
  }

  deleteCurrentNetwork(): void {
    this.networks = this.networks.filter(network => network !== this.currentNetwork);
    this.currentNetwork = undefined;
  }

  override toObject(options?: Partial<ISocialBlockOptions>, networks = this.networks) {
    return { ...super.toObject(options), networks };
  }
}

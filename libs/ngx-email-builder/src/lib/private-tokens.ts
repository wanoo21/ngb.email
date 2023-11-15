import { InjectionToken, Type } from "@angular/core";

import { IIPEmailBuilderConfig } from "./public-tokens";
import { AIPEmailBuilderBlock } from "./core/Block";
import { IBlockState } from "./interfaces";

export class IPEmailBuilderConfig {
  protected defConfig: IIPEmailBuilderConfig = {
    xApiKey: "t7HdQfZjGp6R96fOV4P8v18ggf6LLTQZ1puUI2tz",
    socialIconsPath: "https://www.mailjet.com/images/theme/v1/icons/ico-social",
    convertorPath: "https://ngb-api.wlocalhost.org/v1",
    templatesThumbsPath: "https://ngb-templates.s3.amazonaws.com",
    historyRecordLimit: 10
  };

  constructor(config?: Partial<IIPEmailBuilderConfig>) {
    this.defConfig = { ...this.defConfig, ...config };
  }

  get socialIconsPath(): NonNullable<IIPEmailBuilderConfig["socialIconsPath"]> {
    return this.defConfig.socialIconsPath;
  }

  get templatesThumbsPath(): NonNullable<IIPEmailBuilderConfig["templatesThumbsPath"]> {
    return this.defConfig.templatesThumbsPath;
  }

  get xApiKey(): NonNullable<IIPEmailBuilderConfig["xApiKey"]> {
    return this.defConfig.xApiKey;
  }

  get isFreeApiKey(): boolean {
    return this.defConfig.xApiKey === "t7HdQfZjGp6R96fOV4P8v18ggf6LLTQZ1puUI2tz";
  }

  get historyRecordLimit(): number {
    return this.defConfig.historyRecordLimit;
  }

  get convertorPath(): string {
    return this.defConfig.convertorPath;
  }
}

export const IP_EMAIL_BUILDER_CONFIG = new InjectionToken<IPEmailBuilderConfig>("Wlocalhost configurations", {
    providedIn: "root",
    factory: () => {
      return new IPEmailBuilderConfig({});
    }
  }
);

export const IP_EMAIL_BUILDER_BLOCKS = new InjectionToken<Type<AIPEmailBuilderBlock>[]>("Wlocalhost blocks map", {
  providedIn: "root",
  factory: () => []
});

export interface IIPEmailBuilderBlockData {
  block: Type<AIPEmailBuilderBlock>;
  type: string;
  title: string;
  state: IBlockState;
}

export const IP_EMAIL_BUILDER_BLOCKS_DATA = new InjectionToken<IIPEmailBuilderBlockData[]>("Wlocalhost blocks' info map", {
  providedIn: "root",
  factory: () => []
});

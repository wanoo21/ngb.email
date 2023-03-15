import { inject, Provider, Type } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { IIPEmailBuilderConfig } from "../public-tokens";
import {
  IP_EMAIL_BUILDER_BLOCKS,
  IP_EMAIL_BUILDER_BLOCKS_DATA,
  IP_EMAIL_BUILDER_CONFIG,
  IPEmailBuilderConfig
} from "../private-tokens";
import { AIPEmailBuilderBlock } from "../core/Block";

import { TextBlock } from "../blocks/text-block/text.block";
import { ImageBlock } from "../blocks/image-block/image.block";
import { ButtonBlock } from "../blocks/button-block/button.block";
import { DividerBlock } from "../blocks/divider-block/divider.block";
import { SocialBlock } from "../blocks/social-block/social.block";
import { SpacerBlock } from "../blocks/spacer-block/spacer.block";
import { NavigationBlock } from "../blocks/navigation-block/navigation.block";

export function withConfig(config: IIPEmailBuilderConfig = {}): Provider[] {
  return [
    {
      provide: IP_EMAIL_BUILDER_CONFIG,
      useFactory: () => {
        const httpClient = inject(HttpClient);
        return new IPEmailBuilderConfig(config, httpClient);
      }
    }
  ];
}

export function addNewIPEmailBuilderBlock(block: Type<AIPEmailBuilderBlock>, type: string, title: string): Provider[] {
  block.prototype.type = type;
  return [
    { provide: IP_EMAIL_BUILDER_BLOCKS, useValue: block, multi: true },
    {
      provide: IP_EMAIL_BUILDER_BLOCKS_DATA,
      useValue: { block, type, title },
      multi: true
    }
  ];
}

export function addDefaultBlock(block: Type<TextBlock | ImageBlock | ButtonBlock | DividerBlock | SocialBlock | SpacerBlock | NavigationBlock>, title: string) {
  let type = "";
  if (block.prototype instanceof TextBlock) {
    type = "text";
  } else if (block.prototype instanceof ImageBlock) {
    type = "image";
  } else if (block.prototype instanceof ButtonBlock) {
    type = "button";
  } else if (block.prototype instanceof DividerBlock) {
    type = "divider";
  } else if (block.prototype instanceof SocialBlock) {
    type = "social";
  } else if (block.prototype instanceof SpacerBlock) {
    type = "spacer";
  } else if (block.prototype instanceof NavigationBlock) {
    type = "navigation";
  }
  return addNewIPEmailBuilderBlock(block, type, title);
}

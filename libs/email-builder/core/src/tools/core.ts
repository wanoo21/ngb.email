import { Provider, Type } from "@angular/core";

import { IIPEmailBuilderConfig } from "../public-tokens";
import {
  IP_EMAIL_BUILDER_BLOCKS,
  IP_EMAIL_BUILDER_BLOCKS_DATA,
  IP_EMAIL_BUILDER_CONFIG,
  IPEmailBuilderConfig
} from "../private-tokens";
import { AIPEmailBuilderBlock } from "../core/block";
import { IBlockState } from "../interfaces";

export function withConfig(config?: IIPEmailBuilderConfig): Provider[] {
  return [
    {
      provide: IP_EMAIL_BUILDER_CONFIG,
      useValue: new IPEmailBuilderConfig(config)
    }
  ];
}

export function addNewIPEmailBuilderBlock(
  block: Type<AIPEmailBuilderBlock>,
  type: string,
  title: string,
  state?: Partial<IBlockState>
): Provider[] {
  block.prototype.type = type;
  return [
    { provide: IP_EMAIL_BUILDER_BLOCKS, useValue: block, multi: true },
    {
      provide: IP_EMAIL_BUILDER_BLOCKS_DATA,
      useValue: {
        block,
        type,
        title,
        state: {
          disabled: false,
          message: "",
          order: 0,
          ...state
        }
      },
      multi: true
    }
  ];
}

import { Pipe, PipeTransform } from "@angular/core";
import { AIPEmailBuilderBlockExtendedOptions } from "@wlocalhost/ngx-email-builder";

import { IIPEmailBuilderBlockData } from "../private-tokens";

@Pipe({
  name: "toBodyBlock"
})
export class ToBodyBlockPipe implements PipeTransform {
  transform({ type }: IIPEmailBuilderBlockData): Partial<AIPEmailBuilderBlockExtendedOptions> {
    return { type };
  }
}

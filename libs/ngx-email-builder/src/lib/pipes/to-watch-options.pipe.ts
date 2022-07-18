import { Pipe, PipeTransform } from "@angular/core";

import { AIPEmailBuilderBlock } from "../core/Block";

@Pipe({
  name: "toWatchOptions",
  pure: false
})
export class ToWatchOptionsPipe implements PipeTransform {
  transform(block: AIPEmailBuilderBlock): Record<string, any> {
    const { options, ...rest } = block.toObject();
    return { ...rest, options: block.options };
  }
}

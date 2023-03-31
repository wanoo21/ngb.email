import {Directive, OnDestroy} from "@angular/core";

import {TIPEmailBuilderStyles} from "../../interfaces";
import {AIPEmailBuilderBlock} from "../../core/Block";

/**
 * Builder {@link HtmlBlock} options interface.
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IHtmlBlockOptions {
}

@Directive()
export class HtmlBlock extends AIPEmailBuilderBlock<IHtmlBlockOptions> implements OnDestroy {
  override type = "html";
  innerHTML = "<tag>HTML CODE</tag>";
  options: IHtmlBlockOptions = {}

  get hostStyles(): TIPEmailBuilderStyles {
    return {};
  }

  override toObject(options?: Partial<IHtmlBlockOptions>, innerHTML = this.innerHTML) {
    return {...super.toObject(options), innerHTML};
  }
}

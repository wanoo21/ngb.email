import { Directive } from "@angular/core";
import { defaultsDeep } from "@ngcomma/ngx-abstract/utils";

import { WithSettings } from "./WithSettings";

export interface AIPEmailBuilderBlockExtendedOptions<T = Record<string, any>> extends Record<string, any> {
  options: T;
  type: string;
}

@Directive()
export abstract class AIPEmailBuilderBlock<T = Record<string, any>> extends WithSettings {
  type!: string;
  abstract options: T;

  toObject(options?: Partial<T>, ...args: never[]): AIPEmailBuilderBlockExtendedOptions<T>;
  toObject(options?: Partial<T>): AIPEmailBuilderBlockExtendedOptions<T> {
    return { options: defaultsDeep<T>((options || {}) as T, this.options), type: this.type };
  }
}

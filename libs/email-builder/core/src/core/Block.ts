import { Directive, HostListener } from "@angular/core";

import { AIPEmailBuilderBlockExtendedOptions, Configurable } from "./Configurable";

@Directive()
export abstract class AIPEmailBuilderBlock<T> extends Configurable<T> {
  type!: string;

  get styles(): Record<string, string | number> {
    return {
      borderRadius: 0
    };
  }

  @HostListener("click") onClick() {
    this.edit();
  }

  override toObject(options?: Partial<T>, ...args: any[]): AIPEmailBuilderBlockExtendedOptions<T> {
    return { ...super.toObject(options, ...args), type: this.type };
  }
}

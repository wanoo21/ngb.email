import { Configurable } from './Configurable';
import { Directive, HostListener } from '@angular/core';

@Directive()
export abstract class AIPEmailBuilderBlock<T> extends Configurable<T> {
  type!: string;
  get styles(): Record<string, string | number> {
    return {
      borderRadius: 0,
    };
  }

  @HostListener('click') onClick() {
    this.edit();
  }
}

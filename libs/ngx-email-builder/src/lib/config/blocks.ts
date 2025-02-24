import { InjectionToken, Provider, Type } from '@angular/core';
import { AIPEmailBuilderBlock } from '../ui/block/block.ng';

export type TIPEmailBuilderBlock<T = Record<PropertyKey, any>> = {
  readonly type: string;
  readonly id?: string;
  options?: T;
};

export interface AIPBlockContext<T> extends Record<PropertyKey, unknown> {
  options?: T;
}

export type TIPInjectedBlock<T> = {
  component: Type<AIPEmailBuilderBlock<T>>;
  context: AIPBlockContext<T>;
  type: string;
};

export type IIPEmailBuilderBlockData = {
  type: string;
  context: AIPBlockContext<any>;
  title: string;
};

export const IP_EMAIL_BUILDER_BLOCKS = new InjectionToken<
  TIPInjectedBlock<never>[]
>('Wlocalhost blocks map', {
  providedIn: 'root',
  factory: () => [],
});

export const IP_EMAIL_BUILDER_BLOCKS_DATA = new InjectionToken<
  IIPEmailBuilderBlockData[]
>("Wlocalhost blocks' info map", {
  providedIn: 'root',
  factory: () => [],
});

export function addIPEmailBuilderBlock<T>(
  title: string,
  block: TIPInjectedBlock<T>
): Provider[] {
  return [
    { provide: IP_EMAIL_BUILDER_BLOCKS, useValue: block, multi: true },
    {
      provide: IP_EMAIL_BUILDER_BLOCKS_DATA,
      useValue: { type: block.type, title, context: block.context },
      multi: true,
    },
  ];
}

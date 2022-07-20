import { Pipe, PipeTransform } from "@angular/core";

import { AIPEmailBuilderMiddlewareService } from "../services";

// type KeyOfType<T, U> = { [P in keyof T]: T[P] extends U ? P : never }[keyof T]

@Pipe({
  name: "applyMiddleware"
})
export class ApplyMiddlewarePipe<K extends keyof Pick<AIPEmailBuilderMiddlewareService, "blocksList" | "structuresList" | "categoryList" | "categoryTemplates" | "templateThumbnail">> implements PipeTransform {

  constructor(readonly middleware: AIPEmailBuilderMiddlewareService) {
  }

  transform<M extends AIPEmailBuilderMiddlewareService[K]>(value: Parameters<M>, method: K): ReturnType<M> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.middleware[method](...value) as ReturnType<M>;
  }
}

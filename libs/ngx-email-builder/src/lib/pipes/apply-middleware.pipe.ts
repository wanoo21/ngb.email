import { Pipe, PipeTransform, inject } from "@angular/core";

import { AIPEmailBuilderMiddlewareService } from "../services";

/**
 * Transform data right in component's HTML based on some {@link AIPEmailBuilderMiddlewareService} methods.
 * Allowed methods: "blocksList" | "structuresList" | "categoryList" | "categoryTemplates" | "templateThumbnail"
 *
 * @template K - the key of the middleware method to use.
 * @template M - the type of the middleware method to use.
 */
@Pipe({
  name: "applyMiddleware",
  standalone: true
})
export class ApplyMiddlewarePipe<K extends keyof Pick<AIPEmailBuilderMiddlewareService, "blocksList" | "structuresList" | "categoryList" | "categoryTemplates" | "templateThumbnail">> implements PipeTransform {
  readonly middleware = inject(AIPEmailBuilderMiddlewareService);

  /**
   * Applies the middleware method to the given value.
   *
   * @template M - the type of the middleware method to use.
   * @param value - the data to apply the middleware to.
   * @param method - the name of the middleware method to use.
   * @returns the result of the middleware method.
   */
  transform<M extends AIPEmailBuilderMiddlewareService[K]>(value: Parameters<M>, method: K): ReturnType<M> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.middleware[method](...value) as ReturnType<M>;
  }
}

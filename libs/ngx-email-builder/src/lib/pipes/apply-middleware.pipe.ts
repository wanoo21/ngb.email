import { Pipe, PipeTransform } from "@angular/core";
import { AIPEmailBuilderMiddlewareService } from "@wlocalhost/ngx-email-builder";

@Pipe({
  name: "applyMiddleware"
})
export class ApplyMiddlewarePipe<K extends keyof Pick<AIPEmailBuilderMiddlewareService, "blocksList" | "structuresList">> implements PipeTransform {

  constructor(readonly middleware: AIPEmailBuilderMiddlewareService) {
  }

  transform<M extends AIPEmailBuilderMiddlewareService[K]>(value: Parameters<M>, method: K): ReturnType<M> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.middleware[method](...value);
  }
}

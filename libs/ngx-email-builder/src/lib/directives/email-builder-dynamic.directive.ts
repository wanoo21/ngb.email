import {
  Directive,
  DoCheck,
  Host,
  Inject,
  Input,
  KeyValueDiffer,
  KeyValueDiffers,
  TemplateRef,
  ViewContainerRef
} from "@angular/core";
import { CdkDrag } from "@angular/cdk/drag-drop";

import { IIPEmailBuilderBlockData, IP_EMAIL_BUILDER_BLOCKS_DATA } from "../private-tokens";
import { AIPEmailBuilderBlock, AIPEmailBuilderBlockExtendedOptions } from "../core/Block";

class IPEmailBuilderDynamicDirectiveContext {
  $implicit!: AIPEmailBuilderBlock;
}

@Directive({
  selector: "[ipEmailBuilderDynamicBlockDirective]",
  exportAs: "instance"
})
export class IPEmailBuilderDynamicDirective implements DoCheck {
  readonly context = new IPEmailBuilderDynamicDirectiveContext();
  #keyValueDiffers: KeyValueDiffer<any, any> | undefined;
  #instance!: AIPEmailBuilderBlock | undefined;
  #comingContext!: AIPEmailBuilderBlockExtendedOptions;

  constructor(
    @Inject(IP_EMAIL_BUILDER_BLOCKS_DATA)
    readonly blocksData: IIPEmailBuilderBlockData[],
    readonly viewContainerRef: ViewContainerRef,
    readonly templateRef: TemplateRef<IPEmailBuilderDynamicDirectiveContext>,
    readonly differs: KeyValueDiffers,
    @Host() readonly cdkDrag: CdkDrag
  ) {
  }

  @Input()
  set ipEmailBuilderDynamicBlockDirective(context: AIPEmailBuilderBlockExtendedOptions) {
    this.#comingContext = context;
    const foundBlock = this.blocksData.find((block) => context.type === block.type);
    if (foundBlock) {
      this.#instance = this.viewContainerRef.createComponent(foundBlock.block).instance;
      Object.assign(this.#instance, context);
      // Listen for component's changes which can lose the instance
      // Example: innerText, socialNetwork and others
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { options, type, ...rest } = this.#instance.toObject();
      this.#keyValueDiffers = this.differs.find(rest).create();
      this.context.$implicit = this.#instance;
      this.viewContainerRef.createEmbeddedView(this.templateRef, this.context);
    } else {
      throw TypeError(`No such block found: ${context.type}`);
    }
  }

  static ngTemplateContextGuard(dir: IPEmailBuilderDynamicDirective, ctx: unknown): ctx is IPEmailBuilderDynamicDirectiveContext {
    return true;
  }

  ngDoCheck(): void {
    if (this.#keyValueDiffers && this.#instance?.isCurrentlyEditing) {
      this.cdkDrag.data = this.#instance.toObject();
      // Update the incoming context with updated details
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { options, type, ...rest } = this.#instance.toObject();
      const diff = this.#keyValueDiffers.diff(rest);
      if (diff) {
        diff.forEachItem(({ currentValue, key }) => {
          Object.assign(this.#comingContext, { [key]: currentValue });
        });
      }
    }
  }
}

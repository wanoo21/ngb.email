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

/**
 * Default context for dynamic block.
 */
class IPEmailBuilderDynamicDirectiveContext {
  // Newly created block.
  $implicit!: AIPEmailBuilderBlock;
}

/**
 * Create and insert the block dynamically to the view.
 * It requires to have [cdkDrag] directive on host or current element.
 *
 * @exportAs instance
 */
@Directive({
  selector: "[ipEmailBuilderDynamicBlockDirective]",
  exportAs: "instance"
})
export class IPEmailBuilderDynamicDirective implements DoCheck {
  readonly context = new IPEmailBuilderDynamicDirectiveContext();
  #keyValueDiffers: KeyValueDiffer<any, any> | undefined;
  #instance!: AIPEmailBuilderBlock | undefined;
  #comingContext!: AIPEmailBuilderBlockExtendedOptions;

  /**
   * @param blocksData A list of all available blocks with their factories.
   * @param viewContainerRef Reference to the view container.
   * @param templateRef Reference to the template.
   * @param differs KeyValueDiffers factory.
   * @param cdkDrag Optional directive on the host element.
   */
  constructor(
    @Inject(IP_EMAIL_BUILDER_BLOCKS_DATA)
    readonly blocksData: IIPEmailBuilderBlockData[],
    readonly viewContainerRef: ViewContainerRef,
    readonly templateRef: TemplateRef<IPEmailBuilderDynamicDirectiveContext>,
    readonly differs: KeyValueDiffers,
    @Host() readonly cdkDrag?: CdkDrag
  ) {}

  /**
   * Setter for the dynamic block's context.
   * Creates a new instance of the block and attaches it to the view.
   * @throws {TypeError} If no such block was found.
   */
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

  /**
   * Guard function for template context. Returns true always.
   */
  static ngTemplateContextGuard(dir: IPEmailBuilderDynamicDirective, ctx: unknown): ctx is IPEmailBuilderDynamicDirectiveContext {
    return true;
  }

  /**
   * Detect changes of the dynamic block's instance and incoming context.
   * Updates incoming context with updated instance details.
   */
  ngDoCheck(): void {
    if (this.#keyValueDiffers && this.#instance?.isCurrentlyEditing) {
      if (this.cdkDrag) {
        this.cdkDrag.data = this.#instance.toObject();
      }
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

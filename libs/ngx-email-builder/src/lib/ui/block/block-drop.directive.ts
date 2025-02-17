import { Directive, inject, input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { AIPEmailBuilderBlock } from './block.ng';
import { IP_EMAIL_BUILDER_BLOCKS, TIPEmailBuilderBlock, TIPInjectedBlock } from '../../config/blocks';

/**
 * Default context for dynamic block.
 */
class IPEmailBuilderDynamicDirectiveContext {
  // Newly created block.
  $implicit!: AIPEmailBuilderBlock<never>;
}

/**
 * Create and insert the block dynamically to the view.
 * It requires to have [cdkDrag] directive on host or current element.
 *
 * @exportAs instance
 */
@Directive({
  selector: '[ipColumnBlock]',
})
export class IPEmailBuilderDynamicDirective implements OnInit {
  readonly blocksData = inject(IP_EMAIL_BUILDER_BLOCKS);
  readonly viewContainerRef = inject(ViewContainerRef);
  readonly templateRef =
    inject<TemplateRef<IPEmailBuilderDynamicDirectiveContext>>(TemplateRef);
  readonly ipColumnBlockIndex = input.required<number>();
  readonly ipColumnBlock = input.required<TIPEmailBuilderBlock>();

  /**
   * Guard function for template context. Returns true always.
   */
  static ngTemplateContextGuard(
    dir: IPEmailBuilderDynamicDirective,
    ctx: unknown
  ): ctx is IPEmailBuilderDynamicDirectiveContext {
    return true;
  }

  ngOnInit() {
    const foundBlock = this.blocksData.find(
      ({ type }) => this.ipColumnBlock().type === type
    );
    if (foundBlock) {
      this.#createComponent(foundBlock, this.ipColumnBlock());
    } else {
      throw TypeError(`No such block found: ${this.ipColumnBlock().type}`);
    }
  }

  #createComponent(
    { component }: TIPInjectedBlock<never>,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    { type, id, ...restContext }: TIPEmailBuilderBlock
  ) {
    this.viewContainerRef.clear();
    const viewContainerRef = this.viewContainerRef.createComponent(component);
    viewContainerRef.setInput('myIndex', this.ipColumnBlockIndex());
    for (const [key, value] of Object.entries(restContext)) {
      // @ts-expect-error - I don't see another way to check if the key exists on the instance.
      if (viewContainerRef.instance[key] !== undefined) {
        viewContainerRef.setInput(key, value);
      }
    }
    const context = new IPEmailBuilderDynamicDirectiveContext();
    context.$implicit = viewContainerRef.instance;
    this.viewContainerRef.createEmbeddedView(this.templateRef, context);
  }
}

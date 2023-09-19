import { Directive, inject, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";
import { Editor, Toolbar } from "ngx-editor";
import { Subject, takeUntil } from "rxjs";

import { IPEmailBuilderUiService } from "../services";

/**
 * Default context for Text Editor Directive.
 */
class IPEmailBuilderTextEditorDirectiveContext {
  $implicit!: Editor;
}

/**
 * Create and insert the Text Editor dynamically to the view.
 */
class IPEmailBuilderTextEditorMenuDirectiveContext extends IPEmailBuilderTextEditorDirectiveContext {
  toolbar!: Toolbar;
}

/**
 * Create and insert the Text Editor dynamically to the view.
 */
@Directive({
  selector: "[ipEmailBuilderTextEditorMenu]",
  exportAs: "ipEmailBuilderTextEditorMenu"
})
export class IPEmailBuilderTextEditorMenuDirective implements OnInit, OnDestroy {
  readonly emailBuilderUiService = inject(IPEmailBuilderUiService);
  readonly templateRef = inject(TemplateRef<IPEmailBuilderTextEditorMenuDirectiveContext>);
  readonly containerRef = inject(ViewContainerRef);
  readonly #destroyed$ = new Subject<void>();

  static ngTemplateContextGuard(dir: IPEmailBuilderTextEditorMenuDirective, ctx: unknown): ctx is IPEmailBuilderTextEditorMenuDirectiveContext {
    return true;
  }

  ngOnInit() {
    this.emailBuilderUiService.currentEditor$
      .pipe(takeUntil(this.#destroyed$))
      .subscribe((editor) => {
        this.hide();
        if (editor) {
          this.show(editor);
        }
      });
  }

  /**
   * Show the menu.
   * @param editor The editor instance.
   */
  show(editor: Editor) {
    this.containerRef.createEmbeddedView<IPEmailBuilderTextEditorMenuDirectiveContext>(this.templateRef, {
      $implicit: editor,
      // TODO: Add toolbar to AIPEmailBuilderMiddlewareService.
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["code", "blockquote"],
        ["ordered_list", "bullet_list"],
        [{ heading: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
        ["link"],
        ["text_color", "background_color"],
        ["align_left", "align_center", "align_right", "align_justify"],
        ["horizontal_rule", "format_clear"]
      ]
    });
  }

  /**
   * Hide the menu.
   */
  hide() {
    this.containerRef.clear();
  }

  ngOnDestroy() {
    this.#destroyed$.next();
    this.#destroyed$.complete();
  }
}

/**
 * Create and insert the Text Editor dynamically to the view.
 * It connects to the editor service and attaches the editor to the {@link IPEmailBuilderTextEditorMenuDirective}.
 */
@Directive({
  selector: "[ipEmailBuilderTextEditor]",
  exportAs: "ipEmailBuilderTextEditor"
})
export class IPEmailBuilderTextEditorDirective implements OnInit, OnDestroy {
  readonly emailBuilderUiService = inject(IPEmailBuilderUiService);
  readonly templateRef = inject(TemplateRef<IPEmailBuilderTextEditorDirectiveContext>);
  readonly containerRef = inject(ViewContainerRef);

  // TODO: Add more settings.
  #editor = new Editor({
    history: true,
    inputRules: true,
    keyboardShortcuts: true,
    attributes: {
      class: "ip-email-builder-text-editor",
      style: "padding: 0"
    }
  });

  static ngTemplateContextGuard(dir: IPEmailBuilderTextEditorDirective, ctx: unknown): ctx is IPEmailBuilderTextEditorDirectiveContext {
    return true;
  }

  ngOnInit() {
    const view = this.containerRef.createEmbeddedView<IPEmailBuilderTextEditorDirectiveContext>(this.templateRef, { $implicit: this.#editor });
    // Remove default styles.
    const editor = view.rootNodes[0] as HTMLElement;
    if (editor.tagName !== "NGX-EDITOR") {
      throw new Error("The root node must be NGX-EDITOR.");
    } else {
      editor.style.position = "relative";
      editor.querySelector(".NgxEditor")?.classList.remove("NgxEditor");
    }
  }

  /**
   * Open the editor.
   */
  open() {
    this.emailBuilderUiService.attachEditor(this.#editor);
  }

  /**
   * Close the editor.
   */
  close() {
    this.emailBuilderUiService.attachEditor(null);
  }

  ngOnDestroy() {
    this.close();
    this.#editor.destroy();
  }
}

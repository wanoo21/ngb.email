import { AfterViewInit, Directive, ElementRef, inject, Input, NgModule, OnInit, Renderer2 } from "@angular/core";
import { randomString } from "@wlocalhost/ngx-email-builder";

@Directive()
abstract class AddClassList<T = HTMLElement> implements OnInit {
  abstract classList: string;
  readonly renderer2 = inject(Renderer2);
  private readonly elementRef = inject<ElementRef<T>>(ElementRef);

  /**
   * Directive's HTMLElement
   */
  get el(): T {
    return this.elementRef.nativeElement;
  }

  ngOnInit(): void {
    this.classList.split(" ").forEach(className => {
      this.renderer2.addClass(this.el, className);
    });
  }
}

@Directive({
  selector: "[btInput]",
  exportAs: "input"
})
export class FormInputDirective extends AddClassList<HTMLInputElement> implements OnInit {
  classList = `rounded bg-white border px-2 py-1 w-full text-black-700/75 text-sm outline-1 placeholder-shown:border-gray-200 read-only:bg-gray-100 disabled:opacity-75`;

  override ngOnInit() {
    super.ngOnInit();
    this.renderer2.setAttribute(this.el, "id", randomString());
  }
}

@Directive({
  selector: "[btLabel]",
  exportAs: "label"
})
export class FormLabelDirective extends AddClassList<HTMLLabelElement> implements AfterViewInit {
  classList = `text-xs font-medium text-gray-400 mb-1`;
  @Input() btLabel?: FormInputDirective;

  ngAfterViewInit(): void {
    if (this.btLabel && !this.el.getAttribute("for")) {
      this.renderer2.setAttribute(this.el, "for", this.btLabel.el.id);
    }
  }
}

@Directive({
  selector: "[btBtn]",
  exportAs: "btn"
})
export class FormBtnDirective extends AddClassList<HTMLButtonElement> implements OnInit {
  @Input() size = "sm";

  get classList(): string {
    return `btn rounded shadow-sm bg-white border px-2 py-1.5 text-${this.size} flex gap-1 items-center justify-center`;
  }

  override ngOnInit() {
    super.ngOnInit();
    if (!this.el.hasAttribute("type")) {
      this.el.type = "button";
    }
    this.el.querySelectorAll("svg").forEach(svg => {
      svg.style.pointerEvents = "none";
    });
  }
}

@Directive({
  selector: "[btH2]",
  exportAs: "h2"
})
export class FormH2Directive extends AddClassList {
  classList = `font-semibold text-sm mt-4 mb-2 text-gray-800 uppercase select-none`;
}

@Directive({
  selector: "[btH3]",
  exportAs: "h3"
})
export class FormH3Directive extends AddClassList {
  classList = `text-xs font-medium text-gray-400 mb-1`;
}

@Directive({
  selector: "[btHint]",
  exportAs: "hint"
})
export class FormHintDirective extends AddClassList {
  @Input() variant = "gray-400";

  get classList(): string {
    return `text-xs text-${this.variant} font-light mt-1`;
  }
}

@Directive({
  selector: "[btPanel]",
  exportAs: "panel"
})
export class FormPanelDirective extends AddClassList {
  get classList(): string {
    return `p-2 rounded bg-white border`;
  }
}

@NgModule({
  declarations: [FormInputDirective, FormBtnDirective, FormH2Directive, FormHintDirective, FormLabelDirective, FormH3Directive, FormPanelDirective],
  exports: [FormInputDirective, FormBtnDirective, FormH2Directive, FormHintDirective, FormLabelDirective, FormH3Directive, FormPanelDirective]
})
export class IpFormUIModule {
}

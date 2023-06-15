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
  selector: "[bulmaInput]",
  exportAs: "input"
})
export class FormInputDirective extends AddClassList<HTMLInputElement> implements OnInit {
  classList = `input has-background-light px-2 py-1 is-size-7 is-flex`;
  // outline-1 placeholder-shown:border-gray-200 read-only:bg-gray-100 disabled:opacity-75`;

  override ngOnInit() {
    super.ngOnInit();
    this.renderer2.setAttribute(this.el, "id", randomString());
  }
}

@Directive({
  selector: "[bulmaLabel]",
  exportAs: "label"
})
export class FormLabelDirective extends AddClassList<HTMLLabelElement> implements AfterViewInit {
  classList = `is-size-7 has-text-weight-normal has-text-grey-light mb-1`;
  @Input() bulmaLabel?: FormInputDirective;

  ngAfterViewInit(): void {
    if (this.bulmaLabel && !this.el.getAttribute("for")) {
      this.renderer2.setAttribute(this.el, "for", this.bulmaLabel.el.id);
    }
  }
}

@Directive({
  selector: "[bulmaBtn]",
  exportAs: "button"
})
export class FormBtnDirective extends AddClassList<HTMLButtonElement> implements OnInit {
  @Input() size = "small";

  get classList(): string {
    // return `btn rounded shadow-sm bg-white border px-2 py-1 text-${this.size} d-flex gap-1 justify-content-center`;
    return `button is-${this.size}`;
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
  selector: "[bulmaH2]",
  exportAs: "title is-2 has-text-weight-bold"
})
export class FormH2Directive extends AddClassList {
  classList = `has-text-weight-bold mt-4 mb-2 is-uppercase`;
}

@Directive({
  selector: "[bulmaH3]",
  exportAs: "title is-3"
})
export class FormH3Directive extends AddClassList {
  classList = `is-size-7 has-text-weight-normal has-text-grey-light`;
}

@Directive({
  selector: "[bulmaHint]",
  exportAs: "help"
})
export class FormHintDirective extends AddClassList {
  @Input() variant = "help has-text-weight-normal has-text-grey-light";

  get classList(): string {
    return `is-size-7 has-text-${this.variant} has-text-weight-light`;
  }
}

@Directive({
  selector: "[bulmaPanel]",
  exportAs: "box"
})
export class FormPanelDirective extends AddClassList {
  get classList(): string {
    return `box is-shadowless p-2 has-background-white`;
  }
}

@NgModule({
  declarations: [FormInputDirective, FormBtnDirective, FormH2Directive, FormHintDirective, FormLabelDirective, FormH3Directive, FormPanelDirective],
  exports: [FormInputDirective, FormBtnDirective, FormH2Directive, FormHintDirective, FormLabelDirective, FormH3Directive, FormPanelDirective]
})
export class IpFormUIModule {
}

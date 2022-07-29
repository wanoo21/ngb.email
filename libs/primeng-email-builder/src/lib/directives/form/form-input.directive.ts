import { AfterViewInit, Directive, Input, NgModule, OnInit } from "@angular/core";
import { AbsDirective } from "@ngcomma/ngx-abstract";
import { randomString } from "@ngcomma/ngx-abstract/utils";

@Directive()
abstract class AddClassList<T = HTMLElement> extends AbsDirective<T> implements OnInit {
  abstract classList: string;

  ngOnInit(): void {
    if (this.classList.length) {
      this.classList.split(" ").forEach(className => {
        this.renderer2.addClass(this.el, className);
      });
    }
  }
}

@Directive({
  selector: "[primeInput]",
  exportAs: "input"
})
export class FormInputDirective extends AddClassList<HTMLInputElement> implements OnInit {
  classList = ``;

  override ngOnInit() {
    super.ngOnInit();
    this.renderer2.setAttribute(this.el, "id", randomString());
  }
}

@Directive({
  selector: "[primeLabel]",
  exportAs: "label"
})
export class FormLabelDirective extends AddClassList<HTMLLabelElement> implements AfterViewInit {
  classList = `text-sm font-medium text-gray-400 mb-1`;
  @Input() primeLabel?: FormInputDirective;

  ngAfterViewInit(): void {
    if (this.primeLabel && !this.el.getAttribute("for")) {
      this.renderer2.setAttribute(this.el, "for", this.primeLabel.el.id);
    }
  }
}

@Directive({
  selector: "[primeBtn]",
  exportAs: "btn"
})
export class FormBtnDirective extends AddClassList<HTMLButtonElement> implements OnInit {
  @Input() size = "sm";

  get classList(): string {
    return `btn border-round shadow-1 bg-white border-1 px-2 py-1.5 text-${this.size} flex gap-1 align-items-center justify-content-center`;
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
  selector: "[primeH2]",
  exportAs: "h2"
})
export class FormH2Directive extends AddClassList {
  classList = `font-semibold text-sm mt-4 mb-2 text-gray-800 uppercase`;
}

@Directive({
  selector: "[primeH3]",
  exportAs: "h3"
})
export class FormH3Directive extends AddClassList {
  classList = `text-xs font-medium text-gray-400 mb-1`;
}

@Directive({
  selector: "[primeHint]",
  exportAs: "hint"
})
export class FormHintDirective extends AddClassList {
  @Input() variant = "gray-400";

  get classList(): string {
    return `text-xs text-${this.variant} font-light mt-1`;
  };
}

@Directive({
  selector: "[primePanel]",
  exportAs: "panel"
})
export class FormPanelDirective extends AddClassList {
  get classList(): string {
    return `p-2 border-round bg-white border-1 border-gray-200`;
  };
}

@NgModule({
  declarations: [FormInputDirective, FormBtnDirective, FormH2Directive, FormHintDirective, FormLabelDirective, FormH3Directive, FormPanelDirective],
  exports: [FormInputDirective, FormBtnDirective, FormH2Directive, FormHintDirective, FormLabelDirective, FormH3Directive, FormPanelDirective]
})
export class IpFormUIModule {
}

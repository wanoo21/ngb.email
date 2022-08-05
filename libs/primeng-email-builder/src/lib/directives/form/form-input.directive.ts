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
    if (this.el.type === "number" && !this.el.hasAttribute("min")) {
      this.renderer2.setAttribute(this.el, "min", "0");
    }
    this.renderer2.setAttribute(this.el, "id", randomString());
  }
}

@Directive({
  selector: "[primeLabel]",
  exportAs: "label"
})
export class FormLabelDirective extends AddClassList<HTMLLabelElement> implements AfterViewInit {
  classList = `text-sm font-medium mb-1 text-color`;
  @Input() primeLabel?: FormInputDirective;

  ngAfterViewInit(): void {
    if (this.primeLabel && !this.el.getAttribute("for")) {
      this.renderer2.setAttribute(this.el, "for", this.primeLabel.el.id);
    }
  }
}

@Directive({
  selector: "[primeH2]",
  exportAs: "h2"
})
export class FormH2Directive extends AddClassList {
  classList = `font-semibold text-sm mt-4 mb-2 uppercase text-color select-none`;
}

@Directive({
  selector: "[primeH3]",
  exportAs: "h3"
})
export class FormH3Directive extends AddClassList {
  classList = `text-xs font-medium mb-1 text-color`;
}

@Directive({
  selector: "[primeHint]",
  exportAs: "hint"
})
export class FormHintDirective extends AddClassList {
  @Input() variant = "color";

  get classList(): string {
    return `text-sm text-${this.variant} font-light m-0 mt-1`;
  };
}

@Directive({
  selector: "[primePanel]",
  exportAs: "panel"
})
export class FormPanelDirective extends AddClassList {
  get classList(): string {
    return `p-2`;
  };
}

@NgModule({
  declarations: [FormInputDirective, FormH2Directive, FormHintDirective, FormLabelDirective, FormH3Directive, FormPanelDirective],
  exports: [FormInputDirective, FormH2Directive, FormHintDirective, FormLabelDirective, FormH3Directive, FormPanelDirective]
})
export class IpFormUIModule {
}

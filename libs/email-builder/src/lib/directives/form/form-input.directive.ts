import { AfterViewInit, Directive, Input, NgModule, OnInit } from "@angular/core";
import { AbsDirective } from "@ngcomma/ngx-abstract";
import { randomString } from "@ngcomma/ngx-abstract/utils";

@Directive()
abstract class AddClassList<T = HTMLElement> extends AbsDirective<T> implements OnInit {
  abstract classList: string;

  ngOnInit(): void {
    this.classList.split(" ").forEach(className => {
      this.renderer2.addClass(this.el, className);
    });
  }
}

@Directive({
  selector: "[ipInput]",
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
  selector: "[ipLabel]",
  exportAs: "label"
})
export class FormLabelDirective extends AddClassList<HTMLLabelElement> implements AfterViewInit {
  classList = `text-xs font-medium text-gray-400 mb-1`;
  @Input() ipLabel?: FormInputDirective;

  ngAfterViewInit(): void {
    if (this.ipLabel && !this.el.getAttribute("for")) {
      this.renderer2.setAttribute(this.el, "for", this.ipLabel.el.id);
    }
  }
}

@Directive({
  selector: "[ipBtn]",
  exportAs: "btn"
})
export class FormBtnDirective extends AddClassList<HTMLButtonElement> implements OnInit {
  @Input() size = "sm";

  get classList(): string {
    return `btn rounded shadow-sm bg-white border px-2 py-1.5 text-${this.size} flex gap-1 items-center justify-center`;
  }

  override ngOnInit() {
    super.ngOnInit();
    this.el.querySelectorAll("svg").forEach(svg => {
      svg.style.pointerEvents = "none";
    });
  }
}

@Directive({
  selector: "[ipH2]",
  exportAs: "h2"
})
export class FormH2Directive extends AddClassList {
  classList = `font-semibold text-sm mt-4 mb-2 text-gray-800 uppercase`;
}

@Directive({
  selector: "[ipH3]",
  exportAs: "h3"
})
export class FormH3Directive extends AddClassList {
  classList = `text-xs font-medium text-gray-400 mb-1`;
}

@Directive({
  selector: "[ipHint]",
  exportAs: "hint"
})
export class FormHintDirective extends AddClassList {
  @Input() variant = "gray-400";

  get classList(): string {
    return `text-xs text-${this.variant} font-light mt-1`;
  };
}

@Directive({
  selector: "[ipPanel]",
  exportAs: "panel"
})
export class FormPanelDirective extends AddClassList {
  get classList(): string {
    return `p-2 rounded bg-white border`;
  };
}

@NgModule({
  declarations: [FormInputDirective, FormBtnDirective, FormH2Directive, FormHintDirective, FormLabelDirective, FormH3Directive, FormPanelDirective],
  exports: [FormInputDirective, FormBtnDirective, FormH2Directive, FormHintDirective, FormLabelDirective, FormH3Directive, FormPanelDirective]
})
export class IpFormUIModule {
}

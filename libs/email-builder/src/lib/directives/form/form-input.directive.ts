import { Directive, NgModule, OnInit } from "@angular/core";
import { AbsDirective } from "@ngcomma/ngx-abstract";

@Directive()
abstract class AddClassList extends AbsDirective implements OnInit {
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
export class FormInputDirective extends AddClassList {
  classList = `rounded bg-white border px-2 py-1 w-full text-sm outline-1 placeholder-shown:border-gray-200 read-only:bg-gray-100 disabled:opacity-75`;
}

@Directive({
  selector: "[ipBtn]",
  exportAs: "btn"
})
export class FormBtnDirective extends AddClassList implements OnInit {
  classList = `btn rounded shadow-sm bg-white border px-2 py-1.5 text-sm flex gap-1 items-center justify-center`;

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
  classList = `font-semibold text-sm mt-4 mb-2 text-gray-800`;
}

@NgModule({
  declarations: [FormInputDirective, FormBtnDirective, FormH2Directive],
  exports: [FormInputDirective, FormBtnDirective, FormH2Directive]
})
export class IpFormUIModule {
}

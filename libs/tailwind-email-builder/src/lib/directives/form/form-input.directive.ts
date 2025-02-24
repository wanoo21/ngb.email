import {
  AfterViewInit,
  Directive,
  ElementRef,
  inject,
  input,
  NgModule,
  OnInit,
  Renderer2,
} from '@angular/core';
import { randomString } from '@wlocalhost/ngx-email-builder';

@Directive({
  selector: '[tailInput]',
  exportAs: 'input',
  host: {
    class:
      'rounded bg-white border px-2 py-1 w-full text-black-700/75 text-sm outline-1 placeholder-shown:border-gray-200 read-only:bg-gray-100 disabled:opacity-75',
  },
})
export class FormInputDirective implements OnInit {
  readonly renderer2 = inject(Renderer2);
  readonly el = inject<ElementRef<HTMLInputElement>>(ElementRef).nativeElement;

  ngOnInit(): void {
    this.renderer2.setAttribute(this.el, 'id', randomString());
  }
}

@Directive({
  selector: '[tailLabel]',
  exportAs: 'label',
  host: {
    class: 'text-xs font-medium text-gray-400 mb-1',
  },
})
export class FormLabelDirective implements AfterViewInit {
  readonly tailLabel = input<FormInputDirective>();
  readonly renderer2 = inject(Renderer2);
  readonly el = inject<ElementRef<HTMLInputElement>>(ElementRef).nativeElement;

  ngAfterViewInit(): void {
    const tailLabel = this.tailLabel();
    if (tailLabel && !this.el.getAttribute('for')) {
      this.renderer2.setAttribute(this.el, 'for', tailLabel.el.id);
    }
  }
}

@Directive({
  selector: '[tailBtn]',
  exportAs: 'btn',
  host: {
    class:
      'rounded shadow-sm bg-white border px-2 py-1.5 text-sm [&:has(:checked)]:bg-gray-100 cursor-pointer text-center',
  },
})
export class FormBtnDirective implements OnInit {
  readonly el = inject(ElementRef).nativeElement;

  ngOnInit(): void {
    if (!this.el.hasAttribute('type')) {
      this.el.type = 'button';
    }
    // this.el.querySelectorAll('svg').forEach((svg) => {
    //   svg.style.pointerEvents = 'none';
    // });
  }
}

@Directive({
  selector: '[tailH2]',
  exportAs: 'h2',
  host: {
    class: `font-semibold text-sm mt-4 mb-2 text-gray-800 uppercase select-none`,
  },
})
export class FormH2Directive {}

@Directive({
  selector: '[tailH3]',
  exportAs: 'h3',
  host: {
    class: `text-xs font-medium text-gray-400 mb-1`,
  },
})
export class FormH3Directive {}

@Directive({
  selector: '[tailHint]',
  exportAs: 'hint',
  host: {
    class: `text-xs text-gray-400 font-light mt-1`,
  },
})
export class FormHintDirective {}

@Directive({
  selector: '[tailPanel]',
  exportAs: 'panel',
  host: {
    class: `p-2 rounded bg-white border`,
  },
})
export class FormPanelDirective {}

@NgModule({
  imports: [
    FormInputDirective,
    FormBtnDirective,
    FormH2Directive,
    FormHintDirective,
    FormLabelDirective,
    FormH3Directive,
    FormPanelDirective,
  ],
  exports: [
    FormInputDirective,
    FormBtnDirective,
    FormH2Directive,
    FormHintDirective,
    FormLabelDirective,
    FormH3Directive,
    FormPanelDirective,
  ],
})
export class UIFormModule {}

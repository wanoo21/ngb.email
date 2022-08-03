import { ChangeDetectionStrategy, Component, ViewEncapsulation } from "@angular/core";
import { TextBlock } from "@wlocalhost/ngx-email-builder";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "prime-text-block",
  templateUrl: "text-block.component.html",
  styleUrls: ["text-block.component.scss"],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextBlockComponent extends TextBlock {
  constructor(readonly domSanitizer: DomSanitizer) {
    super();
  }

  get safeHtml() {
    return this.domSanitizer.bypassSecurityTrustHtml(this.innerText);
  }
}

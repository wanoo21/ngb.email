import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Pipe({
  name: "sanitize",
  standalone: true
})
export class SanitizePipe implements PipeTransform {

  constructor(readonly sanitizer: DomSanitizer) {
  }

  transform(html: string | null): SafeHtml {
    return html && this.sanitizer.bypassSecurityTrustHtml(html) || "";
  }
}

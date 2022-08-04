import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from "@angular/core";
import { map, Observable } from "rxjs";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";

import { SkinsService } from "../../../services/skins.service";

@Component({
  selector: "wlocalhost-primeng-builder",
  template: `
    <link rel="stylesheet" [attr.href]="linkHref$ | async">
    <prime-email-builder></prime-email-builder>
  `,
  styleUrls: ["primeng-builder.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class PrimengBuilderComponent implements OnInit {
  linkHref$: Observable<SafeUrl>;

  constructor(
    readonly skinService: SkinsService,
    readonly domSanitizer: DomSanitizer
  ) {
    this.linkHref$ = skinService.activeSkin$.pipe(
      map(skin => `https://cdn.jsdelivr.net/npm/primeng@14.0.0/resources/themes/${skin}/theme.css`),
      map(href => this.domSanitizer.bypassSecurityTrustResourceUrl(href))
    );
  }

  ngOnInit(): void {
    // https://www.primefaces.org/primeng/setup
    this.skinService.addSkins([
      "md-light-indigo", "bootstrap4-dark-blue", "md-dark-deeppurple", "mdc-light-indigo", "lara-dark-purple", "luna-pink"
    ]);
  }
}

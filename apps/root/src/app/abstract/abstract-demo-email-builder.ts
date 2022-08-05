import { map, Observable } from "rxjs";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { Directive, OnInit } from "@angular/core";

import { SkinsService } from "../services/skins.service";

@Directive()
export class AbstractDemoEmailBuilder implements OnInit {
  readonly linkHref$: Observable<SafeUrl>;
  skins: string[] | null = null;
  skinTheme = "";

  constructor(readonly skinService: SkinsService, readonly domSanitizer: DomSanitizer) {
    this.linkHref$ = skinService.activeSkin$.pipe(
      map(skin => this.skinTheme.replace(/{skin}/g, `${skin}`)),
      map(href => this.domSanitizer.bypassSecurityTrustResourceUrl(href))
    );
  }

  ngOnInit(): void {
    this.skinService.addSkins(this.skins);
  }
}

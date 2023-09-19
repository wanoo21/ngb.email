/*
 * Copyright (c) 2022.
 */

import { map, Observable } from "rxjs";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { Directive, OnInit } from "@angular/core";
import { AIPEmailBuilderService } from "@wlocalhost/ngx-email-builder";

import { SkinService } from "../skin.service";

@Directive()
export abstract class AbstractDemoEmailBuilder implements OnInit {
  readonly linkHref$: Observable<SafeUrl>;
  skins: string[] | null = null;
  skinTheme = "";
  abstract npmName: string;
  abstract title: string;
  abstract description: string;

  constructor(
    readonly skinService: SkinService,
    readonly domSanitizer: DomSanitizer,
    readonly emailBuilderService: AIPEmailBuilderService
  ) {
    this.linkHref$ = skinService.activeSkin$.pipe(
      map(skin => this.skinTheme.replace(/{skin}/g, `${skin}`)),
      map(href => this.domSanitizer.bypassSecurityTrustResourceUrl(href))
    );
  }

  ngOnInit(): void {
    this.skinService.addSkins(this.skins);
    this.skinService.setTitle(this.title);
    this.skinService.setDescription(this.description);
    this.skinService.npmName = this.npmName;
  }
}

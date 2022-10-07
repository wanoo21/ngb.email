/*
 * Copyright (c) 2022.
 */

import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Meta, Title } from "@angular/platform-browser";

@Injectable({
  providedIn: "root"
})
export class SkinService {
  npmName = "";
  readonly title$ = new BehaviorSubject<string>("");
  readonly description$ = new BehaviorSubject<string>("");
  readonly #skins$ = new BehaviorSubject<string[] | null>(null);
  readonly skins$ = this.#skins$.asObservable();
  readonly #activeSkin$ = new BehaviorSubject<string | null>(null);
  readonly activeSkin$ = this.#activeSkin$.asObservable();

  constructor(readonly titleService: Title, readonly meta: Meta) {
  }

  addSkins(skins: string[] | null, defaultSkinIndex = 0): void {
    this.#skins$.next(skins);
    skins && this.setActiveSkin(skins[defaultSkinIndex]);
  }

  setActiveSkin(skin: string): void {
    this.#activeSkin$.next(skin);
  }

  setTitle(title: string): void {
    this.titleService.setTitle(title);
    this.title$.next(title);
  }

  setDescription(description: string): void {
    this.meta.updateTag({ name: "description", content: description });
    this.description$.next(description);
  }
}

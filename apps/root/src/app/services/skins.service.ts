/*
 * Copyright (c) 2022.
 */

import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SkinsService {
  readonly #skins$ = new BehaviorSubject<string[] | null>(null);
  readonly skins$ = this.#skins$.asObservable();
  readonly #activeSkin$ = new BehaviorSubject<string | null>(null);
  readonly activeSkin$ = this.#activeSkin$.asObservable();

  addSkins(skins: string[] | null, defaultSkinIndex = 0): void {
    this.#skins$.next(skins);
    skins && this.setActiveSkin(skins[defaultSkinIndex]);
  }

  setActiveSkin(skin: string): void {
    this.#activeSkin$.next(skin);
  }
}

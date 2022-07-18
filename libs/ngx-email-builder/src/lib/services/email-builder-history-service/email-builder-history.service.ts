/*
 * Copyright (c) 2022.
 */

import { inject, Injectable } from "@angular/core";

import { IP_EMAIL_BUILDER_CONFIG, IPEmailBuilderConfig } from "../../private-tokens";

@Injectable({
  providedIn: "root",
  useFactory: (factory: IPEmailBuilderConfig) => {
    const [, , , , useExisting] = factory.providers || [];
    if (factory.isFreeVersion) {
      if (useExisting) {
        console.warn("It seems you try to rewrite AIPEmailBuilderHistoryService, but this is not allowed in free version.");
      }
      return new FreeEmailBuilderHistoryService();
    } else if (!factory.isFreeVersion && useExisting) {
      return inject(useExisting);
    }
    return new ProEmailBuilderHistoryService();
  },
  deps: [IP_EMAIL_BUILDER_CONFIG]
})
export abstract class AIPEmailBuilderHistoryService {
  #historyMap = new Map<number, (() => void)>();
  #currentIndex = 0;

  // TODO: Add the right logic for history
  addHistory(fn: (() => void)): void {
    this.#historyMap.set(Date.now(), fn);
    // this.#currentIndex++;
    console.log([...this.#historyMap]);
  }

  runNext(): void {
    [...this.#historyMap.values()][this.#currentIndex]();
    this.#currentIndex--;
  }

  runPrev(): void {
    [...this.#historyMap.values()][this.#currentIndex]();
    // this.#currentIndex--;
  }

  hasChanges(): boolean {
    return this.#historyMap.size > 0;
  }

  clear(): void {
    this.#historyMap.clear();
  }
}


class ProEmailBuilderHistoryService extends AIPEmailBuilderHistoryService {
}

class FreeEmailBuilderHistoryService extends AIPEmailBuilderHistoryService {
}

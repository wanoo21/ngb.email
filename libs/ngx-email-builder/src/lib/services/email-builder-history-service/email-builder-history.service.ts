/*
 * Copyright (c) 2022.
 */

import { inject, Injectable } from "@angular/core";
import { rdiffResult } from "recursive-diff";
import { Subject } from "rxjs";

import { IP_EMAIL_BUILDER_CONFIG, IPEmailBuilderConfig } from "../../private-tokens";
import { IJSUndoManagerCommit, JSUndoManager } from "../../tools/undo-manager";

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
  readonly #factory = inject(IP_EMAIL_BUILDER_CONFIG);
  readonly #manager = new JSUndoManager(this.#factory.historyRecordLimit);
  private readonly commit$ = new Subject<IJSUndoManagerCommit>();
  readonly commitPush$ = this.commit$.asObservable();

  get hasUndo() {
    return this.#manager.canUndo();
  }

  get hasRedo() {
    return this.#manager.canRedo();
  }

  get hasChanges() {
    return !this.#manager.isEmpty();
  }

  addHistory(id: string, diff: rdiffResult[], dirty = false): void {
    this.#manager.record(id, diff, dirty);
  }

  redo(): void {
    const commit = this.#manager.redo();
    commit && this.commit$.next(commit);
  }

  undo(): void {
    const commit = this.#manager.undo();
    commit && this.commit$.next(commit);
  }

  clear(): void {
    this.#manager.reset();
  }
}


class ProEmailBuilderHistoryService extends AIPEmailBuilderHistoryService {
}

class FreeEmailBuilderHistoryService extends AIPEmailBuilderHistoryService {
}

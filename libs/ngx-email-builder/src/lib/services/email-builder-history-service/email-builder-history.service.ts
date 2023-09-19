/*
 * Copyright (c) 2022.
 */

import { inject, Injectable } from "@angular/core";
import { rdiffResult } from "recursive-diff";
import { Subject } from "rxjs";

import { IP_EMAIL_BUILDER_CONFIG, IPEmailBuilderConfig } from "../../private-tokens";
import { IJSUndoManagerCommit, JSUndoManager } from "../../tools/undo-manager";

/**
 * The base class for the AIPEmailBuilderHistoryService.
 * It provides an undo/redo functionality for the builder.
 */
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
  /**
   * The configuration object for the email builder.
   */
  readonly #factory = inject(IP_EMAIL_BUILDER_CONFIG);
  /**
   * The instance of the undo manager used to manage the undo/redo history of the builder.
   */
  readonly #manager = new JSUndoManager(this.#factory.historyRecordLimit);
  /**
   * A subject used to notify subscribers of commits made to the undo manager.
   */
  private readonly commit$ = new Subject<IJSUndoManagerCommit>();
  /**
   * An observable that emits the commits made to the undo manager.
   */
  readonly commitPush$ = this.commit$.asObservable();

  /**
   * A getter that indicates whether the undo action is available.
   */
  get hasUndo() {
    return this.#manager.canUndo();
  }

  /**
   * A getter that indicates whether the redo action is available.
   */
  get hasRedo() {
    return this.#manager.canRedo();
  }

  /**
   * A getter that indicates whether changes have been made to the undo manager.
   */
  get hasChanges() {
    return !this.#manager.isEmpty();
  }

  /**
   * Adds an entry to the undo/redo history.
   * @param id The id of the entry to add.
   * @param diff The difference between the previous state and the current state.
   * @param dirty A boolean indicating whether the entry should be marked as dirty.
   */
  addHistory(id: string, diff: rdiffResult[], dirty = false): void {
    this.#manager.record(id, diff, dirty);
  }

  /**
   * Redoes the last undo action.
   */
  redo(): void {
    const commit = this.#manager.redo();
    commit && this.commit$.next(commit);
  }

  /**
   * Undoes the last action.
   */
  undo(): void {
    const commit = this.#manager.undo();
    commit && this.commit$.next(commit);
  }

  /**
   * Clears the undo/redo history.
   */
  clear(): void {
    this.#manager.reset();
  }
}

/**
 * The service used to manage the undo/redo history of the builder for the Pro version.
 */
class ProEmailBuilderHistoryService extends AIPEmailBuilderHistoryService {}

/**
 * The service used to manage the undo/redo history of the builder for the Free version.
 */
class FreeEmailBuilderHistoryService extends AIPEmailBuilderHistoryService {}

/*
 * Copyright (c) 2022.
 */

import { inject, Injectable } from "@angular/core";
import { rdiffResult } from "recursive-diff";
import { Observable, Subject } from "rxjs";

import { IP_EMAIL_BUILDER_CONFIG } from "../../private-tokens";
import { IJSUndoManagerCommit, JSUndoManager } from "../../tools/undo-manager";

/**
 * The base class for the AIPEmailBuilderHistoryService.
 * It provides an undo/redo functionality for the builder.
 */
@Injectable({
  providedIn: "root",
  useFactory: () => inject(DefaultEmailBuilderHistoryService)
})
export abstract class AIPEmailBuilderHistoryService {
  abstract readonly commitPush$: Observable<IJSUndoManagerCommit>;
  abstract readonly hasUndo: boolean;
  abstract readonly hasRedo: boolean;
  abstract readonly hasChanges: boolean;

  abstract addHistory(id: string, diff: rdiffResult[], dirty?: boolean): void;

  abstract redo(): void;

  abstract undo(): void;

  abstract clear(): void;
}

/**
 * The service used to manage the undo/redo history of the builder for the Pro version.
 */
@Injectable({ providedIn: "root" })
export class DefaultEmailBuilderHistoryService implements AIPEmailBuilderHistoryService {
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

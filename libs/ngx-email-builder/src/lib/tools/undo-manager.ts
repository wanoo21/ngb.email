/*!
 * JavaScript Undo Manager 1.0.0
 * Simple JavaScript undo/redo command manager supporting transactions with no dependencies.
 *
 * Copyright: Alexey Grinko, 2017
 * Git repository: https://github.com/agrinko/js-undo-manager.git
 *
 * @license MIT - https://opensource.org/licenses/MIT
 */

import { isDevMode } from "@angular/core";
import { rdiffResult } from "recursive-diff";

export interface IJSUndoManagerCommit {
  id: string,
  diff: rdiffResult[],
  isAction: boolean
}

/**
 * Main class
 * @class JSUndoManager
 */
export class JSUndoManager {
  private stack: IJSUndoManagerCommit[] = [];
  private sp = -1;

  constructor(private readonly limit: number) {
    this.reset();
    this.log(`Initialized with stack limit of ${this.limit} commands`);
  }

  record(id: string, diff: rdiffResult[], isAction = false) {

    this.log("Recording command", { id, diff, isAction });

    this._rebase();

    this.stack.push({ id, diff, isAction });
    this.sp = this.stack.length - 1;

    this._keepLimit();
  }

  undo(): IJSUndoManagerCommit | null {
    if (!this.canUndo())
      return null;

    const command = this.stack[this.sp - 1];

    this.log("undo");

    this.sp--;
    // command.undo();
    return command;
  }

  /**
   * Check whether undoing previous command is possible
   * @returns {boolean}
   */
  canUndo() {
    return this.sp >= 0;
  }

  redo(): IJSUndoManagerCommit | null {
    if (!this.canRedo())
      return null;

    const command = this.stack[this.sp + 1]; //execute next command after stack pointer

    this.log("redo");

    this.sp++;
    // command.redo();

    return command;
  }

  /**
   * Check whether redoing command is possible
   * @returns {boolean}
   */
  canRedo() {
    return this.sp < this.stack.length - 1; //if stack pointer is not at the end
  }

  /**
   * Reset all commands from memory
   */
  reset() {
    this.log("reset");
    this.stack = [];
    this.sp = -1;
  }

  /**
   * Check whether the commands stack is empty
   * @returns {boolean}
   */
  isEmpty() {
    return !this.stack.filter(({ isAction }) => isAction).length;
  }

  /**
   * Change stack size limit initially defined in the constructor options
   * @param {number} limit
   */
  // setLimit(limit: number) {
  //   const redouble = this.stack.length - this.sp - 1;
  //
  //   if (limit < 1)
  //     throw new TypeError(`UndoManager.setLimit(): unexpected argument limit=${limit}. Should be a positive number`);
  //
  //   if (limit < redouble) {
  //     console.warn(`UndoManager.setLimit(): cannot set stack limit (${limit}) less than the number of 'redouble' commands (${redouble})`);
  //   } else {
  //     this.limit = Math.floor(limit);
  //     this._keepLimit();
  //   }
  //
  //   return this;
  // }

  /**
   * Check whether the commands stack size reaches its limit
   * @returns {boolean}
   */
  isFull() {
    return this.stack.length === this.limit;
  }

  /**
   * Get number of commands in memory stack
   * @returns {Number}
   */
  getSize() {
    return this.stack.length;
  }

  log(msg: string, ...args: any[]) {
    if (isDevMode())
      console.log(`Command Manager: ${msg}`, ...args);
  }

  //forget "future" commands if stack pointer is not at the end
  private _rebase() {
    if (this.canRedo())
      this.stack.length = this.sp + 1;
  }

  //sustain limited size of stack; cut extra commands starting with the latest ones
  private _keepLimit() {
    if (this.stack.length <= this.limit)
      return;

    const exceedsBy = this.stack.length - this.limit;

    this.log(`Stack size reached its limit: ${this.limit} commands. Cutting off most old commands...`);

    if (exceedsBy === 1)
      this.stack.shift(); //this is the most common case, so using "shift" will increase performance a bit
    else
      this.stack.splice(0, exceedsBy);

    this.sp -= exceedsBy; //normalize stack pointer for the new stack length
  }
}

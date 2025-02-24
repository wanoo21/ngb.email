import { computed, Injectable, signal } from '@angular/core';
import { CdkPortalOutlet, Portal } from '@angular/cdk/portal';
import { BehaviorSubject, map } from 'rxjs';
import { CdkDropList } from '@angular/cdk/drag-drop';
import { toSignal } from '@angular/core/rxjs-interop';

import type { IStructure } from './structure/interfaces';
import { randomString } from '../tools/utils';
import type { TColumnDropData } from './column/column-drop.directive';
import type { IPEmailBuilderSettingsDirective } from './settings/settings.directive';

/**
 * This service provides utilities for the UI of the ngx-email-builder library.
 */
@Injectable({
  providedIn: 'root',
})
export class IPEmailBuilderUiService {
  readonly #onEditRef = signal<string | null>(null);
  /**
   * Emit a new random string when the settings portal is attached.
   * Each new edit action will trigger a new random string.
   */
  readonly onEditRef = this.#onEditRef.asReadonly();
  /**
   * A set of drop lists for columns in the email builder UI.
   */
  columnsDropLists = new Set<CdkDropList<TColumnDropData>>();

  /**
   * A set of drop lists for structures in the email builder UI.
   */
  structuresDropLists = new Set<CdkDropList<IStructure[]>>();

  /**
   * A behavior subject for the currently attached settings portal.
   * @private
   */
  #attachSettingsPortal$ = new BehaviorSubject<Portal<any> | null>(null);

  /**
   * The default settings portal for the email builder UI.
   * @private
   */
  #defaultSettingsPortal: IPEmailBuilderSettingsDirective | null = null;

  /**
   * An observable for the currently attached settings portal.
   */
  currentSettingsPortal = toSignal(
    this.#attachSettingsPortal$.pipe(
      map((portal) => portal || this.#defaultSettingsPortal)
    )
  );

  /**
   * The settings portal outlet for the email builder UI.
   * @private
   */
  #settingsPortalOutlet: CdkPortalOutlet | undefined;

  /**
   * Attaches a settings portal to the email builder UI.
   *
   * @param portal The settings portal to attach.
   */
  attachSettingsPortal(portal: IPEmailBuilderSettingsDirective | null): void {
    this.#attachSettingsPortal$.next(portal);
    this.#onEditRef.set(randomString());
  }

  /**
   * Sets the default settings portal for the email builder UI.
   *
   * @param portal The default settings portal to set.
   */
  setDefaultSettingsPortal(portal: IPEmailBuilderSettingsDirective): void {
    this.#defaultSettingsPortal = portal;
  }

  /**
   * Sets the settings portal outlet for the email builder UI.
   *
   * @param portalOutlet The settings portal outlet to set.
   */
  setSettingsPortalOutlet(portalOutlet: CdkPortalOutlet): void {
    this.#settingsPortalOutlet = portalOutlet;
  }

  /**
   * Checks if the settings portal outlet has attached.
   *
   * @returns True if the outlet has attached, false otherwise.
   */
  portalOutletHasAttached = computed(() => !!this.#onEditRef());
}

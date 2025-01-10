import { Injectable } from "@angular/core";
import { CdkPortalOutlet, Portal } from "@angular/cdk/portal";
import { BehaviorSubject, map } from "rxjs";
import { CdkDropList } from "@angular/cdk/drag-drop";

import { IPEmailBuilderSettingsDirective } from "../../directives/email-builder-settings.directive";
import { AIPEmailBuilderBlockExtendedOptions } from "../../core/Block";
import { IStructure } from "../../structure/structure";

/**
 * This service provides utilities for the UI of the ngx-email-builder library.
 */
@Injectable({
  providedIn: "root"
})
export class IPEmailBuilderUiService {

  /**
   * A set of drop lists for columns in the email builder UI.
   */
  columnsDropLists = new Set<CdkDropList<AIPEmailBuilderBlockExtendedOptions[]>>();

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
  currentSettingsPortal$ = this.#attachSettingsPortal$.pipe(
    map((portal) => portal || this.#defaultSettingsPortal)
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
  portalOutletHasAttached(): boolean {
    return !!this.#settingsPortalOutlet?.hasAttached();
  }
}


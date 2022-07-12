import { Injectable } from "@angular/core";
import { CdkPortal, CdkPortalOutlet } from "@angular/cdk/portal";
import { BehaviorSubject, map } from "rxjs";
import { CdkDropList } from "@angular/cdk/drag-drop";
import { IStructure } from "@wlocalhost/ngx-email-builder/core";

import { IPEmailBuilderSettingsDirective } from "../directives/ipemail-builder-settings.directive";
import { IIPEmailBuilderBlockData } from "../private-tokens";

@Injectable({
  providedIn: "root"
})
export class IPEmailBuilderUiService {
  columnsDropLists = new Set<CdkDropList<IIPEmailBuilderBlockData[]>>();
  structuresDropLists = new Set<CdkDropList<IStructure[]>>();
  #attachSettingsPortal$ = new BehaviorSubject<CdkPortal | null>(null);
  #defaultSettingsPortal: IPEmailBuilderSettingsDirective | null | undefined;
  currentSettingsPortal$ = this.#attachSettingsPortal$.pipe(
    map((portal) => portal || this.#defaultSettingsPortal)
  );
  #settingsPortalOutlet: CdkPortalOutlet | undefined;

  attachSettingsPortal(portal: IPEmailBuilderSettingsDirective | null): void {
    this.#attachSettingsPortal$.next(portal);
  }

  setDefaultSettingsPortal(portal: IPEmailBuilderSettingsDirective): void {
    this.#defaultSettingsPortal = portal;
  }

  setSettingsPortalOutlet(portalOutlet: CdkPortalOutlet): void {
    this.#settingsPortalOutlet = portalOutlet;
  }

  portalOutletHasAttached(): boolean {
    return !!this.#settingsPortalOutlet?.hasAttached();
  }
}

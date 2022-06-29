import { Injectable } from '@angular/core';
import { CdkPortal, CdkPortalOutlet } from '@angular/cdk/portal';
import { BehaviorSubject, map } from 'rxjs';
import { IPEmailBuilderSettingsDirective } from '../directives/ipemail-builder-settings.directive';

@Injectable({
  providedIn: 'root',
})
export class IPEmailBuilderUiService {
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

import { Injectable } from '@angular/core';
import { CdkPortal, CdkPortalOutlet } from '@angular/cdk/portal';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IPEmailBuilderUiService {
  #attachSettingsPortal$ = new BehaviorSubject<CdkPortal | null>(null);
  #defaultSettingsPortal: CdkPortal | null | undefined;
  currentSettingsPortal$ = this.#attachSettingsPortal$.pipe(
    map((portal) => portal || this.#defaultSettingsPortal)
  );
  #settingsPortalOutlet: CdkPortalOutlet | undefined;

  attachSettingsPortal(portal: CdkPortal | null): void {
    this.#attachSettingsPortal$.next(portal);
  }

  setDefaultSettingsPortal(portal: CdkPortal): void {
    this.#defaultSettingsPortal = portal;
  }

  setSettingsPortalOutlet(portalOutlet: CdkPortalOutlet): void {
    this.#settingsPortalOutlet = portalOutlet;
  }

  portalOutletHasAttached(): boolean {
    return !!this.#settingsPortalOutlet?.hasAttached();
  }
}

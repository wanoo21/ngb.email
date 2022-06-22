import { Injectable } from '@angular/core';
import { CdkPortal } from '@angular/cdk/portal';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IPEmailBuilderUiService {
  currentSettingsPortal$ = new BehaviorSubject<CdkPortal | null>(null);

  attachSettingsPortal(portal: CdkPortal): void {
    this.currentSettingsPortal$.next(portal);
  }
}

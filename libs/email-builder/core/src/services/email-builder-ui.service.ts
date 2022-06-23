import { Injectable } from '@angular/core';
import { CdkPortal } from '@angular/cdk/portal';
import { BehaviorSubject } from 'rxjs';

import { IPEmailBuilderCoreModule } from '../email-builder-core.module';

@Injectable({
  providedIn: IPEmailBuilderCoreModule,
})
export class IPEmailBuilderUiService {
  currentSettingsPortal$ = new BehaviorSubject<CdkPortal | null>(null);

  attachSettingsPortal(portal: CdkPortal | null): void {
    this.currentSettingsPortal$.next(portal);
  }
}

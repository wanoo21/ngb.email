import { Injectable } from '@angular/core';
import { AIPEmailBuilderService } from '@wlocalhost/ngx-email-builder/core';

@Injectable({
  providedIn: 'root',
})
export class BuilderServiceService extends AIPEmailBuilderService {
  override test = 40;
}

import {
  ChangeDetectionStrategy,
  Component,
  input,
  linkedSignal,
} from '@angular/core';
import {
  AIPEmailBuilderAside,
  injectIIPEmail,
} from '@wlocalhost/ngx-email-builder';
import { CdkPortalOutlet } from '@angular/cdk/portal';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { NgClass } from '@angular/common';

import { FormH2Directive } from '../directives/form/form-input.directive';

const steps = new Map([
  ['content', $localize`:@@steps.content:Content`],
  ['settings', $localize`:@@steps.settings:Settings`],
]);

@Component({
  selector: 'tail-email-aside',
  templateUrl: './email-aside.component.html',
  styleUrls: ['./email-aside.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.relative]': 'readonly()',
  },
  imports: [CdkPortalOutlet, FormH2Directive, CdkDropList, CdkDrag, NgClass],
})
export class EmailAsideComponent extends AIPEmailBuilderAside {
  // Mark all settings as readonly.
  readonly readonly = input(false);
  readonly steps = [...steps.keys()].map((key) => ({
    key,
    label: steps.get(key),
  }));
  readonly currentEmail = injectIIPEmail();
  readonly selectedStep = linkedSignal({
    source: () => [
      this.currentEmail.onSet(),
      this.builderUiService.onEditRef(),
    ],
    computation: ([resetRef], prev) => {
      return prev?.source[0] !== resetRef ? 0 : 1;
    },
  });
}

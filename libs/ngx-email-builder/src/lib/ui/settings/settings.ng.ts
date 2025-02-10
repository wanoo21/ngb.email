import { computed, Directive, inject, viewChild } from '@angular/core';

import { IPEmailBuilderUiService } from '../ui.service';
import { IPEmailBuilderSettingsDirective } from './settings.directive';

/**
 * An abstract class that provides a common interface for components that contain settings.
 * It also provides a common interface for the settings component to interact with the builder.
 *
 * @internal
 */
@Directive({
  host: {
    '[class.is-editing]': 'isEditing()',
  },
})
export abstract class SettingsNg {
  readonly builderUiService = inject(IPEmailBuilderUiService);
  readonly settingsPortal = viewChild.required(IPEmailBuilderSettingsDirective);
  readonly isEditing = computed(
    () =>
      this.builderUiService.currentSettingsPortal() === this.settingsPortal()
  );

  /**
   * Detaches the settings portal from the builder.
   */
  detachSettingsPortal(): void {
    this.builderUiService.attachSettingsPortal(null);
  }

  /**
   * Attaches the settings portal to the builder.
   */
  edit(): void {
    this.builderUiService.attachSettingsPortal(this.settingsPortal());
  }
}

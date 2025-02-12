import { computed, DestroyRef, Directive, inject, viewChild } from '@angular/core';

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
  readonly uiService = inject(IPEmailBuilderUiService);
  readonly settingsPortal = viewChild.required(IPEmailBuilderSettingsDirective);
  readonly isEditing = computed(
    () => this.uiService.currentSettingsPortal() === this.settingsPortal()
  );
  readonly #destroyRef = inject(DestroyRef).onDestroy(() => {
    this.detachSettingsPortal();
  });

  /**
   * Detaches the settings portal from the builder.
   */
  detachSettingsPortal(): void {
    this.uiService.attachSettingsPortal(null);
  }

  /**
   * Attaches the settings portal to the builder.
   */
  edit(): void {
    this.uiService.attachSettingsPortal(this.settingsPortal());
  }
}

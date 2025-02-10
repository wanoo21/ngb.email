import { computed, Directive, OnInit } from '@angular/core';

import { SettingsNg } from './settings/settings.ng';
import { createBackground, createPadding } from '../tools/utils';
import { injectIIPEmail } from '../state';

/**
 * The abstract class for the builder body component.
 * It provides a common interface for the settings component to interact with the builder.
 */
@Directive({
  host: {
    '[style]': 'hostStyles()',
    '[attr.dir]': 'dir()',
  },
})
export abstract class AIPEmailBody extends SettingsNg implements OnInit {
  readonly currentEmail = injectIIPEmail();
  readonly structures = computed(() => this.currentEmail.value().structures);

  /**
   * Get the host styles binding.
   *
   * @returns The host styles binding
   */
  readonly hostStyles = computed(() => {
    const { padding, background } = this.currentEmail.value().general;
    return {
      ...createPadding(padding),
      background: createBackground(background),
    };
  });

  /**
   * Get the dir attribute binding.
   *
   * @returns The dir attribute binding
   */
  readonly dir = computed(() => this.currentEmail.value().general.direction);

  ngOnInit(): void {
    this.builderUiService.setDefaultSettingsPortal(this.settingsPortal());
  }
}

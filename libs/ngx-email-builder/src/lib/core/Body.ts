import { computed, Directive, OnInit, signal } from '@angular/core';

import { WithSettings } from './WithSettings';
import { createBackground, createPadding } from '../tools/utils';
import { TDirection } from '../interfaces';
import { injectIIPEmail } from '../state';
import { IIPEmail } from '../body/body';
import { debounceTime } from 'rxjs';

const directionLabels = new Map<TDirection, string>([
  ['ltr', $localize`:@@direction_ltr:Left to right`],
  ['rtl', $localize`:@@direction_rtl:Right to left`],
]);

/**
 * The abstract class for the builder body component.
 * It provides a common interface for the settings component to interact with the builder.
 */
@Directive({
  host: {
    '[style]': 'hostStyles()',
    '[attr.dir]': 'dir()',
    '(click)': 'edit()',
  },
})
export abstract class AIPEmailBody extends WithSettings implements OnInit {
  readonly contentPart = signal<null | 'templates'>(null);
  readonly currentEmail = injectIIPEmail();
  readonly generalOptions = computed(() => this.currentEmail.value().general);
  readonly structures = computed(() => this.currentEmail.value().structures);

  /**
   * Get the available direction options with label and value.
   *
   * @returns The available direction options
   */
  readonly directionOptions = [...directionLabels.keys()].map((dir) => ({
    label: this.getDirectionLabel(dir),
    value: dir,
  }));

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

  ngOnInit() {
    this.builderUiService.setDefaultSettingsPortal(this.settingsPortal());
    setTimeout(() => {
      this.form()?.form.patchValue(this.generalOptions());
    });
    this.edit();
    this.form()
      ?.valueChanges?.pipe(debounceTime(100), this.takeUntilDestroyed)
      .subscribe((value) => {
        this.currentEmail.options(value as IIPEmail['general']);
      });
  }

  /**
   * Get the direction label by direction key.
   *
   * @param dir The direction key
   * @returns The direction label
   */
  getDirectionLabel(dir: TDirection): string {
    return directionLabels.get(dir) as string;
  }

  /**
   * Shows the template list.
   *
   * @param $event The mouse event.
   * @returns void.
   */
  showTemplateList($event: Event): void {
    $event.preventDefault();
    this.contentPart.set('templates');
  }

  setNewEmailFromTemplate(template: IIPEmail): void {
    this.currentEmail.set(template);
    this.contentPart.set(null);
  }

  /**
   * Overrides markForCheck method of Angular ChangeDetectorRef class to return a boolean value.
   *
   * @returns true if the portal outlet is attached to the component, false otherwise.
   */
  override markForCheck(): boolean {
    return this.builderUiService.portalOutletHasAttached();
  }
}

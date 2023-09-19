import { Directive, EventEmitter, HostBinding, HostListener, Input, OnInit, Output } from "@angular/core";
import { BehaviorSubject, filter, takeUntil } from "rxjs";
import { applyDiff } from "recursive-diff";

import { WithSettings } from "./WithSettings";
import { IPEmail } from "../body/body";
import { cloneDeep, createBackground, createPadding, mergeObjects } from "../tools/utils";
import { TDirection } from "../interfaces";
import { Structure } from "../structure/structure";
import { IIPValueChanged } from "./ValueChanged";

/**
 * The abstract class for the builder body component.
 * It provides a common interface for the settings component to interact with the builder.
 */
@Directive()
export abstract class AIPEmailBody extends WithSettings implements OnInit, IIPValueChanged<IPEmail> {
  @Input() value!: IPEmail;
  @Output() valueChange = new EventEmitter<IPEmail>();
  contentPart$ = new BehaviorSubject<null | "templates">(null);

  #directionLabels = new Map<TDirection, string>([
    ["ltr", $localize`:@@direction_ltr:Left to right`],
    ["rtl", $localize`:@@direction_rtl:Right to left`]
  ]);

  /**
   * Get the available direction keys.
   *
   * @returns The available direction keys
   */
  get directionKeys(): IterableIterator<TDirection> {
    return this.#directionLabels.keys();
  }

  /**
   * Get the available direction options with label and value.
   *
   * @returns The available direction options
   */
  get directionOptions(): { label: string, value: TDirection }[] {
    return [...this.directionKeys].map(dir => ({ label: this.getDirectionLabel(dir), value: dir }));
  }

  /**
   * Get the host styles binding.
   *
   * @returns The host styles binding
   */
  @HostBinding("style")
  get hostStyles(): Record<string, string | number> {
    const { padding, background } = this.value.general;
    return {
      ...createPadding(padding),
      background: createBackground(background),
      display: "flex",
      justifyContent: "start",
      alignItems: "center",
      flexDirection: "column"
    };
  }

  /**
   * Get the dir attribute binding.
   *
   * @returns The dir attribute binding
   */
  @HostBinding("attr.dir")
  get dir(): string {
    return this.value.general.direction;
  }

  /**
   * Get the direction label by direction key.
   *
   * @param dir The direction key
   * @returns The direction label
   */
  getDirectionLabel(dir: TDirection): string {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.#directionLabels.get(dir)!;
  }

  /**
   * Handles click event on the host.
   */
  @HostListener("click") onClick(): void {
    this.edit();
  }

  /**
   * Delete a structure.
   *
   * @param structure The structure to be deleted
   */
  deleteStructure(structure: Structure): void {
    const indexOf = this.value.structures.indexOf(structure);
    this.value.structures.splice(indexOf, 1);
  }

  /**
   * Duplicate a structure.
   *
   * @param structure The structure to be duplicated
   */
  duplicateStructure(structure: Structure): void {
    const indexOf = this.value.structures.indexOf(structure);
    this.value.structures.splice(indexOf, 0, cloneDeep(structure));
  }

  /**
   * This class provides an implementation of the OnInit interface.
   * ngOnInit is called after the directive/component's inputs are initialized and the constructor is finished.
   * It sets the default settings portal and edit mode, and subscribes to commitPush$ observable to update the component's value based on history changes.
   * It also provides methods to show/hide template list and change value.
   */
  ngOnInit() {
    this.builderUiService.setDefaultSettingsPortal(this.settingsPortal);
    this.edit();
    this.historyService.commitPush$.pipe(
      filter(({ id }) => {
        const [type, changeId] = id.split(":");
        return type === "body" && !changeId;
      }),
      takeUntil(this.destroyed)
    ).subscribe(({ diff }) => {
      mergeObjects(this.value.general, applyDiff(this.value.general, diff));
      this.valueChange.next(this.value);
      this.changeDetectorRef.markForCheck();
    });
  }

  /**
   * Shows the template list.
   *
   * @param $event The mouse event.
   * @returns void.
   */
  showTemplateList($event: Event): void {
    $event.preventDefault();
    this.contentPart$.next("templates");
  }

  /**
   * Changes the value of the component.
   *
   * @param template The IPEmail object to be set as the new value.
   * @returns void.
   */
  changeValue(template: IPEmail): void {
    this.value = template;
    this.valueChange.next(template);
    this.contentPart$.next(null);
  }

  /**
   * Overrides markForCheck method of Angular's ChangeDetectorRef class to return a boolean value.
   *
   * @returns true if the portal outlet is attached to the component, false otherwise.
   */
  override markForCheck(): boolean {
    return this.builderUiService.portalOutletHasAttached();
  }
}

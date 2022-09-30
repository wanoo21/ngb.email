import { Directive, EventEmitter, HostBinding, HostListener, Input, OnInit, Output } from "@angular/core";
import { BehaviorSubject, filter, takeUntil } from "rxjs";
import { applyDiff } from "recursive-diff";

import { WithSettings } from "./WithSettings";
import { IPEmail } from "../body/body";
import { cloneDeep, createBackground, createPadding, mergeObjects } from "../tools/utils";
import { TDirection } from "../interfaces";
import { Structure } from "../structure/structure";
import { IIPValueChanged } from "./ValueChanged";

@Directive()
export abstract class AIPEmailBody extends WithSettings implements OnInit, IIPValueChanged<IPEmail> {
  @Input() value!: IPEmail;
  @Output() valueChange = new EventEmitter<IPEmail>();
  contentPart$ = new BehaviorSubject<null | "templates">(null);

  #directionLabels = new Map<TDirection, string>([
    ["ltr", $localize`:@@direction_ltr:Left to right`],
    ["rtl", $localize`:@@direction_rtl:Right to left`]
  ]);

  get directionKeys() {
    return this.#directionLabels.keys();
  }

  get directionOptions() {
    return [...this.directionKeys].map(dir => ({ label: this.getDirectionLabel(dir), value: dir }));
  }

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

  @HostBinding("attr.dir")
  get dir(): string {
    return this.value.general.direction;
  }

  getDirectionLabel(dir: TDirection): string {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.#directionLabels.get(dir)!;
  }

  @HostListener("click") onClick() {
    this.edit();
  }

  deleteStructure(structure: Structure): void {
    const indexOf = this.value.structures.indexOf(structure);
    this.value.structures.splice(indexOf, 1);
  }

  duplicateStructure(structure: Structure): void {
    const indexOf = this.value.structures.indexOf(structure);
    this.value.structures.splice(indexOf, 0, cloneDeep(structure));
  }

  ngOnInit() {
    // Always show general settings if nothing is editing
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

  showTemplateList($event: Event): void {
    $event.preventDefault();
    this.contentPart$.next("templates");
  }

  changeValue(template: IPEmail): void {
    this.value = template;
    this.valueChange.next(template);
    this.contentPart$.next(null);
  }

  override markForCheck(): boolean {
    return this.builderUiService.portalOutletHasAttached();
  }
}

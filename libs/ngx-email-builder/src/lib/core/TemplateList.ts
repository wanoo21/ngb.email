import { Directive, EventEmitter, inject, Output } from "@angular/core";
import { ReplaySubject, take, tap } from "rxjs";

import { IIPEmail } from "../body/body";
import { AIPEmailBuilderRestService } from "../services";
import { IUserTemplateCategory } from "../interfaces";

@Directive()
export abstract class AIPTemplateList {
  @Output() selected = new EventEmitter<IIPEmail>();
  selectedCategory$ = new ReplaySubject<IUserTemplateCategory>();

  readonly restService = inject(AIPEmailBuilderRestService);
  tmplCategories$ = this.restService.tmplCategories$().pipe(
    tap(([category]) => this.selectedCategory$.next(category))
  );

  selectCategory(category: IUserTemplateCategory): void {
    this.selectedCategory$.next(category);
  }

  selectTemplate(category: string, template: string): void {
    this.restService.tmplCategories$(category, template).pipe(take(1)).subscribe(template => {
      this.selected.next(template);
    });
  }
}

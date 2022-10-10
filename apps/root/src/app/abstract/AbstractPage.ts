/*
 * Copyright (c) 2022.
 */

import { Directive, HostBinding, inject } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Directive()
export abstract class AbstractPage {
  readonly meta = inject(Meta);
  readonly title = inject(Title);

  @HostBinding("class.mat-typography") defaultTypography = true;
  @HostBinding("class.bg-gray-200") defaultBg = true;

  protected constructor(title: string, description: string) {
    this.title.setTitle(title);
    this.meta.updateTag({ name: "description", content: description });
  }
}

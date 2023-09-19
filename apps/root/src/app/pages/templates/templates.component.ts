import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BehaviorSubject, filter, map, tap } from "rxjs";
import { IUserTemplateCategory, TemplateThumbPathPipe } from "@wlocalhost/ngx-email-builder";

import { AbstractPage } from "../../abstract/AbstractPage";
import { SharedModule } from "../../shared/shared.module";

@Component({
  selector: "wlocalhost-templates",
  templateUrl: "./templates.component.html",
  styleUrls: ["./templates.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    SharedModule,
    TemplateThumbPathPipe
  ],
  standalone: true
})
export class TemplatesComponent extends AbstractPage {
  currentCategory = new BehaviorSubject<IUserTemplateCategory | null>(null);
  categories$ = this.activatedRoute.data.pipe<IUserTemplateCategory[], IUserTemplateCategory[]>(
    map(({ categories }) => categories),
    tap(([category]) => this.currentCategory.next(category))
  );
  templates$ = this.currentCategory.pipe(
    filter(Boolean),
    // Template name must contain category
    map(({ templates, category }) => templates.length ? templates.map(template => `${category}-${template}`) : null)
  );

  constructor(readonly activatedRoute: ActivatedRoute) {
    super("Email Templates", "A collection of email templates built by Angular email template builder", true);
  }

  changeTemplates(category: IUserTemplateCategory): void {
    this.currentCategory.next(category);
  }

  selectTemplate(template: any) {
    
  }
}

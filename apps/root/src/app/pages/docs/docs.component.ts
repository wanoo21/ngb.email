import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map, Observable, tap } from "rxjs";

import { AbstractPage } from "../../abstract/AbstractPage";
import { SharedModule } from "../../shared/shared.module";
import { MarkdownPipe } from "../../pipes/markdown.pipe";

interface ArticleLink {
  header: string;
  description: string;
  markdownKey: string | null;
}

@Component({
  selector: "wlocalhost-docs",
  templateUrl: "./docs.component.html",
  styleUrls: ["./docs.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    SharedModule,
    MarkdownPipe
  ],
  standalone: true
})
export class DocsComponent extends AbstractPage implements OnInit {
  links: ArticleLink[] = [
    {
      header: "Get started",
      description: "some description",
      markdownKey: null
    },
    {
      header: "Custom theme",
      description: "Create your custom theme",
      markdownKey: "custom-theme"
    }
  ];
  currentArticle$!: Observable<NonNullable<ArticleLink["markdownKey"]>>;

  constructor(readonly activatedRoute: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
    this.currentArticle$ = this.activatedRoute.queryParamMap.pipe(
      map(params => params.get("q") || "get-started"),
      tap(key => {
        const {
          header,
          description
        } = this.links.find(({ markdownKey }) => markdownKey === key || key === "get-started" && !markdownKey)!;
        this.setTitle(header);
        this.setDescription(description);
      })
    );
  }
}

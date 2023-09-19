import { Pipe, PipeTransform } from "@angular/core";
import { catchError, exhaustMap, from, map, Observable, of, switchMap } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Pipe({
  name: "markdown",
  standalone: true
})
export class MarkdownPipe implements PipeTransform {

  constructor(readonly http: HttpClient) {
  }

  transform(markdownArticlePath: string | Observable<string>): Observable<string> {
    const observable = typeof markdownArticlePath === "string" ? of(markdownArticlePath) : markdownArticlePath;
    return observable.pipe(
      exhaustMap(markdownKey => this.http.get(`/assets/docs/${markdownKey}.md`, {
        responseType: "text"
      })),
      switchMap(content => from(import("marked")).pipe(map(({ marked }) => marked(content)))),
      // switchMap(markedContent => from(import("prismjs")).pipe(map(prism => prism.highlight(markedContent, 'ts')))),
      catchError(e => {
        console.log(e);
        return of("Content not found");
      })
    );
  }
}

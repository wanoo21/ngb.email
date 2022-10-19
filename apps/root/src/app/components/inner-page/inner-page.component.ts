import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "wlocalhost-inner-page",
  templateUrl: "./inner-page.component.html",
  styleUrls: ["./inner-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InnerPageComponent {
  constructor(readonly titleService: Title, readonly meta: Meta) {
  }

  get title(): string {
    return this.titleService.getTitle();
  }

  get description(): string | undefined {
    return this.meta.getTag("name=description")?.content;
  }
}

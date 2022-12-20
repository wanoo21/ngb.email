import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { MatSidenavModule } from "@angular/material/sidenav";

@Component({
  selector: "wlocalhost-inner-page",
  templateUrl: "./inner-page.component.html",
  styleUrls: ["./inner-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatSidenavModule
  ]
})
export class InnerPageComponent {
  // A simple input just to trigger change detection outside ot this component
  @Input() markForCheck: unknown;

  constructor(readonly titleService: Title, readonly meta: Meta) {
  }

  get title(): string {
    return this.titleService.getTitle();
  }

  get description(): string | undefined {
    return this.meta.getTag("name=description")?.content;
  }
}

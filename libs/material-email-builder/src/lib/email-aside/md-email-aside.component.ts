import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from "@angular/core";
import { AIPEmailBuilderAside } from "@wlocalhost/ngx-email-builder";
import { tap } from "rxjs";
import { MatLegacyTabGroup as MatTabGroup } from "@angular/material/legacy-tabs";

@Component({
  selector: "md-email-aside",
  templateUrl: "./md-email-aside.component.html",
  styleUrls: ["./md-email-aside.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MdEmailAsideComponent extends AIPEmailBuilderAside implements OnInit {
  @ViewChild(MatTabGroup, { static: true }) readonly matTabGroup!: MatTabGroup;
  currentSettings$ = this.builderUiService.currentSettingsPortal$.pipe(
    tap(() => {
      this.matTabGroup.selectedIndex = 2;
    })
  );
}

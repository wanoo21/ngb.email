import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "wlocalhost-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
}

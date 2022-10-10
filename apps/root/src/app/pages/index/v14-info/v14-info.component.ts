import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: "wlocalhost-v14-info",
  templateUrl: "./v14-info.component.html",
  styleUrls: ["./v14-info.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatCardModule
  ],
  standalone: true
})
export class V14InfoComponent {
}

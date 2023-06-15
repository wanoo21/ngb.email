import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "wlocalhost-v14-info",
  templateUrl: "./v14-info.component.html",
  styleUrls: ["./v14-info.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule
  ],
  standalone: true
})
export class V14InfoComponent {
}

import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatExpansionModule } from "@angular/material/expansion";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";

@Component({
  selector: "wlocalhost-v14-info",
  templateUrl: "./v14-info.component.html",
  styleUrls: ["./v14-info.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    FormsModule,
    MatInputModule
  ],
  standalone: true
})
export class V14InfoComponent {
}

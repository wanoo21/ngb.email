import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MatLegacyCardModule as MatCardModule } from "@angular/material/legacy-card";
import { MatLegacyButtonModule as MatButtonModule } from "@angular/material/legacy-button";
import { MatExpansionModule } from "@angular/material/expansion";
import { FormsModule } from "@angular/forms";
import { MatLegacyInputModule as MatInputModule } from "@angular/material/legacy-input";

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

import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AIPImageUpload } from "@wlocalhost/ngx-email-builder/core";

@Component({
  selector: "ip-image-upload",
  templateUrl: "./image-upload.component.html",
  styleUrls: ["./image-upload.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageUploadComponent extends AIPImageUpload {
}

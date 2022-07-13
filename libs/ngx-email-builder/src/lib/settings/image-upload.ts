import { AbsComponent } from "@ngcomma/ngx-abstract";
import { Directive, EventEmitter, Input, Output } from "@angular/core";

@Directive()
export abstract class AIPImageUpload extends AbsComponent {
  @Input() src!: string;
  @Output() srcChange = new EventEmitter();
}

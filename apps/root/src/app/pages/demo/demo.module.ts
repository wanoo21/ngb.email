import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DemoRoutingModule } from "./demo-routing.module";
import { DemoComponent } from "./demo/demo.component";
import { SharedModule } from "../../shared/shared.module";
import { ClipboardModule } from "@angular/cdk/clipboard";

@NgModule({
  declarations: [DemoComponent],
  imports: [CommonModule, DemoRoutingModule, SharedModule, ClipboardModule]
})
export class DemoModule {
}

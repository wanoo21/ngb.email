import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClipboardModule } from "@angular/cdk/clipboard";
import { MatChipsModule } from "@angular/material/chips";

import { DemoRoutingModule } from "./demo-routing.module";
import { DemoComponent } from "./demo/demo.component";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [DemoComponent],
  imports: [CommonModule, DemoRoutingModule, SharedModule, ClipboardModule, MatChipsModule]
})
export class DemoModule {
}

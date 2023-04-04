import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { remoteRoutes } from './entry.routes';
import { TailwindEmailBuilderModule } from "@wlocalhost/ngx-tailwind-email-builder";

@NgModule({
  declarations: [RemoteEntryComponent, NxWelcomeComponent],
  imports: [CommonModule, RouterModule.forChild(remoteRoutes), TailwindEmailBuilderModule],
  providers: [],
})
export class RemoteEntryModule {}

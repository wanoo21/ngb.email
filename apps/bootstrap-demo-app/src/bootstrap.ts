import { ViewEncapsulation } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { RemoteEntryModule } from "./app/remote-entry/entry.module";

platformBrowserDynamic()
  .bootstrapModule(RemoteEntryModule, {
    defaultEncapsulation: ViewEncapsulation.Emulated
  })
  .catch((err) => console.error(err));

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { RemoteEntryModule } from "./app/remote-entry/entry.module";

platformBrowserDynamic()
  .bootstrapModule(RemoteEntryModule)
  .catch((err) => console.error(err));

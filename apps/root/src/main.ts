import { setRemoteDefinitions } from "@nrwl/angular/mf";

Promise.resolve().then(
  () => setRemoteDefinitions({
    "tailwind-demo-app": "http://localhost:4201"
  })
).then(() => import('./bootstrap')).catch(err => console.error(err));

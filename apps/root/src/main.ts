import { setRemoteDefinitions } from '@nx/angular/mf';

Promise.resolve()
  .then(() =>
    setRemoteDefinitions({
      'tailwind-demo-app': 'http://localhost:4201',
      'material-demo-app': 'http://localhost:4202',
      'bootstrap-demo-app': 'http://localhost:4203',
      'primeng-demo-app': 'http://localhost:4204',
    })
  )
  .then(() => import('./bootstrap'))
  .catch((err) => console.error(err));

module.exports = {
  name: 'material-demo-app',
  exposes: {
    './Module': 'apps/material-demo-app/src/app/remote-entry/entry.module.ts',
    './Component': 'apps/material-demo-app/src/app/remote-entry/entry.component.ts',
  },
};

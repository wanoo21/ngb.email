module.exports = {
  name: "bootstrap-demo-app",
  exposes: {
    "./Module": "apps/bootstrap-demo-app/src/app/remote-entry/entry.module.ts",
    "./Component": "apps/bootstrap-demo-app/src/app/remote-entry/entry.component.ts"
  }
};

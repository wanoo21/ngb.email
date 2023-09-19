module.exports = {
  name: "primeng-demo-app",
  exposes: {
    "./Module": "apps/primeng-demo-app/src/app/remote-entry/entry.module.ts",
    "./Component": "apps/primeng-demo-app/src/app/remote-entry/entry.component.ts"
  }
};

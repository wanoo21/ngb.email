module.exports = {
  name: "tailwind-demo-app",
  exposes: {
    "./Module": "apps/tailwind-demo-app/src/app/remote-entry/entry.module.ts",
    "./Component": "apps/tailwind-demo-app/src/app/remote-entry/entry.component.ts"
  }
};

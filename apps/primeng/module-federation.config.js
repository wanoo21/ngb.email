const coreLibraries = new Set([
  // "@wlocalhost/ngx-primeng-email-builder",
  "@wlocalhost/ngx-email-builder",
  "@wlocalhost/ngx-abstract"
]);

module.exports = {
  name: "primeng",
  shared: (libraryName, defaultConfig) => {
    if (coreLibraries.has(libraryName)) {
      return defaultConfig;
    }
    // Returning false means the library is not shared.
    return false;
  },
  exposes: {
    "./Module": "apps/primeng/src/app/remote-entry/entry.module.ts"
  }
};

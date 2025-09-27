// import esbuildPluginTsc from "esbuild-plugin-tsc";

export function createBuildSettings(options) {
  return {
    entryPoints: ["src/index.ts"],
    outfile: "dist/js/bundle.js",
    bundle: true,
    format: "esm",
    // platform: "node",
    // packages: "external",
    //
    // plugins: [
    //   esbuildPluginTsc({
    //     force: true,
    //   }),
    // ],
    ...options,
  };
}

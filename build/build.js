import * as esbuild from "esbuild";
import { createBuildSettings } from "./settings.js";

const settings = createBuildSettings({ minify: true });

(async () => {
  await esbuild.build(settings);
})();

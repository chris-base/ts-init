import esbuild from "esbuild";
import { createBuildSettings } from "./settings.js";

const sseHandler = () => {
  const evS = new EventSource("/esbuild");
  evS.addEventListener("change", () => location.reload());
  evS.addEventListener("error", () => {
    console.error("Error: sse polling closing...");
    evS.close();
  });
};

(async () => {
  const settings = createBuildSettings({
    sourcemap: true,
    banner: {
      js: "(" + sseHandler.toString() + ")()",
    },
  });

  const ctx = await esbuild.context(settings);

  await ctx.watch();

  const { hosts, port } = await ctx.serve({
    host: "127.0.0.1",
    port: 1337,

    servedir: "dist",
    fallback: "dist/index.html",
  });

  console.log(`Serving app at ${hosts}:${port}.`);
})();

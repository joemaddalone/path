require("esbuild")
  .build({
    entryPoints: ["src/index.js", "src/api.js", "src/macros.js" ],
    bundle: true,
    platform: "browser",
    outdir: "public",
    define: {
      "process.env.NODE_ENV": '"development"',
	},
    // watch: {
    //   onRebuild(error, result) {
    //     if (error) console.error("watch build failed:", error);
    //     else console.error("watch build succeeded:", result);
    //   },
    // },
  })
  .catch(() => process.exit(1));

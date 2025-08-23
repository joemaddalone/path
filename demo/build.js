require("esbuild")
  .build({
    entryPoints: ["src/index.js", "src/api.js", "src/macros.js" ],
    bundle: true,
    platform: "browser",
    outdir: "public",
    define: {
      "process.env.NODE_ENV": '"development"',
	},
    watch: {
      onRebuild(error, result) {
        if (error) console.error("watch build failed:", error);
        else console.error("watch build succeeded:", result);
      },
    },
  })
  .catch(() => process.exit(1));

// const esbuild = require("esbuild");

// // workaround for https://github.com/evanw/esbuild/issues/730
// esbuild.startService().then((service) =>
//   service.build({
//     entryPoints: ["src/app.jsx"],
//     bundle: true,
//     platform: "browser",
//     minify: true,
//     outfile: "public/index.js",
//     define: {
//       "process.env.NODE_ENV": '"production"',
//     },
//     watch: {
//       onRebuild(error, result) {
//         if (error) console.error("watch build failed:", error);
//         else console.error("watch build succeeded:", result);
//       },
//     },
//   })
// );
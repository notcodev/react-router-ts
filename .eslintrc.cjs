const { configure, presets } = require("eslint-kit");

module.exports = configure({
  allowDebug: process.env.NODE_ENV !== "production",
  extend: {
    root: true,
    ignorePatterns: ["dist", ".eslintrc.cjs"],
  },
  presets: [
    presets.prettier(),
    presets.node(),
    presets.react(),
    presets.typescript(),
    presets.imports({ sort: { newline: true } }),
  ],
});

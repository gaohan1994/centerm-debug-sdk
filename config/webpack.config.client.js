const paths = require("./paths");

module.exports = {
  mode: "development",
  entry: paths.clientEntry,
  output: {
    path: paths.clientOutput,
    filename: "bundle.[Hash:8].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        include: paths.clientSrc,
        loader: require.resolve("babel-loader"),
        options: {
          babelrc: true,
          configFile: false,
          compact: false,
          cacheDirectory: true,
          // See #6846 for context on why cacheCompression is disabled
          cacheCompression: false,

          // Babel sourcemaps are needed for debugging into node_modules
          // code.  Without the options below, debuggers like VSCode
          // show incorrect code and set breakpoints on the wrong lines.
          sourceMaps: true,
          inputSourceMap: true,
        },
      },
    ],
  },
};

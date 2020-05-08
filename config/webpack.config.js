const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const paths = require("./paths");

module.exports = function (env = "development") {
  const isProduction = env === "production";
  const isDevelopment = env === "development";
  return {
    mode: env,
    entry: paths.appEntry,
    output: {
      path: paths.appOutput,
      filename: isDevelopment
        ? `bundle.${env}.[contenthash:8].js`
        : "bundle.[contenthash:8].js",
    },
    module: {
      rules: [
        {
          test: /\.(js|mjs|jsx|ts|tsx)$/,
          include: paths.appSrc,
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
            // sourceMaps: !!isDevelopment,
            // inputSourceMap: !!isDevelopment
          },
        },
      ],
    },
    plugins: [
      new UglifyJsPlugin(
        Object.assign(
          {},
          {
            sourceMap: !!isDevelopment,
            parallel: !!isDevelopment,
          },
          !!isDevelopment
            ? {
                uglifyOptions: {
                  compress: {
                    warnings: false,
                  },
                },
              }
            : undefined
        )
      ),
    ],
  };
};

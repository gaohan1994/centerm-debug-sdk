const webpack = require("webpack");
const webpackConfig = require("../config/webpack.config");

/**
 * @param {process.env} string
 * ```js
 * webpackConfig(process.env)
 * ```
 */
const config = webpackConfig("development");

webpack(config).run((error, stats) => {
  console.log("error: ", error);
  console.log("stats", stats);
});

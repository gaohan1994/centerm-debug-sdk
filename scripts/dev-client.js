const WebpackDevServer = require("webpack-dev-server");
const webpack = require("webpack");
const configFactory = require("../config/webpack.config.client");
const webpackDevServerConfig = require("../config/webpackDevServer.config");

const compiler = webpack(configFactory);
// const devServer = new WebpackDevServer(compiler, {
//   contentBase: "client",
//   hot: true,
//   filename: "bundle.js",
//   publicPath: "/",
//   stats: {
//     colors: true,
//   },
// });
const devServer = new WebpackDevServer(compiler, webpackDevServerConfig);

devServer.listen(8888, "localhost", (error) => {
  if (error) {
    return console.log(error);
  }
});

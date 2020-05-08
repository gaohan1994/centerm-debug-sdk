const WebpackDevServer = require("webpack-dev-server");
const webpack = require("webpack");
const configFactory = require("../config/webpack.config.client");
const webpackDevServerConfig = require("../config/webpackDevServer.config");

const compiler = webpack(configFactory);
const devServer = new WebpackDevServer(compiler, webpackDevServerConfig);

devServer.listen(9999, "0.0.0.0", (error) => {
  if (error) {
    return console.log(error);
  }

  ["SIGINT", "SIGTERM"].forEach(function (sig) {
    process.on(sig, function () {
      devServer.close();
      process.exit();
    });
  });
});

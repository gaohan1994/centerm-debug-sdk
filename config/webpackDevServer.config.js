const paths = require("../config/paths");

module.exports = {
  compress: true,
  contentBase: paths.clientPublicPath,
  watchContentBase: true,
  hot: true,
};

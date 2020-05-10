const paths = require("../config/paths");

module.exports = {
  contentBase: paths.clientOutput,
  hot: true,
  filename: "bundle.js",
  stats: {
    colors: true,
  },
};

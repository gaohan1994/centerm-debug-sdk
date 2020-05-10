const paths = require("./paths");

module.exports = {
  mode: "development",
  entry: paths.clientEntry,
  output: {
    path: paths.clientOutput,
    filename: "bundle.js",
  },
  // devServer: {
  //   port: 9999, //设置监听端口（默认的就是8080）
  //   contentBase: paths.clientPublicPath, //本地服务器所加载的页面所在的目录
  //   colors: true, //终端中输出结果为彩色
  //   historyApiFallback: true, //不跳转，用于开发单页面应用，依赖于HTML5 history API 设置为true点击链接还是指向index.html
  // },
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

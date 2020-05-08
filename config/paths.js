const path = require("path");
const fs = require("fs");

/**
 * @todo [获取项目的真实路径]
 * @function getAppRelativePath [返回传入路径的path]
 * ```js
 * getAppRelativePath('src/index.js');
 * ```
 */
const appDir = fs.realpathSync(process.cwd());
const getAppRelativePath = (relativePath) => path.resolve(appDir, relativePath);

module.exports = {
  appEntry: getAppRelativePath("src/index.js"),
  appOutput: getAppRelativePath("dist"),
  appSrc: getAppRelativePath("src"),
  clientEntry: getAppRelativePath("demo/index.js"),
  clientOutput: getAppRelativePath("client"),
  clientSrc: getAppRelativePath("demo"),
  clientPublicPath: getAppRelativePath("demo/public"),
};

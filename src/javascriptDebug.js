import { JavascriptErrorInfo } from "./index";
import { uploadType } from "./config";

class JavascriptDebug {
  constructor() {
    this.recordJavascriptError();
  }
  /**
   * 使用 window.onerror 来监控报错
   * 当 window.onerror 没有生效的时候重写 console.error
   * 监控页面 javascriptError
   *
   * @memberof JavascriptErrorInfo
   */
  recordJavascriptError = () => {
    /**
     * 重写 console.error
     */
    const olrConsoleError = console.error;

    console.error = function() {
      /**
       * 如果错误message是string类型那么直接赋值，如果是对象则真正的信息在message中
       */
      const errorMessage =
        typeof arguments[0] === "string" ? arguments[0] : arguments[0].message;

      /**
       * 如果错误message是string类型那么直接赋值，如果是对象则真正的信息在stack中
       */
      const errorStack =
        typeof arguments[0] === "string" ? arguments[0] : arguments[0].stack;
      return olrConsoleError.apply(console, arguments);
    };
  };

  /**
   * @param {string} errorMessage
   * 报错信息
   *
   * @param {string} url
   * 报错页面 url
   *
   * @param {number} linerNumber
   * 报错代码行数
   *
   * @param {number} columnNumber
   * 报错代码列数
   *
   * @param {object} errorStack
   * 报错 Error stack
   *
   * @memberof JavascriptDebug
   */
  uploadMessage = (
    errorMessage,
    url,
    linerNumber,
    columnNumber,
    errorStack
  ) => {
    //
    let errorType = "";
    if (errorMessage && errorStack) {
      errorType = JSON.stringify(errorStack)
        .split(": ")[0]
        .replace('"', "");
    }

    const javascriptErrorInfo = new JavascriptErrorInfo(
      uploadType.jsError,
      `${errorType}: ${errorMessage}`,
      errorStack
    );
  };
}

export default JavascriptDebug;

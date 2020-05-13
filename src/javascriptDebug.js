import { JavascriptErrorInfo } from "./index";
import { uploadType } from "./config";

class JavascriptDebug {
  constructor() {
    /**
     * @param {boolean} jsMonitorStarted
     * window.onerror 是否已经启用
     */
    this.jsMonitorStarted = false;
    this.recordJavascriptError();
  }

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
    source,
    linerNumber,
    columnNumber,
    errorStack
  ) => {
    // console.log("errorMessage", errorMessage);
    // console.log("source", source);
    // console.log("linerNumber", linerNumber);
    // console.log("columnNumber", columnNumber);
    // console.log("errorStack", errorStack);
    let errorType = "";
    if (errorMessage && errorStack) {
      errorType = JSON.stringify(errorStack)
        .split(": ")[0]
        .replace('"', "");
    }
    console.log("uploadType.jsError ", uploadType.jsError);
    console.log(
      "`${errorType}: ${errorMessage}` ",
      `${errorType}: ${errorMessage}`
    );
    console.log("errorStack;", errorStack);
    const javascriptErrorInfo = new JavascriptErrorInfo(
      uploadType.jsError,
      `${errorType}: ${errorMessage}`,
      errorStack
    );
  };
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
    const that = this;
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

      /**
       * window.onerror 还没有启用重写 console.error
       */
      if (!that.jsMonitorStarted) {
        that.uploadMessage(
          errorMessage,
          window && window.location.href,
          0,
          0,
          errorStack
        );
      }
      return olrConsoleError.apply(console, arguments);
    };

    /**
     * 监听 window.onerror
     */
    window.onerror = function(event, source, lineno, colno, error) {
      /**
       * 已经监听 window.onerror
       */
      that.jsMonitorStarted = true;
      const errorStack = error && error.stack;
      that.uploadMessage(event, source, lineno, colno, errorStack);
    };
  };
}

export default JavascriptDebug;

import invariant from 'invariant';
import { JavascriptErrorInfo } from './index';
import { errorType as uploadType, netConfig } from './config';
import storage from './storage';

class JavascriptDebug {
  constructor() {
    /**
     * @param {boolean} jsMonitorStarted
     * window.onerror 是否已经启用
     */
    this.jsMonitorStarted = false;
    /**
     * this.recordJavascriptError();
     * 开启 javascriptDebug
     */
    this.recordJavascriptError();
    /**
     * @param {Timer} timer
     * 统计数据定时器
     */
    this.timer;
    /**
     * this.initErrorInfoTimer()
     * 开启错误上报 计时器
     */
    // this.initErrorInfoTimer();
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
    let errorType = '';
    if (errorMessage && errorStack) {
      errorType = JSON.stringify(errorStack).split(': ')[0].replace('"', '');
    }
    const javascriptErrorInfo = new JavascriptErrorInfo(
      uploadType.jsError,
      `${errorType}: ${errorMessage}`,
      errorStack
    );

    const uploadErrorInfo = javascriptErrorInfo.getUploadErrorInfo();
    this.pushUploadErrorInfoList(uploadErrorInfo);
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
    console.error = function () {
      /**
       * 如果错误message是string类型那么直接赋值，如果是对象则真正的信息在message中
       */
      const errorMessage =
        typeof arguments[0] === 'string' ? arguments[0] : arguments[0].message;

      /**
       * 如果错误message是string类型那么直接赋值，如果是对象则真正的信息在stack中
       */
      const errorStack =
        typeof arguments[0] === 'string' ? arguments[0] : arguments[0].stack;

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
    window.onerror = function (event, source, lineno, colno, error) {
      /**
       * 已经监听 window.onerror
       */
      that.jsMonitorStarted = true;
      const errorStack = error && error.stack;
      that.uploadMessage(event, source, lineno, colno, errorStack);
    };
  };

  /**
   * 将 errorinfo 存入 localstorage 中
   * @param {string} type 错误的类型
   * @param {object} errorInfoPayload 准备上送报文的错误日志
   *
   * @memberof BaseComponent
   */
  pushUploadErrorInfoList = (errorInfoPayload) => {
    storage.pushStorage(
      errorInfoPayload.errorType || uploadType.jsError,
      errorInfoPayload
    );
  };

  /**
   * 启动定时上报计时器
   *
   * @memberof BaseComponent
   */
  initErrorInfoTimer = () => {
    /**
     * @param {number} timeCount
     */
    let timeCount = 0;
    this.timer = setInterval(() => {
      /**
       * 10秒钟进行一次数据的检查
       */
      if (timeCount >= 1000 * 3) {
        const storageErrorInfo = storage.getStorageErrorData();
        if (storageErrorInfo.length > 0) {
          this.fetchErrorInfo(storageErrorInfo);
        }
        /**
         * @param 重置计时器
         */
        timeCount = 0;
      }
      timeCount += 1000;
    }, 1000);
  };

  fetchErrorInfo = (errorInfoList) => {
    try {
      console.log('要上报的错误日志', errorInfoList);
      invariant(
        errorInfoList && errorInfoList.length > 0,
        '请传入要上报的错误日志'
      );

      fetch(`${netConfig.requsetUrl}/api/v1/upload`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ errorInfo: errorInfoList }),
      }).then((resposne) => {
        console.log('resposne: ', resposne);
        storage.clearStorage();
      });
    } catch (error) {
      console.warn(error.message);
    }
  };
}

export default JavascriptDebug;

import BaseComponent from "./baseComponent";

class JavascriptErrorInfo extends BaseComponent {
  constructor(errorType, errorMessage, errorStack) {
    super();
    this.errorType = errorType;
    this.errorMessage = errorMessage;
    this.errorStack = errorStack;
  }

  /**
   * 上传 javascriptErrorInfo 接口
   *
   * @param {string} type
   * 上传错误的类型 默认是 jsError
   *
   * @param {object} javascriptErrorInfo
   * 具体的错误信息 应该是错误的实体类
   *
   * @return {object} payload
   * 返回需要上传的对象
   *
   * @memberof BaseComponent
   */
  getUploadErrorInfo = () => {
    const errorInfo = {
      errorMessage: this.errorMessage,
      errorStack: this.errorStack
    };
    const payload = {
      ...this.getBaseUploadErrorInfoPayload(),
      errorType: this.errorType,
      errorInfo
    };
    return payload;
  };
}

export default JavascriptErrorInfo;

import BaseComponent from "./baseComponent";

class JavascriptErrorInfo extends BaseComponent {
  constructor(options) {
    super();
    const { uploadType, errorMessage, errorStack } = this.constructorError(
      options
    );
    this.uploadType = uploadType;
    this.errorMessage = errorMessage;
    this.errorStack = errorStack;
  }

  constructorError = options => {
    const { uploadType, errorMessage, errorStack } = options;
    return { uploadType, errorMessage, errorStack };
  };
}

export default JavascriptErrorInfo;

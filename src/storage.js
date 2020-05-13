import { uploadType } from "./config";
class JavascriptErrorStorage {
  constructor() {
    /**
     * 初始化 storage
     */
    this.baseErrorKey = "CENTERM_";
    this.storage = (window && window.localStorage) || {};
  }

  /**
   * 根据 error 类型生成不用的 key
   *
   * @memberof JavascriptErrorStorage
   */
  getErrorStorageKey = type => {
    return `${this.baseErrorKey}${type}`;
  };

  /**
   * 把存储数据转成 string 类型
   *
   * @memberof JavascriptErrorStorage
   */
  getSaveValue = value => {
    return typeof value === "string" ? value : JSON.stringify(value);
  };

  /**
   * 把提取出来的数据转化成 json 格式
   *
   * @memberof JavascriptErrorStorage
   */
  getReceiveValue = value => {
    return typeof value === "string" ? JSON.parse(value) : value;
  };

  /**
   * 存储 storage
   * ```js
   * javascriptErrorStorage.setStorage('JS_ERROR', {
   *  errorMessage: "hello"
   * });
   *
   * localStorage['JS_ERROR'] = [{ errorMessage: "hello" }];
   *
   *
   * javascriptErrorStorage.setStorage('JS_ERROR', [{
   *  errorMessage: "hello"
   * }, {
   *  errorMessage: "world"
   * }]);
   *
   * localStorage['JS_ERROR'] = [{ errorMessage: "hello" }, { errorMessage: "world" }];
   * ```
   *
   * @memberof JavascriptErrorStorage
   */
  setStorage = (type, errorInfo) => {
    this.storage.setItem(
      this.getErrorStorageKey(type),
      this.getSaveValue(!!Array.isArray(errorInfo) ? errorInfo : [errorInfo])
    );
  };

  /**
   * 获取 storage
   *
   * @memberof JavascriptErrorStorage
   */
  getStorage = type => {
    const value = this.storage.getItem(this.getErrorStorageKey(type));
    return !!value ? this.getReceiveValue(value) : [];
  };

  /**
   * 将 storage 中的数据清空
   *
   * @memberof JavascriptErrorStorage
   */
  clearStorage = () => {
    for (let key of uploadType) {
      console.log("key", key);
      this.storage.setStorage(this.getErrorStorageKey(key), []);
    }
  };

  /**
   * 插入一条 errorinfo
   *
   * @memberof JavascriptErrorStorage
   */
  pushStorage = (type, errorInfo) => {
    const currentStorage = this.getStorage(type);
    const newErrorArray = !!Array.isArray(errorInfo)
      ? currentStorage.concat(errorInfo)
      : currentStorage.push(errorInfo);

    this.setStorage(type, newErrorArray);
  };

  /**
   * 获取本地错误参数
   *
   * @memberof JavascriptErrorStorage
   */
  getStorageErrorData = type => {
    let data = {};
    if (!type) {
      for (let key in uploadType) {
        const currentData = this.getStorage(this.getErrorStorageKey(key));
        data[key] = currentData;
      }
    } else {
      const selectData = this.getStorage(this.getErrorStorageKey(type));
      data[type] = selectData;
    }
    return data;
  };
}

export default new JavascriptErrorStorage();

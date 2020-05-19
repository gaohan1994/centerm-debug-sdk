import { errorType } from './config';
class JavascriptErrorStorage {
  constructor() {
    /**
     * @param {string} baseErrorKey
     * 错误日志使用 storage 的 base key
     */
    this.baseErrorKey = 'CENTERM_';
    /**
     * @param {localStorage} storage
     */
    this.storage = (window && window.localStorage) || {};
    /**
     * @param {function} init
     * 初始化 storage 函数
     */
    this.init();
  }

  /**
   * 初始化 centerm error storage
   *
   * @memberof JavascriptErrorStorage
   */
  init = () => {
    for (let key in errorType) {
      const storageKey = this.getErrorStorageKey(errorType[key]);
      const currentData = this.storage.getItem(storageKey);
      if (!currentData) {
        this.storage.setItem(storageKey, JSON.stringify([]));
      }
    }
  };

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
    return typeof value === 'string' ? value : JSON.stringify(value);
  };

  /**
   * 把提取出来的数据转化成 json 格式
   *
   * @memberof JavascriptErrorStorage
   */
  getReceiveValue = value => {
    return typeof value === 'string' ? JSON.parse(value) : value;
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
    for (let key in errorType) {
      this.setStorage(errorType[key], []);
    }
  };

  /**
   * 插入一条 errorinfo
   *
   * @memberof JavascriptErrorStorage
   */
  pushStorage = (type, errorInfo) => {
    const currentStorage = this.getStorage(type);
    currentStorage.push(errorInfo);
    this.setStorage(type, currentStorage);
  };

  /**
   * 获取本地错误参数
   *
   * @memberof JavascriptErrorStorage
   */
  getStorageErrorData = type => {
    let data = [];
    if (!type) {
      for (let key in errorType) {
        const currentData = this.getStorage(errorType[key]);
        data = data.concat(currentData);
      }
      return data;
    }
    const selectData = this.getStorage(this.getErrorStorageKey(type));
    return selectData;
  };
}

export default new JavascriptErrorStorage();

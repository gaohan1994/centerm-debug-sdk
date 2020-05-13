import deviceInfo from "./deviceInfo";
import { uploadType } from "./config";
import storage from "./storage";
/**
 * @todo [基类]
 *
 * @author Ghan
 * @class BaseComponent
 */
class BaseComponent {
  constructor() {
    /**
     * @param {deviceInfo} 设备信息
     */
    this.deviceInfo = deviceInfo.getDeviceInfo();
    /**
     * @param {happenTime} string
     * @todo 报错时间
     */
    this.happenTime = new Date().getTime();
    /**
     * @param {appId} string;
     * @todo appId app唯一标识
     */
    this.appId = "";
    /**
     * @param {url} string;
     * @todo 当前浏览器url
     */
    this.url = window.location.href;
    /**
     * @param {userId} string;
     * @todo 用户标识
     */
    this.userId = "";
    /**
     * @param {pageKey} string;
     * @todo
     */
    this.pageKey = "";

    /**
     * @param {Timer} timer
     * 统计数据定时器
     */
    this.timer;

    // this.initErrorInfoTimer();
  }

  /**
   * 获取 url
   *
   * @memberof BaseComponent
   */
  getUrl = () => {
    return this.url;
  };

  /**
   * 设置 url
   *
   * @memberof BaseComponent
   */
  setUrl = () => {
    this.url = window.location.href;
  };

  /**
   * 获取上报错误的基本必要参数
   *
   * @memberof BaseComponent
   */
  getBaseUploadErrorInfoPayload = () => {
    return {
      deviceInfo: this.deviceInfo,
      happenTime: this.happenTime,
      appId: this.appId,
      url: this.url
    };
  };

  /**
   * 上传 javascriptErrorInfo 接口
   *
   * @param {string} type
   * 上传错误的类型 默认是 jsError
   *
   * @param {object} javascriptErrorInfo
   * 具体的错误信息 应该是错误的实体类
   *
   * @memberof BaseComponent
   */
  uploadErrorInfo = async (type = uploadType.jsError, javascriptErrorInfo) => {
    const payload = {
      ...this.getBaseUploadErrorInfoPayload(),
      javascriptErrorInfo
    };

    this.pushUploadErrorInfoList(type, payload);
  };

  /**
   * 将 errorinfo 存入 localstorage 中
   *
   * @memberof BaseComponent
   */
  pushUploadErrorInfoList = (type, errorInfoPayload) => {
    storage.pushStorage(type, errorInfoPayload);
  };

  /**
   * 启动定时上报计时器
   *
   * @memberof BaseComponent
   */
  initErrorInfoTimer = () => {
    console.log("initErrorInfoTimer");
    /**
     * @param {number} timeCount
     */
    let timeCount = 0;
    this.timer = setInterval(() => {
      /**
       * 10秒钟进行一次数据的检查并上传
       */
      if (timeCount >= 1000 * 5) {
        const storageErrorInfo = storage.getStorageErrorData();
        console.log("storageErrorInfo", storageErrorInfo);
        timeCount = 0;
      }
      timeCount++;
    }, 1000);
  };
}

export default BaseComponent;

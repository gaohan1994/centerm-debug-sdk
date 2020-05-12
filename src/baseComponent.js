import deviceInfo from "./deviceInfo";

/**
 * @todo [基类]
 *
 * @author Ghan
 * @class BaseComponent
 */
class BaseComponent {
  constructor(options = {}) {
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

  uploadErrorInfo = async javascriptErrorInfo => {
    const payload = {
      deviceInfo: this.deviceInfo,
      happenTime: this.happenTime,
      appId: this.appId,
      url: this.url,
      javascriptErrorInfo
    };
  };
}

export default BaseComponent;

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
    this.url = window.location.href.split("?")[0].replace("#", "");
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

  getUrl = () => {
    return this.url;
  };
}

export default BaseComponent;

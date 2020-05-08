import deviceInfo from "./deviceInfo";

/**
 * @todo [基类]
 *
 * @author Ghan
 * @class BaseComponent
 */
class BaseComponent {
  constructor() {
    this.deviceInfo = deviceInfo.getDeviceInfo();
    /**
     *
     */
    this.happenTime = new Date().getTime();
    this.appId = "";
    this.url = window.location.href.split("?")[0].replace("#", "");
    this.userId = "";
    this.pageKey = "";
    this.deviceName = "";
  }
}

export default BaseComponent;

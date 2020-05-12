import {
  browserInfo,
  osInfo,
  deviceInfo,
  matchMap,
  matchOsVersion
} from "./config";
class DeviceInfo {
  /**
   *Creates an instance of DeviceInfo.
   * @param {*} options
   *
   * @param {mode} development | production
   * 当前debug工具的环境 默认production
   *
   * @memberof DeviceInfo
   */
  constructor(options = {}) {
    /**
     * @param {navigator}
     * 初始化window.navigator 判断是否是浏览器环境
     *
     * @param {infoMap}
     * 初始化引擎、浏览器、操作系统、设备信息
     */
    const { mode } = options;
    this.mode = mode || "production";
    this.navigator = (typeof window !== undefined && window.navigator) || {};
    this.infoMap = {
      engine: ["WebKit", "Trident", "Gecko", "Presto"],
      browser: browserInfo,
      os: osInfo,
      device: deviceInfo
    };

    /**
     * @todo 初始化device类的属性
     *
     * @param {engine} string; 引擎
     * @param {browser} string; 浏览器信息
     * @param {os} string; 操作系统
     * @param {device} string; 设备信息
     * @param {version} string; 系统版本
     * @param {orientationStatus} string; 横竖屏状态
     * @param {netWork} string; 网络状态
     * @param {language} string; 语言
     */
    this.engine;
    this.browser;
    this.os;
    this.device = "PC";
    this.version;
    this.orientationStatus;
    this.netWork;
    this.language;
    this.ip;
    this.city;
    this.init();
  }

  isDevlopment = () => {
    return this.mode === "development";
  };

  isProduction = () => {
    return this.mode === "production";
  };

  getDeviceInfo() {
    const engine = this.getEngine();
    const browser = this.getBrowser();
    const os = this.getOs();
    const device = this.getDevice();
    const osVersion = this.getOsVersion();
    const netWork = this.getNetWork();
    const orientationStatus = this.getOrientationStatus();
    const language = this.getLanguage();
    const userAgent = (this.navigator && this.navigator.userAgent) || {};
    const city = this.city;
    const ip = this.ip;
    return {
      engine,
      browser,
      os,
      osVersion,
      device,
      netWork,
      orientationStatus,
      language,
      userAgent,
      city,
      ip
    };
  }

  getEngine = () => {
    return this.engine;
  };

  getBrowser = () => {
    return this.browser;
  };

  getOs = () => {
    return this.os;
  };

  getDevice = () => {
    return this.device;
  };

  setBaseInfo = () => {
    /**
     * @todo 获取当前浏览器的 userAgent 并通过 getMatchMap 方法获得对应的数据
     *
     * @todo 初始化engine browser os device
     *
     * @param {userAgent} userAgent
     */
    const userAgent = (this.navigator && this.navigator.userAgent) || {};
    const match = matchMap(userAgent);

    for (let infoKey in this.infoMap) {
      const currentInfo = this.infoMap[infoKey];
      for (let i = 0; i < currentInfo.length; i++) {
        const value = currentInfo[i];
        if (!!match[value]) {
          this[infoKey] = value;
        }
      }
    }
  };

  /**
   * @todo 获取操作系统的系统版本
   *
   * @memberof DeviceInfo
   */
  getOsVersion = () => {
    return this.version;
  };

  setOsVersion = () => {
    /**
     * @todo 初始化系统版本 version
     * @param {userAgent} userAgent
     */
    const userAgent = (this.navigator && this.navigator.userAgent) || {};
    const osVersion = matchOsVersion(userAgent);
    const version = this.os ? osVersion[this.os]() : "";
    this.version = version;
  };

  /**
   * @todo 获取设备横竖屏状态
   *
   * @memberof DeviceInfo
   */
  getOrientationStatus = () => {
    return this.orientationStatus;
  };

  /**
   * @todo 设置设备的横竖屏状态
   *
   * @memberof DeviceInfo
   */
  setOrientationStatus = () => {
    const orientation = window.matchMedia("(orientation: portrait)");
    if (orientation.matches) {
      this.orientationStatus = "竖屏";
    } else {
      this.orientationStatus = "横屏";
    }
  };

  /**
   * @todo 获取网络状态
   *
   * @memberof DeviceInfo
   */
  getNetWork = () => {
    return this.netWork;
  };

  /**
   * @todo 设置网络状态
   *
   * @memberof DeviceInfo
   */
  setNetWork = () => {
    this.netWork =
      this.navigator &&
      this.navigator.connection &&
      this.navigator.connection.effectiveType;
  };

  /**
   * @todo 获取系统语言
   *
   * @memberof DeviceInfo
   */
  getLanguage = () => {
    return this.language;
  };

  /**
   * @todo 设置系统语言
   *
   * @memberof DeviceInfo
   */
  setLanguage = () => {
    const language = this.navigator.browserLanguage || this.navigator.language;
    const languageArray = language.split("-");
    if (languageArray[1]) {
      languageArray[1] = languageArray[1].toUpperCase();
    }
    this.language = languageArray.join("_");
  };

  /**
   * @todo 获取城市名称
   *
   * @memberof DeviceInfo
   */
  getCity = () => {
    return this.city;
  };

  /**
   * @todo 设置城市名称，使用sohu接口
   *
   * https://blog.csdn.net/zqian1994/article/details/79222812
   *
   * @memberof DeviceInfo
   */
  setCity = () => {
    this.city = returnCitySN && returnCitySN.cname;
  };

  /**
   * @todo 获取ip地址
   *
   * @memberof DeviceInfo
   */
  getIp = () => {
    return this.ip;
  };

  /**
   * @todo 设置用户ip，使用sohu接口
   *
   * https://blog.csdn.net/zqian1994/article/details/79222812
   *
   * @memberof DeviceInfo
   */
  setIp = () => {
    this.ip = returnCitySN && returnCitySN.cip;
  };

  /**
   * @todo 初始化当前环境对应的数据
   *
   * @memberof DeviceInfo
   */
  init = () => {
    this.setBaseInfo();

    this.setOsVersion();

    this.setOrientationStatus();

    this.setNetWork();

    this.setLanguage();

    this.setCity();

    this.setIp();
  };
}

export default new DeviceInfo();

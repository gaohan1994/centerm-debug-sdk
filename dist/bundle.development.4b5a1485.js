/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/baseComponent.js":
/*!******************************!*\
  !*** ./src/baseComponent.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _deviceInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deviceInfo */ \"./src/deviceInfo.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n/**\n * @todo [基类]\n *\n * @author Ghan\n * @class BaseComponent\n */\n\nvar BaseComponent = function BaseComponent() {\n  _classCallCheck(this, BaseComponent);\n\n  this.deviceInfo = _deviceInfo__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getDeviceInfo();\n  /**\n   *\n   */\n\n  this.happenTime = new Date().getTime();\n  this.appId = \"\";\n  this.url = window.location.href.split(\"?\")[0].replace(\"#\", \"\");\n  this.userId = \"\";\n  this.pageKey = \"\";\n  this.deviceName = \"\";\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BaseComponent);\n\n//# sourceURL=webpack:///./src/baseComponent.js?");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: osInfo, deviceInfo, browserInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"osInfo\", function() { return osInfo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deviceInfo\", function() { return deviceInfo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"browserInfo\", function() { return browserInfo; });\nvar osInfo = [\"Windows\", \"Linux\", \"Mac OS\", \"Android\", \"Ubuntu\", \"FreeBSD\", \"Debian\", \"iOS\", \"Windows Phone\", \"BlackBerry\", \"MeeGo\", \"Symbian\", \"Chrome OS\", \"WebOS\"];\nvar deviceInfo = [\"Mobile\", \"Tablet\", \"iPad\"];\nvar browserInfo = [\"Safari\", \"Chrome\", \"Edge\", \"IE\", \"Firefox\", \"Firefox Focus\", \"Chromium\", \"Opera\", \"Vivaldi\", \"Yandex\", \"Arora\", \"Lunascape\", \"QupZilla\", \"Coc Coc\", \"Kindle\", \"Iceweasel\", \"Konqueror\", \"Iceape\", \"SeaMonkey\", \"Epiphany\", \"360\", \"360SE\", \"360EE\", \"UC\", \"QQBrowser\", \"QQ\", \"Baidu\", \"Maxthon\", \"Sogou\", \"LBBROWSER\", \"2345Explorer\", \"TheWorld\", \"XiaoMi\", \"Quark\", \"Qiyu\", \"Wechat\", \"Taobao\", \"Alipay\", \"Weibo\", \"Douban\", \"Suning\", \"iQiYi\"];\n\n\n//# sourceURL=webpack:///./src/config.js?");

/***/ }),

/***/ "./src/deviceInfo.js":
/*!***************************!*\
  !*** ./src/deviceInfo.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/config.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar DeviceInfo = function DeviceInfo() {\n  var _this = this;\n\n  _classCallCheck(this, DeviceInfo);\n\n  _defineProperty(this, \"getDeviceInfo\", function () {\n    return {\n      engine: _this.getEngine(),\n      browser: _this.getBrowser(),\n      os: _this.getOs(),\n      device: _this.getDevice()\n    };\n  });\n\n  _defineProperty(this, \"getEngine\", function () {\n    return _this.engine;\n  });\n\n  _defineProperty(this, \"getBrowser\", function () {\n    return _this.browser;\n  });\n\n  _defineProperty(this, \"getOs\", function () {\n    return _this.os;\n  });\n\n  _defineProperty(this, \"getDevice\", function () {\n    return _this.device;\n  });\n\n  _defineProperty(this, \"getMatchMap\", function (u) {\n    return {\n      // 内核\n      Trident: u.indexOf(\"Trident\") > -1 || u.indexOf(\"NET CLR\") > -1,\n      Presto: u.indexOf(\"Presto\") > -1,\n      WebKit: u.indexOf(\"AppleWebKit\") > -1,\n      Gecko: u.indexOf(\"Gecko/\") > -1,\n      // 浏览器\n      Safari: u.indexOf(\"Safari\") > -1,\n      Chrome: u.indexOf(\"Chrome\") > -1 || u.indexOf(\"CriOS\") > -1,\n      IE: u.indexOf(\"MSIE\") > -1 || u.indexOf(\"Trident\") > -1,\n      Edge: u.indexOf(\"Edge\") > -1,\n      Firefox: u.indexOf(\"Firefox\") > -1 || u.indexOf(\"FxiOS\") > -1,\n      \"Firefox Focus\": u.indexOf(\"Focus\") > -1,\n      Chromium: u.indexOf(\"Chromium\") > -1,\n      Opera: u.indexOf(\"Opera\") > -1 || u.indexOf(\"OPR\") > -1,\n      Vivaldi: u.indexOf(\"Vivaldi\") > -1,\n      Yandex: u.indexOf(\"YaBrowser\") > -1,\n      Arora: u.indexOf(\"Arora\") > -1,\n      Lunascape: u.indexOf(\"Lunascape\") > -1,\n      QupZilla: u.indexOf(\"QupZilla\") > -1,\n      \"Coc Coc\": u.indexOf(\"coc_coc_browser\") > -1,\n      Kindle: u.indexOf(\"Kindle\") > -1 || u.indexOf(\"Silk/\") > -1,\n      Iceweasel: u.indexOf(\"Iceweasel\") > -1,\n      Konqueror: u.indexOf(\"Konqueror\") > -1,\n      Iceape: u.indexOf(\"Iceape\") > -1,\n      SeaMonkey: u.indexOf(\"SeaMonkey\") > -1,\n      Epiphany: u.indexOf(\"Epiphany\") > -1,\n      \"360\": u.indexOf(\"QihooBrowser\") > -1 || u.indexOf(\"QHBrowser\") > -1,\n      \"360EE\": u.indexOf(\"360EE\") > -1,\n      \"360SE\": u.indexOf(\"360SE\") > -1,\n      UC: u.indexOf(\"UC\") > -1 || u.indexOf(\" UBrowser\") > -1,\n      QQBrowser: u.indexOf(\"QQBrowser\") > -1,\n      QQ: u.indexOf(\"QQ/\") > -1,\n      Baidu: u.indexOf(\"Baidu\") > -1 || u.indexOf(\"BIDUBrowser\") > -1,\n      Maxthon: u.indexOf(\"Maxthon\") > -1,\n      Sogou: u.indexOf(\"MetaSr\") > -1 || u.indexOf(\"Sogou\") > -1,\n      LBBROWSER: u.indexOf(\"LBBROWSER\") > -1,\n      \"2345Explorer\": u.indexOf(\"2345Explorer\") > -1,\n      TheWorld: u.indexOf(\"TheWorld\") > -1,\n      XiaoMi: u.indexOf(\"MiuiBrowser\") > -1,\n      Quark: u.indexOf(\"Quark\") > -1,\n      Qiyu: u.indexOf(\"Qiyu\") > -1,\n      Wechat: u.indexOf(\"MicroMessenger\") > -1,\n      Taobao: u.indexOf(\"AliApp(TB\") > -1,\n      Alipay: u.indexOf(\"AliApp(AP\") > -1,\n      Weibo: u.indexOf(\"Weibo\") > -1,\n      Douban: u.indexOf(\"com.douban.frodo\") > -1,\n      Suning: u.indexOf(\"SNEBUY-APP\") > -1,\n      iQiYi: u.indexOf(\"IqiyiApp\") > -1,\n      // 系统或平台\n      Windows: u.indexOf(\"Windows\") > -1,\n      Linux: u.indexOf(\"Linux\") > -1 || u.indexOf(\"X11\") > -1,\n      \"Mac OS\": u.indexOf(\"Macintosh\") > -1,\n      Android: u.indexOf(\"Android\") > -1 || u.indexOf(\"Adr\") > -1,\n      Ubuntu: u.indexOf(\"Ubuntu\") > -1,\n      FreeBSD: u.indexOf(\"FreeBSD\") > -1,\n      Debian: u.indexOf(\"Debian\") > -1,\n      \"Windows Phone\": u.indexOf(\"IEMobile\") > -1 || u.indexOf(\"Windows Phone\") > -1,\n      BlackBerry: u.indexOf(\"BlackBerry\") > -1 || u.indexOf(\"RIM\") > -1,\n      MeeGo: u.indexOf(\"MeeGo\") > -1,\n      Symbian: u.indexOf(\"Symbian\") > -1,\n      iOS: u.indexOf(\"like Mac OS X\") > -1,\n      \"Chrome OS\": u.indexOf(\"CrOS\") > -1,\n      WebOS: u.indexOf(\"hpwOS\") > -1,\n      // 设备\n      Mobile: u.indexOf(\"Mobi\") > -1 || u.indexOf(\"iPh\") > -1 || u.indexOf(\"480\") > -1,\n      Tablet: u.indexOf(\"Tablet\") > -1 || u.indexOf(\"Nexus 7\") > -1,\n      iPad: u.indexOf(\"iPad\") > -1\n    };\n  });\n\n  _defineProperty(this, \"matchInfoMap\", function () {\n    /**\n     * @todo 获取当前浏览器的 userAgent 并通过 getMatchMap 方法获得对应的数据\n     *\n     * @param {userAgent} userAgent\n     */\n    var userAgent = _this.navigator && _this.navigator.userAgent || {};\n\n    var match = _this.getMatchMap(userAgent);\n\n    for (var infoKey in _this.infoMap) {\n      var currentInfo = _this.infoMap[infoKey];\n\n      for (var i = 0; i < currentInfo.length; i++) {\n        var value = currentInfo[i];\n\n        if (!!match[value]) {\n          console.log(\"====================================\");\n          console.log(\"currentInfo\", currentInfo);\n          console.log(\"infoKey\", infoKey);\n          console.log(\"match[value]\", match[value]);\n          console.log(\"====================================\");\n          _this[infoKey] = match[value];\n        }\n      }\n    }\n  });\n\n  /**\n   * @param {navigator}\n   * 初始化window.navigator 判断是否是浏览器环境\n   *\n   * @param {infoMap}\n   * 初始化引擎、浏览器、操作系统、设备信息\n   */\n  this.navigator = (typeof window === \"undefined\" ? \"undefined\" : _typeof(window)) !== undefined && window.navigator || {};\n  this.infoMap = {\n    engine: [\"WebKit\", \"Trident\", \"Gecko\", \"Presto\"],\n    browser: _config__WEBPACK_IMPORTED_MODULE_0__[\"browserInfo\"],\n    os: _config__WEBPACK_IMPORTED_MODULE_0__[\"osInfo\"],\n    device: _config__WEBPACK_IMPORTED_MODULE_0__[\"deviceInfo\"]\n  };\n  /**\n   * @todo 初始化device类的属性\n   *\n   * @param {engine} string; 引擎\n   * @param {browser} string; 浏览器信息\n   * @param {os} string; 操作系统\n   * @param {device} string; 设备信息\n   */\n\n  this.engine;\n  this.browser;\n  this.os;\n  this.device;\n  this.matchInfoMap();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new DeviceInfo());\n\n//# sourceURL=webpack:///./src/deviceInfo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: javascriptErrorInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"javascriptErrorInfo\", function() { return javascriptErrorInfo; });\n/* harmony import */ var _javascriptErrorInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./javascriptErrorInfo */ \"./src/javascriptErrorInfo.js\");\n\nvar javascriptErrorInfo = new _javascriptErrorInfo__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconsole.log(\"javascriptErrorInfo\", javascriptErrorInfo);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/javascriptErrorInfo.js":
/*!************************************!*\
  !*** ./src/javascriptErrorInfo.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _baseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseComponent */ \"./src/baseComponent.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar JavascriptErrorInfo = /*#__PURE__*/function (_BaseComponent) {\n  _inherits(JavascriptErrorInfo, _BaseComponent);\n\n  var _super = _createSuper(JavascriptErrorInfo);\n\n  function JavascriptErrorInfo() {\n    _classCallCheck(this, JavascriptErrorInfo);\n\n    return _super.apply(this, arguments);\n  }\n\n  return JavascriptErrorInfo;\n}(_baseComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (JavascriptErrorInfo);\n\n//# sourceURL=webpack:///./src/javascriptErrorInfo.js?");

/***/ })

/******/ });
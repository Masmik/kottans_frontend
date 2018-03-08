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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _component = __webpack_require__(/*! ./component */ 2);

Object.defineProperty(exports, 'Component', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_component).default;
  }
});

var _auto_location = __webpack_require__(/*! ./auto_location */ 3);

Object.defineProperty(exports, 'AutoLocation', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_auto_location).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 1 */
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _components = __webpack_require__(/*! ./components */ 0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.el = props.el || document.createElement('div');

        _this.autoLocation = new _components.AutoLocation();

        return _this;
    }

    _createClass(App, [{
        key: "render",
        value: function render() {

            // return `<div>DKKDKDDKDKDK</div>`;

            return [this.autoLocation.update()];
        }
    }]);

    return App;
}(_components.Component);

// export default App

var w = new App({ el: document.getElementById("root") });
w.update();

/***/ }),
/* 2 */
/*!*************************************!*\
  !*** ./src/components/component.js ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Component = function () {
    function Component(props) {
        _classCallCheck(this, Component);

        this.props = props || {};
        this.state = {};

        // bindAll(this, '');

        this.el = null;
    }

    _createClass(Component, [{
        key: 'updateState',
        value: function updateState(nextState) {
            this.state = Object.assign({}, this.state, nextState);
            this._render();
        }
    }, {
        key: 'componentReceivedProps',
        value: function componentReceivedProps(nextProps) {}
    }, {
        key: 'update',
        value: function update(nextProps) {
            this.componentReceivedProps(nextProps);
            this.props = nextProps;
            return this._render();
        }
    }, {
        key: '_render',
        value: function _render() {
            var children = this.render();

            this.el.innerHTML = '';

            if (typeof children === 'string') {
                this.el.innerHTML = children;
            } else if (Array.isArray(children)) {
                var _el;

                (_el = this.el).append.apply(_el, _toConsumableArray(children));
            } else {
                this.el.append(children);
            }

            return this.el;
        }
    }, {
        key: 'render',
        value: function render() {}
    }]);

    return Component;
}();

exports.default = Component;

/***/ }),
/* 3 */
/*!*****************************************!*\
  !*** ./src/components/auto_location.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ = __webpack_require__(/*! ./ */ 0);

var _utils = __webpack_require__(/*! ../utils */ 4);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AutoLocation = function (_Component) {
    _inherits(AutoLocation, _Component);

    function AutoLocation(props) {
        _classCallCheck(this, AutoLocation);

        var _this = _possibleConstructorReturn(this, (AutoLocation.__proto__ || Object.getPrototypeOf(AutoLocation)).call(this, props));

        _this.el = document.createElement('div');
        _this.isAllow = (0, _utils.isAllowedGEOLocation)();
        _this.locationObj = null;

        var l = (0, _utils.AutoGEOLocation)();

        l.then(function (locationObj) {
            _this.isAllow = true;
            _this.locationObj = locationObj;
            var elDiv = document.createElement('div');
            elDiv.innerHTML = 'lat: ' + locationObj.lat + '; long: ' + locationObj.long + ';';
            // locationObj.lat
            // locationObj.long
            _this.el.appendChild(elDiv);

            console.log(locationObj);

            _this.update();
        }, function (err) {
            // err

            console.log(err);

            _this.update();
        });

        return _this;
    }

    _createClass(AutoLocation, [{
        key: 'handlerClick',
        value: function handlerClick() {}
    }, {
        key: 'render',
        value: function render() {

            var html = '<div>AutoLocation Button = ' + (this.isAllow ? "YES" : "NO") + ' </div>';

            if (this.locationObj) {
                html += '<div> lat: ' + this.locationObj.lat + '; long: ' + this.locationObj.long + '; </div>';
            }

            return html;
        }
    }]);

    return AutoLocation;
}(_.Component);

exports.default = AutoLocation;

/***/ }),
/* 4 */
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(/*! ./utils */ 5);

Object.defineProperty(exports, 'bindAll', {
  enumerable: true,
  get: function get() {
    return _utils.bindAll;
  }
});

var _auto_location = __webpack_require__(/*! ./auto_location */ 6);

Object.defineProperty(exports, 'AutoGEOLocation', {
  enumerable: true,
  get: function get() {
    return _auto_location.AutoGEOLocation;
  }
});
Object.defineProperty(exports, 'isAllowedGEOLocation', {
  enumerable: true,
  get: function get() {
    return _auto_location.isAllowedGEOLocation;
  }
});

/***/ }),
/* 5 */
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var bindAll = exports.bindAll = function bindAll(context) {
    for (var _len = arguments.length, names = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        names[_key - 1] = arguments[_key];
    }

    names.forEach(function (name) {
        if (typeof context[name] === 'function') {
            context[name] = context[name].bind(context);
        } else {
            throw Error('Expected function ' + name + '. Instead received: ' + _typeof(context[name]));
        }
    });
};

/***/ }),
/* 6 */
/*!************************************!*\
  !*** ./src/utils/auto_location.js ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isAllowedGEOLocation = isAllowedGEOLocation;
exports.AutoGEOLocation = AutoGEOLocation;
function isAllowedGEOLocation() {
    return !!navigator.geolocation;
}

function AutoGEOLocation() {

    return new Promise(function (resolve, reject) {

        if (!isAllowedGEOLocation()) {
            reject("Browser not allow you to use the GEO Location");
            return;
        }

        navigator.geolocation.getCurrentPosition(function (position) {
            var lat = position.coords.latitude;
            var long = position.coords.longitude;

            resolve({
                lat: lat.toFixed(4),
                long: long.toFixed(4)
            });
        }, function (err) {
            reject(new Error("Can`t find your location. Orig Error = " + err.message));
        }, {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        });
    });
}

/***/ })
/******/ ]);
//# sourceMappingURL=app.bundle.js.map
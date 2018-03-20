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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

var _component = __webpack_require__(/*! ./component */ 5);

Object.defineProperty(exports, 'Component', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_component).default;
  }
});

var _clock = __webpack_require__(/*! ./clock */ 6);

Object.defineProperty(exports, 'Clock', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_clock).default;
  }
});

var _logo = __webpack_require__(/*! ./logo */ 11);

Object.defineProperty(exports, 'Logo', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_logo).default;
  }
});

var _login = __webpack_require__(/*! ./login */ 13);

Object.defineProperty(exports, 'LogIn', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_login).default;
  }
});

var _button_new_pizza = __webpack_require__(/*! ./button_new_pizza */ 15);

Object.defineProperty(exports, 'Btn', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_button_new_pizza).default;
  }
});

var _pizza_item = __webpack_require__(/*! ./pizza_item */ 17);

Object.defineProperty(exports, 'PizzaItem', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_pizza_item).default;
  }
});

var _footer = __webpack_require__(/*! ./footer */ 19);

Object.defineProperty(exports, 'Footer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_footer).default;
  }
});

var _login_form = __webpack_require__(/*! ./login_form */ 21);

Object.defineProperty(exports, 'LoginForm', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_login_form).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 1 */
/*!*********************************!*\
  !*** ./src/containers/index.js ***!
  \*********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pizza_list_page = __webpack_require__(/*! ./pizza_list_page */ 4);

Object.defineProperty(exports, 'PizzaListPage', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_pizza_list_page).default;
  }
});

var _header = __webpack_require__(/*! ./header */ 23);

Object.defineProperty(exports, 'Header', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_header).default;
  }
});

var _login_page = __webpack_require__(/*! ./login_page */ 25);

Object.defineProperty(exports, 'LoginPage', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_login_page).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 2 */
/*!***********************************!*\
  !*** ./src/containers/reset.scss ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _containers = __webpack_require__(/*! ./containers */ 1);

// import {LoginPage } from './containers';

// let w = new LoginPage({ el: document.getElementById("root") });
var w = new _containers.PizzaListPage({ el: document.getElementById("root") });

w.update();

/***/ }),
/* 4 */
/*!*******************************************!*\
  !*** ./src/containers/pizza_list_page.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _components = __webpack_require__(/*! ../components */ 0);

var _ = __webpack_require__(/*! ./ */ 1);

__webpack_require__(/*! ./reset.scss */ 2);

__webpack_require__(/*! ./pizza_list_page.scss */ 22);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PizzaListPage = function (_Component) {
    _inherits(PizzaListPage, _Component);

    function PizzaListPage(props) {
        _classCallCheck(this, PizzaListPage);

        var _this = _possibleConstructorReturn(this, (PizzaListPage.__proto__ || Object.getPrototypeOf(PizzaListPage)).call(this, props));

        _this.el = props.el || document.createElement('div');
        _this.el.classList.add('wrapper');

        // origin state
        _this.state = {
            pizzaItemInfo: [{
                imgSrc: '../../src/images/pizza_im.jpg',
                timerTime: '12:43:32',
                queueNumber: 1,
                cookedTime: 5,
                price: 5
            }, {
                imgSrc: '../../src/images/pizza_im.jpg',
                timerTime: '12:43:32',
                queueNumber: 2,
                cookedTime: 8,
                price: 7
            }, {
                imgSrc: '../../src/images/pizza_im.jpg',
                timerTime: '12:43:32',
                queueNumber: 3,
                cookedTime: 4,
                price: 9
            }, {
                imgSrc: '../../src/images/pizza_ph.jpg',
                timerTime: '12:43:32',
                queueNumber: 4,
                cookedTime: 3,
                price: 11
            }, {
                imgSrc: '../../src/images/pizza_ph.jpg',
                timerTime: '12:43:32',
                queueNumber: 5,
                cookedTime: 3,
                price: 12
            }, {
                imgSrc: '../../src/images/pizza_ph.jpg',
                timerTime: '12:43:32',
                queueNumber: 6,
                cookedTime: 3,
                price: 14
            }]
        };

        // // init components
        _this.header = new _.Header();
        _this.btn = new _components.Btn();
        _this.pizzaItem = new _components.PizzaItem();
        _this.footer = new _components.Footer();
        return _this;
    }

    _createClass(PizzaListPage, [{
        key: 'render',
        value: function render() {
            var content = document.createElement('div');
            content.classList.add('content');
            content.appendChild(this.header.update());

            var main = document.createElement('main');
            main.appendChild(this.btn.update());

            main.appendChild(this.pizzaItem.update({ items: this.state.pizzaItemInfo }));
            content.appendChild(main);

            content.appendChild(this.footer.update());

            return [content];
        }
    }]);

    return PizzaListPage;
}(_components.Component);

exports.default = PizzaListPage;

/***/ }),
/* 5 */
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

        this.el = null;
    }

    // merge current state with new state
    // but didn`t works with some cases


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
            if (typeof nextProps == 'undefined') {
                return this._render();
            }
            this.componentReceivedProps(nextProps);
            this.props = nextProps;
            return this._render();
        }
    }, {
        key: '_render',
        value: function _render() {
            // console.log('component props', this.props, this.state);

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

            this.afterRender();
            return this.el;
        }
    }, {
        key: 'render',
        value: function render() {}
    }, {
        key: 'afterRender',
        value: function afterRender() {}
    }]);

    return Component;
}();

exports.default = Component;

/***/ }),
/* 6 */
/*!*********************************!*\
  !*** ./src/components/clock.js ***!
  \*********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ = __webpack_require__(/*! ./ */ 0);

var _utils = __webpack_require__(/*! ../utils */ 7);

__webpack_require__(/*! ./clock.scss */ 10);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Clock = function (_Component) {
    _inherits(Clock, _Component);

    function Clock(props) {
        _classCallCheck(this, Clock);

        var _this = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

        (0, _utils.bindAll)(_this, 'updateTime');
        _this.el = document.createElement('div');
        _this.el.classList.add('timeBlock');

        setInterval(_this.updateTime, 1000);
        return _this;
    }

    _createClass(Clock, [{
        key: 'updateTime',
        value: function updateTime() {
            var timeEl = this.el.querySelector('.time');
            if (!timeEl) {
                return;
            }
            timeEl.textContent = (0, _utils.realTimeClock)();
        }
    }, {
        key: 'render',
        value: function render() {
            var curTime = (0, _utils.realTimeClock)();

            return '<i class="fa fa-clock-o" aria-hidden="true"></i>\n                <time class="time">' + curTime + '</time>';
        }
    }]);

    return Clock;
}(_.Component);

exports.default = Clock;

/***/ }),
/* 7 */
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

var _utils = __webpack_require__(/*! ./utils */ 8);

Object.defineProperty(exports, 'bindAll', {
  enumerable: true,
  get: function get() {
    return _utils.bindAll;
  }
});

var _real_time = __webpack_require__(/*! ./real_time */ 9);

Object.defineProperty(exports, 'realTimeClock', {
  enumerable: true,
  get: function get() {
    return _real_time.realTimeClock;
  }
});
Object.defineProperty(exports, 'clock', {
  enumerable: true,
  get: function get() {
    return _real_time.clock;
  }
});

/***/ }),
/* 8 */
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
/* 9 */
/*!********************************!*\
  !*** ./src/utils/real_time.js ***!
  \********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.realTimeClock = realTimeClock;
function realTimeClock() {
    var time = new Date();
    var hours = time.getHours().toString();
    var min = time.getMinutes().toString();
    var sec = time.getSeconds().toString();

    if (hours.length < 2) {
        hours = '0' + hours;
    }
    if (min.length < 2) {
        min = '0' + min;
    }

    if (sec.length < 2) {
        sec = '0' + sec;
    }

    return hours + ':' + min + ':' + sec;
}

/***/ }),
/* 10 */
/*!***********************************!*\
  !*** ./src/components/clock.scss ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/*!********************************!*\
  !*** ./src/components/logo.js ***!
  \********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ = __webpack_require__(/*! ./ */ 0);

__webpack_require__(/*! ./logo.scss */ 12);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Logo = function (_Component) {
    _inherits(Logo, _Component);

    function Logo(props) {
        _classCallCheck(this, Logo);

        var _this = _possibleConstructorReturn(this, (Logo.__proto__ || Object.getPrototypeOf(Logo)).call(this, props));

        _this.el = document.createElement('a');
        _this.el.setAttribute('href', '#');
        _this.el.classList.add('logo');
        return _this;
    }

    _createClass(Logo, [{
        key: 'render',
        value: function render() {
            return '<img src="src/images/pizza_logo.png" alt="pizza logo">';
        }
    }]);

    return Logo;
}(_.Component);

exports.default = Logo;

/***/ }),
/* 12 */
/*!**********************************!*\
  !*** ./src/components/logo.scss ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/*!*********************************!*\
  !*** ./src/components/login.js ***!
  \*********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ = __webpack_require__(/*! ./ */ 0);

__webpack_require__(/*! ./login.scss */ 14);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LogIn = function (_Component) {
    _inherits(LogIn, _Component);

    function LogIn(props) {
        _classCallCheck(this, LogIn);

        var _this = _possibleConstructorReturn(this, (LogIn.__proto__ || Object.getPrototypeOf(LogIn)).call(this, props));

        _this.el = document.createElement('button');
        _this.el.classList.add('logInBlock');
        _this.el.setAttribute('type', 'button');
        return _this;
    }

    _createClass(LogIn, [{
        key: 'render',
        value: function render() {
            return '<i class="fa fa-sign-in" aria-hidden="true"></i>\n                Login / Signup';
        }
    }]);

    return LogIn;
}(_.Component);

exports.default = LogIn;

/***/ }),
/* 14 */
/*!***********************************!*\
  !*** ./src/components/login.scss ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/*!********************************************!*\
  !*** ./src/components/button_new_pizza.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ = __webpack_require__(/*! ./ */ 0);

__webpack_require__(/*! ./button_new_pizza.scss */ 16);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Btn = function (_Component) {
    _inherits(Btn, _Component);

    function Btn(props) {
        _classCallCheck(this, Btn);

        var _this = _possibleConstructorReturn(this, (Btn.__proto__ || Object.getPrototypeOf(Btn)).call(this, props));

        _this.el = document.createElement('button');
        _this.el.classList.add('button');
        _this.el.classList.add('button_add');

        return _this;
    }

    _createClass(Btn, [{
        key: 'render',
        value: function render() {
            return '<i class="fa fa-plus" aria-hidden="true"></i>\n                <span class="button_text">Add new pizza</span>';
        }
    }]);

    return Btn;
}(_.Component);

exports.default = Btn;

/***/ }),
/* 16 */
/*!**********************************************!*\
  !*** ./src/components/button_new_pizza.scss ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */
/*!**************************************!*\
  !*** ./src/components/pizza_item.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ = __webpack_require__(/*! ./ */ 0);

__webpack_require__(/*! ./pizza_item.scss */ 18);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PizzaItem = function (_Component) {
    _inherits(PizzaItem, _Component);

    function PizzaItem(props) {
        _classCallCheck(this, PizzaItem);

        var _this = _possibleConstructorReturn(this, (PizzaItem.__proto__ || Object.getPrototypeOf(PizzaItem)).call(this, props));

        _this.el = document.createElement('section');
        _this.el.classList.add('pizzaSection');

        return _this;
    }

    _createClass(PizzaItem, [{
        key: 'render',
        value: function render() {
            var items = this.props.items;

            console.log(items);

            var pizzaItemRender = items.map(function (item) {
                return '<figure class="pizzaItem">\n                        <img src="' + item.imgSrc + '" alt="pizza img" class="pizzaItemImg">\n                        <figcaption>\n                            <time class="pizzaItem__timer" datetime="12:43:32">' + item.timerTime + '</time>\n                            <p class="pizzaItem__queue"><span class="pizzaItem__queue_hash">#</span>' + item.queueNumber + '</p>\n                            <p class="pizzaItem__cookedTime">ETA:\n                                <time>' + item.cookedTime + '&nbsp;min</time>\n                            </p>\n                            <p class="pizzaItem__price"><span class="pizzaItemPrice_moneyUnit">$</span>' + item.price + '</p>\n                        </figcaption>\n                    </figure>';
            });

            return pizzaItemRender.join('');
        }
    }]);

    return PizzaItem;
}(_.Component);

exports.default = PizzaItem;

/***/ }),
/* 18 */
/*!****************************************!*\
  !*** ./src/components/pizza_item.scss ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ = __webpack_require__(/*! ./ */ 0);

__webpack_require__(/*! ./footer.scss */ 20);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_Component) {
    _inherits(Footer, _Component);

    function Footer(props) {
        _classCallCheck(this, Footer);

        var _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));

        _this.el = document.createElement('footer');
        return _this;
    }

    _createClass(Footer, [{
        key: 'render',
        value: function render() {
            return '<p class="orgNameAndLocation"><span class="organization">Kottans,</span>Kottans&nbsp;Str.&nbsp;1</p>\n        <a class="phoneNumber" href="tel:577-788-87">tel:&nbsp;577&nbsp;-&nbsp;788&nbsp;-&nbsp;87</a>\n        <small class="copyright">Pizza Manager&nbsp;&copy;&nbsp;2018</small>';
        }
    }]);

    return Footer;
}(_.Component);

exports.default = Footer;

/***/ }),
/* 20 */
/*!************************************!*\
  !*** ./src/components/footer.scss ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 21 */
/*!**************************************!*\
  !*** ./src/components/login_form.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ = __webpack_require__(/*! ./ */ 0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginForm = function (_Component) {
    _inherits(LoginForm, _Component);

    function LoginForm(props) {
        _classCallCheck(this, LoginForm);

        var _this = _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call(this, props));

        _this.el = document.createElement('form');
        _this.el.classList.add('loginForm');
        _this.el.setAttribute('method', 'post');
        return _this;
    }

    _createClass(LoginForm, [{
        key: 'render',
        value: function render() {
            return '<div class="inputGroup">\n                    <label class="loginForm__label" for="userName">Email</label>\n                    <input type="text" id="userName" class="loginForm__input loginForm__input_name" class="email" maxlength="256" placeholder="email@domain.com" required>\n                </div>\n                <div class="inputGroup">\n                    <label class="loginForm__label" for="userName">Password</label>\n                    <input type="password" id="password" class="loginForm__input loginForm__input_password" class="password" pattern=".{8,}" required>\n                </div>\n                <div class="inputGroup inputGroup__buttonGroup">\n\t\t            <input type="submit" class="button loginForm__button button__signIn" value="Sign in">\n\t\t            <a href="" class="button loginForm__button button__signUp"> Sign up</a>\n\t            </div>';
        }
    }]);

    return LoginForm;
}(_.Component);

exports.default = LoginForm;

/***/ }),
/* 22 */
/*!*********************************************!*\
  !*** ./src/containers/pizza_list_page.scss ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 23 */
/*!**********************************!*\
  !*** ./src/containers/header.js ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _components = __webpack_require__(/*! ../components */ 0);

__webpack_require__(/*! ./header.scss */ 24);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header(props) {
        _classCallCheck(this, Header);

        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

        _this.el = document.createElement('header');

        // init components
        _this.clock = new _components.Clock();
        _this.logo = new _components.Logo();
        _this.login = new _components.LogIn();
        return _this;
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return [this.el.appendChild(this.clock.update()), this.el.appendChild(this.logo.update()), this.el.appendChild(this.login.update())];
        }
    }]);

    return Header;
}(_components.Component);

exports.default = Header;

/***/ }),
/* 24 */
/*!************************************!*\
  !*** ./src/containers/header.scss ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 25 */
/*!**************************************!*\
  !*** ./src/containers/login_page.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _components = __webpack_require__(/*! ../components */ 0);

var _ = __webpack_require__(/*! ./ */ 1);

__webpack_require__(/*! ./reset.scss */ 2);

__webpack_require__(/*! ./login_page.scss */ 26);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginPage = function (_Component) {
    _inherits(LoginPage, _Component);

    function LoginPage(props) {
        _classCallCheck(this, LoginPage);

        var _this = _possibleConstructorReturn(this, (LoginPage.__proto__ || Object.getPrototypeOf(LoginPage)).call(this, props));

        _this.el = props.el || document.createElement('div');
        _this.el.classList.add('wrapper');

        // // init components
        _this.header = new _.Header();
        _this.loginForm = new _components.LoginForm();
        _this.footer = new _components.Footer();

        return _this;
    }

    _createClass(LoginPage, [{
        key: 'render',
        value: function render() {

            var content = document.createElement('div');
            content.classList.add('content');
            content.appendChild(this.header.update());

            var main = document.createElement('main');
            main.classList.add('main_loginPage');
            main.appendChild(this.loginForm.update());

            content.appendChild(main);
            content.appendChild(this.footer.update());

            return [content];
        }
    }]);

    return LoginPage;
}(_components.Component);

exports.default = LoginPage;

/***/ }),
/* 26 */
/*!****************************************!*\
  !*** ./src/containers/login_page.scss ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=app.bundle.js.map
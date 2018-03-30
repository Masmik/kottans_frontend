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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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

var _component = __webpack_require__(/*! ./component */ 16);

Object.defineProperty(exports, 'Component', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_component).default;
  }
});

var _clock = __webpack_require__(/*! ./clock */ 17);

Object.defineProperty(exports, 'Clock', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_clock).default;
  }
});

var _logo = __webpack_require__(/*! ./logo */ 19);

Object.defineProperty(exports, 'Logo', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_logo).default;
  }
});

var _login = __webpack_require__(/*! ./login */ 21);

Object.defineProperty(exports, 'LogIn', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_login).default;
  }
});

var _button_new_pizza = __webpack_require__(/*! ./button_new_pizza */ 23);

Object.defineProperty(exports, 'Btn', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_button_new_pizza).default;
  }
});

var _pizza_item = __webpack_require__(/*! ./pizza_item */ 25);

Object.defineProperty(exports, 'PizzaItem', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_pizza_item).default;
  }
});

var _footer = __webpack_require__(/*! ./footer */ 27);

Object.defineProperty(exports, 'Footer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_footer).default;
  }
});

var _login_form = __webpack_require__(/*! ./login_form */ 29);

Object.defineProperty(exports, 'LoginForm', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_login_form).default;
  }
});

var _registration_form = __webpack_require__(/*! ./registration_form */ 31);

Object.defineProperty(exports, 'RegistrationForm', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_registration_form).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 1 */
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

var _utils = __webpack_require__(/*! ./utils */ 10);

Object.defineProperty(exports, 'bindAll', {
  enumerable: true,
  get: function get() {
    return _utils.bindAll;
  }
});

var _real_time = __webpack_require__(/*! ./real_time */ 11);

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

var _access_grant_service = __webpack_require__(/*! ./access_grant_service */ 12);

Object.defineProperty(exports, 'checkGrantAccess', {
  enumerable: true,
  get: function get() {
    return _access_grant_service.checkGrantAccess;
  }
});

var _auth = __webpack_require__(/*! ./auth */ 13);

Object.defineProperty(exports, 'Auth', {
  enumerable: true,
  get: function get() {
    return _auth.Auth;
  }
});

var _navigateTo = __webpack_require__(/*! ./navigateTo */ 14);

Object.defineProperty(exports, 'navigateTo', {
  enumerable: true,
  get: function get() {
    return _navigateTo.navigateTo;
  }
});

var _router = __webpack_require__(/*! ./router */ 15);

Object.defineProperty(exports, 'Router', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_router).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 2 */
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

var _pizza_list_page = __webpack_require__(/*! ./pizza_list_page */ 3);

Object.defineProperty(exports, 'PizzaListPage', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_pizza_list_page).default;
  }
});

var _header = __webpack_require__(/*! ./header */ 35);

Object.defineProperty(exports, 'Header', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_header).default;
  }
});

var _login_page = __webpack_require__(/*! ./login_page */ 4);

Object.defineProperty(exports, 'LoginPage', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_login_page).default;
  }
});

var _registration_page = __webpack_require__(/*! ./registration_page */ 7);

Object.defineProperty(exports, 'RegistrationPage', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_registration_page).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 3 */
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

var _ = __webpack_require__(/*! ./ */ 2);

__webpack_require__(/*! ./pizza_list_page.scss */ 41);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PizzaListPage = function (_Component) {
    _inherits(PizzaListPage, _Component);

    function PizzaListPage(props) {
        _classCallCheck(this, PizzaListPage);

        var _this = _possibleConstructorReturn(this, (PizzaListPage.__proto__ || Object.getPrototypeOf(PizzaListPage)).call(this, props));

        _this.el = document.createElement('div');
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
/* 4 */
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

var _ = __webpack_require__(/*! ./ */ 2);

var _pizza_api = __webpack_require__(/*! ../api/pizza_api */ 5);

var _pizza_api2 = _interopRequireDefault(_pizza_api);

var _utils = __webpack_require__(/*! ../utils */ 1);

__webpack_require__(/*! ./login_page.scss */ 39);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginPage = function (_Component) {
    _inherits(LoginPage, _Component);

    function LoginPage(props) {
        _classCallCheck(this, LoginPage);

        var _this = _possibleConstructorReturn(this, (LoginPage.__proto__ || Object.getPrototypeOf(LoginPage)).call(this, props));

        (0, _utils.bindAll)(_this, 'handleAuthentication');

        _this.state = {
            username: '',
            password: '',
            loginValidationErrors: ''
        };

        _this.el = document.createElement('div');
        _this.el.classList.add('wrapper');
        _this.el.addEventListener('submit', _this.handleAuthentication);

        // // init components
        _this.header = new _.Header();
        _this.loginForm = new _components.LoginForm();
        _this.footer = new _components.Footer();
        return _this;
    }

    _createClass(LoginPage, [{
        key: 'handleAuthentication',
        value: function handleAuthentication(e) {
            var _this2 = this;

            e.preventDefault();
            var loginObj = {
                login: e.target.login.value,
                password: e.target.password.value
            };

            _pizza_api2.default.User.loginUser(loginObj).then(function (resp) {
                console.log(resp);
                _utils.Auth.token = resp.answer.token;
                (0, _utils.navigateTo)('/');
            }).catch(function (err) {
                _this2.state.loginValidationErrors = err.answer.error;
                _this2.update();
            });
        }
    }, {
        key: 'render',
        value: function render() {

            var content = document.createElement('div');
            content.classList.add('content');
            content.appendChild(this.header.update());

            var main = document.createElement('main');
            main.classList.add('main_loginPage');
            main.appendChild(this.loginForm.update(this.state));

            content.appendChild(main);
            content.appendChild(this.footer.update());

            return [content];
        }
    }]);

    return LoginPage;
}(_components.Component);

exports.default = LoginPage;

/***/ }),
/* 5 */
/*!******************************!*\
  !*** ./src/api/pizza_api.js ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _store = __webpack_require__(/*! ./pizza/store */ 37);

var _user = __webpack_require__(/*! ./pizza/user */ 38);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PizzaApi = function PizzaApi() {
    _classCallCheck(this, PizzaApi);

    this.Store = _store.Store_Api;
    this.User = _user.User_Api;
};

exports.default = PizzaApi = new PizzaApi();

/***/ }),
/* 6 */
/*!********************************!*\
  !*** ./src/api/pizza/const.js ***!
  \********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var BASE_API_URL = exports.BASE_API_URL = 'https://pizza-tele.ga/api/v1';

/***/ }),
/* 7 */
/*!*********************************************!*\
  !*** ./src/containers/registration_page.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _components = __webpack_require__(/*! ../components */ 0);

var _ = __webpack_require__(/*! ./ */ 2);

var _utils = __webpack_require__(/*! ../utils */ 1);

var _pizza_api = __webpack_require__(/*! ../api/pizza_api */ 5);

var _pizza_api2 = _interopRequireDefault(_pizza_api);

__webpack_require__(/*! ./registration_page.scss */ 40);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RegistrationPage = function (_Component) {
    _inherits(RegistrationPage, _Component);

    function RegistrationPage(props) {
        _classCallCheck(this, RegistrationPage);

        var _this = _possibleConstructorReturn(this, (RegistrationPage.__proto__ || Object.getPrototypeOf(RegistrationPage)).call(this, props));

        (0, _utils.bindAll)(_this, 'handleSubmit', 'getStoreList');
        _this.el = document.createElement('div');
        _this.el.classList.add('wrapper');
        _this.el.addEventListener('submit', _this.handleSubmit);

        _this.state = {
            storeList: [],
            registrationValidationErrors: []
        };

        console.log('exp', _utils.Auth.isExpired());

        _this.getStoreList();

        // // init components
        _this.header = new _.Header();
        _this.registrationForm = new _components.RegistrationForm();
        _this.footer = new _components.Footer();
        return _this;
    }

    _createClass(RegistrationPage, [{
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            var _this2 = this;

            e.preventDefault();
            var registrationObj = {
                login: e.target.login.value,
                password: e.target.password.value,
                confirm_password: e.target.confirm_password.value,
                email: e.target.email.value,
                store_id: Number(e.target.store.value),
                store_password: e.target.store_password.value
            };

            _pizza_api2.default.User.createUser(registrationObj).then(function (resp) {
                _pizza_api2.default.User.loginUser(registrationObj).then(function (resp) {
                    _utils.Auth.token = resp.answer.token;
                    (0, _utils.navigateTo)('/');
                });
            }).catch(function (err) {
                _this2.state.registrationValidationErrors = err.answer.validations;
                _this2.update();
            });
        }
    }, {
        key: 'getStoreList',
        value: function getStoreList() {
            var _this3 = this;

            _pizza_api2.default.Store.getStoreList().then(function (res) {
                _this3.state.storeList = res.answer;
                _this3.update();
            });
        }
    }, {
        key: 'render',
        value: function render() {

            var content = document.createElement('div');
            content.classList.add('content');
            content.appendChild(this.header.update());

            var main = document.createElement('main');
            main.classList.add('main_loginPage');
            main.appendChild(this.registrationForm.update(this.state));

            content.appendChild(main);
            content.appendChild(this.footer.update());

            return [content];
        }
    }]);

    return RegistrationPage;
}(_components.Component);

exports.default = RegistrationPage;

/***/ }),
/* 8 */
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../src/containers/reset.scss */ 9);

var _utils = __webpack_require__(/*! ../src/utils */ 1);

var _routes_config = __webpack_require__(/*! ../src/utils/routes_config */ 34);

var _routes_config2 = _interopRequireDefault(_routes_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import {PizzaListPage } from './containers';
// import {LoginPage } from './containers';
// import { RegistrationPage } from './containers';

var router = new _utils.Router({ el: document.getElementById("root"), routesConfig: _routes_config2.default });

// let w = new LoginPage({ el: document.getElementById("root") });
// let w = new PizzaListPage({ el: document.getElementById("root") });
// let w = new RegistrationPage({ el: document.getElementById("root") });


// w.update();

/***/ }),
/* 9 */
/*!***********************************!*\
  !*** ./src/containers/reset.scss ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
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
/* 11 */
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
/* 12 */
/*!*******************************************!*\
  !*** ./src/utils/access_grant_service.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.checkGrantAccess = checkGrantAccess;
function checkGrantAccess(currentAccess, routeConfigItem) {

    // check if route has no restriction
    if (routeConfigItem.access.length == 0) {
        return true;
    }

    // search that user has privileges to view current route
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = currentAccess[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var accessUser = _step.value;
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = routeConfigItem.access[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var accessRoute = _step2.value;

                    if (accessUser === accessRoute) {
                        return true;
                    }
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }

        // or if he does not deserve)))
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return false;
}

/***/ }),
/* 13 */
/*!***************************!*\
  !*** ./src/utils/auth.js ***!
  \***************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AuthUser = function () {
    function AuthUser() {
        _classCallCheck(this, AuthUser);
    }

    _createClass(AuthUser, [{
        key: 'parseJwt',
        value: function parseJwt(token) {
            if (!token) {
                return { username: '', exp: 0, uuid: '', store_id: 0 };
            }
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');
            return JSON.parse(window.atob(base64));
        }
    }, {
        key: 'isExpired',
        value: function isExpired() {

            var now = new Date().getTime();
            var tokenExp = this.claims.exp * 1000;

            if (now >= tokenExp) {
                return true;
            }

            return false;
        }
    }, {
        key: 'logOut',
        value: function logOut() {
            localStorage.removeItem('jwt');
        }
    }, {
        key: 'token',
        get: function get() {
            return localStorage.getItem('jwt');
        },
        set: function set(token) {
            localStorage.setItem('jwt', token);
        }
    }, {
        key: 'claims',
        get: function get() {
            return this.parseJwt(this.token);
        }
    }, {
        key: 'currentUserAccess',
        get: function get() {
            if (!this.isExpired()) {
                return ['userAuth'];
            }
            return [];
        }
    }]);

    return AuthUser;
}();

var Auth = exports.Auth = new AuthUser();

/***/ }),
/* 14 */
/*!*********************************!*\
  !*** ./src/utils/navigateTo.js ***!
  \*********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.navigateTo = navigateTo;
function navigateTo(url) {
    window.location.hash = url;
}

/***/ }),
/* 15 */
/*!*****************************!*\
  !*** ./src/utils/router.js ***!
  \*****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _components = __webpack_require__(/*! ../components */ 0);

var _utils = __webpack_require__(/*! ../utils */ 1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Router = function (_Component) {
    _inherits(Router, _Component);

    function Router(props) {
        _classCallCheck(this, Router);

        var _this = _possibleConstructorReturn(this, (Router.__proto__ || Object.getPrototypeOf(Router)).call(this, props));

        (0, _utils.bindAll)(_this, 'handleUrlChange');

        var routesConfig = props.routesConfig;


        _this.state = {
            routesConfig: routesConfig,
            currentPath: null,
            currentComponent: null,
            activeComponent: null,
            currentUserAccess: _utils.Auth.currentUserAccess,
            user: {}
        };

        _this.el = props.el;

        window.addEventListener('hashchange', function () {
            return _this.handleUrlChange(_this.path);
        });

        _this.handleUrlChange(_this.path);
        return _this;
    }

    _createClass(Router, [{
        key: 'logOut',
        value: function logOut() {
            this.state.user = {};
        }
    }, {
        key: 'handleUrlChange',
        value: function handleUrlChange(path) {
            var _this2 = this;

            var _state = this.state,
                routesConfig = _state.routesConfig,
                currentPath = _state.currentPath;


            this.state.currentUserAccess = _utils.Auth.currentUserAccess;

            if (_utils.Auth.isExpired()) {
                this.logOut();
            }
            var nextRoute = routesConfig.find(function (_ref) {
                var href = _ref.href;
                return href === _this2.path;
            });

            if (this.path == '') {
                nextRoute = routesConfig.find(function (_ref2) {
                    var href = _ref2.href;
                    return href === '/login';
                });
            }

            console.log(this.path);

            if (this.path == '/logout') {
                _utils.Auth.logOut();
                (0, _utils.navigateTo)('/login');
                return;
            }

            if ((0, _utils.checkGrantAccess)(this.state.currentUserAccess, nextRoute)) {
                console.log('access granted');
            } else {
                console.log('access denied');
                (0, _utils.navigateTo)('/login');
                return;
            }

            // var nextRoute = routesConfig.reduce((previousValue, currentValue, index, array) => {
            //     if (currentValue.href === this.path) {
            //         return currentValue;
            //     }
            //     return previousValue;
            // }, { href: '/', component: PizzaListPage });

            if (nextRoute && nextRoute !== currentPath) {
                // this.state.currentPath = nextRoute;
                // this.state.activeComponent = new nextRoute.component();
                // this.update();

                this.updateState({
                    currentPath: nextRoute,
                    activeComponent: new nextRoute.component()
                });
            }
            this.update();
        }
    }, {
        key: 'render',
        value: function render() {
            var activeComponent = this.state.activeComponent;


            return activeComponent.update();
        }
    }, {
        key: 'path',
        get: function get() {
            return window.location.hash.slice(1);
        }
    }]);

    return Router;
}(_components.Component);

exports.default = Router;

/***/ }),
/* 16 */
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
/* 17 */
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

var _utils = __webpack_require__(/*! ../utils */ 1);

__webpack_require__(/*! ./clock.scss */ 18);

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
/* 18 */
/*!***********************************!*\
  !*** ./src/components/clock.scss ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */
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

__webpack_require__(/*! ./logo.scss */ 20);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Logo = function (_Component) {
    _inherits(Logo, _Component);

    function Logo(props) {
        _classCallCheck(this, Logo);

        var _this = _possibleConstructorReturn(this, (Logo.__proto__ || Object.getPrototypeOf(Logo)).call(this, props));

        _this.el = document.createElement('a');
        _this.el.setAttribute('href', '#/');
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
/* 20 */
/*!**********************************!*\
  !*** ./src/components/logo.scss ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 21 */
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

__webpack_require__(/*! ./login.scss */ 22);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LogIn = function (_Component) {
    _inherits(LogIn, _Component);

    function LogIn(props) {
        _classCallCheck(this, LogIn);

        var _this = _possibleConstructorReturn(this, (LogIn.__proto__ || Object.getPrototypeOf(LogIn)).call(this, props));

        _this.el = document.createElement('div');
        _this.el.classList.add('logInBlock');
        return _this;
    }

    _createClass(LogIn, [{
        key: 'render',
        value: function render() {
            var userName = this.props.userName;


            var userProfile = '';

            if (userName) {
                userProfile = '<a type="button" href="#/profile" >' + userName + '</a>\n                &nbsp;/&nbsp;\n                <a type="button" href="#/logout">Log out</a>';
            } else {
                userProfile = '<a type="button" href="#/login" >Sign in</a>\n                &nbsp;/&nbsp; \n                <a type="button" href="#/registration">Sign up</a>';
            }

            return '<i class="fa fa-sign-in" aria-hidden="true"></i>\n                ' + userProfile + '\n                ';
        }
    }]);

    return LogIn;
}(_.Component);

exports.default = LogIn;

/***/ }),
/* 22 */
/*!***********************************!*\
  !*** ./src/components/login.scss ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 23 */
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

__webpack_require__(/*! ./button_new_pizza.scss */ 24);

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
/* 24 */
/*!**********************************************!*\
  !*** ./src/components/button_new_pizza.scss ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 25 */
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

__webpack_require__(/*! ./pizza_item.scss */ 26);

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
/* 26 */
/*!****************************************!*\
  !*** ./src/components/pizza_item.scss ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 27 */
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

__webpack_require__(/*! ./footer.scss */ 28);

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
/* 28 */
/*!************************************!*\
  !*** ./src/components/footer.scss ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 29 */
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

__webpack_require__(/*! ./login_form.scss */ 30);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginForm = function (_Component) {
    _inherits(LoginForm, _Component);

    function LoginForm(props) {
        _classCallCheck(this, LoginForm);

        var _this = _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call(this, props));

        _this.el = document.createElement('form');
        _this.el.classList.add('form');
        _this.el.classList.add('loginForm');
        _this.el.setAttribute('method', 'post');
        return _this;
    }

    _createClass(LoginForm, [{
        key: 'render',
        value: function render() {
            var loginValidationErrors = this.props.loginValidationErrors;


            var errorsEl = '';
            if (loginValidationErrors.length > 0) {
                errorsEl = '<ul>';
                errorsEl += '<li class="error_text">' + loginValidationErrors + '</li>';
                errorsEl += '</ul>';
            }

            return '<div class="inputGroup">\n                    <label class="form__label" for="login">Login</label>\n                    <input type="text" id="login" name="login" class="form__input loginForm__input_name" \n                    maxlength="256" required>\n                </div>\n                <div class="inputGroup">\n                    <label class="form__label" for="userName">Password</label>\n                    <input type="password" name="password" id="password" class="form__input loginForm__input_password" \n                    class="password" pattern=".{8,}" required>\n                </div>\n                 ' + errorsEl + '\n                <div class="inputGroup inputGroup__buttonGroup">\n\t\t            <button type="submit" class="button loginForm__button button__signIn">Sign in</button>\n\t\t            <a href="#/registration" class="button loginForm__button button__signUp"> Sign up</a>\n\t            </div>';
        }
    }]);

    return LoginForm;
}(_.Component);

exports.default = LoginForm;

/***/ }),
/* 30 */
/*!****************************************!*\
  !*** ./src/components/login_form.scss ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 31 */
/*!*********************************************!*\
  !*** ./src/components/registration_form.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ = __webpack_require__(/*! ./ */ 0);

__webpack_require__(/*! ./form.scss */ 32);

__webpack_require__(/*! ./registration_form.scss */ 33);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RegistrationForm = function (_Component) {
    _inherits(RegistrationForm, _Component);

    function RegistrationForm(props) {
        _classCallCheck(this, RegistrationForm);

        var _this = _possibleConstructorReturn(this, (RegistrationForm.__proto__ || Object.getPrototypeOf(RegistrationForm)).call(this, props));

        _this.el = document.createElement('form');
        _this.el.classList.add('form');
        _this.el.classList.add('registrationForm');
        _this.el.setAttribute('method', 'post');
        return _this;
    }

    _createClass(RegistrationForm, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                storeList = _props.storeList,
                registrationValidationErrors = _props.registrationValidationErrors;


            var storeListEl = '';
            if (storeList.length > 0) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = storeList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var store = _step.value;

                        storeListEl += '<option ' + (store.id == 17 ? 'selected' : '') + ' value="' + store.id + '">' + store.name + '</option>';
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }

            var errorsEl = '';
            if (registrationValidationErrors.length > 0) {
                errorsEl = '<ul>';
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = registrationValidationErrors[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var error = _step2.value;

                        errorsEl += '<li class="error_text">' + error + '</li>';
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }

                errorsEl += '</ul>';
            }

            return '<div class="inputGroup inputGroup_login">\n                    <label class="form__label" for="login">Login</label>\n                    <input type="text" id="login" class="form__input loginForm__input_name" \n                    maxlength="256" name="login">\n                </div>\n                <div class="inputGroup inputGroup_password">\n                    <label class="form__label" for="password">Password</label>\n                    <input type="password" id="password" name="password" class="form__input loginForm__input_password" \n                    pattern=".{8,}">\n                </div>\n                 <div class="inputGroup">\n                    <label class="form__label" for="confirm_password">Confirm password</label>\n                    <input type="password" id="confirm_password" name="confirm_password" class="form__input loginForm__input_password" \n                    pattern=".{8,}">\n                </div>\n                  <div class="inputGroup inputGroup_phone">\n                    <label class="form__label" for="phone_number">Phone number</label>\n                    <input type="tel" id="phone_number" name="phone_number" class="form__input loginForm__input_password">\n                </div>\n                 <div class="inputGroup inputGroup_email">\n                    <label class="form__label" for="email">Email</label>\n                    <input type="tel" id="email" name="email" class="form__input loginForm__input_password" >\n                </div>\n                  <div class="inputGroup inputGroup_store">\n                    <label class="form__label" for="store">Store</label>\n                    <select name="store">\n                        ' + storeListEl + '\n                    </select>\n                </div>\n                  <div class="inputGroup inputGroup_storePassword">\n                     <label class="form__label" for="store_password">Password</label>\n                    <input type="password" id="store_password" name="store_password" class="form__input loginForm__input_password" \n                   pattern=".{8,}">\n                </div>\n                \n                  ' + errorsEl + '\n                \n                <div class="inputGroup inputGroup__buttonGroup">\n\t\t            <a href="#/login" class="button loginForm__button button__signIn">Sign in</a>\n\t\t            <button type="submit" class="button loginForm__button button__signUp">Sign up</button>\n\t            </div>';
        }
    }]);

    return RegistrationForm;
}(_.Component);

exports.default = RegistrationForm;

/***/ }),
/* 32 */
/*!**********************************!*\
  !*** ./src/components/form.scss ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 33 */
/*!***********************************************!*\
  !*** ./src/components/registration_form.scss ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 34 */
/*!************************************!*\
  !*** ./src/utils/routes_config.js ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pizza_list_page = __webpack_require__(/*! ../containers/pizza_list_page */ 3);

var _pizza_list_page2 = _interopRequireDefault(_pizza_list_page);

var _login_page = __webpack_require__(/*! ../containers/login_page */ 4);

var _login_page2 = _interopRequireDefault(_login_page);

var _registration_page = __webpack_require__(/*! ../containers/registration_page */ 7);

var _registration_page2 = _interopRequireDefault(_registration_page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routesConfig = [{
    component: _pizza_list_page2.default,
    href: '/',
    access: ['userAuth']
}, {
    component: _login_page2.default,
    href: '/login',
    access: []
}, {
    component: _registration_page2.default,
    href: '/registration',
    access: []
}];

exports.default = routesConfig;

/***/ }),
/* 35 */
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

var _utils = __webpack_require__(/*! ../utils */ 1);

__webpack_require__(/*! ./header.scss */ 36);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header(props) {
        _classCallCheck(this, Header);

        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

        _this.el = document.createElement('header');

        _this.state = {
            userName: _utils.Auth.claims.username
        };

        // init components
        _this.clock = new _components.Clock();
        _this.logo = new _components.Logo();
        _this.login = new _components.LogIn();

        // this.getUserData();
        return _this;
    }

    // getUserData() {
    //     // return PizzaApi.User.getUserInfo(Auth.token)
    //     //     .then(userData => {
    //     //         console.log(userData)
    //     //     });
    // }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return [this.el.appendChild(this.clock.update()), this.el.appendChild(this.logo.update()), this.el.appendChild(this.login.update(this.state))];
        }
    }]);

    return Header;
}(_components.Component);

exports.default = Header;
// this.updateState({ userData })

/***/ }),
/* 36 */
/*!************************************!*\
  !*** ./src/containers/header.scss ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 37 */
/*!********************************!*\
  !*** ./src/api/pizza/store.js ***!
  \********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Store_Api = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _const = __webpack_require__(/*! ./const */ 6);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StoreApi = function () {
    function StoreApi() {
        _classCallCheck(this, StoreApi);
    }

    _createClass(StoreApi, [{
        key: 'getStoreList',
        value: function getStoreList() {
            var STORE_URL = '/store/list';
            return fetch(_const.BASE_API_URL + STORE_URL, {
                method: 'GET',
                headers: new Headers({ 'content-type': 'application/json' })
            }).then(function (res) {
                if (res.ok) {
                    return res.json().then(function (answer) {
                        return Promise.resolve({ answer: answer, status: res.status });
                    });
                } else {
                    return res.json().then(function (answer) {
                        return Promise.reject({ answer: answer, status: res.status });
                    });
                }
            });
        }
    }]);

    return StoreApi;
}();

var Store_Api = exports.Store_Api = new StoreApi();

/***/ }),
/* 38 */
/*!*******************************!*\
  !*** ./src/api/pizza/user.js ***!
  \*******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.User_Api = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _const = __webpack_require__(/*! ./const */ 6);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserApi = function () {
    function UserApi() {
        _classCallCheck(this, UserApi);
    }

    _createClass(UserApi, [{
        key: 'createUser',
        value: function createUser(regObj) {
            var CREATE_URL = '/user/create';

            return fetch(_const.BASE_API_URL + CREATE_URL, {
                method: 'POST',
                body: JSON.stringify({
                    "username": regObj.login,
                    "password": regObj.password,
                    "password_repeat": regObj.confirm_password,
                    "email": regObj.email,
                    "store_id": regObj.store_id,
                    "store_password": regObj.store_password
                }),
                headers: new Headers({ 'content-type': 'application/json' })
            }).then(function (res) {
                if (res.ok) {
                    return res.json().then(function (answer) {
                        return Promise.resolve({ answer: answer, status: res.status });
                    });
                } else {
                    return res.json().then(function (answer) {
                        return Promise.reject({ answer: answer, status: res.status });
                    });
                }
            });
        }
    }, {
        key: 'loginUser',
        value: function loginUser(userData) {
            var LOGIN_URL = '/user/login';

            return fetch(_const.BASE_API_URL + LOGIN_URL, {
                method: 'POST',
                body: JSON.stringify({
                    "username": userData.login,
                    "password": userData.password
                }),
                headers: new Headers({ 'content-type': 'application/json' })
            }).then(function (res) {
                if (res.ok) {
                    return res.json().then(function (answer) {
                        return Promise.resolve({ answer: answer, status: res.status });
                    });
                } else {
                    return res.json().then(function (answer) {
                        return Promise.reject({ answer: answer, status: res.status });
                    });
                }
            });
        }
    }, {
        key: 'getUserInfo',
        value: function getUserInfo(token) {
            var USER_INFO_URL = '/user/my_info';

            return fetch(_const.BASE_API_URL + USER_INFO_URL, {
                method: 'GET',
                headers: new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token })
            }).then(function (res) {
                if (res.ok) {
                    return res.json().then(function (answer) {
                        return Promise.resolve({ answer: answer, status: res.status });
                    });
                } else {
                    return res.json().then(function (answer) {
                        return Promise.reject({ answer: answer, status: res.status });
                    });
                }
            });
        }
    }]);

    return UserApi;
}();

var User_Api = exports.User_Api = new UserApi();

/***/ }),
/* 39 */
/*!****************************************!*\
  !*** ./src/containers/login_page.scss ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 40 */
/*!***********************************************!*\
  !*** ./src/containers/registration_page.scss ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 41 */
/*!*********************************************!*\
  !*** ./src/containers/pizza_list_page.scss ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=app.bundle.js.map
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cha2");


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cha2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./globals.ts
var globals = __webpack_require__("nB16");

// CONCATENATED MODULE: ./components/Header.tsx




const Header = () => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
  style: {
    top: 0,
    width: '100%',
    height: '50px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: globals["a" /* globals */].accentColor,
    padding: '30px',
    fontSize: '12pt'
  },
  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
    href: "/",
    style: {
      textDecoration: 'none'
    },
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      style: {
        color: globals["a" /* globals */].secondaryColor
      },
      children: globals["a" /* globals */].siteName
    })
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
    href: "https://github.com/Lawlez/dev.lwlx.xyz",
    style: {
      textDecoration: 'none'
    },
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      style: {
        padding: '0px 1em',
        color: globals["a" /* globals */].secondaryColor
      },
      children: "GitHub"
    })
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
    href: "https://github.com/InfoSecx0",
    style: {
      textDecoration: 'none'
    },
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      style: {
        padding: '0px 1em',
        color: globals["a" /* globals */].secondaryColor
      },
      children: "Twitter"
    })
  })]
});
// CONCATENATED MODULE: ./components/Footer.tsx




const Footer = () => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
  style: {
    top: 0,
    width: '100%',
    height: '56px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: globals["a" /* globals */].accentColor,
    color: globals["a" /* globals */].secondaryColor,
    padding: '32px',
    fontSize: '12pt'
  },
  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
    children: `© ${globals["a" /* globals */].yourName} ${new Date().getFullYear()}`
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
    href: "/rss.xml",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
      src: "/rss-white.svg",
      alt: "RSS Feed",
      height: "24",
      width: "24"
    })
  }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
    children: ["Version ", globals["a" /* globals */].version]
  })]
});
// CONCATENATED MODULE: ./pages/_app.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const App = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh'
    },
    className: "jsx-2179548495",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [globals["a" /* globals */].googleAnalyticsId && /*#__PURE__*/Object(jsx_runtime_["jsx"])("script", {
        async: true,
        src: `https://www.googletagmanager.com/gtag/js?id=${globals["a" /* globals */].googleAnalyticsId}`,
        className: "jsx-2179548495"
      }), globals["a" /* globals */].googleAnalyticsId && /*#__PURE__*/Object(jsx_runtime_["jsx"])("script", {
        dangerouslySetInnerHTML: {
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('globals', '${globals["a" /* globals */].googleAnalyticsId}');
            `
        },
        className: "jsx-2179548495"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Header, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _objectSpread(_objectSpread({}, pageProps), {}, {
      className: "jsx-2179548495" + " " + (pageProps && pageProps.className != null && pageProps.className || "")
    })), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        flex: 1
      },
      className: "jsx-2179548495"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(style_default.a, {
      id: "2179548495",
      children: ["html,body,#__next{min-height:100%;padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}", "*{box-sizing:border-box;}"]
    })]
  });
};

/* harmony default export */ var _app = __webpack_exports__["default"] = (App);

/***/ }),

/***/ "nB16":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return globals; });
let globals;

(function (_globals) {
  const version = _globals.version = '0.1.0';
  const yourName = _globals.yourName = 'Dominik (lwlx) Feger';
  const siteName = _globals.siteName = `dev.lwlx.xyz`;
  const siteDescription = _globals.siteDescription = "Dev / Sec / Ops ";
  const siteCreationDate = _globals.siteCreationDate = 'Oct 27, 2020 04:00:00 GMT';
  const twitterHandle = _globals.twitterHandle = '@lwlx';
  const email = _globals.email = `lwlx@lwlx.xyz`;
  const url = _globals.url = 'https://dev.lwlx.xyz';
  const primaryColor = _globals.primaryColor = `#1177AB`;
  const secondaryColor = _globals.secondaryColor = `#F07693`;
  const accentColor = _globals.accentColor = `#04060A`;
  const backgroundColor = _globals.backgroundColor = `#C9C0BE`;
  const googleAnalyticsId = _globals.googleAnalyticsId = ``;
})(globals || (globals = {}));

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });
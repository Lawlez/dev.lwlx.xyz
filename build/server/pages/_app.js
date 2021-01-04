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

/***/ "./components/Footer.tsx":
/*!*******************************!*\
  !*** ./components/Footer.tsx ***!
  \*******************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Footer\", function() { return Footer; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals */ \"./globals.ts\");\n\nvar _jsxFileName = \"/Users/lwlx/Desktop/PROJECTS/dev.lwlx.xyz/components/Footer.tsx\";\n\n\nconst date = new Date().getFullYear();\nconst Footer = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n  style: {\n    top: 0,\n    width: \"100%\",\n    height: \"56px\",\n    display: \"flex\",\n    flexDirection: \"row\",\n    alignItems: \"center\",\n    justifyContent: \"space-between\",\n    backgroundColor: _globals__WEBPACK_IMPORTED_MODULE_2__[\"globals\"].accentColor,\n    color: _globals__WEBPACK_IMPORTED_MODULE_2__[\"globals\"].secondaryColor,\n    padding: \"24px\",\n    fontSize: \"12pt\"\n  },\n  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n    children: `© lwlx. ${date}`\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n    href: \"/rss.xml\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: \"/rss-white.svg\",\n      alt: \"RSS Feed\",\n      height: \"24\",\n      width: \"24\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n    children: [\"Version \", _globals__WEBPACK_IMPORTED_MODULE_2__[\"globals\"].version]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, undefined)]\n}, void 0, true, {\n  fileName: _jsxFileName,\n  lineNumber: 6,\n  columnNumber: 3\n}, undefined);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci50c3g/ZTI4NSJdLCJuYW1lcyI6WyJkYXRlIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiRm9vdGVyIiwidG9wIiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmRDb2xvciIsImdsb2JhbHMiLCJhY2NlbnRDb2xvciIsImNvbG9yIiwic2Vjb25kYXJ5Q29sb3IiLCJwYWRkaW5nIiwiZm9udFNpemUiLCJ2ZXJzaW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsTUFBTUEsSUFBSSxHQUFHLElBQUlDLElBQUosR0FBV0MsV0FBWCxFQUFiO0FBQ08sTUFBTUMsTUFBZ0IsR0FBRyxtQkFDOUI7QUFDRSxPQUFLLEVBQUU7QUFDTEMsT0FBRyxFQUFFLENBREE7QUFFTEMsU0FBSyxFQUFFLE1BRkY7QUFHTEMsVUFBTSxFQUFFLE1BSEg7QUFJTEMsV0FBTyxFQUFFLE1BSko7QUFLTEMsaUJBQWEsRUFBRSxLQUxWO0FBTUxDLGNBQVUsRUFBRSxRQU5QO0FBT0xDLGtCQUFjLEVBQUUsZUFQWDtBQVFMQyxtQkFBZSxFQUFFQyxnREFBTyxDQUFDQyxXQVJwQjtBQVNMQyxTQUFLLEVBQUVGLGdEQUFPLENBQUNHLGNBVFY7QUFVTEMsV0FBTyxFQUFFLE1BVko7QUFXTEMsWUFBUSxFQUFFO0FBWEwsR0FEVDtBQUFBLDBCQWVFO0FBQUEsY0FBSyxXQUFVakIsSUFBSztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZkYsZUFnQkU7QUFBRyxRQUFJLEVBQUMsVUFBUjtBQUFBLDJCQUNFO0FBQUssU0FBRyxFQUFDLGdCQUFUO0FBQTBCLFNBQUcsRUFBQyxVQUE5QjtBQUF5QyxZQUFNLEVBQUMsSUFBaEQ7QUFBcUQsV0FBSyxFQUFDO0FBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBaEJGLGVBbUJFO0FBQUEsMkJBQVlZLGdEQUFPLENBQUNNLE9BQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESyIsImZpbGUiOiIuL2NvbXBvbmVudHMvRm9vdGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdsb2JhbHMgfSBmcm9tIFwiLi4vZ2xvYmFsc1wiO1xuXG5jb25zdCBkYXRlID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuZXhwb3J0IGNvbnN0IEZvb3RlcjogUmVhY3QuRkMgPSAoKSA9PiAoXG4gIDxkaXZcbiAgICBzdHlsZT17e1xuICAgICAgdG9wOiAwLFxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgaGVpZ2h0OiBcIjU2cHhcIixcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcbiAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGdsb2JhbHMuYWNjZW50Q29sb3IsXG4gICAgICBjb2xvcjogZ2xvYmFscy5zZWNvbmRhcnlDb2xvcixcbiAgICAgIHBhZGRpbmc6IFwiMjRweFwiLFxuICAgICAgZm9udFNpemU6IFwiMTJwdFwiLFxuICAgIH19XG4gID5cbiAgICA8cD57YMKpIGx3bHguICR7ZGF0ZX1gfTwvcD5cbiAgICA8YSBocmVmPVwiL3Jzcy54bWxcIj5cbiAgICAgIDxpbWcgc3JjPVwiL3Jzcy13aGl0ZS5zdmdcIiBhbHQ9XCJSU1MgRmVlZFwiIGhlaWdodD1cIjI0XCIgd2lkdGg9XCIyNFwiIC8+XG4gICAgPC9hPlxuICAgIDxwPlZlcnNpb24ge2dsb2JhbHMudmVyc2lvbn08L3A+XG4gIDwvZGl2PlxuKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Footer.tsx\n");

/***/ }),

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals */ \"./globals.ts\");\n\nvar _jsxFileName = \"/Users/lwlx/Desktop/PROJECTS/dev.lwlx.xyz/components/Header.tsx\";\n\n\nconst Header = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n  style: {\n    top: 0,\n    width: \"100%\",\n    height: \"48px\",\n    display: \"flex\",\n    flexDirection: \"row\",\n    alignItems: \"center\",\n    justifyContent: \"space-between\",\n    backgroundColor: _globals__WEBPACK_IMPORTED_MODULE_2__[\"globals\"].accentColor,\n    padding: \"24px\",\n    fontSize: \"12pt\"\n  },\n  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n    href: \"/\",\n    style: {\n      textDecoration: \"none\"\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      style: {\n        color: _globals__WEBPACK_IMPORTED_MODULE_2__[\"globals\"].secondaryColor\n      },\n      children: _globals__WEBPACK_IMPORTED_MODULE_2__[\"globals\"].siteName\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    style: {\n      flex: 1\n    }\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, undefined)]\n}, void 0, true, {\n  fileName: _jsxFileName,\n  lineNumber: 5,\n  columnNumber: 3\n}, undefined);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci50c3g/ZGRiOCJdLCJuYW1lcyI6WyJIZWFkZXIiLCJ0b3AiLCJ3aWR0aCIsImhlaWdodCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwiZ2xvYmFscyIsImFjY2VudENvbG9yIiwicGFkZGluZyIsImZvbnRTaXplIiwidGV4dERlY29yYXRpb24iLCJjb2xvciIsInNlY29uZGFyeUNvbG9yIiwic2l0ZU5hbWUiLCJmbGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sTUFBTUEsTUFBZ0IsR0FBRyxtQkFDOUI7QUFDRSxPQUFLLEVBQUU7QUFDTEMsT0FBRyxFQUFFLENBREE7QUFFTEMsU0FBSyxFQUFFLE1BRkY7QUFHTEMsVUFBTSxFQUFFLE1BSEg7QUFJTEMsV0FBTyxFQUFFLE1BSko7QUFLTEMsaUJBQWEsRUFBRSxLQUxWO0FBTUxDLGNBQVUsRUFBRSxRQU5QO0FBT0xDLGtCQUFjLEVBQUUsZUFQWDtBQVFMQyxtQkFBZSxFQUFFQyxnREFBTyxDQUFDQyxXQVJwQjtBQVNMQyxXQUFPLEVBQUUsTUFUSjtBQVVMQyxZQUFRLEVBQUU7QUFWTCxHQURUO0FBQUEsMEJBY0U7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFZLFNBQUssRUFBRTtBQUFFQyxvQkFBYyxFQUFFO0FBQWxCLEtBQW5CO0FBQUEsMkJBQ0U7QUFBRyxXQUFLLEVBQUU7QUFBRUMsYUFBSyxFQUFFTCxnREFBTyxDQUFDTTtBQUFqQixPQUFWO0FBQUEsZ0JBQThDTixnREFBTyxDQUFDTztBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWRGLGVBaUJFO0FBQUssU0FBSyxFQUFFO0FBQUVDLFVBQUksRUFBRTtBQUFSO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESyIsImZpbGUiOiIuL2NvbXBvbmVudHMvSGVhZGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdsb2JhbHMgfSBmcm9tIFwiLi4vZ2xvYmFsc1wiO1xuXG5leHBvcnQgY29uc3QgSGVhZGVyOiBSZWFjdC5GQyA9ICgpID0+IChcbiAgPGRpdlxuICAgIHN0eWxlPXt7XG4gICAgICB0b3A6IDAsXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICBoZWlnaHQ6IFwiNDhweFwiLFxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogZ2xvYmFscy5hY2NlbnRDb2xvcixcbiAgICAgIHBhZGRpbmc6IFwiMjRweFwiLFxuICAgICAgZm9udFNpemU6IFwiMTJwdFwiLFxuICAgIH19XG4gID5cbiAgICA8YSBocmVmPVwiL1wiIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiB9fT5cbiAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBnbG9iYWxzLnNlY29uZGFyeUNvbG9yIH19PntnbG9iYWxzLnNpdGVOYW1lfTwvcD5cbiAgICA8L2E+XG4gICAgPGRpdiBzdHlsZT17eyBmbGV4OiAxIH19IC8+XG4gICAgey8qPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9MYXdsZXovZGV2Lmx3bHgueHl6XCIgc3R5bGU9e3sgdGV4dERlY29yYXRpb246ICdub25lJyB9fT5cbiAgICAgIDxwIHN0eWxlPXt7IHBhZGRpbmc6ICcwcHggMWVtJywgY29sb3I6IGdsb2JhbHMuc2Vjb25kYXJ5Q29sb3IgfX0+R2l0SHViPC9wPlxuICAgIDwvYT5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0luZm9TZWN4MFwiIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiAnbm9uZScgfX0+XG4gICAgICA8cCBzdHlsZT17eyBwYWRkaW5nOiAnMHB4IDFlbScsIGNvbG9yOiBnbG9iYWxzLnNlY29uZGFyeUNvbG9yIH19PlR3aXR0ZXI8L3A+XG4gIDwvYT4qL31cbiAgPC9kaXY+XG4pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.tsx\n");

/***/ }),

/***/ "./globals.ts":
/*!********************!*\
  !*** ./globals.ts ***!
  \********************/
/*! exports provided: globals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"globals\", function() { return globals; });\nlet globals;\n\n(function (_globals) {\n  const version = _globals.version = \"0.4.4\";\n  const yourName = _globals.yourName = \"lwlx.\";\n  const siteName = _globals.siteName = `dev.lwlx.xyz`;\n  const siteDescription = _globals.siteDescription = \"Dev / Sec / Ops | Cybersecurity blog\";\n  const siteCreationDate = _globals.siteCreationDate = \"Oct 21, 2020 04:00:00 GMT\";\n  const twitterHandle = _globals.twitterHandle = \"@0x0000005\";\n  const email = _globals.email = `lwlx@lwlx.xyz`;\n  const url = _globals.url = \"https://dev.lwlx.xyz\";\n  const primaryColor = _globals.primaryColor = `#1177AB`;\n  const secondaryColor = _globals.secondaryColor = `#F07693`;\n  const accentColor = _globals.accentColor = `#04060A`;\n  const backgroundColor = _globals.backgroundColor = `#C9C0BE`;\n  const googleAnalyticsId = _globals.googleAnalyticsId = `G-TZ2VB384DV`;\n})(globals || (globals = {}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9nbG9iYWxzLnRzPzljMWQiXSwibmFtZXMiOlsidmVyc2lvbiIsInlvdXJOYW1lIiwic2l0ZU5hbWUiLCJzaXRlRGVzY3JpcHRpb24iLCJzaXRlQ3JlYXRpb25EYXRlIiwidHdpdHRlckhhbmRsZSIsImVtYWlsIiwidXJsIiwicHJpbWFyeUNvbG9yIiwic2Vjb25kYXJ5Q29sb3IiLCJhY2NlbnRDb2xvciIsImJhY2tncm91bmRDb2xvciIsImdvb2dsZUFuYWx5dGljc0lkIiwiZ2xvYmFscyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFPOzs7QUFDRSxRQUFNQSxPQUFPLHNCQUFHLE9BQWhCO0FBQ0EsUUFBTUMsUUFBUSx1QkFBRyxPQUFqQjtBQUNBLFFBQU1DLFFBQVEsdUJBQUksY0FBbEI7QUFDQSxRQUFNQyxlQUFlLDhCQUFHLHNDQUF4QjtBQUNBLFFBQU1DLGdCQUFnQiwrQkFBRywyQkFBekI7QUFDQSxRQUFNQyxhQUFhLDRCQUFHLFlBQXRCO0FBQ0EsUUFBTUMsS0FBSyxvQkFBSSxlQUFmO0FBQ0EsUUFBTUMsR0FBRyxrQkFBRyxzQkFBWjtBQUNBLFFBQU1DLFlBQVksMkJBQUksU0FBdEI7QUFDQSxRQUFNQyxjQUFjLDZCQUFJLFNBQXhCO0FBQ0EsUUFBTUMsV0FBVywwQkFBSSxTQUFyQjtBQUNBLFFBQU1DLGVBQWUsOEJBQUksU0FBekI7QUFDQSxRQUFNQyxpQkFBaUIsZ0NBQUksY0FBM0I7R0FiUUMsTyxLQUFBQSxPIiwiZmlsZSI6Ii4vZ2xvYmFscy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBuYW1lc3BhY2UgZ2xvYmFscyB7XG4gIGV4cG9ydCBjb25zdCB2ZXJzaW9uID0gXCIwLjQuNFwiO1xuICBleHBvcnQgY29uc3QgeW91ck5hbWUgPSBcImx3bHguXCI7XG4gIGV4cG9ydCBjb25zdCBzaXRlTmFtZSA9IGBkZXYubHdseC54eXpgO1xuICBleHBvcnQgY29uc3Qgc2l0ZURlc2NyaXB0aW9uID0gXCJEZXYgLyBTZWMgLyBPcHMgfCBDeWJlcnNlY3VyaXR5IGJsb2dcIjtcbiAgZXhwb3J0IGNvbnN0IHNpdGVDcmVhdGlvbkRhdGUgPSBcIk9jdCAyMSwgMjAyMCAwNDowMDowMCBHTVRcIjtcbiAgZXhwb3J0IGNvbnN0IHR3aXR0ZXJIYW5kbGUgPSBcIkAweDAwMDAwMDVcIjtcbiAgZXhwb3J0IGNvbnN0IGVtYWlsID0gYGx3bHhAbHdseC54eXpgO1xuICBleHBvcnQgY29uc3QgdXJsID0gXCJodHRwczovL2Rldi5sd2x4Lnh5elwiO1xuICBleHBvcnQgY29uc3QgcHJpbWFyeUNvbG9yID0gYCMxMTc3QUJgO1xuICBleHBvcnQgY29uc3Qgc2Vjb25kYXJ5Q29sb3IgPSBgI0YwNzY5M2A7XG4gIGV4cG9ydCBjb25zdCBhY2NlbnRDb2xvciA9IGAjMDQwNjBBYDtcbiAgZXhwb3J0IGNvbnN0IGJhY2tncm91bmRDb2xvciA9IGAjQzlDMEJFYDtcbiAgZXhwb3J0IGNvbnN0IGdvb2dsZUFuYWx5dGljc0lkID0gYEctVFoyVkIzODREVmA7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./globals.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.tsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.tsx\");\n/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../globals */ \"./globals.ts\");\n\nvar _jsxFileName = \"/Users/lwlx/Desktop/PROJECTS/dev.lwlx.xyz/pages/_app.tsx\";\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nconst App = ({\n  Component,\n  pageProps\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    style: {\n      display: 'flex',\n      flexDirection: 'column',\n      justifyContent: 'center',\n      alignItems: 'center',\n      minHeight: '100vh'\n    },\n    className: \"jsx-2179548495\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: [_globals__WEBPACK_IMPORTED_MODULE_6__[\"globals\"].googleAnalyticsId && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"script\", {\n        async: true,\n        src: `https://www.googletagmanager.com/gtag/js?id=${_globals__WEBPACK_IMPORTED_MODULE_6__[\"globals\"].googleAnalyticsId}`,\n        className: \"jsx-2179548495\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 11\n      }, undefined), _globals__WEBPACK_IMPORTED_MODULE_6__[\"globals\"].googleAnalyticsId && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"script\", {\n        dangerouslySetInnerHTML: {\n          __html: `\n              window.dataLayer = window.dataLayer || [];\n              function gtag(){dataLayer.push(arguments);}\n              gtag('js', new Date());\n\n            gtag('config', '${_globals__WEBPACK_IMPORTED_MODULE_6__[\"globals\"].googleAnalyticsId}');\n            `\n        },\n        className: \"jsx-2179548495\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 11\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"Header\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread(_objectSpread({}, pageProps), {}, {\n      className: \"jsx-2179548495\" + \" \" + (pageProps && pageProps.className != null && pageProps.className || \"\")\n    }), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        flex: 1\n      },\n      className: \"jsx-2179548495\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Footer__WEBPACK_IMPORTED_MODULE_5__[\"Footer\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"2179548495\",\n      children: \"html,body,#__next{min-height:100%;padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}*{box-sizing:border-box;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sd2x4L0Rlc2t0b3AvUFJPSkVDVFMvZGV2Lmx3bHgueHl6L3BhZ2VzL19hcHAudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDeUIsQUFPMkIsQUFTTSxnQkFSWixNQVNaLElBUlcsU0FHRyxzSUFDZCIsImZpbGUiOiIvVXNlcnMvbHdseC9EZXNrdG9wL1BST0pFQ1RTL2Rldi5sd2x4Lnh5ei9wYWdlcy9fYXBwLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInO1xuaW1wb3J0IHsgZ2xvYmFscyB9IGZyb20gJy4uL2dsb2JhbHMnO1xuXG5jb25zdCBBcHA6IFJlYWN0LkZDID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogYW55KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgbWluSGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8SGVhZD5cbiAgICAgICAge2dsb2JhbHMuZ29vZ2xlQW5hbHl0aWNzSWQgJiYgKFxuICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgIGFzeW5jXG4gICAgICAgICAgICBzcmM9e2BodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPSR7Z2xvYmFscy5nb29nbGVBbmFseXRpY3NJZH1gfVxuICAgICAgICAgID48L3NjcmlwdD5cbiAgICAgICAgKX1cbiAgICAgICAge2dsb2JhbHMuZ29vZ2xlQW5hbHl0aWNzSWQgJiYgKFxuICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgIF9faHRtbDogYFxuICAgICAgICAgICAgICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcbiAgICAgICAgICAgICAgZnVuY3Rpb24gZ3RhZygpe2RhdGFMYXllci5wdXNoKGFyZ3VtZW50cyk7fVxuICAgICAgICAgICAgICBndGFnKCdqcycsIG5ldyBEYXRlKCkpO1xuXG4gICAgICAgICAgICBndGFnKCdjb25maWcnLCAnJHtnbG9iYWxzLmdvb2dsZUFuYWx5dGljc0lkfScpO1xuICAgICAgICAgICAgYCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPjwvc2NyaXB0PlxuICAgICAgICApfVxuICAgICAgPC9IZWFkPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiAxIH19IC8+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAvLyByZXNldC5jc3NcblxuICAgICAgICBodG1sLFxuICAgICAgICBib2R5LFxuICAgICAgICAjX19uZXh0IHtcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sXG4gICAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLFxuICAgICAgICAgICAgc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuXG4gICAgICAgICoge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdfQ== */\\n/*@ sourceURL=/Users/lwlx/Desktop/PROJECTS/dev.lwlx.xyz/pages/_app.tsx */\"\n    }, void 0, false, void 0, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD83MjE2Il0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwibWluSGVpZ2h0IiwiZ2xvYmFscyIsImdvb2dsZUFuYWx5dGljc0lkIiwiX19odG1sIiwiZmxleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsR0FBYSxHQUFHLENBQUM7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQUQsS0FBbUM7QUFDdkQsc0JBQ0U7QUFDRSxTQUFLLEVBQUU7QUFDTEMsYUFBTyxFQUFFLE1BREo7QUFFTEMsbUJBQWEsRUFBRSxRQUZWO0FBR0xDLG9CQUFjLEVBQUUsUUFIWDtBQUlMQyxnQkFBVSxFQUFFLFFBSlA7QUFLTEMsZUFBUyxFQUFFO0FBTE4sS0FEVDtBQUFBO0FBQUEsNEJBU0UscUVBQUMsZ0RBQUQ7QUFBQSxpQkFDR0MsZ0RBQU8sQ0FBQ0MsaUJBQVIsaUJBQ0M7QUFDRSxhQUFLLE1BRFA7QUFFRSxXQUFHLEVBQUcsK0NBQThDRCxnREFBTyxDQUFDQyxpQkFBa0IsRUFGaEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosRUFPR0QsZ0RBQU8sQ0FBQ0MsaUJBQVIsaUJBQ0M7QUFDRSwrQkFBdUIsRUFBRTtBQUN2QkMsZ0JBQU0sRUFBRztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QkYsZ0RBQU8sQ0FBQ0MsaUJBQWtCO0FBQ3hEO0FBUHFDLFNBRDNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFURixlQThCRSxxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTlCRixlQStCRSxxRUFBQyxTQUFELGtDQUFlUCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQS9CRixlQWdDRTtBQUFLLFdBQUssRUFBRTtBQUFFUyxZQUFJLEVBQUU7QUFBUixPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhDRixlQWlDRSxxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWpDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXVERCxDQXhERDs7QUEwRGVYLGtFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcbmltcG9ydCB7IGdsb2JhbHMgfSBmcm9tICcuLi9nbG9iYWxzJztcblxuY29uc3QgQXBwOiBSZWFjdC5GQyA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IGFueSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIG1pbkhlaWdodDogJzEwMHZoJyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIHtnbG9iYWxzLmdvb2dsZUFuYWx5dGljc0lkICYmIChcbiAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICBhc3luY1xuICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RhZy9qcz9pZD0ke2dsb2JhbHMuZ29vZ2xlQW5hbHl0aWNzSWR9YH1cbiAgICAgICAgICA+PC9zY3JpcHQ+XG4gICAgICAgICl9XG4gICAgICAgIHtnbG9iYWxzLmdvb2dsZUFuYWx5dGljc0lkICYmIChcbiAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICBfX2h0bWw6IGBcbiAgICAgICAgICAgICAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XG4gICAgICAgICAgICAgIGZ1bmN0aW9uIGd0YWcoKXtkYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpO31cbiAgICAgICAgICAgICAgZ3RhZygnanMnLCBuZXcgRGF0ZSgpKTtcblxuICAgICAgICAgICAgZ3RhZygnY29uZmlnJywgJyR7Z2xvYmFscy5nb29nbGVBbmFseXRpY3NJZH0nKTtcbiAgICAgICAgICAgIGAsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID48L3NjcmlwdD5cbiAgICAgICAgKX1cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogMSB9fSAvPlxuICAgICAgPEZvb3RlciAvPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLy8gcmVzZXQuY3NzXG5cbiAgICAgICAgaHRtbCxcbiAgICAgICAgYm9keSxcbiAgICAgICAgI19fbmV4dCB7XG4gICAgICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLFxuICAgICAgICAgICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSxcbiAgICAgICAgICAgIHNhbnMtc2VyaWY7XG4gICAgICAgIH1cblxuICAgICAgICAqIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-jsx/style\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCI/MmJiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzdHlsZWQtanN4L3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-jsx/style\n");

/***/ })

/******/ });
webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostCard.tsx":
/*!*********************************!*\
  !*** ./components/PostCard.tsx ***!
  \*********************************/
/*! exports provided: PostCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PostCard\", function() { return PostCard; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fecha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fecha */ \"./node_modules/fecha/lib/fecha.js\");\n/* harmony import */ var _Tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tag */ \"./components/Tag.tsx\");\n\n\nvar _jsxFileName = \"/Users/entw/projects/dev.lwlx.xyz/components/PostCard.tsx\",\n    _this = undefined;\n\n\n\n\nvar PostCard = function PostCard(props) {\n  var post = props.post;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n    href: \"/\".concat(post.path),\n    style: {\n      textDecoration: 'inherit',\n      color: 'inherit',\n      margin: '10px',\n      display: 'flex',\n      flexDirection: 'row',\n      justifyContent: 'center',\n      height: '300px'\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        opacity: 0.92,\n        boxShadow: '0px 2px 10px #00000040',\n        width: '100%',\n        maxWidth: '960px',\n        overflow: 'hidden',\n        borderRadius: '8px',\n        display: 'flex',\n        flexDirection: 'column',\n        height: '100%'\n      },\n      children: [post.thumbnailPhoto && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        style: {\n          background: \"url(\".concat(post.thumbnailPhoto, \") no-repeat center center\"),\n          backgroundSize: 'cover',\n          width: '100%',\n          flex: 1\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        style: {\n          padding: '15px 10px',\n          display: 'flex',\n          flexDirection: 'column',\n          borderTop: '1px solid #00000020'\n        },\n        children: [post.title && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n          style: {\n            margin: '0px 0px 7px 0px',\n            fontSize: '14pt',\n            fontWeight: 600,\n            padding: '2px 10%',\n            textAlign: 'center'\n          },\n          children: post.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 13\n        }, _this),  false && /*#__PURE__*/false, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          style: {\n            opacity: 0.6,\n            textAlign: 'center',\n            margin: '0px'\n          },\n          children: props.post.datePublished ? Object(fecha__WEBPACK_IMPORTED_MODULE_2__[\"format\"])(new Date(props.post.datePublished), 'MMMM Do, YYYY') : ''\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          style: {\n            flex: 1\n          },\n          children: \" \"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 11\n        }, _this),  true && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          style: {\n            marginTop: '7px'\n          },\n          children: post.tags && (post.tags || []).map(function (tag) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Tag__WEBPACK_IMPORTED_MODULE_3__[\"Tag\"], {\n              tag: tag\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 85,\n              columnNumber: 60\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, _this);\n};\n_c = PostCard;\n\nvar _c;\n\n$RefreshReg$(_c, \"PostCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC50c3g/OGE0NiJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInByb3BzIiwicG9zdCIsInBhdGgiLCJ0ZXh0RGVjb3JhdGlvbiIsImNvbG9yIiwibWFyZ2luIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImhlaWdodCIsIm9wYWNpdHkiLCJib3hTaGFkb3ciLCJ3aWR0aCIsIm1heFdpZHRoIiwib3ZlcmZsb3ciLCJib3JkZXJSYWRpdXMiLCJ0aHVtYm5haWxQaG90byIsImJhY2tncm91bmQiLCJiYWNrZ3JvdW5kU2l6ZSIsImZsZXgiLCJwYWRkaW5nIiwiYm9yZGVyVG9wIiwidGl0bGUiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJ0ZXh0QWxpZ24iLCJkYXRlUHVibGlzaGVkIiwiZm9ybWF0IiwiRGF0ZSIsIm1hcmdpblRvcCIsInRhZ3MiLCJtYXAiLCJ0YWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFTyxJQUFNQSxRQUFzQyxHQUFHLFNBQXpDQSxRQUF5QyxDQUFDQyxLQUFELEVBQVc7QUFDL0QsTUFBTUMsSUFBSSxHQUFHRCxLQUFLLENBQUNDLElBQW5CO0FBQ0Esc0JBQ0U7QUFDRSxRQUFJLGFBQU1BLElBQUksQ0FBQ0MsSUFBWCxDQUROO0FBRUUsU0FBSyxFQUFFO0FBQ0xDLG9CQUFjLEVBQUUsU0FEWDtBQUVMQyxXQUFLLEVBQUUsU0FGRjtBQUdMQyxZQUFNLEVBQUUsTUFISDtBQUlMQyxhQUFPLEVBQUUsTUFKSjtBQUtMQyxtQkFBYSxFQUFFLEtBTFY7QUFNTEMsb0JBQWMsRUFBRSxRQU5YO0FBT0xDLFlBQU0sRUFBRTtBQVBILEtBRlQ7QUFBQSwyQkFZRTtBQUNFLFdBQUssRUFBRTtBQUNMQyxlQUFPLEVBQUUsSUFESjtBQUVMQyxpQkFBUyxFQUFFLHdCQUZOO0FBR0xDLGFBQUssRUFBRSxNQUhGO0FBSUxDLGdCQUFRLEVBQUUsT0FKTDtBQUtMQyxnQkFBUSxFQUFFLFFBTEw7QUFNTEMsb0JBQVksRUFBRSxLQU5UO0FBT0xULGVBQU8sRUFBRSxNQVBKO0FBUUxDLHFCQUFhLEVBQUUsUUFSVjtBQVNMRSxjQUFNLEVBQUU7QUFUSCxPQURUO0FBQUEsaUJBYUdSLElBQUksQ0FBQ2UsY0FBTCxpQkFDQztBQUNFLGFBQUssRUFBRTtBQUNMQyxvQkFBVSxnQkFBU2hCLElBQUksQ0FBQ2UsY0FBZCw4QkFETDtBQUVMRSx3QkFBYyxFQUFFLE9BRlg7QUFHTE4sZUFBSyxFQUFFLE1BSEY7QUFJTE8sY0FBSSxFQUFFO0FBSkQ7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZEosZUF1QkU7QUFDRSxhQUFLLEVBQUU7QUFDTEMsaUJBQU8sRUFBRSxXQURKO0FBRUxkLGlCQUFPLEVBQUUsTUFGSjtBQUdMQyx1QkFBYSxFQUFFLFFBSFY7QUFJTGMsbUJBQVMsRUFBRTtBQUpOLFNBRFQ7QUFBQSxtQkFRR3BCLElBQUksQ0FBQ3FCLEtBQUwsaUJBQ0M7QUFDRSxlQUFLLEVBQUU7QUFDTGpCLGtCQUFNLEVBQUUsaUJBREg7QUFFTGtCLG9CQUFRLEVBQUUsTUFGTDtBQUdMQyxzQkFBVSxFQUFFLEdBSFA7QUFJTEosbUJBQU8sRUFBRSxTQUpKO0FBS0xLLHFCQUFTLEVBQUU7QUFMTixXQURUO0FBQUEsb0JBU0d4QixJQUFJLENBQUNxQjtBQVRSO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEosRUFxQkcsdUJBQ0MsS0F0QkosZUFpQ0U7QUFBRyxlQUFLLEVBQUU7QUFBRVosbUJBQU8sRUFBRSxHQUFYO0FBQWdCZSxxQkFBUyxFQUFFLFFBQTNCO0FBQXFDcEIsa0JBQU0sRUFBRTtBQUE3QyxXQUFWO0FBQUEsb0JBQ0dMLEtBQUssQ0FBQ0MsSUFBTixDQUFXeUIsYUFBWCxHQUNHQyxvREFBTSxDQUFDLElBQUlDLElBQUosQ0FBUzVCLEtBQUssQ0FBQ0MsSUFBTixDQUFXeUIsYUFBcEIsQ0FBRCxFQUFxQyxlQUFyQyxDQURULEdBRUc7QUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWpDRixlQXNDRTtBQUFLLGVBQUssRUFBRTtBQUFFUCxnQkFBSSxFQUFFO0FBQVIsV0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF0Q0YsRUF1Q0csS0FBSSxpQkFDSDtBQUFLLGVBQUssRUFBRTtBQUFFVSxxQkFBUyxFQUFFO0FBQWIsV0FBWjtBQUFBLG9CQUNHNUIsSUFBSSxDQUFDNkIsSUFBTCxJQUFhLENBQUM3QixJQUFJLENBQUM2QixJQUFMLElBQWEsRUFBZCxFQUFrQkMsR0FBbEIsQ0FBc0IsVUFBQ0MsR0FBRDtBQUFBLGdDQUFTLHFFQUFDLHdDQUFEO0FBQUssaUJBQUcsRUFBRUE7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFUO0FBQUEsV0FBdEI7QUFEaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF4Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW9GRCxDQXRGTTtLQUFNakMsUSIsImZpbGUiOiIuL2NvbXBvbmVudHMvUG9zdENhcmQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ2ZlY2hhJztcbmltcG9ydCB7IFBvc3REYXRhIH0gZnJvbSAnLi4vbG9hZGVyJztcbmltcG9ydCB7IFRhZyB9IGZyb20gJy4vVGFnJztcblxuZXhwb3J0IGNvbnN0IFBvc3RDYXJkOiBSZWFjdC5GQzx7IHBvc3Q6IFBvc3REYXRhIH0+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHBvc3QgPSBwcm9wcy5wb3N0O1xuICByZXR1cm4gKFxuICAgIDxhXG4gICAgICBocmVmPXtgLyR7cG9zdC5wYXRofWB9XG4gICAgICBzdHlsZT17e1xuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ2luaGVyaXQnLFxuICAgICAgICBjb2xvcjogJ2luaGVyaXQnLFxuICAgICAgICBtYXJnaW46ICcxMHB4JyxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICBoZWlnaHQ6ICczMDBweCcsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBvcGFjaXR5OiAwLjkyLFxuICAgICAgICAgIGJveFNoYWRvdzogJzBweCAycHggMTBweCAjMDAwMDAwNDAnLFxuICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgbWF4V2lkdGg6ICc5NjBweCcsXG4gICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogJzhweCcsXG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7cG9zdC50aHVtYm5haWxQaG90byAmJiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogYHVybCgke3Bvc3QudGh1bWJuYWlsUGhvdG99KSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcmAsXG4gICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICBmbGV4OiAxLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBhZGRpbmc6ICcxNXB4IDEwcHgnLFxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgICBib3JkZXJUb3A6ICcxcHggc29saWQgIzAwMDAwMDIwJyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge3Bvc3QudGl0bGUgJiYgKFxuICAgICAgICAgICAgPGgyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAnMHB4IDBweCA3cHggMHB4JyxcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE0cHQnLFxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMnB4IDEwJScsXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3Bvc3QudGl0bGV9XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICl9XG4gICAgICAgICAge2ZhbHNlICYmIHBvc3Quc3VidGl0bGUgJiYgKFxuICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBtYXJnaW46ICcwcHgnLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcwcHgnLFxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJwdCcsXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjMzMzMzMzJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3Bvc3Quc3VidGl0bGV9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8cCBzdHlsZT17eyBvcGFjaXR5OiAwLjYsIHRleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpbjogJzBweCcgfX0+XG4gICAgICAgICAgICB7cHJvcHMucG9zdC5kYXRlUHVibGlzaGVkXG4gICAgICAgICAgICAgID8gZm9ybWF0KG5ldyBEYXRlKHByb3BzLnBvc3QuZGF0ZVB1Ymxpc2hlZCksICdNTU1NIERvLCBZWVlZJylcbiAgICAgICAgICAgICAgOiAnJ31cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiAxIH19PiA8L2Rpdj5cbiAgICAgICAgICB7dHJ1ZSAmJiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogJzdweCcgfX0+XG4gICAgICAgICAgICAgIHtwb3N0LnRhZ3MgJiYgKHBvc3QudGFncyB8fCBbXSkubWFwKCh0YWcpID0+IDxUYWcgdGFnPXt0YWd9IC8+KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9hPlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/PostCard.tsx\n");

/***/ })

})
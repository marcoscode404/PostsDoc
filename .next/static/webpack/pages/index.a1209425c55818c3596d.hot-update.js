webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/sliders/Colapse.tsx":
false,

/***/ "./src/components/sliders/index.tsx":
/*!******************************************!*\
  !*** ./src/components/sliders/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Slides; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n\nvar _jsxFileName = \"/home/ultra/\\xC1rea de Trabalho/PostsDoc/src/components/sliders/index.tsx\";\n\n/* eslint-disable prettier/prettier */\n\nfunction Slides() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n      h: \"20rem\",\n      gap: \"2rem\",\n      marginTop: \".5rem\",\n      bg: \"#161216\",\n      mt: \"1.3rem\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n        bg: \"#018C63\",\n        border: \"1px solid #2de6ae\",\n        w: \"66%\",\n        p: \".3rem\",\n        borderRadius: \"8px\",\n        backgroundSize: \"cover\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n          w: \"100%\",\n          h: \"100%\",\n          src: \"imgLogoColab.jpeg\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n        display: \"flex\",\n        justifyContent: \"end\",\n        bg: \"#015f43\",\n        border: \"1px solid #2de6ae\",\n        w: \"30%\",\n        height: \"100%\",\n        p: \".2rem\",\n        borderRadius: \"8px\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CollapseEx, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, this);\n}\n_c = Slides;\n\nvar _c;\n\n$RefreshReg$(_c, \"Slides\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2xpZGVycy9pbmRleC50c3g/Nzk2OCJdLCJuYW1lcyI6WyJTbGlkZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdlLFNBQVNBLE1BQVQsR0FBK0I7QUFDNUMsc0JBRUU7QUFBQSwyQkFDRSxxRUFBQyxxREFBRDtBQUNFLE9BQUMsRUFBQyxPQURKO0FBRUUsU0FBRyxFQUFDLE1BRk47QUFHRSxlQUFTLEVBQUMsT0FIWjtBQUlFLFFBQUUsRUFBQyxTQUpMO0FBS0UsUUFBRSxFQUFDLFFBTEw7QUFBQSw4QkFPRSxxRUFBQyxvREFBRDtBQUNFLFVBQUUsRUFBRSxTQUROO0FBRUUsY0FBTSxFQUFDLG1CQUZUO0FBR0UsU0FBQyxFQUFDLEtBSEo7QUFJRSxTQUFDLEVBQUMsT0FKSjtBQUtFLG9CQUFZLEVBQUMsS0FMZjtBQU1FLHNCQUFjLEVBQUMsT0FOakI7QUFBQSwrQkFRSSxxRUFBQyxzREFBRDtBQUNFLFdBQUMsRUFBQyxNQURKO0FBRUUsV0FBQyxFQUFDLE1BRko7QUFHRSxhQUFHLEVBQUM7QUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUko7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGLGVBcUJFLHFFQUFDLG9EQUFEO0FBQ0UsZUFBTyxFQUFDLE1BRFY7QUFFRSxzQkFBYyxFQUFDLEtBRmpCO0FBR0UsVUFBRSxFQUFDLFNBSEw7QUFJRSxjQUFNLEVBQUMsbUJBSlQ7QUFLRSxTQUFDLEVBQUMsS0FMSjtBQU1FLGNBQU0sRUFBQyxNQU5UO0FBT0UsU0FBQyxFQUFDLE9BUEo7QUFRRSxvQkFBWSxFQUFDLEtBUmY7QUFBQSwrQkFXRSxxRUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBckJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGRjtBQWtERDtLQW5EdUJBLE0iLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zbGlkZXJzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHByZXR0aWVyL3ByZXR0aWVyICovXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgRmxleCwgSW1hZ2UgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7IEZpTWVudSB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2xpZGVzKCk6IEpTWC5FbGVtZW50IHtcbiAgcmV0dXJuIChcblxuICAgIDxoZWFkZXI+XG4gICAgICA8RmxleFxuICAgICAgICBoPVwiMjByZW1cIlxuICAgICAgICBnYXA9XCIycmVtXCJcbiAgICAgICAgbWFyZ2luVG9wPVwiLjVyZW1cIlxuICAgICAgICBiZz1cIiMxNjEyMTZcIlxuICAgICAgICBtdD1cIjEuM3JlbVwiXG4gICAgICA+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBiZz0gXCIjMDE4QzYzXCJcbiAgICAgICAgICBib3JkZXI9XCIxcHggc29saWQgIzJkZTZhZVwiXG4gICAgICAgICAgdz1cIjY2JVwiXG4gICAgICAgICAgcD1cIi4zcmVtXCJcbiAgICAgICAgICBib3JkZXJSYWRpdXM9XCI4cHhcIlxuICAgICAgICAgIGJhY2tncm91bmRTaXplPVwiY292ZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgICAgIHc9XCIxMDAlXCIgXG4gICAgICAgICAgICAgIGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgc3JjPSdpbWdMb2dvQ29sYWIuanBlZydcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94XG4gICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiZW5kXCJcbiAgICAgICAgICBiZz1cIiMwMTVmNDNcIlxuICAgICAgICAgIGJvcmRlcj1cIjFweCBzb2xpZCAjMmRlNmFlXCJcbiAgICAgICAgICB3PVwiMzAlXCJcbiAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICBwPVwiLjJyZW1cIlxuICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjhweFwiXG4gICAgICAgID5cblxuICAgICAgICAgIDxDb2xsYXBzZUV4IC8+XG4gICAgICAgICAgXG4gICAgICAgICAgey8qIDxCdXR0b24gaD1cIjJyZW1cIiB3PVwiMnJlbVwiIGJvcmRlcj1cIjFweCBzb2xpZCAjMmRlNmFlXCIgYmc9XCIjMDE4QzYzXCI+XG4gICAgICAgICAgICA8RmlNZW51IFxuICAgICAgICAgICAgICBmb250U2l6ZT1cIjEuNXJlbVwiXG4gICAgICAgICAgICAgIGN1cnNvcj1cInBvaW50ZXJcIlxuICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9CdXR0b24+ICovfVxuICAgICAgICAgIFxuICAgICAgICA8L0JveD5cblxuICAgICAgPC9GbGV4PlxuICAgIDwvaGVhZGVyPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/sliders/index.tsx\n");

/***/ })

})
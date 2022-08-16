webpackHotUpdate_N_E("pages/post/[slug]",{

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

/***/ }),

/***/ "./src/components/Header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../status */ "./src/components/status/index.tsx");

var _jsxFileName = "C:\\Users\\marcosgomes\\Desktop\\outrosProjetos\\PostsDoc\\src\\components\\Header\\index.tsx";

/* eslint-disable prettier/prettier */



function Header(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    maxWidth: "100%",
    h: "5rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    bg: "#015F43;",
    m: "0 auto",
    p: ".2rem",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
        gap: ".5rem",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "icone.svg",
          alt: "icone",
          w: "1.9rem",
          cursor: "pointer"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
          cursor: "pointer",
          fontSize: "1.5rem",
          children: "DoksLab"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      alignItems: "center",
      justifyContent: "space-between",
      bg: "#018C63",
      border: "1px solid #2de6ae",
      w: "11rem",
      p: "5",
      borderRadius: "8",
      cursor: "pointer",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_status__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Douglas balde"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["WrapItem"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
          w: "2.5rem",
          h: "2.5rem",
          p: "2",
          borderRadius: "50%",
          border: "1px solid #84f8d5",
          bg: "#0a1511",
          color: "white",
          name: "Douglas Balde",
          src: "https://bit.ly/code-beast"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
_c = Header;

var _c;

$RefreshReg$(_c, "Header");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/status/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/status/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StatusIndicator; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_marcosgomes_Desktop_outrosProjetos_PostsDoc_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\marcosgomes\\Desktop\\outrosProjetos\\PostsDoc\\src\\components\\status\\index.tsx";

function _templateObject2() {
  var data = Object(C_Users_marcosgomes_Desktop_outrosProjetos_PostsDoc_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\t0% {\n    transform: scale(0.9);\n  }\n  25% {\n    transform: scale(1.1);\n  }\n  50% {\n    transform: scale(0.9);\n  }\n  100% {\n    transform: scale(0.9);\n  }\n\t"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(C_Users_marcosgomes_Desktop_outrosProjetos_PostsDoc_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\t0% {\n    transform: scale(", ");\n  }\n\t30% {\n\t\ttransform: scale(", ");\n\t},\n  40%,\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n\t"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



function StatusIndicator() {
  var activeColor = 'green.500';
  var inactiveColor = 'gray.400';
  var ringScaleMin = 0.33;
  var ringScaleMax = 0.66;
  var pulseRing = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(_templateObject(), ringScaleMin, ringScaleMax);
  var pulseDot = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(_templateObject2());
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    justifyContent: "center",
    alignItems: "center",
    h: "216px",
    w: "full",
    flexDir: "column",
    overflow: "hidden",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
      label: "Status: Active",
      textTransform: "capitalize",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        as: "div",
        h: "24px",
        w: "24px",
        mb: "1.99em",
        position: "relative",
        bgColor: activeColor,
        borderRadius: "50%",
        _before: {
          content: "''",
          position: 'relative',
          display: 'block',
          width: '300%',
          height: '300%',
          boxSizing: 'border-box',
          marginLeft: '-100%',
          marginTop: '-100%',
          borderRadius: '50%',
          bgColor: activeColor,
          animation: "2.25s ".concat(pulseRing, " cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite")
        },
        _after: {
          animation: "2.25s ".concat(pulseDot, " cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite")
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
      label: "Status: Inactive",
      textTransform: "capitalize",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        as: "div",
        h: "24px",
        w: "24px",
        position: "relative",
        bgColor: inactiveColor,
        borderRadius: "50%"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, this);
}
_c = StatusIndicator;

var _c;

$RefreshReg$(_c, "StatusIndicator");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc3RhdHVzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJIZWFkZXIiLCJwcm9wcyIsIlN0YXR1c0luZGljYXRvciIsImFjdGl2ZUNvbG9yIiwiaW5hY3RpdmVDb2xvciIsInJpbmdTY2FsZU1pbiIsInJpbmdTY2FsZU1heCIsInB1bHNlUmluZyIsImtleWZyYW1lcyIsInB1bHNlRG90IiwiY29udGVudCIsInBvc2l0aW9uIiwiZGlzcGxheSIsIndpZHRoIiwiaGVpZ2h0IiwiYm94U2l6aW5nIiwibWFyZ2luTGVmdCIsIm1hcmdpblRvcCIsImJvcmRlclJhZGl1cyIsImJnQ29sb3IiLCJhbmltYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFFQTtBQUllLFNBQVNBLE1BQVQsQ0FBaUJDLEtBQWpCLEVBQXNDO0FBRW5ELHNCQUNFLHFFQUFDLG9EQUFEO0FBQ0UsWUFBUSxFQUFDLE1BRFg7QUFDa0IsS0FBQyxFQUFDLE1BRHBCO0FBRUUsV0FBTyxFQUFDLE1BRlY7QUFHRSxrQkFBYyxFQUFDLGVBSGpCO0FBSUUsY0FBVSxFQUFDLFFBSmI7QUFLRSxNQUFFLEVBQUMsVUFMTDtBQU1FLEtBQUMsRUFBQyxRQU5KO0FBTWEsS0FBQyxFQUFDLE9BTmY7QUFBQSw0QkFTRSxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxHQUFYO0FBQUEsNkJBQ0Us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UEMsb0JBQVUsRUFBRSxPQVBMO0FBUVBDLG1CQUFTLEVBQUUsT0FSSjtBQVNQQyxzQkFBWSxFQUFFLEtBVFA7QUFVUEMsaUJBQU8sRUFBRWhCLFdBVkY7QUFXUGlCLG1CQUFTLGtCQUFXYixTQUFYO0FBWEYsU0FSWDtBQXFCRSxjQUFNLEVBQUU7QUFDTmEsbUJBQVMsa0JBQVdYLFFBQVg7QUFESDtBQXJCVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGLGVBbUNFLHFFQUFDLHdEQUFEO0FBQVMsV0FBSyxvQkFBZDtBQUFvQyxtQkFBYSxFQUFDLFlBQWxEO0FBQUEsNkJBQ0UscUVBQUMsb0RBQUQ7QUFDRSxVQUFFLEVBQUMsS0FETDtBQUVFLFNBQUMsRUFBQyxNQUZKO0FBR0UsU0FBQyxFQUFDLE1BSEo7QUFJRSxnQkFBUSxFQUFDLFVBSlg7QUFLRSxlQUFPLEVBQUVMLGFBTFg7QUFNRSxvQkFBWSxFQUFDO0FBTmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnREQ7S0FyRnVCRixlIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3QvW3NsdWddLjUzNmQ1MDhlYmY3NjViYmI1OWY0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsKHN0cmluZ3MsIHJhdykge1xuICBpZiAoIXJhdykge1xuICAgIHJhdyA9IHN0cmluZ3Muc2xpY2UoMCk7XG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZShPYmplY3QuZGVmaW5lUHJvcGVydGllcyhzdHJpbmdzLCB7XG4gICAgcmF3OiB7XG4gICAgICB2YWx1ZTogT2JqZWN0LmZyZWV6ZShyYXcpXG4gICAgfVxuICB9KSk7XG59IiwiLyogZXNsaW50LWRpc2FibGUgcHJldHRpZXIvcHJldHRpZXIgKi9cclxuaW1wb3J0IHsgQXZhdGFyLCBiYWNrZ3JvdW5kLCBCb3gsIEJyZWFkY3J1bWIsIEZsZXgsIEltYWdlLCBXcmFwSXRlbX0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IEZpR2l0aHViIH0gZnJvbSAncmVhY3QtaWNvbnMvZmknO1xyXG5pbXBvcnQgU3RhdHVzSW5kaWNhdG9yIGZyb20gJy4uL3N0YXR1cyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9oZWFkZXIubW9kdWxlLnNjc3MnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlciAocHJvcHMpOiAgSlNYLkVsZW1lbnQge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBcclxuICAgICAgbWF4V2lkdGg9XCIxMDAlXCIgaD1cIjVyZW1cIiBcclxuICAgICAgZGlzcGxheT1cImZsZXhcIiBcclxuICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcclxuICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgIGJnPVwiIzAxNUY0MztcIiBcclxuICAgICAgbT1cIjAgYXV0b1wiIHA9XCIuMnJlbVwiIFxyXG5cclxuICAgID5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICA8RmxleCBnYXA9XCIuNXJlbVwiPlxyXG4gICAgICAgICAgPEltYWdlIFxyXG4gICAgICAgICAgICBzcmM9XCJpY29uZS5zdmdcIiBcclxuICAgICAgICAgICAgYWx0PVwiaWNvbmVcIiBcclxuICAgICAgICAgICAgdz1cIjEuOXJlbVwiIFxyXG4gICAgICAgICAgICBjdXJzb3I9XCJwb2ludGVyXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCb3ggY3Vyc29yPVwicG9pbnRlclwiIGZvbnRTaXplPVwiMS41cmVtXCI+XHJcbiAgICAgICAgICAgICAgRG9rc0xhYlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICAgIDwvTGluaz5cclxuXHJcblxyXG4gICAgICA8RmxleFxyXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXHJcbiAgICAgICAgYmc9XCIjMDE4QzYzXCJcclxuICAgICAgICBib3JkZXI9XCIxcHggc29saWQgIzJkZTZhZVwiXHJcbiAgICAgICAgdz1cIjExcmVtXCJcclxuICAgICAgICBwPVwiNVwiXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzPVwiOFwiXHJcbiAgICAgICAgY3Vyc29yPVwicG9pbnRlclwiXHJcbiAgICAgID5cclxuICAgICAgICA8IFN0YXR1c0luZGljYXRvciAvPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxwPkRvdWdsYXMgYmFsZGU8L3A+XHJcblxyXG5cclxuICAgICAgICB7LyogPEF2YXRhclxyXG4gICAgICAgICAgYmc9ICcjMGRkYjlkJ1xyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzPVwiNTAlXCJcclxuICAgICAgICAgIGljb249ezxGaUdpdGh1YiBmb250U2l6ZT0nMS41cmVtJyAvPn1cclxuICAgICAgICAgIGNvbG9yPSBcIiMxMTY4MzlcIlxyXG4gICAgICAgICAgYm9yZGVyPVwiMXB4IHNvbGlkICM4NGY4ZDVcIlxyXG4gICAgICAgICAgcD1cIjJcIlxyXG4gICAgICAgICAgdz1cIjEuNXJlbVwiXHJcbiAgICAgICAgICBoPVwiMS41cmVtXCJcclxuICAgICAgICAvPiAqL31cclxuXHJcbiAgICAgICAgICA8V3JhcEl0ZW0+XHJcbiAgICAgICAgICAgICAgPEF2YXRhciBcclxuICAgICAgICAgICAgICAgIHc9XCIyLjVyZW1cIiBoPVwiMi41cmVtXCIgcD1cIjJcIlxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwiNTAlXCJcclxuICAgICAgICAgICAgICAgIGJvcmRlcj1cIjFweCBzb2xpZCAjODRmOGQ1XCJcclxuICAgICAgICAgICAgICAgIGJnPSBcIiMwYTE1MTFcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdEb3VnbGFzIEJhbGRlJyBzcmM9J2h0dHBzOi8vYml0Lmx5L2NvZGUtYmVhc3QnIC8+XHJcbiAgICAgICAgICA8L1dyYXBJdGVtPlxyXG5cclxuICAgICAgPC9GbGV4PlxyXG5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQm94LCBGbGV4LCBrZXlmcmFtZXMsIFRvb2x0aXAgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0YXR1c0luZGljYXRvcigpIHtcclxuICBjb25zdCBhY3RpdmVDb2xvciA9ICdncmVlbi41MDAnO1xyXG4gIGNvbnN0IGluYWN0aXZlQ29sb3IgPSAnZ3JheS40MDAnO1xyXG4gIGNvbnN0IHJpbmdTY2FsZU1pbiA9IDAuMzM7XHJcbiAgY29uc3QgcmluZ1NjYWxlTWF4ID0gMC42NjtcclxuXHJcbiAgY29uc3QgcHVsc2VSaW5nID0ga2V5ZnJhbWVzYFxyXG5cdDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoJHtyaW5nU2NhbGVNaW59KTtcclxuICB9XHJcblx0MzAlIHtcclxuXHRcdHRyYW5zZm9ybTogc2NhbGUoJHtyaW5nU2NhbGVNYXh9KTtcclxuXHR9LFxyXG4gIDQwJSxcclxuICA1MCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHRgO1xyXG5cclxuICBjb25zdCBwdWxzZURvdCA9IGtleWZyYW1lc2BcclxuXHQwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XHJcbiAgfVxyXG4gIDI1JSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xyXG4gIH1cclxuXHRgO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZsZXhcclxuICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxyXG4gICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgaD1cIjIxNnB4XCJcclxuICAgICAgdz1cImZ1bGxcIlxyXG4gICAgICBmbGV4RGlyPVwiY29sdW1uXCJcclxuICAgICAgb3ZlcmZsb3c9XCJoaWRkZW5cIj5cclxuICAgICAgey8qIElkZWFsbHksIG9ubHkgdGhlIGJveCBzaG91bGQgYmUgdXNlZC4gVGhlIDxGbGV4IC8+IGlzIHVzZWQgdG8gc3R5bGUgdGhlIHByZXZpZXcuICovfVxyXG4gICAgICA8VG9vbHRpcCBsYWJlbD17YFN0YXR1czogQWN0aXZlYH0gdGV4dFRyYW5zZm9ybT1cImNhcGl0YWxpemVcIj5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBhcz1cImRpdlwiXHJcbiAgICAgICAgICBoPVwiMjRweFwiXHJcbiAgICAgICAgICB3PVwiMjRweFwiXHJcbiAgICAgICAgICBtYj1cIjEuOTllbVwiXHJcbiAgICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcclxuICAgICAgICAgIGJnQ29sb3I9e2FjdGl2ZUNvbG9yfVxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzPVwiNTAlXCJcclxuICAgICAgICAgIF9iZWZvcmU9e3tcclxuICAgICAgICAgICAgY29udGVudDogXCInJ1wiLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgICAgICAgd2lkdGg6ICczMDAlJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMzAwJScsXHJcbiAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxyXG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiAnLTEwMCUnLFxyXG4gICAgICAgICAgICBtYXJnaW5Ub3A6ICctMTAwJScsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXHJcbiAgICAgICAgICAgIGJnQ29sb3I6IGFjdGl2ZUNvbG9yLFxyXG4gICAgICAgICAgICBhbmltYXRpb246IGAyLjI1cyAke3B1bHNlUmluZ30gY3ViaWMtYmV6aWVyKDAuNDU1LCAwLjAzLCAwLjUxNSwgMC45NTUpIC0wLjRzIGluZmluaXRlYCxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBfYWZ0ZXI9e3tcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBgMi4yNXMgJHtwdWxzZURvdH0gY3ViaWMtYmV6aWVyKDAuNDU1LCAwLjAzLCAwLjUxNSwgMC45NTUpIC0wLjRzIGluZmluaXRlYCxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICA8VG9vbHRpcCBsYWJlbD17YFN0YXR1czogSW5hY3RpdmVgfSB0ZXh0VHJhbnNmb3JtPVwiY2FwaXRhbGl6ZVwiPlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIGFzPVwiZGl2XCJcclxuICAgICAgICAgIGg9XCIyNHB4XCJcclxuICAgICAgICAgIHc9XCIyNHB4XCJcclxuICAgICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxyXG4gICAgICAgICAgYmdDb2xvcj17aW5hY3RpdmVDb2xvcn1cclxuICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjUwJVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Ub29sdGlwPlxyXG4gICAgPC9GbGV4PlxyXG4gICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9
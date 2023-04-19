/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mantine/core */ \"@mantine/core\");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mantine_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mantine/notifications */ \"@mantine/notifications\");\n/* harmony import */ var _mantine_notifications__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mantine_notifications__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n// import { MeContextProvider } from \"../context/me\";\nconst queryClient = new react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClient();\nfunction App(props) {\n    const { Component , pageProps  } = props;\n    // Use the layout defined at the page level, if available\n    const getLayout = Component.getLayout ?? ((page)=>page);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Page title\"\n                    }, void 0, false, {\n                        fileName: \"/Users/owner/Desktop/doujous/lookingup/youtu/client/pages/_app.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"minimum-scale=1, initial-scale=1, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"/Users/owner/Desktop/doujous/lookingup/youtu/client/pages/_app.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/owner/Desktop/doujous/lookingup/youtu/client/pages/_app.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.MantineProvider, {\n                withGlobalStyles: true,\n                withNormalizeCSS: true,\n                theme: {\n                    /** Put your mantine theme override here */ colorScheme: \"light\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_notifications__WEBPACK_IMPORTED_MODULE_5__.Notifications, {}, void 0, false, {\n                        fileName: \"/Users/owner/Desktop/doujous/lookingup/youtu/client/pages/_app.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClientProvider, {\n                        client: queryClient,\n                        children: getLayout(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                                ...pageProps\n                            }, void 0, false, {\n                                fileName: \"/Users/owner/Desktop/doujous/lookingup/youtu/client/pages/_app.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 19\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/owner/Desktop/doujous/lookingup/youtu/client/pages/_app.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 17\n                        }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/owner/Desktop/doujous/lookingup/youtu/client/pages/_app.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/owner/Desktop/doujous/lookingup/youtu/client/pages/_app.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUVGO0FBQ2tDO0FBQ2Y7QUFDTztBQUd2RCxxREFBcUQ7QUFFckQsTUFBTUssY0FBYyxJQUFJSixvREFBV0E7QUFVcEIsU0FBU0ssSUFBSUMsS0FBeUIsRUFBRTtJQUNyRCxNQUFNLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFLEdBQUdGO0lBRWpDLHlEQUF5RDtJQUN6RCxNQUFNRyxZQUFZRixVQUFVRSxTQUFTLElBQUssRUFBQ0MsT0FBU0EsSUFBRztJQUV2RCxxQkFDRTs7MEJBQ0UsOERBQUNYLGtEQUFJQTs7a0NBQ0gsOERBQUNZO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUNDQyxNQUFLO3dCQUNMQyxTQUFROzs7Ozs7Ozs7Ozs7MEJBSVosOERBQUNaLDBEQUFlQTtnQkFDZGEsZ0JBQWdCO2dCQUNoQkMsZ0JBQWdCO2dCQUNoQkMsT0FBTztvQkFDTCx5Q0FBeUMsR0FDekNDLGFBQWE7Z0JBQ2Y7O2tDQUVBLDhEQUFDZixpRUFBYUE7Ozs7O2tDQUNaLDhEQUFDRiw0REFBbUJBO3dCQUFDa0IsUUFBUWY7a0NBRXhCSyx3QkFDQyw4REFBQ1c7c0NBQ0MsNEVBQUNiO2dDQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVExQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuaW1wb3J0IHsgTWFudGluZVByb3ZpZGVyIH0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIjtcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnMgfSBmcm9tIFwiQG1hbnRpbmUvbm90aWZpY2F0aW9uc1wiO1xuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCB7IE1lQ29udGV4dFByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHQvbWVcIjtcblxuY29uc3QgcXVlcnlDbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoKTtcblxudHlwZSBOZXh0UGFnZVdpdGhMYXlvdXQgPSBOZXh0UGFnZSAmIHtcbiAgZ2V0TGF5b3V0PzogKHBhZ2U6IFJlYWN0RWxlbWVudCkgPT4gUmVhY3ROb2RlO1xufTtcblxudHlwZSBBcHBQcm9wc1dpdGhMYXlvdXQgPSBBcHBQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0UGFnZVdpdGhMYXlvdXQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAocHJvcHM6IEFwcFByb3BzV2l0aExheW91dCkge1xuICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSBwcm9wcztcblxuICAvLyBVc2UgdGhlIGxheW91dCBkZWZpbmVkIGF0IHRoZSBwYWdlIGxldmVsLCBpZiBhdmFpbGFibGVcbiAgY29uc3QgZ2V0TGF5b3V0ID0gQ29tcG9uZW50LmdldExheW91dCA/PyAoKHBhZ2UpID0+IHBhZ2UpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UGFnZSB0aXRsZTwvdGl0bGU+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICBjb250ZW50PVwibWluaW11bS1zY2FsZT0xLCBpbml0aWFsLXNjYWxlPTEsIHdpZHRoPWRldmljZS13aWR0aFwiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxNYW50aW5lUHJvdmlkZXJcbiAgICAgICAgd2l0aEdsb2JhbFN0eWxlc1xuICAgICAgICB3aXRoTm9ybWFsaXplQ1NTXG4gICAgICAgIHRoZW1lPXt7XG4gICAgICAgICAgLyoqIFB1dCB5b3VyIG1hbnRpbmUgdGhlbWUgb3ZlcnJpZGUgaGVyZSAqL1xuICAgICAgICAgIGNvbG9yU2NoZW1lOiBcImxpZ2h0XCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxOb3RpZmljYXRpb25zIC8+XG4gICAgICAgICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtxdWVyeUNsaWVudH0+XG4gICAgICAgICAgICB7LyogPE1lQ29udGV4dFByb3ZpZGVyPiAqL31cbiAgICAgICAgICAgICAge2dldExheW91dChcbiAgICAgICAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7LyogPC9NZUNvbnRleHRQcm92aWRlcj4gKi99XG4gICAgICAgICAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxuICAgICAgPC9NYW50aW5lUHJvdmlkZXI+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIlF1ZXJ5Q2xpZW50IiwiUXVlcnlDbGllbnRQcm92aWRlciIsIk1hbnRpbmVQcm92aWRlciIsIk5vdGlmaWNhdGlvbnMiLCJxdWVyeUNsaWVudCIsIkFwcCIsInByb3BzIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZ2V0TGF5b3V0IiwicGFnZSIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50Iiwid2l0aEdsb2JhbFN0eWxlcyIsIndpdGhOb3JtYWxpemVDU1MiLCJ0aGVtZSIsImNvbG9yU2NoZW1lIiwiY2xpZW50IiwibWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@mantine/core":
/*!********************************!*\
  !*** external "@mantine/core" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mantine/core");

/***/ }),

/***/ "@mantine/notifications":
/*!*****************************************!*\
  !*** external "@mantine/notifications" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mantine/notifications");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
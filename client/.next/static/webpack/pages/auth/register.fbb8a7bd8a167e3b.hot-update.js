"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/auth/register",{

/***/ "./api/index.tsx":
/*!***********************!*\
  !*** ./api/index.tsx ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"login\": function() { return /* binding */ login; },\n/* harmony export */   \"registerUser\": function() { return /* binding */ registerUser; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n// import { Video } from \"../types\";\nconst base = \"https://localhost:4000\";\nconst userBase = \"\".concat(base, \"/api/users\");\nconst authBase = \"\".concat(base, \"/api/auth\");\nconst videosBase = \"\".concat(base, \"/api/videos\");\nfunction registerUser(payload) {\n    return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(userBase, payload).then((res)=>res.data);\n}\nfunction login(payload) {\n    return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(authBase, payload, {\n        withCredentials: true\n    }).then((res)=>res.data);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQUMxQixvQ0FBb0M7QUFFcEMsTUFBTUMsT0FBT0Msd0JBQW9DO0FBRWpELE1BQU1HLFdBQVcsR0FBUSxPQUFMSixNQUFLO0FBQ3pCLE1BQU1LLFdBQVcsR0FBUSxPQUFMTCxNQUFLO0FBQ3pCLE1BQU1NLGFBQWEsR0FBUSxPQUFMTixNQUFLO0FBRXBCLFNBQVNPLGFBQWFDLE9BSzVCLEVBQUU7SUFDRCxPQUFPVCxrREFBVSxDQUFDSyxVQUFVSSxTQUFTRSxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSTtBQUM3RCxDQUFDO0FBRU0sU0FBU0MsTUFBTUwsT0FBNEMsRUFBRTtJQUNsRSxPQUFPVCxrREFDQSxDQUFDTSxVQUFVRyxTQUFTO1FBQ3ZCTSxpQkFBaUIsSUFBSTtJQUN2QixHQUNDSixJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSTtBQUMzQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwaS9pbmRleC50c3g/ZGI4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG4vLyBpbXBvcnQgeyBWaWRlbyB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCBiYXNlID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UO1xuXG5jb25zdCB1c2VyQmFzZSA9IGAke2Jhc2V9L2FwaS91c2Vyc2A7XG5jb25zdCBhdXRoQmFzZSA9IGAke2Jhc2V9L2FwaS9hdXRoYDtcbmNvbnN0IHZpZGVvc0Jhc2UgPSBgJHtiYXNlfS9hcGkvdmlkZW9zYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyVXNlcihwYXlsb2FkOiB7XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIGNvbmZpcm1QYXNzd29yZDogc3RyaW5nO1xufSkge1xuICByZXR1cm4gYXhpb3MucG9zdCh1c2VyQmFzZSwgcGF5bG9hZCkudGhlbigocmVzKSA9PiByZXMuZGF0YSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dpbihwYXlsb2FkOiB7IGVtYWlsOiBzdHJpbmc7IHBhc3N3b3JkOiBzdHJpbmcgfSkge1xuICByZXR1cm4gYXhpb3NcbiAgICAucG9zdChhdXRoQmFzZSwgcGF5bG9hZCwge1xuICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgIH0pXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLmRhdGEpO1xufSJdLCJuYW1lcyI6WyJheGlvcyIsImJhc2UiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UIiwidXNlckJhc2UiLCJhdXRoQmFzZSIsInZpZGVvc0Jhc2UiLCJyZWdpc3RlclVzZXIiLCJwYXlsb2FkIiwicG9zdCIsInRoZW4iLCJyZXMiLCJkYXRhIiwibG9naW4iLCJ3aXRoQ3JlZGVudGlhbHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./api/index.tsx\n"));

/***/ })

});
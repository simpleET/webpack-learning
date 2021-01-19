/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./images/add.svg":
/*!************************!*\
  !*** ./images/add.svg ***!
  \************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTJweCIgaGVpZ2h0PSIxMnB4IiB2aWV3Qm94PSIwIDAgMTIgMTIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU5ICg4NjEyNykgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+YWRkPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Iuagj+ebrueuoeeQhiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1ODAuMDAwMDAwLCAtMjczLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iYWRkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNTc5LjMxMjcyNSwgMjczLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHJlY3QgaWQ9IuefqeW9ouWkh+S7vS0xNyIgZmlsbD0iIzMzMzMzMyIgeD0iMSIgeT0iNSIgd2lkdGg9IjExIiBoZWlnaHQ9IjMiPjwvcmVjdD4KICAgICAgICAgICAgICAgIDxyZWN0IGlkPSLnn6nlvaLlpIfku70tMTgiIGZpbGw9IiM2RTcyODAiIHg9IjUiIHk9IjEiIHdpZHRoPSIzIiBoZWlnaHQ9IjExIj48L3JlY3Q+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==\";\n\n//# sourceURL=webpack://webpack-resource-2021-01-19/./images/add.svg?");

/***/ }),

/***/ "./images/nodata.png":
/*!***************************!*\
  !*** ./images/nodata.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"039ac2cb130407b4759f.png\";\n\n//# sourceURL=webpack://webpack-resource-2021-01-19/./images/nodata.png?");

/***/ }),

/***/ "./src/example.txt":
/*!*************************!*\
  !*** ./src/example.txt ***!
  \*************************/
/***/ ((module) => {

eval("module.exports = \"Hello world!\";\n\n//# sourceURL=webpack://webpack-resource-2021-01-19/./src/example.txt?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _images_add_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/add.svg */ \"./images/add.svg\");\n/* harmony import */ var _images_nodata_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/nodata.png */ \"./images/nodata.png\");\n/* harmony import */ var _example_txt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./example.txt */ \"./src/example.txt\");\n\r\n\r\n\r\n\r\nconst index = {\r\n\tinit() {\r\n\t\tlet cont = document.getElementById('container');\r\n\t\tcont.style.background = `url(./${_images_nodata_png__WEBPACK_IMPORTED_MODULE_1__}) center center`;\r\n\t\tcont.innerHTML = _example_txt__WEBPACK_IMPORTED_MODULE_2__;\r\n\t},\r\n}\r\nindex.init();\n\n//# sourceURL=webpack://webpack-resource-2021-01-19/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
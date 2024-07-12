"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_10_react_project"] = self["webpackChunk_10_react_project"] || []).push([["src_components_MovieCard_MovieCard_jsx"],{

/***/ "./src/components/MovieCard/MovieCard.jsx":
/*!************************************************!*\
  !*** ./src/components/MovieCard/MovieCard.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _MovieCard_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MovieCard.scss */ \"./src/components/MovieCard/MovieCard.scss\");\n/* harmony import */ var _Typography_Typography_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Typography/Typography.jsx */ \"./src/components/Typography/Typography.jsx\");\n\n\n\nconst MovieCard = _ref => {\n  let {\n    title = \"Avenger\",\n    imageUrl\n  } = _ref;\n  let imgFinalUrl;\n  if (imageUrl) {\n    imgFinalUrl = `http://localhost:5555/images/${imageUrl}`;\n  } else {\n    imgFinalUrl = \"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_QL75_UX380_CR0,0,380,562_.jpg\";\n  }\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"card\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: imgFinalUrl,\n    alt: \"\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Typography_Typography_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    text: title,\n    type: \"title\"\n  }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovieCard);\n\n//# sourceURL=webpack://10-react-project/./src/components/MovieCard/MovieCard.jsx?");

/***/ }),

/***/ "./src/components/Typography/Typography.jsx":
/*!**************************************************!*\
  !*** ./src/components/Typography/Typography.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _Typography_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Typography.scss */ \"./src/components/Typography/Typography.scss\");\n\n\nconst Typography = _ref => {\n  let {\n    type,\n    text\n  } = _ref;\n  const renderTypography = () => {\n    switch (type) {\n      case \"title\":\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n          className: \"title\"\n        }, text);\n      case \"paragraph\":\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n          className: \"paragraph\"\n        }, text);\n      default:\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", null, text);\n    }\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, renderTypography());\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Typography);\n\n//# sourceURL=webpack://10-react-project/./src/components/Typography/Typography.jsx?");

/***/ }),

/***/ "./src/components/MovieCard/MovieCard.scss":
/*!*************************************************!*\
  !*** ./src/components/MovieCard/MovieCard.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://10-react-project/./src/components/MovieCard/MovieCard.scss?");

/***/ }),

/***/ "./src/components/Typography/Typography.scss":
/*!***************************************************!*\
  !*** ./src/components/Typography/Typography.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://10-react-project/./src/components/Typography/Typography.scss?");

/***/ })

}]);
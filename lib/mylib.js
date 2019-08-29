(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("mylib", [], factory);
	else if(typeof exports === 'object')
		exports["mylib"] = factory();
	else
		root["mylib"] = factory();
})(typeof self !== "undefined" ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/library/mylib.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/library/compute.js":
/*!********************************!*\
  !*** ./src/library/compute.js ***!
  \********************************/
/*! exports provided: add, sub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"add\", function() { return add; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sub\", function() { return sub; });\nvar cov_1a7dfcrm5l = function () {\n  var path = \"C:\\\\Users\\\\24234\\\\Downloads\\\\webpack-karma-master\\\\webpack-karma-master\\\\src\\\\library\\\\compute.js\";\n  var hash = \"3185af51f516acc545a2294c5d792a8998737346\";\n  var global = new Function(\"return this\")();\n  var gcv = \"__coverage__\";\n  var coverageData = {\n    path: \"C:\\\\Users\\\\24234\\\\Downloads\\\\webpack-karma-master\\\\webpack-karma-master\\\\src\\\\library\\\\compute.js\",\n    statementMap: {\n      \"0\": {\n        start: {\n          line: 2,\n          column: 4\n        },\n        end: {\n          line: 2,\n          column: 15\n        }\n      },\n      \"1\": {\n        start: {\n          line: 6,\n          column: 4\n        },\n        end: {\n          line: 6,\n          column: 15\n        }\n      }\n    },\n    fnMap: {\n      \"0\": {\n        name: \"add\",\n        decl: {\n          start: {\n            line: 1,\n            column: 16\n          },\n          end: {\n            line: 1,\n            column: 19\n          }\n        },\n        loc: {\n          start: {\n            line: 1,\n            column: 24\n          },\n          end: {\n            line: 3,\n            column: 1\n          }\n        },\n        line: 1\n      },\n      \"1\": {\n        name: \"sub\",\n        decl: {\n          start: {\n            line: 5,\n            column: 16\n          },\n          end: {\n            line: 5,\n            column: 19\n          }\n        },\n        loc: {\n          start: {\n            line: 5,\n            column: 24\n          },\n          end: {\n            line: 7,\n            column: 1\n          }\n        },\n        line: 5\n      }\n    },\n    branchMap: {},\n    s: {\n      \"0\": 0,\n      \"1\": 0\n    },\n    f: {\n      \"0\": 0,\n      \"1\": 0\n    },\n    b: {},\n    _coverageSchema: \"43e27e138ebf9cfc5966b082cf9a028302ed4184\",\n    hash: \"3185af51f516acc545a2294c5d792a8998737346\"\n  };\n  var coverage = global[gcv] || (global[gcv] = {});\n\n  if (coverage[path] && coverage[path].hash === hash) {\n    return coverage[path];\n  }\n\n  return coverage[path] = coverageData;\n}();\n\nfunction add(x, y) {\n  cov_1a7dfcrm5l.f[0]++;\n  cov_1a7dfcrm5l.s[0]++;\n  return x + y;\n}\nfunction sub(x, y) {\n  cov_1a7dfcrm5l.f[1]++;\n  cov_1a7dfcrm5l.s[1]++;\n  return x - y;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teWxpYi8uL3NyYy9saWJyYXJ5L2NvbXB1dGUuanM/YmEzZiJdLCJuYW1lcyI6WyJhZGQiLCJ4IiwieSIsInN1YiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxTQUFTQSxHQUFULENBQWFDLENBQWIsRUFBZUMsQ0FBZixFQUFpQjtBQUFBO0FBQUE7QUFDcEIsU0FBT0QsQ0FBQyxHQUFDQyxDQUFUO0FBQ0g7QUFFTSxTQUFTQyxHQUFULENBQWFGLENBQWIsRUFBZUMsQ0FBZixFQUFpQjtBQUFBO0FBQUE7QUFDcEIsU0FBT0QsQ0FBQyxHQUFDQyxDQUFUO0FBQ0giLCJmaWxlIjoiLi9zcmMvbGlicmFyeS9jb21wdXRlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGFkZCh4LHkpe1xyXG4gICAgcmV0dXJuIHgreTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN1Yih4LHkpe1xyXG4gICAgcmV0dXJuIHgteTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/library/compute.js\n");

/***/ }),

/***/ "./src/library/mylib.js":
/*!******************************!*\
  !*** ./src/library/mylib.js ***!
  \******************************/
/*! exports provided: add, sub, Person */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _compute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute */ \"./src/library/compute.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"add\", function() { return _compute__WEBPACK_IMPORTED_MODULE_0__[\"add\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"sub\", function() { return _compute__WEBPACK_IMPORTED_MODULE_0__[\"sub\"]; });\n\n/* harmony import */ var _person__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./person */ \"./src/library/person.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Person\", function() { return _person__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\nvar cov_26se3cgm = function () {\n  var path = \"C:\\\\Users\\\\24234\\\\Downloads\\\\webpack-karma-master\\\\webpack-karma-master\\\\src\\\\library\\\\mylib.js\";\n  var hash = \"ad57ce9df5a0df353b447ec75e589c83d1d988f0\";\n  var global = new Function(\"return this\")();\n  var gcv = \"__coverage__\";\n  var coverageData = {\n    path: \"C:\\\\Users\\\\24234\\\\Downloads\\\\webpack-karma-master\\\\webpack-karma-master\\\\src\\\\library\\\\mylib.js\",\n    statementMap: {},\n    fnMap: {},\n    branchMap: {},\n    s: {},\n    f: {},\n    b: {},\n    _coverageSchema: \"43e27e138ebf9cfc5966b082cf9a028302ed4184\",\n    hash: \"ad57ce9df5a0df353b447ec75e589c83d1d988f0\"\n  };\n  var coverage = global[gcv] || (global[gcv] = {});\n\n  if (coverage[path] && coverage[path].hash === hash) {\n    return coverage[path];\n  }\n\n  return coverage[path] = coverageData;\n}();\n\n\n // let mylib = {\n//     add,\n//     sub,\n//     Person,\n// };\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teWxpYi8uL3NyYy9saWJyYXJ5L215bGliLmpzP2ZiNjYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NyYy9saWJyYXJ5L215bGliLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthZGQsIHN1Yn0gZnJvbSAnLi9jb21wdXRlJztcclxuXHJcbmltcG9ydCBQZXJzb24gZnJvbSAnLi9wZXJzb24nO1xyXG5cclxuXHJcbi8vIGxldCBteWxpYiA9IHtcclxuLy8gICAgIGFkZCxcclxuLy8gICAgIHN1YixcclxuLy8gICAgIFBlcnNvbixcclxuLy8gfTtcclxuXHJcbmV4cG9ydCB7ICAgIFxyXG4gICAgYWRkLFxyXG4gICAgc3ViLFxyXG4gICAgUGVyc29uXHJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/library/mylib.js\n");

/***/ }),

/***/ "./src/library/person.js":
/*!*******************************!*\
  !*** ./src/library/person.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Person; });\nvar cov_30cpeyj1g = function () {\n  var path = \"C:\\\\Users\\\\24234\\\\Downloads\\\\webpack-karma-master\\\\webpack-karma-master\\\\src\\\\library\\\\person.js\";\n  var hash = \"2f4e5524df91f58c7ea2a0437a2e18925e9587fb\";\n  var global = new Function(\"return this\")();\n  var gcv = \"__coverage__\";\n  var coverageData = {\n    path: \"C:\\\\Users\\\\24234\\\\Downloads\\\\webpack-karma-master\\\\webpack-karma-master\\\\src\\\\library\\\\person.js\",\n    statementMap: {\n      \"0\": {\n        start: {\n          line: 3,\n          column: 8\n        },\n        end: {\n          line: 3,\n          column: 24\n        }\n      },\n      \"1\": {\n        start: {\n          line: 7,\n          column: 8\n        },\n        end: {\n          line: 7,\n          column: 30\n        }\n      }\n    },\n    fnMap: {\n      \"0\": {\n        name: \"(anonymous_0)\",\n        decl: {\n          start: {\n            line: 2,\n            column: 4\n          },\n          end: {\n            line: 2,\n            column: 5\n          }\n        },\n        loc: {\n          start: {\n            line: 2,\n            column: 21\n          },\n          end: {\n            line: 4,\n            column: 5\n          }\n        },\n        line: 2\n      },\n      \"1\": {\n        name: \"(anonymous_1)\",\n        decl: {\n          start: {\n            line: 6,\n            column: 4\n          },\n          end: {\n            line: 6,\n            column: 5\n          }\n        },\n        loc: {\n          start: {\n            line: 6,\n            column: 12\n          },\n          end: {\n            line: 8,\n            column: 5\n          }\n        },\n        line: 6\n      }\n    },\n    branchMap: {},\n    s: {\n      \"0\": 0,\n      \"1\": 0\n    },\n    f: {\n      \"0\": 0,\n      \"1\": 0\n    },\n    b: {},\n    _coverageSchema: \"43e27e138ebf9cfc5966b082cf9a028302ed4184\",\n    hash: \"2f4e5524df91f58c7ea2a0437a2e18925e9587fb\"\n  };\n  var coverage = global[gcv] || (global[gcv] = {});\n\n  if (coverage[path] && coverage[path].hash === hash) {\n    return coverage[path];\n  }\n\n  return coverage[path] = coverageData;\n}();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Person =\n/*#__PURE__*/\nfunction () {\n  function Person(name) {\n    _classCallCheck(this, Person);\n\n    cov_30cpeyj1g.f[0]++;\n    cov_30cpeyj1g.s[0]++;\n    this.name = name;\n  }\n\n  _createClass(Person, [{\n    key: \"myName\",\n    value: function myName() {\n      cov_30cpeyj1g.f[1]++;\n      cov_30cpeyj1g.s[1]++;\n      console.log(this.name);\n    }\n  }]);\n\n  return Person;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teWxpYi8uL3NyYy9saWJyYXJ5L3BlcnNvbi5qcz9iMTg4Il0sIm5hbWVzIjpbIlBlcnNvbiIsIm5hbWUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQXFCQSxNOzs7QUFDakIsa0JBQVlDLElBQVosRUFBaUI7QUFBQTs7QUFBQTtBQUFBO0FBQ2IsU0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0g7Ozs7NkJBRU87QUFBQTtBQUFBO0FBQ0pDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtGLElBQWpCO0FBQ0giLCJmaWxlIjoiLi9zcmMvbGlicmFyeS9wZXJzb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBQZXJzb257XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKXtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXHJcbiAgICB9XHJcblxyXG4gICAgbXlOYW1lKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5uYW1lKVxyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/library/person.js\n");

/***/ })

/******/ });
});
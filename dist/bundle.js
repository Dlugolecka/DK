/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

function createApp() {
  var app = document.createElement('div');
  app.id = 'app';
  document.body.appendChild(app);
  return app;
}
module.exports = createApp;

/***/ }),
/* 2 */
/***/ ((module) => {

function createHeader(app) {
  var header = document.createElement("header");
  var heading = document.createElement("h1");
  heading.textContent = "Beat! The Virtual Drum Kit Experience";
  header.className = "header--container ";
  heading.className = "heading--text";
  header.id = "header--main";
  header.appendChild(heading);
  app.appendChild(header);
}
module.exports = createHeader;

/***/ }),
/* 3 */
/***/ ((module) => {

function createFooter(app) {
  var footer = document.createElement("footer");
  var content = document.createElement('p');
  content.textContent = "Drum Kit © 2023 ";
  footer.className = "footer--container ";
  content.className = "footer--content";
  footer.appendChild(content);
  app.appendChild(footer);
}
module.exports = createFooter;

/***/ }),
/* 4 */
/***/ ((module) => {

var config = {
  div: {
    "class": [""],
    children: [{
      tag: "button",
      "class": ["btn"],
      text: "W"
    }, {
      tag: "button",
      "class": ["btn"],
      text: "S"
    }, {
      tag: "button",
      "class": ["btn"],
      text: "D"
    }, {
      tag: "button",
      "class": ["btn"],
      text: "F"
    }, {
      tag: "button",
      "class": ["btn"],
      text: "G"
    }, {
      tag: "button",
      "class": ["btn"],
      text: "H"
    }, {
      tag: "button",
      "class": ["btn"],
      text: "J"
    }, {
      tag: "button",
      "class": ["btn"],
      text: "K"
    }, {
      tag: "button",
      "class": ["btn"],
      text: "L"
    }]
  }
};
function createKeyboard(app) {
  var tag = Object.keys(config)[0];
  var tag_container = document.createElement(tag);
  app.appendChild(tag_container);
  if (config[tag].children && config[tag].children.length) {
    config[tag].children.forEach(function (element) {
      var tagEl = document.createElement(element.tag);
      tagEl.textContent = element.text;
      tagEl.className = element["class"];
      tag_container.appendChild(tagEl);
    });
  } else console.log('nie dziala');
}
module.exports = createKeyboard;

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_js_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _src_js_app_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_js_app_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_js_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _src_js_header_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_js_header_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_js_footer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _src_js_footer_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_js_footer_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_js_content_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _src_js_content_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_js_content_js__WEBPACK_IMPORTED_MODULE_3__);




var app = _src_js_app_js__WEBPACK_IMPORTED_MODULE_0___default()();
_src_js_header_js__WEBPACK_IMPORTED_MODULE_1___default()(app);
_src_js_content_js__WEBPACK_IMPORTED_MODULE_3___default()(app);
_src_js_footer_js__WEBPACK_IMPORTED_MODULE_2___default()(app);
})();

/******/ })()
;
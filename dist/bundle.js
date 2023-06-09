/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-color: #303030; }\n\n#app {\n  color: #f5f5f5; }\n\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n  background-color: #f5f5f5; }\n\n::-webkit-scrollbar {\n  width: 12px;\n  background-color: #f5f5f5; }\n\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px #000000;\n  background-color: #555;\n  border: 1px solid #000000; }\n\n#app {\n  display: flex;\n  flex-flow: column wrap; }\n\n.header--container {\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.heading--text {\n  display: flex;\n  justify-content: center; }\n\n.keyboard--container {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  align-content: baseline; }\n\n.keyboard--section {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center; }\n\n.history--section {\n  overflow-y: scroll; }\n\n.btn {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center; }\n\n.footer--container {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n@media screen and (max-width: 992px) {\n  .heading--text {\n    text-align: center; } }\n\n@media screen and (max-width: 768px) {\n  .heading--text {\n    text-align: center;\n    font-size: 1.5rem; }\n  .btn {\n    max-height: 100px;\n    max-width: 180px; } }\n\n@media screen and (max-width: 576px) {\n  .heading--text {\n    text-align: center;\n    font-size: 1.2rem; }\n  .btn {\n    max-width: 100%;\n    flex-grow: 2; } }\n\n@media screen and (max-width: 375px) {\n  .heading--text {\n    text-align: center;\n    font-size: 1rem; }\n  .btn {\n    max-height: 100px;\n    max-width: 180px; } }\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box; }\n\nhtml,\nbody {\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 16px;\n  margin: 0; }\n\n.header--container {\n  background-color: #424242;\n  border-bottom: 2px solid #000000;\n  height: 60px; }\n\n.heading--text {\n  margin: 0;\n  padding: 5px;\n  width: 100%; }\n\n.keyboard--container {\n  background-color: #303030;\n  min-height: calc(100vh - 100px); }\n\n.btn {\n  background-color: #424242;\n  height: 100px;\n  width: 180px;\n  line-height: 1.5rem;\n  margin: 15px;\n  color: #f5f5f5;\n  border: 1px solid #ffffff;\n  transition: 0.5s; }\n  .btn:hover {\n    background-color: #2e2e2e;\n    color: #1764fe;\n    letter-spacing: 0.25rem;\n    box-shadow: 0 0 35px #1764fe;\n    border: 1px solid #1764fe;\n    cursor: pointer; }\n\n.history--section {\n  width: 90%;\n  margin: 40px 15px 30px;\n  border: 1px solid #ffffff;\n  background-color: #424242;\n  height: 250px; }\n\n.history--text {\n  border-bottom: 1px dashed #ffffff;\n  padding: 15px;\n  margin: 0;\n  text-align: center; }\n\n.footer--container {\n  background-color: #424242;\n  border-top: 1px solid #000000;\n  height: 40px; }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 10 */
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 11 */
/***/ ((module) => {

function createApp() {
  var app = document.createElement("div");
  app.id = "app";
  document.body.appendChild(app);
  return app;
}
module.exports = createApp;

/***/ }),
/* 12 */
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
/* 13 */
/***/ ((module) => {

function createFooter(app) {
  var footer = document.createElement("footer");
  var content = document.createElement("p");
  content.textContent = "Drum Kit \xA9 ".concat(new Date().getFullYear());
  footer.className = "footer--container ";
  content.className = "footer--content";
  footer.appendChild(content);
  app.appendChild(footer);
}
module.exports = createFooter;

/***/ }),
/* 14 */
/***/ ((module) => {

var config = {
  div: {
    "class": ["keyboard--container"],
    children: [{
      tag: "section",
      "class": ["heading--section"],
      children: [{
        tag: "h1",
        "class": ["heading--text"],
        text: "Bringing the power of a full drum set to your fingertips, anytime, anywhere!"
      }]
    }, {
      tag: "section",
      "class": ["keyboard--section"],
      children: [{
        tag: "button",
        "class": ["btn"],
        children: [{
          tag: "span",
          text: "W"
        }, {
          tag: "span",
          text: "CLAP"
        }]
      }, {
        tag: "button",
        "class": ["btn"],
        children: [{
          tag: "span",
          text: "S"
        }, {
          tag: "span",
          text: "HIHAT"
        }]
      }, {
        tag: "button",
        "class": ["btn"],
        children: [{
          tag: "span",
          text: "D"
        }, {
          tag: "span",
          text: "KICK"
        }]
      }, {
        tag: "button",
        "class": ["btn"],
        children: [{
          tag: "span",
          text: "F"
        }, {
          tag: "span",
          text: "OPENHAT"
        }]
      }, {
        tag: "button",
        "class": ["btn"],
        children: [{
          tag: "span",
          text: "G"
        }, {
          tag: "span",
          text: "BOOM"
        }]
      }, {
        tag: "button",
        "class": ["btn"],
        children: [{
          tag: "span",
          text: "H"
        }, {
          tag: "span",
          text: "RIDE"
        }]
      }, {
        tag: "button",
        "class": ["btn"],
        children: [{
          tag: "span",
          text: "J"
        }, {
          tag: "span",
          text: "SNARE"
        }]
      }, {
        tag: "button",
        "class": ["btn"],
        children: [{
          tag: "span",
          text: "K"
        }, {
          tag: "span",
          text: "TOM"
        }]
      }, {
        tag: "button",
        "class": ["btn"],
        children: [{
          tag: "span",
          text: "L"
        }, {
          tag: "span",
          text: "TINK"
        }]
      }]
    }, {
      tag: "section",
      "class": ["history--section"],
      children: [{
        tag: "h2",
        "class": ["history--text"],
        text: "History"
      }, {
        tag: "ul",
        "class": ["history--list"]
      }]
    }]
  }
};
function createKeyboard(app) {
  var tag = Object.keys(config)[0];
  var tag_container = document.createElement(tag);
  tag_container.className = config[tag]["class"][0];
  app.appendChild(tag_container);
  if (config[tag].children && config[tag].children.length) {
    config[tag].children.forEach(function (section) {
      var sectionEl = document.createElement(section.tag);
      sectionEl.textContent = section.text;
      sectionEl.className = section["class"];
      if (section.children && section.children.length) {
        section.children.forEach(function (element) {
          var tagEl = document.createElement(element.tag);
          tagEl.textContent = element.text;
          tagEl.className = element["class"];
          if (element.children && element.children.length) {
            element.children.forEach(function (component) {
              var comEl = document.createElement(component.tag);
              comEl.textContent = component.text;
              tagEl.setAttribute("data-sound", component.text);
              tagEl.appendChild(comEl);
            });
          }
          if (tagEl.classList.contains("btn")) {
            tagEl.addEventListener("click", function () {
              addToHistory(tagEl.dataset.sound);
              var audioElement = new Audio("assets/".concat(tagEl.dataset.sound.toLowerCase(), ".wav"));
              audioElement.play();
            });
          }
          sectionEl.appendChild(tagEl);
        });
      }
      tag_container.appendChild(sectionEl);
    });
  }
  document.addEventListener("keyup", function (event) {
    var pressedBtn = /([wsdfghjkl])/gi;
    if (pressedBtn.test(event.key)) {
      var audioElement = new Audio();
      switch (event.key) {
        case "w":
          audioElement = new Audio("assets/clap.wav");
          break;
        case "s":
          audioElement = new Audio("assets/hihat.wav");
          break;
        case "d":
          audioElement = new Audio("assets/kick.wav");
          break;
        case "f":
          audioElement = new Audio("assets/openhat.wav");
          break;
        case "g":
          audioElement = new Audio("assets/boom.wav");
          break;
        case "h":
          audioElement = new Audio("assets/ride.wav");
          break;
        case "j":
          audioElement = new Audio("assets/snare.wav");
          break;
        case "k":
          audioElement = new Audio("assets/tom.wav");
          break;
        case "l":
          audioElement = new Audio("assets/tink.wav");
          break;
      }
      audioElement.play();
      addToHistory("Pressed button:  ".concat(event.key));
    }
  });
}
function addToHistory(sound) {
  var list = document.getElementsByClassName("history--list")[0];
  var li = document.createElement("li");
  li.textContent = sound;
  list.appendChild(li);
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
/******/ 			id: moduleId,
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
/* harmony import */ var _src_scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _src_js_app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _src_js_app_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_js_app_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_js_header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _src_js_header_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_js_header_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_js_footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _src_js_footer_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_js_footer_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_js_content_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);
/* harmony import */ var _src_js_content_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_src_js_content_js__WEBPACK_IMPORTED_MODULE_4__);





var app = _src_js_app_js__WEBPACK_IMPORTED_MODULE_1___default()();
_src_js_header_js__WEBPACK_IMPORTED_MODULE_2___default()(app);
_src_js_content_js__WEBPACK_IMPORTED_MODULE_4___default()(app);
_src_js_footer_js__WEBPACK_IMPORTED_MODULE_3___default()(app);
})();

/******/ })()
;
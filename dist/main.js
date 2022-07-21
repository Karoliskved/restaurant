/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/createContact.js":
/*!**************************************!*\
  !*** ./src/modules/createContact.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createContact)
/* harmony export */ });
function createContact(){
    const container=document.createElement('div');
    container.textContent="find us at 5618 Buckeystown Pike, Frederick, MD 21704, USA. Contact us at +84 666 1337 or email at GothIop@gmail.com :3"
    container.classList.add('container')
    document.querySelector('.main').appendChild(container)
}

/***/ }),

/***/ "./src/modules/createDefault.js":
/*!**************************************!*\
  !*** ./src/modules/createDefault.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createDefault)
/* harmony export */ });
/* harmony import */ var _assets_ihop_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/ihop.jpeg */ "./src/assets/ihop.jpeg");

function createDefault() {
    const text = document.createElement('div')
    text.classList.add('text')
    text.textContent = "Goth Ihop is the best place to get pancakes AND goths!!!!"
    const myIcon = new Image();
    myIcon.src = _assets_ihop_jpeg__WEBPACK_IMPORTED_MODULE_0__;
    document.querySelector('.main').appendChild(text)
    document.querySelector('.main').appendChild(myIcon)
}

/***/ }),

/***/ "./src/modules/createFooter.js":
/*!*************************************!*\
  !*** ./src/modules/createFooter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createFooter)
/* harmony export */ });
function createFooter(){
    const footer = document.createElement('div')
    footer.classList.add('footer')
    footer.textContent="contact +84 666 1337"
    return footer
}

/***/ }),

/***/ "./src/modules/createHeader.js":
/*!*************************************!*\
  !*** ./src/modules/createHeader.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHeader)
/* harmony export */ });
function createHeader(){
    const header = document.createElement('div')
    header.classList.add('header')
    const name=document.createElement('div')
    name.classList.add('name')
    name.textContent="Goth Ihop"
    const tabs=document.createElement('div')
    tabs.classList.add('tabs')
    const mainTab=document.createElement('div')
    mainTab.classList.add('item')
    mainTab.setAttribute("id", "mainTab")
    mainTab.textContent="main"
    const menuTab=document.createElement('div')
    menuTab.classList.add('item')
    menuTab.setAttribute("id", "menuTab")
    menuTab.textContent="menu"
    const contactTab=document.createElement('div')
    contactTab.classList.add('item')
    contactTab.setAttribute("id", "contactTab")
    contactTab.textContent="contact"
    header.appendChild(name)
    tabs.appendChild(mainTab)
    tabs.appendChild(menuTab)
    tabs.appendChild(contactTab)
    header.appendChild(tabs)
    return header;
}

/***/ }),

/***/ "./src/modules/createLayout.js":
/*!*************************************!*\
  !*** ./src/modules/createLayout.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createLayout)
/* harmony export */ });
/* harmony import */ var _createMain_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createMain.js */ "./src/modules/createMain.js");
/* harmony import */ var _createHeader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createHeader.js */ "./src/modules/createHeader.js");
/* harmony import */ var _createFooter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createFooter.js */ "./src/modules/createFooter.js");




function createLayout() {
    document.querySelector("#content").appendChild((0,_createHeader_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
    document.querySelector("#content").appendChild((0,_createMain_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
    document.querySelector("#content").appendChild((0,_createFooter_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
}


/***/ }),

/***/ "./src/modules/createMain.js":
/*!***********************************!*\
  !*** ./src/modules/createMain.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMain)
/* harmony export */ });
function createMain(){
   // const element = document.createElement('div')
    const main=document.createElement('div')
    main.classList.add('main')
    /*const text=document.createElement('div')
    text.classList.add('text')
    text.textContent="Goth Ihop is the best place to get pancakes AND goths!!!!"
   const myIcon=new Image();
    myIcon.src=ihopImg;
    main.appendChild(text)
     main.appendChild(myIcon)
    element.appendChild(main)*/
    return main;
}

/***/ }),

/***/ "./src/modules/createMenu.js":
/*!***********************************!*\
  !*** ./src/modules/createMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMenu)
/* harmony export */ });
/* harmony import */ var _assets_menu1_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/menu1.jpeg */ "./src/assets/menu1.jpeg");
/* harmony import */ var _assets_menu2_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/menu2.jpeg */ "./src/assets/menu2.jpeg");
/* harmony import */ var _assets_menu3_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/menu3.jpeg */ "./src/assets/menu3.jpeg");
/* harmony import */ var _createMenuItem_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createMenuItem.js */ "./src/modules/createMenuItem.js");




function createMenu(){
    const menuCont=document.createElement('div')
    menuCont.classList.add('menuCont')
    menuCont.appendChild((0,_createMenuItem_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_assets_menu1_jpeg__WEBPACK_IMPORTED_MODULE_0__, "Devil pancakes", "Delicious pancakes with a cool pentagram made out of strawberry jam"))
    menuCont.appendChild((0,_createMenuItem_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_assets_menu2_jpeg__WEBPACK_IMPORTED_MODULE_1__, "Death waffles", "Terrifingly delicious waffles with BLOOD(berry jam)"))
    menuCont.appendChild((0,_createMenuItem_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_assets_menu3_jpeg__WEBPACK_IMPORTED_MODULE_2__, "Darkness pancakes", "Moody pancakes perfect for fall or a moody mood.Now with blueberries!"))
    document.querySelector('.main').appendChild(menuCont)

}

/***/ }),

/***/ "./src/modules/createMenuItem.js":
/*!***************************************!*\
  !*** ./src/modules/createMenuItem.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMenuItem)
/* harmony export */ });
function createMenuItem(menu1, titleText, titleInfo){
    const menuItem=document.createElement('div')
    menuItem.classList.add('menuItem')
    const  menuImage1= new Image()
    menuImage1.src=menu1;
    const textCont=document.createElement('div')
    textCont.classList.add('textCont')
    const title=document.createElement('div')
    title.classList.add('title')
    title.textContent=titleText;
    const info=document.createElement('div');
    info.classList.add('info')
    info.textContent=titleInfo
    textCont.appendChild(title);
    textCont.appendChild(info)
    menuItem.appendChild(menuImage1)
    menuItem.appendChild(textCont)
    return menuItem
}

/***/ }),

/***/ "./src/modules/removeChildren.js":
/*!***************************************!*\
  !*** ./src/modules/removeChildren.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ removeAllChildNodes)
/* harmony export */ });
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

/***/ }),

/***/ "./src/assets/ihop.jpeg":
/*!******************************!*\
  !*** ./src/assets/ihop.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c117204cdff44bb69801.jpeg";

/***/ }),

/***/ "./src/assets/menu1.jpeg":
/*!*******************************!*\
  !*** ./src/assets/menu1.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "361958823d1067b800a0.jpeg";

/***/ }),

/***/ "./src/assets/menu2.jpeg":
/*!*******************************!*\
  !*** ./src/assets/menu2.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d8201ad4a7891d76c108.jpeg";

/***/ }),

/***/ "./src/assets/menu3.jpeg":
/*!*******************************!*\
  !*** ./src/assets/menu3.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ebdcc7f8de0284bc4ed9.jpeg";

/***/ })

/******/ 	});
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_createLayout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/createLayout.js */ "./src/modules/createLayout.js");
/* harmony import */ var _modules_createContact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/createContact.js */ "./src/modules/createContact.js");
/* harmony import */ var _modules_removeChildren_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/removeChildren.js */ "./src/modules/removeChildren.js");
/* harmony import */ var _modules_createDefault_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/createDefault.js */ "./src/modules/createDefault.js");
/* harmony import */ var _modules_createMenu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/createMenu.js */ "./src/modules/createMenu.js");
console.log("test")

;





(0,_modules_createLayout_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_modules_createDefault_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
const main = document.querySelector(".main")
document.querySelector("#mainTab").addEventListener('click', () => { 
    ;(0,_modules_removeChildren_js__WEBPACK_IMPORTED_MODULE_2__["default"])(main);
    (0,_modules_createDefault_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
   
})
document.querySelector("#menuTab").addEventListener('click', () => { 
    ;(0,_modules_removeChildren_js__WEBPACK_IMPORTED_MODULE_2__["default"])(main);
    (0,_modules_createMenu_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
   
})
document.querySelector("#contactTab").addEventListener('click', () => {
    ;(0,_modules_removeChildren_js__WEBPACK_IMPORTED_MODULE_2__["default"])(main);
    (0,_modules_createContact_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTDBDO0FBQzNCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsOENBQU87QUFDeEI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1RlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNMZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJ3QztBQUNJO0FBQ0E7O0FBRTdCO0FBQ2YsbURBQW1ELDREQUFZO0FBQy9ELG1EQUFtRCwwREFBVTtBQUM3RCxtREFBbUQsNERBQVk7QUFDL0Q7Ozs7Ozs7Ozs7Ozs7OztBQ1JlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2J5QztBQUNBO0FBQ0E7QUFDTztBQUNqQztBQUNmO0FBQ0E7QUFDQSx5QkFBeUIsOERBQWMsQ0FBQywrQ0FBSztBQUM3Qyx5QkFBeUIsOERBQWMsQ0FBQywrQ0FBSztBQUM3Qyx5QkFBeUIsOERBQWMsQ0FBQywrQ0FBSztBQUM3Qzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNaZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ0pBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7O0FBRUEsQ0FBb0Q7QUFDRTtBQUNFO0FBQ0Y7QUFDTjs7QUFFaEQsb0VBQVk7QUFDWixxRUFBYTtBQUNiO0FBQ0E7QUFDQSxJQUFJLHVFQUFjO0FBQ2xCLElBQUkscUVBQWE7QUFDakI7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxJQUFJLHVFQUFjO0FBQ2xCLElBQUksa0VBQVU7QUFDZDtBQUNBLENBQUM7QUFDRDtBQUNBLElBQUksdUVBQWM7QUFDbEIsSUFBSSxxRUFBYTtBQUNqQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL2NyZWF0ZUNvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL2NyZWF0ZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL2NyZWF0ZUZvb3Rlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvY3JlYXRlSGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9jcmVhdGVMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL2NyZWF0ZU1haW4uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL2NyZWF0ZU1lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL2NyZWF0ZU1lbnVJdGVtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9yZW1vdmVDaGlsZHJlbi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDb250YWN0KCl7XG4gICAgY29uc3QgY29udGFpbmVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci50ZXh0Q29udGVudD1cImZpbmQgdXMgYXQgNTYxOCBCdWNrZXlzdG93biBQaWtlLCBGcmVkZXJpY2ssIE1EIDIxNzA0LCBVU0EuIENvbnRhY3QgdXMgYXQgKzg0IDY2NiAxMzM3IG9yIGVtYWlsIGF0IEdvdGhJb3BAZ21haWwuY29tIDozXCJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJylcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpLmFwcGVuZENoaWxkKGNvbnRhaW5lcilcbn0iLCJpbXBvcnQgaWhvcEltZyBmcm9tICcuLi9hc3NldHMvaWhvcC5qcGVnJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZURlZmF1bHQoKSB7XG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGV4dC5jbGFzc0xpc3QuYWRkKCd0ZXh0JylcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gXCJHb3RoIElob3AgaXMgdGhlIGJlc3QgcGxhY2UgdG8gZ2V0IHBhbmNha2VzIEFORCBnb3RocyEhISFcIlxuICAgIGNvbnN0IG15SWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIG15SWNvbi5zcmMgPSBpaG9wSW1nO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJykuYXBwZW5kQ2hpbGQodGV4dClcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpLmFwcGVuZENoaWxkKG15SWNvbilcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVGb290ZXIoKXtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKVxuICAgIGZvb3Rlci50ZXh0Q29udGVudD1cImNvbnRhY3QgKzg0IDY2NiAxMzM3XCJcbiAgICByZXR1cm4gZm9vdGVyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCl7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJylcbiAgICBjb25zdCBuYW1lPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbmFtZS5jbGFzc0xpc3QuYWRkKCduYW1lJylcbiAgICBuYW1lLnRleHRDb250ZW50PVwiR290aCBJaG9wXCJcbiAgICBjb25zdCB0YWJzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGFicy5jbGFzc0xpc3QuYWRkKCd0YWJzJylcbiAgICBjb25zdCBtYWluVGFiPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWFpblRhYi5jbGFzc0xpc3QuYWRkKCdpdGVtJylcbiAgICBtYWluVGFiLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpblRhYlwiKVxuICAgIG1haW5UYWIudGV4dENvbnRlbnQ9XCJtYWluXCJcbiAgICBjb25zdCBtZW51VGFiPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWVudVRhYi5jbGFzc0xpc3QuYWRkKCdpdGVtJylcbiAgICBtZW51VGFiLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudVRhYlwiKVxuICAgIG1lbnVUYWIudGV4dENvbnRlbnQ9XCJtZW51XCJcbiAgICBjb25zdCBjb250YWN0VGFiPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFjdFRhYi5jbGFzc0xpc3QuYWRkKCdpdGVtJylcbiAgICBjb250YWN0VGFiLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFjdFRhYlwiKVxuICAgIGNvbnRhY3RUYWIudGV4dENvbnRlbnQ9XCJjb250YWN0XCJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmFtZSlcbiAgICB0YWJzLmFwcGVuZENoaWxkKG1haW5UYWIpXG4gICAgdGFicy5hcHBlbmRDaGlsZChtZW51VGFiKVxuICAgIHRhYnMuYXBwZW5kQ2hpbGQoY29udGFjdFRhYilcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGFicylcbiAgICByZXR1cm4gaGVhZGVyO1xufSIsImltcG9ydCBjcmVhdGVNYWluIGZyb20gJy4vY3JlYXRlTWFpbi5qcydcbmltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSAnLi9jcmVhdGVIZWFkZXIuanMnXG5pbXBvcnQgY3JlYXRlRm9vdGVyIGZyb20gJy4vY3JlYXRlRm9vdGVyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVMYXlvdXQoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpLmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWFpbigpe1xuICAgLy8gY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgbWFpbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpXG4gICAgLypjb25zdCB0ZXh0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGV4dC5jbGFzc0xpc3QuYWRkKCd0ZXh0JylcbiAgICB0ZXh0LnRleHRDb250ZW50PVwiR290aCBJaG9wIGlzIHRoZSBiZXN0IHBsYWNlIHRvIGdldCBwYW5jYWtlcyBBTkQgZ290aHMhISEhXCJcbiAgIGNvbnN0IG15SWNvbj1uZXcgSW1hZ2UoKTtcbiAgICBteUljb24uc3JjPWlob3BJbWc7XG4gICAgbWFpbi5hcHBlbmRDaGlsZCh0ZXh0KVxuICAgICBtYWluLmFwcGVuZENoaWxkKG15SWNvbilcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKG1haW4pKi9cbiAgICByZXR1cm4gbWFpbjtcbn0iLCJpbXBvcnQgbWVudTEgZnJvbSAnLi4vYXNzZXRzL21lbnUxLmpwZWcnO1xuaW1wb3J0IG1lbnUyIGZyb20gJy4uL2Fzc2V0cy9tZW51Mi5qcGVnJztcbmltcG9ydCBtZW51MyBmcm9tICcuLi9hc3NldHMvbWVudTMuanBlZyc7XG5pbXBvcnQgY3JlYXRlTWVudUl0ZW0gZnJvbSAnLi9jcmVhdGVNZW51SXRlbS5qcydcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1lbnUoKXtcbiAgICBjb25zdCBtZW51Q29udD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1lbnVDb250LmNsYXNzTGlzdC5hZGQoJ21lbnVDb250JylcbiAgICBtZW51Q29udC5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShtZW51MSwgXCJEZXZpbCBwYW5jYWtlc1wiLCBcIkRlbGljaW91cyBwYW5jYWtlcyB3aXRoIGEgY29vbCBwZW50YWdyYW0gbWFkZSBvdXQgb2Ygc3RyYXdiZXJyeSBqYW1cIikpXG4gICAgbWVudUNvbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0obWVudTIsIFwiRGVhdGggd2FmZmxlc1wiLCBcIlRlcnJpZmluZ2x5IGRlbGljaW91cyB3YWZmbGVzIHdpdGggQkxPT0QoYmVycnkgamFtKVwiKSlcbiAgICBtZW51Q29udC5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShtZW51MywgXCJEYXJrbmVzcyBwYW5jYWtlc1wiLCBcIk1vb2R5IHBhbmNha2VzIHBlcmZlY3QgZm9yIGZhbGwgb3IgYSBtb29keSBtb29kLk5vdyB3aXRoIGJsdWViZXJyaWVzIVwiKSlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpLmFwcGVuZENoaWxkKG1lbnVDb250KVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW0obWVudTEsIHRpdGxlVGV4dCwgdGl0bGVJbmZvKXtcbiAgICBjb25zdCBtZW51SXRlbT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnVJdGVtJylcbiAgICBjb25zdCAgbWVudUltYWdlMT0gbmV3IEltYWdlKClcbiAgICBtZW51SW1hZ2UxLnNyYz1tZW51MTtcbiAgICBjb25zdCB0ZXh0Q29udD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRleHRDb250LmNsYXNzTGlzdC5hZGQoJ3RleHRDb250JylcbiAgICBjb25zdCB0aXRsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJylcbiAgICB0aXRsZS50ZXh0Q29udGVudD10aXRsZVRleHQ7XG4gICAgY29uc3QgaW5mbz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoJ2luZm8nKVxuICAgIGluZm8udGV4dENvbnRlbnQ9dGl0bGVJbmZvXG4gICAgdGV4dENvbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIHRleHRDb250LmFwcGVuZENoaWxkKGluZm8pXG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQobWVudUltYWdlMSlcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZCh0ZXh0Q29udClcbiAgICByZXR1cm4gbWVudUl0ZW1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzKHBhcmVudCkge1xuICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJjb25zb2xlLmxvZyhcInRlc3RcIilcblxuaW1wb3J0IGNyZWF0ZUxheW91dCBmcm9tICcuL21vZHVsZXMvY3JlYXRlTGF5b3V0LmpzJ1xuaW1wb3J0IGNyZWF0ZUNvbnRhY3QgZnJvbSAnLi9tb2R1bGVzL2NyZWF0ZUNvbnRhY3QuanMnXG5pbXBvcnQgcmVtb3ZlQ2hpbGRyZW4gZnJvbSAnLi9tb2R1bGVzL3JlbW92ZUNoaWxkcmVuLmpzJ1xuaW1wb3J0IGNyZWF0ZURlZmF1bHQgZnJvbSAnLi9tb2R1bGVzL2NyZWF0ZURlZmF1bHQuanMnXG5pbXBvcnQgY3JlYXRlTWVudSBmcm9tICcuL21vZHVsZXMvY3JlYXRlTWVudS5qcydcblxuY3JlYXRlTGF5b3V0KCk7XG5jcmVhdGVEZWZhdWx0KCk7XG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5UYWJcIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IFxuICAgIHJlbW92ZUNoaWxkcmVuKG1haW4pO1xuICAgIGNyZWF0ZURlZmF1bHQoKTtcbiAgIFxufSlcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudVRhYlwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgXG4gICAgcmVtb3ZlQ2hpbGRyZW4obWFpbik7XG4gICAgY3JlYXRlTWVudSgpO1xuICAgXG59KVxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0VGFiXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHJlbW92ZUNoaWxkcmVuKG1haW4pO1xuICAgIGNyZWF0ZUNvbnRhY3QoKTtcbn0pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
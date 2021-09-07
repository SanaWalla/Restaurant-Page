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

/***/ "./src/Home.js":
/*!*********************!*\
  !*** ./src/Home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createHome)\n/* harmony export */ });\nfunction createHome() {\n    const wrapper = document.createElement('div');\n    wrapper.classList.add('wrapper');\n    wrapper.id = 'home';\n\n    const h2 = document.createElement('h2')\n    h2.textContent = \"123 Fake Street, St. Helena, CA 45678\"\n    h2.classList.add('wrapperChild');\n\n    const h1 = document.createElement('h1');\n    h1.textContent = \" herbs, spice, aroma.\"\n    h1.classList.add('wrapperChild');\n\n    const button = document.createElement('button');\n    button.textContent = \"Reserve Table\";\n    button.classList.add('wrapperChild');\n\n    const browse = document.createElement('a');\n    browse.href = \"menu link\";\n    browse.classList.add('wrapperChild');\n\n    wrapper.appendChild(h2);\n    wrapper.appendChild(h1);\n    wrapper.appendChild(button);\n    wrapper.append(browse);\n\n    return wrapper;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/Home.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadAbout)\n/* harmony export */ });\nfunction createAbout() {\n    const tabContent = document.createElement('div');\n    tabContent.classList.add('tabcontent');\n    tabContent.id = 'about';\n\n    const aboutParagraph = document.createElement('h4');\n    aboutParagraph.innerHTML = \"arôme was created to savor dishes from around the world, with the focus on fresh herbs. Herbs define different foods, culture, and experiences. Curated with a rotating menu of seasonal foods, join us for a meal and an experience.\"\n\n    tabContent.append(aboutParagraph);\n    return tabContent;\n}\n\nfunction loadAbout() {\n    const content = document.querySelector('#content');\n    content.append(createAbout());\n}\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/displayTab.js":
/*!***************************!*\
  !*** ./src/displayTab.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayTab\": () => (/* binding */ displayTab),\n/* harmony export */   \"displayHome\": () => (/* binding */ displayHome)\n/* harmony export */ });\nfunction displayTab(tablink, tabID) {\n    const tabContent = document.querySelectorAll('.tabcontent');\n    const tabLinks = document.querySelectorAll('.tabLinks');\n\n\n    document.querySelector(tablink).addEventListener('click', function (e) {\n        e.preventDefault();\n\n        tabLinks.forEach(function (TL) {\n            TL.classList.remove('active');\n        })\n\n        tabContent.forEach(function (Tcontent) {\n            Tcontent.style.display = 'none';\n        })\n\n        document.getElementById(tabID).style.display = 'block'\n\n        document.querySelector(tablink).classList.add('active');\n\n    })\n}\n\nfunction displayHome(tablink) {\n    document.querySelector(tablink).addEventListener('click', function (e) {\n        e.preventDefault();\n        const tabLinks = document.querySelectorAll('.tabLinks');\n        tabLinks.forEach(function (TL) {\n            TL.classList.remove('active');\n        })\n        const tabContent = document.querySelectorAll('.tabcontent');\n        tabContent.forEach(function (Tcontent) {\n            Tcontent.style.display = 'none';\n        })\n    })\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/displayTab.js?");

/***/ }),

/***/ "./src/drinks.js":
/*!***********************!*\
  !*** ./src/drinks.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadDrinks)\n/* harmony export */ });\nfunction createDrinks() {\n    const tabContent = document.createElement('div');\n    tabContent.classList.add('tabcontent');\n    tabContent.id = 'drinks';\n\n    const drinksHeading = document.createElement('h1');\n    drinksHeading.innerHTML = \"Drinks\";\n\n    const mojito = document.createElement('h2');\n    mojito.innerHTML = \"Mint Mojito\";\n\n    const gimlet = document.createElement('h2');\n    gimlet.innerHTML = \"Sage Gimlet\";\n\n\n    const negroni = document.createElement('h2');\n    negroni.innerHTML = \"Tarragon Negroni\";\n\n\n    const julep = document.createElement('h2');\n    julep.innerHTML = \"Thyme Julep\";\n\n\n    const lemonade = document.createElement('h2');\n    lemonade.innerHTML = \"Rosemary Lemonade\";\n\n\n    tabContent.append(drinksHeading, mojito, gimlet, negroni, julep, lemonade);\n\n    return tabContent;\n}\n\nfunction loadDrinks() {\n    const content = document.querySelector('#content');\n    content.append(createDrinks());\n}\n\n//# sourceURL=webpack://restaurant-page/./src/drinks.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navFooter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navFooter */ \"./src/navFooter.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _displayTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayTab */ \"./src/displayTab.js\");\n/* harmony import */ var _drinks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drinks */ \"./src/drinks.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\n\n\n\n\n\n(0,_navFooter__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_menu__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_drinks__WEBPACK_IMPORTED_MODULE_3__.default)();\n(0,_about__WEBPACK_IMPORTED_MODULE_4__.default)();\n(0,_displayTab__WEBPACK_IMPORTED_MODULE_2__.displayTab)('.aboutTabLink', 'about');\n(0,_displayTab__WEBPACK_IMPORTED_MODULE_2__.displayTab)('.menuTabLink', 'menu');\n(0,_displayTab__WEBPACK_IMPORTED_MODULE_2__.displayHome)('.homeTabLink');\n\n(0,_displayTab__WEBPACK_IMPORTED_MODULE_2__.displayTab)('.drinksTabLink', 'drinks');\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction createMenu() {\n    const tabContent = document.createElement('div');\n    tabContent.classList.add('tabcontent');\n    tabContent.id = 'menu';\n\n    const menuHeading = document.createElement('h1');\n    menuHeading.innerHTML = \"Menu\";\n\n    const sage = document.createElement('h2');\n    sage.innerHTML = \"sage\";\n    const sageP = document.createElement('p')\n    sageP.innerHTML = \"fettucine, broccoli, tilapia\"\n    sage.classList.add('menuItem');\n\n    const cilantro = document.createElement('h2');\n    cilantro.innerHTML = \"cilantro\";\n    const cilantroP = document.createElement('p')\n    cilantroP.innerHTML = \"enchiladas, cilantro rice, beans\"\n    cilantro.classList.add('menuItem');\n\n    const parsley = document.createElement('h2');\n    parsley.innerHTML = \"parsley\";\n    const parsleyP = document.createElement('p')\n    parsleyP.innerHTML = \"tabouleh, shawarma, pita\"\n    parsley.classList.add('menuItem');\n\n    const dill = document.createElement('h2');\n    dill.innerHTML = \"dill\";\n    const dillP = document.createElement('p')\n    dillP.innerHTML = \"fried chicken, potatoes, dill ranch\"\n    dill.classList.add('menuItem');\n\n    const chive = document.createElement('h2');\n    chive.innerHTML = \"chive\";\n    const chiveP = document.createElement('p')\n    chiveP.innerHTML = \"mashed potatoes, steak, asparagus\"\n    chive.classList.add('menuItem');\n\n    const oregano = document.createElement('h2');\n    oregano.innerHTML = \"oregano\";\n    const oreganoP = document.createElement('p')\n    oreganoP.innerHTML = \"beef lasagna, salad\"\n    oregano.classList.add('menuItem');\n\n    tabContent.append(menuHeading, sage, cilantro, parsley, dill, chive, oregano);\n    sage.append(sageP);\n    cilantro.append(cilantroP);\n    parsley.append(parsleyP);\n    dill.append(dillP);\n    chive.append(chiveP);\n    oregano.append(oreganoP);\n    return tabContent;\n}\n\nfunction loadMenu() {\n    const content = document.querySelector('#content');\n    content.append(createMenu());\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/navFooter.js":
/*!**************************!*\
  !*** ./src/navFooter.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadNav)\n/* harmony export */ });\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ \"./src/Home.js\");\n\n\nfunction createNav() {\n    const nav = document.createElement('nav');\n    const homeButton = document.createElement('a');\n    homeButton.href = '';\n    homeButton.innerHTML = 'Home';\n    homeButton.classList.add('homeTabLink');\n    homeButton.classList.add('tabLinks');\n    const menuButton = document.createElement('a');\n    menuButton.href = '';\n    menuButton.innerHTML = 'Menu';\n    menuButton.classList.add('tabLinks');\n    menuButton.classList.add('menuTabLink');\n    const drinksButton = document.createElement('a');\n    drinksButton.href = '';\n    drinksButton.innerHTML = 'Drinks';\n    drinksButton.classList.add('tabLinks');\n    drinksButton.classList.add('drinksTabLink');\n    const aboutButton = document.createElement('a');\n    aboutButton.href = '';\n    aboutButton.innerHTML = 'About';\n    aboutButton.classList.add('tabLinks');\n    aboutButton.classList.add('aboutTabLink');\n\n    const arome = document.createElement('h3');\n    arome.innerHTML = \"arôme\";\n\n    nav.appendChild(arome);\n\n    nav.appendChild(aboutButton);\n    nav.appendChild(drinksButton);\n    nav.appendChild(menuButton);\n    nav.appendChild(homeButton);\n    // content.appendChild(nav);\n\n    return nav;\n}\n\nfunction createFooter() {\n    const footer = document.createElement('div');\n    footer.classList.add('footer');\n    const pFooter = document.createElement('p')\n    pFooter.innerHTML = 'Concept by Sana Khalid';\n    const gitLink = document.createElement('a');\n    gitLink.href = 'https://github.com/SanaWalla';\n    gitLink.innerHTML = 'GitHub';\n\n\n    footer.append(pFooter);\n    footer.append(gitLink);\n    return footer;\n}\n\n\nfunction loadNav() {\n    const content = document.querySelector('#content');\n    const homeOverlay = document.createElement('div');\n    homeOverlay.classList.add('homeOverlay');\n    content.append(createNav());\n    content.append((0,_Home__WEBPACK_IMPORTED_MODULE_0__.default)());\n    content.append(homeOverlay);\n    content.append(createFooter());\n    console.log(content);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/navFooter.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
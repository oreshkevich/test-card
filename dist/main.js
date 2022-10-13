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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/card */ \"./src/modules/card.js\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n\r\n\r\n\r\n\r\n(0,_modules_card__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_search__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\n\n//# sourceURL=webpack://ozon/./src/index.js?");

/***/ }),

/***/ "./src/modules/card.js":
/*!*****************************!*\
  !*** ./src/modules/card.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ card)\n/* harmony export */ });\nfunction card() {\r\n  const renderGoods = (goods) => {\r\n    const goodsWrapper = document.getElementById('card');\r\n    goodsWrapper.innerHTML = '';\r\n    goods.forEach((item) => {\r\n      const { name, phone, email } = item;\r\n      goodsWrapper.insertAdjacentHTML(\r\n        'beforeend',\r\n        `\r\n     <div class=\"card more\">\r\n        <h2 class=\"card__title\">${name}</h2>\r\n        <div class=\"card__description\">\r\n          <img class=\"card__img\" src=\"./assets/svg/tel.svg\" alt=\"toy\">\r\n          <p class=\"card__text\">${phone}</p>\r\n        </div>\r\n        <div class=\"card__description\">\r\n          <img class=\"card__img\" src=\"./assets/svg/email.svg\" alt=\"toy\">\r\n          <p class=\"card__text\">${email}</p>\r\n        </div>\r\n\r\n      </div>\r\n    `\r\n      );\r\n    });\r\n    // class Animate {\r\n    //   constructor(questions) {\r\n    //     this.questions = questions;\r\n    //     this.click();\r\n    //   }\r\n\r\n    //   click() {\r\n    //     const listImg = [];\r\n    //     this.questions.forEach((el, i) =>\r\n    //       el.addEventListener('click', () => {\r\n    //         console.log(el);\r\n    //       })\r\n    //     );\r\n    //   }\r\n    // }\r\n    // const questions = document.querySelectorAll('.card');\r\n    // const animate = new Animate(questions);\r\n\r\n    function order() {\r\n      const deliveryItem = document.querySelectorAll('.card');\r\n      deliveryItem.forEach((n, i, a) => {\r\n        n.addEventListener('click', (event) => {\r\n          let textName = event.currentTarget.firstElementChild.textContent;\r\n\r\n          let someUsers = goods.filter((item) => item.name == textName);\r\n\r\n          const goodsWrapper = document.getElementById('modal-wrap');\r\n          goodsWrapper.innerHTML = '';\r\n          someUsers.forEach((item) => {\r\n            console.log(someUsers);\r\n            const {\r\n              name,\r\n              phone,\r\n              email,\r\n              address,\r\n              department,\r\n              hire_date,\r\n              position_name,\r\n            } = item;\r\n            goodsWrapper.insertAdjacentHTML(\r\n              'beforeend',\r\n              `\r\n      <div class=\"modal__body \">\r\n      <div class=\"modal__header \">\r\n        <p class=\"modal__titles\">\r\n          <button class=\"modal__btn-close modal__close\"></button>\r\n        </p>\r\n      </div>\r\n      <div class=\"modal__main \">\r\n        <div>\r\n          <div class=\"modal__form\" >\r\n            <h2 class=\"modal__title\">${name}</h2>\r\n            <div class=\"modal__wrap\" >\r\n              <p class=\"modal__text\">Телефон: </p>\r\n              <p class=\"modal__text-item\"> ${phone}</p>\r\n               <p class=\"modal__text\">Почта: </p>\r\n               <p class=\"modal__text-item\">${email}</p>\r\n            <p class=\"modal__text\">Дата приема:</p>\r\n            <p class=\"modal__text-item\">${hire_date}</p>\r\n            <p class=\"modal__text\">Должность: </p>\r\n            <p class=\"modal__text-item\">${position_name}</p>\r\n            <p class=\"modal__text\">Подразделение: </p>\r\n            <p class=\"modal__text-item\">${department}</p>\r\n            </div>\r\n          \r\n           \r\n            <p class=\"modal__text\">\r\n              Дополнительная информация:\r\n            </p>\r\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut minus maiores porro ${address}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    `\r\n            );\r\n          });\r\n        });\r\n      });\r\n    }\r\n    order();\r\n    const modalBtn = document.querySelectorAll('.more');\r\n    const modal = document.querySelector('.modal');\r\n\r\n    modalBtn.forEach((item) => {\r\n      console.log(item);\r\n      item.addEventListener('click', () => {\r\n        modal.classList.remove('hidden');\r\n      });\r\n    });\r\n\r\n    modal.addEventListener('click', (event) => {\r\n      const target = event.target;\r\n      if (target.classList.contains('modal__close')) {\r\n        modal.classList.add('hidden');\r\n      }\r\n    });\r\n    modal.addEventListener('click', (e) => {\r\n      console.log(e.target);\r\n      if (e.target === modal) {\r\n        modal.classList.add('hidden');\r\n      }\r\n    });\r\n  };\r\n\r\n  const search = () => {\r\n    const searchInput = document.querySelector('.form__search');\r\n\r\n    searchInput.addEventListener('input', (event) => {\r\n      const value = event.target.value;\r\n      fetch(`http://127.0.0.1:3000?term=${value}`)\r\n        .then((response) => response.json())\r\n        .then((data) => {\r\n          renderGoods(data);\r\n        })\r\n        .catch((error) => {\r\n          console.log(error);\r\n        });\r\n    });\r\n  };\r\n  search();\r\n\r\n  const getData = () => {\r\n    fetch('http://127.0.0.1:3000/')\r\n      .then((response) => response.json())\r\n      .then((data) => {\r\n        renderGoods(data);\r\n      })\r\n      .catch((error) => {\r\n        console.log(error);\r\n      });\r\n  };\r\n  getData();\r\n}\r\n\n\n//# sourceURL=webpack://ozon/./src/modules/card.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ modal)\n/* harmony export */ });\nfunction modal() {}\r\n\n\n//# sourceURL=webpack://ozon/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst search = () => {};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\r\n\n\n//# sourceURL=webpack://ozon/./src/modules/search.js?");

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
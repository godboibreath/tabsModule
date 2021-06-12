/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/module/tabs.js":
/*!***************************!*\
  !*** ./js/module/tabs.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs({
	buttonSelector,
	contentSelector,
	parentButtonSelector,
	activeClasses: [...active] = [],
	activeButClasses: [...activeBut],
	hideClasses: [...hides] = []
} = {}) {
	const tabs = document.body.querySelectorAll(buttonSelector),
		tabsContent = document.querySelectorAll(contentSelector),
		tabsParent = document.querySelector(parentButtonSelector);

	function hideTabContet() {
		tabsContent.forEach(item => {
			if (hides.length != 0) {
				hides.forEach(hide => {
					item.classList.add(hide);
				});
			}
			active.forEach(act => {
				item.classList.remove(act);
			});
		});
		tabs.forEach(item => {
			activeBut.forEach(actb => {
				item.classList.remove(actb);
			});
		});
	}

	function showTabContent(i = 0) {
		hides.forEach(hide => {
			tabsContent[i].classList.remove(hide);
		});
		active.forEach(act => {
			tabsContent[i].classList.add(act);
		});
		activeBut.forEach(actb => {
			tabs[i].classList.add(actb);
		});
	}
	hideTabContet();
	showTabContent();

	tabsParent.addEventListener('click', e => {
		if (e.target && e.target.classList.contains(buttonSelector.replace(/\W/g, ''))) {
			activeBut.forEach(actb => {
				e.target.classList.contains(actb);
				tabs.forEach((item, i) => {
					if (e.target == item) {
						hideTabContet();
						showTabContent(i);
					}
				});
			});
		}
	});

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/tabs */ "./js/module/tabs.js");


document.addEventListener('DOMContentLoaded', () => {
	(0,_module_tabs__WEBPACK_IMPORTED_MODULE_0__.default)({
		buttonSelector: '.menu__item',
		parentButtonSelector: '.menu__items',
		contentSelector: '.tabs__block',
		activeClasses: ['show', 'fade'],
		activeButClasses: ['menu__item-active', 'fade'],
		hideClasses: ['hide']
	});
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
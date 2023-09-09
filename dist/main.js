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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n\n\nconst dom = () => {\n  const projectContainer = document.querySelector('[data-project-container]');\n\n  const LOCAL_STORAGE_PROJECT_KEY = 'task.projects';\n  const LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY = 'task.selectedProjectId';\n  let projectsList =\n    JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [];\n  let selectedProjectId = localStorage.getItem(\n    LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY,\n  );\n\n  function toggleMenu() {\n    const menuShowBtn = document.getElementById('menu');\n    const menuCloseBtn = document.getElementById('menu-close-btn');\n    const sidebar = document.querySelector('aside');\n\n    const showMenu = () => {\n      sidebar.style.left = '0';\n      menuShowBtn.style.display = 'none';\n      menuCloseBtn.style.display = 'inline-block';\n    };\n\n    const hideMenu = () => {\n      sidebar.style.left = '-100%';\n      menuCloseBtn.style.display = 'none';\n      menuShowBtn.style.display = 'inline-block';\n    };\n\n    return {\n      showMenu,\n      hideMenu,\n    };\n  }\n\n  function renderProjects() {\n    projectsList.forEach((project) => {\n      const projectBody = createDiv('projectBody', 'project-body');\n      projectElement.dataset.projectId = project.id;\n      projectElement.classList.add('list-name');\n      projectElement.innerText = project.name;\n      if (project.id === selectedProjectId) {\n        projectElement.classList.add('active');\n      }\n      projectContainer.appendChild(listElement);\n    });\n  }\n\n  function manipulateModal() {}\n\n  return { toggleMenu: toggleMenu() };\n};\n\nfunction elementsFactory() {\n  function createHeader(text) {\n    const header = document.createElement('h1');\n    header.textContent = text;\n    return header;\n  }\n\n  function createParagraph(text) {\n    const paragraph = document.createElement('p');\n    paragraph.textContent = text;\n    return paragraph;\n  }\n\n  function createDiv(name, text) {\n    name = document.createElement('div');\n    name.classList.add(text);\n    return name;\n  }\n\n  function createButton(name, text) {\n    name = document.createElement('div');\n    name.classList.add(text);\n    return name;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);\n\n\n//# sourceURL=webpack://todo-app/./src/dom.js?");

/***/ }),

/***/ "./src/handlers.js":
/*!*************************!*\
  !*** ./src/handlers.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\nconst handlers = (() => {\n  function listenClicks() {\n    document.addEventListener('click', (event) => {\n      const { target } = event;\n      const ui = (0,_dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n      // TOGGLE SIDE MENU\n      if (target.classList.contains('menu')) {\n        ui.toggleMenu.showMenu();\n      } else if (target.classList.contains('menu-close')) {\n        ui.toggleMenu.hideMenu();\n      }\n    });\n  }\n\n  return { listenClicks };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handlers);\n\n\n//# sourceURL=webpack://todo-app/./src/handlers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers */ \"./src/handlers.js\");\n\n\n\n_handlers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listenClicks();\n\n// const addProjectBtn = document.getElementById('add-project');\n// const sidebar = document.querySelector('aside');\n// const modal = document.getElementById('modal');\n// const closeModalBtn = document.querySelector('.close');\n\n// addProjectBtn.addEventListener('click', () => {\n//   modal.classList.remove('hide');\n//   modal.classList.add('show');\n//   overlay.style.opacity = 1;\n// });\n\n// closeModalBtn.addEventListener('click', () => {\n//   modal.classList.remove('show');\n//   overlay.style.opacity = 0;\n// });\n\n\n//# sourceURL=webpack://todo-app/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst projects = (() => {\n  let projectsList = [];\n\n  function createProject(title) {\n    const project = {};\n\n    project.id = Date.now().toString();\n    project.title = title;\n    project.tasks = [];\n\n    projectsList.push(project);\n  }\n\n  return {\n    projectsList,\n    createProject,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);\n\n\n//# sourceURL=webpack://todo-app/./src/projects.js?");

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
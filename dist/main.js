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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n\n\nconst doms = () => {\n  const projectContainer = document.querySelector('[data-project-container]');\n\n  const modal = document.querySelector('#modal');\n  const form = modal.querySelector('#form');\n  const modalTitle = modal.querySelector('#modal-title');\n  const modalTitleError = modal.querySelector('.modal-title-error');\n  const addTaskButton = document.querySelector('.add-task');\n  const tasksCount = document.querySelector('.tasks-count');\n  const taskDescription = modal.querySelector('.task-description');\n  const taskDueDate = modal.querySelector('#dueDate');\n  const taskPrioritySelection = modal.querySelector('.task-priority');\n\n  const LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY = 'task.selectedProjectId';\n  let selectedProjectId = localStorage.getItem(\n    LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY,\n  );\n\n  function toggleMenu() {\n    const menuShowBtn = document.getElementById('menu');\n    const menuCloseBtn = document.getElementById('menu-close-btn');\n    const sidebar = document.querySelector('aside');\n\n    const showMenu = () => {\n      sidebar.style.left = '0';\n      menuShowBtn.style.display = 'none';\n      menuCloseBtn.style.display = 'inline-block';\n    };\n\n    const hideMenu = () => {\n      sidebar.style.left = '-100%';\n      menuCloseBtn.style.display = 'none';\n      menuShowBtn.style.display = 'inline-block';\n    };\n\n    return {\n      showMenu,\n      hideMenu,\n    };\n  }\n\n  function renderProjects() {\n    clearElement(projectContainer);\n    _projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectsList.forEach((project) => {\n      const projectElement = createHTMLElement('div', 'project');\n      projectElement.dataset.projectId = project.id;\n      if (project.id === selectedProjectId) {\n        projectElement.classList.add('active');\n      }\n\n      const projectTitle = createHTMLElement('div', 'project-title');\n      const projectTitleSpan = createHTMLElement(\n        'span',\n        'material-icons-sharp',\n        'list',\n      );\n      const projectTitleHeader = createHTMLElement(\n        'h3',\n        'project-name',\n        project.name,\n      );\n      projectTitle.appendChild(projectTitleSpan);\n      projectTitle.appendChild(projectTitleHeader);\n\n      const projectConfig = createHTMLElement('div', 'project-config');\n      const editButton = createHTMLElement('button', 'edit', 'edit');\n      const deleteButton = createHTMLElement('button', 'delete', 'delete');\n      projectConfig.appendChild(editButton);\n      projectConfig.appendChild(deleteButton);\n\n      projectElement.appendChild(projectTitle);\n      projectElement.appendChild(projectConfig);\n      projectContainer.appendChild(projectElement);\n    });\n  }\n\n  function manipulateModal(modalState, modalTask, modalAction) {\n    const modalHeader = modal.querySelector('.modal-header');\n    const modalMainTitle = modal.querySelector('.modal-main-title');\n    const modalTaskButton = modal.querySelector('.modal-task-button');\n    const projectDeletionText = modal.querySelector('.project-deletion-text');\n    const taskDeletionText = modal.querySelector('.task-deletion-text');\n    const taskInfoDiv = modal.querySelector('.info-div');\n    const confirmButton = modal.querySelector('.confirm-modal');\n    const cancelButton = modal.querySelector('.cancel-modal');\n\n    modalHeader.classList.remove('deletion-modal-header');\n    form.reset();\n    form.classList.remove('hide');\n    taskInfoDiv.classList.add('hide');\n    modalTitleError.classList.add('hide');\n    projectDeletionText.classList.add('hide');\n    taskDeletionText.classList.add('hide');\n    cancelButton.classList.remove('cancel-deletion');\n    confirmButton.classList.remove('confirm-deletion', 'hide');\n\n    if (modalState === 'show') {\n      const modalTasksDiv = modal.querySelector('.modal-tasks-div');\n\n      modal.classList.remove('hide');\n      modal.classList.add('show');\n      overlay.style.opacity = 1;\n      modalMainTitle.textContent = modalTask;\n      modalTaskButton.textContent = modalAction;\n      modalTasksDiv.classList.add('hide');\n\n      // IF MODAL IS FOR ADDING PROJECT\n      if (modalTask === 'Add Project') {\n        // SHOW PROJECT TITLE\n        modalMainTitle.textContent = 'Add Project';\n        console.log('test');\n      }\n    }\n\n    // TO CLOSE THE MODAL\n    if (modalState === 'close') {\n      modal.classList.remove('show');\n      overlay.style.opacity = 0;\n    }\n  }\n\n  return {\n    toggleMenu,\n    renderProjects,\n    manipulateModal,\n  };\n};\n\nfunction createHTMLElement(tagName, className, textContent) {\n  const element = document.createElement(tagName);\n  if (className) {\n    element.className = className;\n  }\n  if (textContent) {\n    element.textContent = textContent;\n  }\n  return element;\n}\n\nfunction save() {\n  localStorage.setItem(\n    LOCAL_STORAGE_PROJECT_KEY,\n    JSON.stringify(_projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectsList),\n  );\n  localStorage.setItem(\n    LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY,\n    selectedProjectId,\n  );\n}\n\nfunction clearElement(element) {\n  while (element.firstChild) {\n    element.removeChild(element.firstChild);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (doms);\n\n\n//# sourceURL=webpack://todo-app/./src/dom.js?");

/***/ }),

/***/ "./src/handlers.js":
/*!*************************!*\
  !*** ./src/handlers.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\nconst handlers = (() => {\n  const dom = (0,_dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n  function listenClicks() {\n    document.addEventListener('click', (event) => {\n      const { target } = event;\n\n      // TOGGLE SIDE MENU\n      if (target.classList.contains('menu')) {\n        dom.toggleMenu().showMenu();\n      } else if (target.classList.contains('menu-close')) {\n        dom.toggleMenu().hideMenu();\n      }\n\n      // MODAL FOR ADDING PROJECT\n      if (target.classList.contains('add-project')) {\n        dom.manipulateModal('show', 'Add Project', 'Add');\n      }\n\n      // CLOSE MODAL\n      if (target.classList.contains('close')) {\n        dom.manipulateModal('close');\n      }\n    });\n\n    // VALIDATE MODAL\n    if (target.classList.contains('confirm-modal')) {\n    }\n  }\n\n  return { listenClicks };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handlers);\n\n\n//# sourceURL=webpack://todo-app/./src/handlers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers */ \"./src/handlers.js\");\n\n\n\n_handlers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listenClicks();\n\n\n//# sourceURL=webpack://todo-app/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst projects = (() => {\n  let projectsList = [];\n\n  // GET DEFAULT PROJECTS AND TASKS FROM LOCAL STORAGE\n  if (localStorage.getItem('projects') === null) {\n    projectsList = [\n      {\n        id: 1,\n        name: 'Craft New Project',\n        tasks: [\n          {\n            title: 'Enjoy my tea as much as my coding! 🍵',\n            description:\n              'Longer description of my demo task, just to show you this surprisingly nice scrollbar and amazingly cute kitty ฅ(^◉ᴥ◉^)ฅ',\n            date: '2011-11-11',\n            priority: 'low',\n            projectIndex: 0,\n            taskIndex: 0,\n            completed: false,\n          },\n        ],\n      },\n      {\n        id: 2,\n        name: 'Craft Another Project',\n        tasks: [\n          {\n            title:\n              'Create magic through my mind, my heart and my keyboard.. 👩🏻‍💻',\n            description:\n              'Another longer description of my demo task, just to show you this surprisingly nice scrollbar and cute little birdie ϵ( ‘Θ’ )϶♪♫',\n            date: '2012-12-12',\n            priority: 'high',\n            projectIndex: 1,\n            taskIndex: 0,\n            completed: false,\n          },\n        ],\n      },\n    ];\n  } else {\n    const projectsFromStorage = JSON.parse(\n      localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY),\n    );\n    projectsList = projectsFromStorage;\n  }\n\n  function createProject(name) {\n    const project = {};\n\n    project.id = Date.now().toString();\n    project.name = name;\n    project.tasks = [];\n\n    projectsList.push(project);\n  }\n\n  return {\n    projectsList,\n    createProject,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);\n\n\n//# sourceURL=webpack://todo-app/./src/projects.js?");

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
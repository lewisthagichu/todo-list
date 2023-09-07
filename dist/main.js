/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const menuShowBtn = document.getElementById('menu');\nconst menuCloseBtn = document.getElementById('menu-close-btn');\nconst addProjectBtn = document.getElementById('add-project');\nconst sidebar = document.querySelector('aside');\nconst modal = document.getElementById('modal');\n\nmenuShowBtn.addEventListener('click', showMenu);\n\nmenuCloseBtn.addEventListener('click', hideMenu);\n\naddProjectBtn.addEventListener('click', () => {\n  modal.style.display = 'block';\n});\n\nfunction showMenu() {\n  sidebar.style.left = '0';\n  menuShowBtn.style.display = 'none';\n  menuCloseBtn.style.display = 'inline-block';\n}\n\nfunction hideMenu() {\n  sidebar.style.left = '-100%';\n  menuCloseBtn.style.display = 'none';\n  menuShowBtn.style.display = 'inline-block';\n}\n\n\n//# sourceURL=webpack://todo-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;
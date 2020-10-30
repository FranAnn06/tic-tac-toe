/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/tic-tac-toe.js":
/*!****************************!*\
  !*** ./src/tic-tac-toe.js ***!
  \****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 87:0-14 */
/***/ ((module) => {

eval("class TicTacToe {\r\n    constructor() {\r\n        this.Player = 'x';\r\n        this.arr=[[0,0,0],[0,0,0],[0,0,0]];\r\n        this.win = \"null\";\r\n    }\r\n    getCurrentPlayerSymbol() {\r\n      console.log(\"Ход: \"+ this.Player);\r\n    }\r\n    nextTurn(rowIndex, columnIndex) {\r\n      if (this.arr[rowIndex][columnIndex] ==\"0\") {\r\n        this.arr[rowIndex][columnIndex] = this.Player;\r\n        if (this.arr[0][0]!=\"0\" && this.arr[0][0] == this.arr[0][1] && this.arr[0][0] == this.arr[0][2] ){\r\n            this.win = this.Player;\r\n            console.log(this.win);\r\n            // this.arr[0][0].style.color='red';\r\n        }\r\n        else if (this.arr[0][0]!=\"0\" && this.arr[0][0] == this.arr[1][0] && this.arr[0][0] == this.arr[2][0] ){\r\n            this.win = this.Player;\r\n            console.log(this.winner);}\r\n       else if (this.arr[0][0]!=\"0\" && this.arr[0][0] == this.arr[1][1] && this.arr[0][0] == this.arr[2][2] ){\r\n            this.win = this.Player;\r\n            console.log(this.win);}\r\n\r\n       else if (this.arr[2][2]!=\"0\" && this.arr[2][2] == this.arr[1][2] && this.arr[2][2] == this.arr[0][2] ){\r\n            this.win = this.Player;\r\n            console.log(this.win);}\r\n       else if (this.arr[2][2]!=\"0\" && this.arr[2][2] == this.arr[2][1] && this.arr[2][2] == this.arr[2][0] ){\r\n            this.win = this.Player;\r\n            console.log(this.win);}\r\n       else if (this.arr[2][2]!=\"0\" && this.arr[2][2] == this.arr[1][1] && this.arr[2][2] == this.arr[0][0] ){\r\n            this.win = this.Player;\r\n            console.log(this.win);}\r\n\r\n       else if (this.arr[1][0]!=\"0\" && this.arr[1][0] == this.arr[1][1] && this.arr[1][0] == this.arr[1][2] ){\r\n            this.win = this.Player;\r\n            console.log(this.win);}\r\n       else if (this.arr[0][1]!=\"0\" && this.arr[0][1] == this.arr[1][1] && this.arr[0][1] == this.arr[2][1] ){\r\n            this.win = this.Player;\r\n            console.log(this.win);}\r\n            else{console.log(this.win);}\r\n\r\n        if (this.Player =='o' ) {\r\n          this.Player = 'x';\r\n        } else {\r\n          this.Player = 'o';\r\n        }\r\n        this.turns++;\r\n      } \r\n    }\r\n\r\n    isFinished() {\r\n        if (this.arr[0][0]!=\"0\" && this.arr[0][1]!=\"0\" && this.arr[0][2]!=\"0\" && this.arr[1][0]!=\"0\" && this.arr[1][1]!=\"0\" && this.arr[1][2]!=\"0\" && this.arr[2][0]!=\"0\" && this.arr[2][1]!=\"0\" && this.arr[2][2]!=\"0\" && this.win){\r\n            return true;\r\n        }\r\n    }\r\n\r\n    getWinner() {\r\n      if (this.win == \"null\") {\r\n        return null;\r\n      } else {\r\n        return this.win;\r\n      }\r\n    }\r\n\r\n    noMoreTurns() {\r\n        if (this.arr[0][0]!=\"0\" && this.arr[0][1]!=\"0\" && this.arr[0][2]!=\"0\" && this.arr[1][0]!=\"0\" && this.arr[1][1]!=\"0\" && this.arr[1][2]!=\"0\" && this.arr[2][0]!=\"0\" && this.arr[2][1]!=\"0\" && this.arr[2][2]!=\"0\"){\r\n            return true;\r\n        }\r\n    }\r\n\r\n    isDraw() {\r\n        if (this.arr[0][0]!=\"0\" && this.arr[0][1]!=\"0\" && this.arr[0][2]!=\"0\" && this.arr[1][0]!=\"0\" && this.arr[1][1]!=\"0\" && this.arr[1][2]!=\"0\" && this.arr[2][0]!=\"0\" && this.arr[2][1]!=\"0\" && this.arr[2][2]!=\"0\" && this.win==\"null\"){\r\n            return true;\r\n        }\r\n    }\r\n\r\n    getFieldValue(rowIndex, colIndex) {\r\n        \r\n        if (this.arr[rowIndex][colIndex] == \"0\") {\r\n            return null;\r\n          } else {\r\n            return this.arr[rowIndex][colIndex];\r\n          }\r\n        }\r\n    }\r\nmodule.exports = TicTacToe;\n\n//# sourceURL=webpack://tic-tac-toe/./src/tic-tac-toe.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
eval("const TicTacToe = __webpack_require__(/*! ./src/tic-tac-toe.js */ \"./src/tic-tac-toe.js\");\r\n\r\nwindow.game = new TicTacToe();\r\n\r\nresetBtn.addEventListener('click', () => {\r\n    window.game = new TicTacToe();\r\n    render();\r\n});\r\n\r\nfunction render() {\r\n    \r\n    let html = '';\r\n\r\n    for (let i = 0; i < 3; i++) {\r\n        html += '<div class=\"row\">';\r\n\r\n        for (let j = 0; j < 3; j++) {\r\n            html += `<div class=\"column\">${game.getFieldValue(i,j) || ''}</div>`;\r\n        }\r\n\r\n        html += '</div>';\r\n    }\r\n\r\n    gameCanvas.innerHTML = html;\r\n}\r\n\r\n\r\nrender();\r\ngameCanvas.addEventListener('click', e => {\r\n    if (!e.target.classList.contains('column')) {\r\n        return;\r\n    }\r\n\r\n    const rowIndex = Array.from(gameCanvas.children).indexOf(e.target.parentNode);\r\n    const colIndex = Array.from(e.target.parentNode.children).indexOf(e.target);\r\n\r\n    game.nextTurn(rowIndex, colIndex);\r\n\r\n    const winner = game.getWinner();\r\n    const isDraw = game.isDraw();\r\n\r\n    render();\r\n\r\n    if (winner) {\r\n        setTimeout(() => {\r\n            alert(`${winner} won!`);\r\n            window.game = new TicTacToe();\r\n            render();\r\n        }, 10)\r\n    }\r\n\r\n    if (isDraw) {\r\n        setTimeout(() => {\r\n            alert(`It's a draw`);\r\n            window.game = new TicTacToe();\r\n            render();\r\n        }, 10);\r\n    }\r\n})\n\n//# sourceURL=webpack://tic-tac-toe/./index.js?");
})();

/******/ })()
;
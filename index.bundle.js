"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["index"],{

/***/ "./src/UI/UI.js":
/*!**********************!*\
  !*** ./src/UI/UI.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ships_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ships/ship */ "./src/ships/ship.js");
/* harmony import */ var _gameboard_gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gameboard/gameboard */ "./src/gameboard/gameboard.js");
/* harmony import */ var _player_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../player/player */ "./src/player/player.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style.css */ "./src/style.css");




function appendHTMLElements() {
  const gameStartModal = `
  <div class="header">
    <h1>Battleship</h1>
  </div>

  <div class="game-container">
    <div class="player-gameboard-container">
      <h2>Player Board</h2>
      <div class="x-axis-label"></div>
      <div class="y-axis-label"> </div>
    </div>

    <div class="computer-gameboard-container">

      <h2>Computer Board</h2>
      <div class="x-axis-label"></div>
      <div class="y-axis-label"></div>

      <div class="game-start-modal">
        <div class="menu-container">
          <div class="carrier-menu">
            <div>
              <h4>Carrier:</h4>
              <div id="carrier-sample-grid" class="sample-grid-container"></div>
            </div>
            <div>
              <label for="carrier-alignment">Alignment</label>
              <select id="carrier-alignment">
                <option value="horizontal">Horizontal</option>
                <option value="vertical">Vertical</option>
              </select>
            </div>

            <div>
              <label for="carrier-x-axis-coordinate">x-Axis</label>
              <select id="carrier-x-axis-coordinate">
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
                <option value="G">G</option>
                <option value="H">H</option>
                <option value="I">I</option>
                <option value="J">J</option>
              </select>
            </div>

            <div>
              <label for="carrier-y-axis-coordinate">y-Axis</label>
              <select id="carrier-y-axis-coordinate">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            <div>
              <button class="place-carrier">Place Carrier</button>
            </div>
          </div>

          <div class="battleship-menu">
            <div>
              <h4>Battleship:</h4>
              <div id="battleship-sample-grid" class="sample-grid-container"></div>
            </div>
            <div>
              <label for="battleship-alignment">Alignment</label>
              <select id="battleship-alignment">
                <option value="horizontal">Horizontal</option>
                <option value="vertical">Vertical</option>
              </select>
            </div>

            <div>
              <label for="battleship-x-axis-coordinate">x-Axis</label>
              <select id="battleship-x-axis-coordinate">
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
                <option value="G">G</option>
                <option value="H">H</option>
                <option value="I">I</option>
                <option value="J">J</option>
              </select>
            </div>

            <div>
              <label for="battleship-y-axis-coordinate">y-Axis</label>
              <select id="battleship-y-axis-coordinate">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            <div><button class="place-battleship">Place Battleship</button></div>
          </div>

          <div class="destroyer-menu">
            <div>
              <h4>Destroyer:</h4>
              <div id="destroyer-sample-grid" class="sample-grid-container"></div>
            </div>
            <div>
              <label for="destroyer-alignment">Alignment</label>
              <select id="destroyer-alignment">
                <option value="horizontal">Horizontal</option>
                <option value="vertical">Vertical</option>
              </select>
            </div>

            <div>
              <label for="destroyer-x-axis-coordinate">x-Axis</label>
              <select id="destroyer-x-axis-coordinate">
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
                <option value="G">G</option>
                <option value="H">H</option>
                <option value="I">I</option>
                <option value="J">J</option>
              </select>
            </div>

            <div>
              <label for="destroyer-y-axis-coordinate">y-Axis</label>
              <select id="destroyer-y-axis-coordinate">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            <div><button class="place-destroyer">Place Destroyer</button></div>
          </div>

          <div class="submarine-menu">
            <div>
              <h4>Submarine:</h4>
              <div id="submarine-sample-grid" class="sample-grid-container"></div>
            </div>
            <div>
              <label for="submarine-alignment">Alignment</label>
              <select id="submarine-alignment">
                <option value="horizontal">Horizontal</option>
                <option value="vertical">Vertical</option>
              </select>
            </div>

            <div>
              <label for="submarine-x-axis-coordinate">x-Axis</label>
              <select id="submarine-x-axis-coordinate">
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
                <option value="G">G</option>
                <option value="H">H</option>
                <option value="I">I</option>
                <option value="J">J</option>
              </select>
            </div>

            <div>
              <label for="submarine-y-axis-coordinate">y-Axis</label>
              <select id="submarine-y-axis-coordinate">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            <div><button class="place-submarine">Place Submarine</button></div>
          </div>

          <div class="patrol-boat-menu">
            <div>
              <h4>Patrol Boat:</h4>
              <div id="patrol-boat-sample-grid" class="sample-grid-container"></div>
            </div>
            <div>
              <label for="patrol-boat-alignment">Alignment</label>
              <select id="patrol-boat-alignment">
                <option value="horizontal">Horizontal</option>
                <option value="vertical">Vertical</option>
              </select>
            </div>

            <div>
              <label for="patrol-boat-x-axis-coordinate">x-Axis</label>
              <select id="patrol-boat-x-axis-coordinate">
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
                <option value="G">G</option>
                <option value="H">H</option>
                <option value="I">I</option>
                <option value="J">J</option>
              </select>
            </div>

            <div>
              <label for="patrol-boat-y-axis-coordinate">y-Axis</label>
              <select id="patrol-boat-y-axis-coordinate">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            <div><button class="place-patrol-boat">Place Patrol Boat</button></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="footer"> Stalloyde @ 2023</div>
`;
  document.body.innerHTML += gameStartModal;
}
function clearPage() {
  document.body.innerHTML = ``;
}
function game() {
  const player = (0,_player_player__WEBPACK_IMPORTED_MODULE_2__["default"])('You');
  const computer = (0,_player_player__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const playerGameboard = (0,_gameboard_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])(player);
  const computerGameboard = (0,_gameboard_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])(computer);
  const playerCarrier = (0,_ships_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('carrier', 5);
  const playerBattleship = (0,_ships_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('battleship', 4);
  const playerDestroyer = (0,_ships_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('destroyer', 3);
  const playerSubmarine = (0,_ships_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('submarine', 3);
  const playerPatrolBoat = (0,_ships_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('patrolBoat', 2);
  const computerCarrier = (0,_ships_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('carrier', 5);
  const computerBattleship = (0,_ships_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('battleship', 4);
  const computerDestroyer = (0,_ships_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('destroyer', 3);
  const computerSubmarine = (0,_ships_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('submarine', 3);
  const computerPatrolBoat = (0,_ships_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('patrolBoat', 2);
  const playerGameboardContainer = document.querySelector('.player-gameboard-container');
  const computerGameboardContainer = document.querySelector('.computer-gameboard-container');
  const carrierAlignment = document.getElementById('carrier-alignment');
  const carrierXAxis = document.getElementById('carrier-x-axis-coordinate');
  const carrierYAxis = document.getElementById('carrier-y-axis-coordinate');
  const carrierSampleGrid = document.getElementById('carrier-sample-grid');
  const battleshipAlignment = document.getElementById('battleship-alignment');
  const battleshipXAxis = document.getElementById('battleship-x-axis-coordinate');
  const battleshipYAxis = document.getElementById('battleship-y-axis-coordinate');
  const battleshipSampleGrid = document.getElementById('battleship-sample-grid');
  const destroyerAlignment = document.getElementById('destroyer-alignment');
  const destroyerXAxis = document.getElementById('destroyer-x-axis-coordinate');
  const destroyerYAxis = document.getElementById('destroyer-y-axis-coordinate');
  const destroyerSampleGrid = document.getElementById('destroyer-sample-grid');
  const submarineAlignment = document.getElementById('submarine-alignment');
  const submarineXAxis = document.getElementById('submarine-x-axis-coordinate');
  const submarineYAxis = document.getElementById('submarine-y-axis-coordinate');
  const submarineSampleGrid = document.getElementById('submarine-sample-grid');
  const patrolBoatAlignment = document.getElementById('patrol-boat-alignment');
  const patrolBoatXAxis = document.getElementById('patrol-boat-x-axis-coordinate');
  const patrolBoatYAxis = document.getElementById('patrol-boat-y-axis-coordinate');
  const patrolBoatSampleGrid = document.getElementById('patrol-boat-sample-grid');
  const placeCarrierBtn = document.querySelector('.place-carrier');
  const placeBattleshipBtn = document.querySelector('.place-battleship');
  const placeDestroyerBtn = document.querySelector('.place-destroyer');
  const placeSubmarineBtn = document.querySelector('.place-submarine');
  const placePatrolBoatBtn = document.querySelector('.place-patrol-boat');
  const xAxisLabel = document.querySelectorAll('.x-axis-label');
  const yAxisLabel = document.querySelectorAll('.y-axis-label');
  function appendXAxisLabel() {
    xAxisLabel.forEach(item => {
      for (let x = 1; x < 11; x++) {
        const xLabel = document.createElement('div');
        xLabel.textContent = `${String.fromCharCode(x + 64)}`;
        item.appendChild(xLabel);
      }
    });
  }
  function appendYAxisLabel() {
    yAxisLabel.forEach(item => {
      for (let y = 1; y < 11; y++) {
        const yLabel = document.createElement('div');
        yLabel.textContent = y;
        item.appendChild(yLabel);
      }
    });
  }
  function appendShip(shipPosition, gameboardToAppendShipTo) {
    let gridNodes;
    if (gameboardToAppendShipTo === computerGameboard) {
      gridNodes = document.querySelectorAll(`.Computer-grid`);
    } else {
      gridNodes = document.querySelectorAll(`.Player-grid`);
    }
    gridNodes.forEach(node => {
      const coordinate = node.getAttribute('coordinate');
      shipPosition.forEach(position => {
        if (coordinate === position.join() && gameboardToAppendShipTo.gameboardOwner !== 'Computer') {
          node.classList.add('position-placed');
        }
        if (coordinate === position.join() && gameboardToAppendShipTo.gameboardOwner === 'Computer') {
          node.classList.add('computer-position-placed');
        }
      });
    });
  }
  function appendGrid(containerToAppendOn, gameboardToCreateGridFrom) {
    function generateCoordinates(x, y) {
      return `${String.fromCharCode(x + 64)},${y}`;
    }
    const gridContainer = document.createElement('div');
    gameboardToCreateGridFrom === playerGameboard ? gridContainer.classList.add('player-grid-container') : gridContainer.classList.add('computer-grid-container');
    containerToAppendOn.appendChild(gridContainer);
    for (let y = 1; y < 11; y++) {
      for (let x = 1; x < 11; x++) {
        const grid = document.createElement('div');
        if (gameboardToCreateGridFrom.gameboardOwner === 'Computer') {
          grid.classList.add(`${gameboardToCreateGridFrom.gameboardOwner}-grid`);
        } else {
          grid.classList.add(`Player-grid`);
        }
        grid.setAttribute('coordinate', generateCoordinates(x, y));
        gridContainer.appendChild(grid);
      }
    }
  }
  function createGrids(targetNode, numberOfGrids) {
    for (let x = 0; x < numberOfGrids; x++) {
      const grid = document.createElement('div');
      grid.classList.add('sample-grid');
      targetNode.appendChild(grid);
    }
  }
  function handleAlignmentChange(alignmentElement, sampleGridElement) {
    if (alignmentElement.value === 'horizontal') {
      sampleGridElement.style.display = 'flex';
    } else if (alignmentElement.value === 'vertical') {
      sampleGridElement.style.display = 'block';
    }
  }
  function computerMove() {
    const AimedCell = computer.attack(playerGameboard).coordinate;
    const playerGrid = document.querySelectorAll('.Player-grid');
    playerGrid.forEach(grid => {
      const targetedCell = grid.getAttribute('coordinate');
      if (targetedCell === AimedCell.join() && grid.classList.contains('position-placed')) {
        grid.classList.add('hit');
        grid.innerHTML = 'X';
      }
      if (targetedCell === AimedCell.join() && !grid.classList.contains('position-placed')) grid.innerHTML = 'O';
    });
  }
  function playerMove() {
    function handleShotAttempt(e) {
      if (e.target.classList.contains('Computer-grid')) {
        const targetedCell = e.target.getAttribute('coordinate');
        player.attack(computerGameboard, [targetedCell]);
        if (e.target.innerHTML === '') {
          e.target.innerHTML = 'O';
          computerMove();
        }
        if (e.target.classList.contains('computer-position-placed')) {
          e.target.classList.add('hit');
          e.target.innerHTML = 'X';
        }
        if (computerGameboard.areAllShipsSunk(playerGameboard.gameboardOwner, computerCarrier.isSunk, computerBattleship.isSunk, computerDestroyer.isSunk, computerSubmarine.isSunk, computerPatrolBoat.isSunk)) {
          window.removeEventListener('click', handleShotAttempt);
          endGame(playerGameboard.gameboardOwner);
        }
        if (playerGameboard.areAllShipsSunk(computerGameboard.gameboardOwner, playerCarrier.isSunk, playerBattleship.isSunk, playerDestroyer.isSunk, playerSubmarine.isSunk, playerPatrolBoat.isSunk)) {
          window.removeEventListener('click', handleShotAttempt);
          endGame(computerGameboard.gameboardOwner);
        }
      }
    }
    window.addEventListener('click', handleShotAttempt);
  }
  appendXAxisLabel();
  appendYAxisLabel();
  appendGrid(computerGameboardContainer, computerGameboard);
  appendGrid(playerGameboardContainer, playerGameboard);
  createGrids(carrierSampleGrid, 5);
  createGrids(battleshipSampleGrid, 4);
  createGrids(destroyerSampleGrid, 3);
  createGrids(submarineSampleGrid, 3);
  createGrids(patrolBoatSampleGrid, 2);
  carrierAlignment.addEventListener('change', () => {
    handleAlignmentChange(carrierAlignment, carrierSampleGrid);
  });
  battleshipAlignment.addEventListener('change', () => {
    handleAlignmentChange(battleshipAlignment, battleshipSampleGrid);
  });
  destroyerAlignment.addEventListener('change', () => {
    handleAlignmentChange(destroyerAlignment, destroyerSampleGrid);
  });
  submarineAlignment.addEventListener('change', () => {
    handleAlignmentChange(submarineAlignment, submarineSampleGrid);
  });
  patrolBoatAlignment.addEventListener('change', () => {
    handleAlignmentChange(patrolBoatAlignment, patrolBoatSampleGrid);
  });
  const menuContainer = document.querySelector('.menu-container');
  const carrierMenu = document.querySelector('.carrier-menu');
  const submarineMenu = document.querySelector('.submarine-menu');
  const destroyerMenu = document.querySelector('.destroyer-menu');
  const battleshipMenu = document.querySelector('.battleship-menu');
  const patrolBoatMenu = document.querySelector('.patrol-boat-menu');
  function handleShipPlacingBtnClick(targetShip, targetShipAlignmentValue, targetShipStartPosition, targetDiv) {
    playerGameboard.placeShip(targetShip, targetShipAlignmentValue, targetShipStartPosition);
    appendShip(targetShip.position, playerGameboard);
    if (targetShip.position.length !== 0) {
      menuContainer.removeChild(targetDiv);
    }
    if (menuContainer.children.length === 0) {
      const gameStartModal = document.querySelector('.game-start-modal');
      computerGameboardContainer.removeChild(gameStartModal);
    }
  }
  placeCarrierBtn.addEventListener('click', () => {
    handleShipPlacingBtnClick(playerCarrier, carrierAlignment.value, [carrierXAxis.value, Number(carrierYAxis.value)], carrierMenu);
  });
  placeBattleshipBtn.addEventListener('click', () => {
    handleShipPlacingBtnClick(playerBattleship, battleshipAlignment.value, [battleshipXAxis.value, Number(battleshipYAxis.value)], battleshipMenu);
  });
  placeDestroyerBtn.addEventListener('click', () => {
    handleShipPlacingBtnClick(playerDestroyer, destroyerAlignment.value, [destroyerXAxis.value, Number(destroyerYAxis.value)], destroyerMenu);
  });
  placeSubmarineBtn.addEventListener('click', () => {
    handleShipPlacingBtnClick(playerSubmarine, submarineAlignment.value, [submarineXAxis.value, Number(submarineYAxis.value)], submarineMenu);
  });
  placePatrolBoatBtn.addEventListener('click', () => {
    handleShipPlacingBtnClick(playerPatrolBoat, patrolBoatAlignment.value, [patrolBoatXAxis.value, Number(patrolBoatYAxis.value)], patrolBoatMenu);
  });
  computerGameboard.placeShip(computerCarrier);
  computerGameboard.placeShip(computerBattleship);
  computerGameboard.placeShip(computerDestroyer);
  computerGameboard.placeShip(computerSubmarine);
  computerGameboard.placeShip(computerPatrolBoat);
  appendShip(computerCarrier.position, computerGameboard);
  appendShip(computerBattleship.position, computerGameboard);
  appendShip(computerDestroyer.position, computerGameboard);
  appendShip(computerSubmarine.position, computerGameboard);
  appendShip(computerPatrolBoat.position, computerGameboard);
  playerMove();
}
function endGame(opponentGameboard) {
  const endGameModal = document.createElement('div');
  endGameModal.classList.add('end-game-modal');
  document.body.appendChild(endGameModal);
  const winnerAnnouncement = document.createElement('div');
  winnerAnnouncement.classList.add('winner-announcement');
  winnerAnnouncement.textContent = `${opponentGameboard} won!`;
  endGameModal.appendChild(winnerAnnouncement);
  const newGameBtn = document.createElement('button');
  newGameBtn.classList.add('new-game-btn');
  newGameBtn.textContent = 'Start New Game';
  endGameModal.appendChild(newGameBtn);
  newGameBtn.addEventListener('click', () => {
    clearPage();
    appendHTMLElements();
    game();
  });
}
appendHTMLElements();
game();

/***/ }),

/***/ "./src/gameboard/gameboard.js":
/*!************************************!*\
  !*** ./src/gameboard/gameboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable no-plusplus */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
function gameboardFactory(name) {
  const gameboardOwner = name.name;
  const missedShots = [];
  const hitShots = [];
  const gridsArray = [];
  const yAxis = 10;
  const xAxis = 10;
  function randomPositionCoordinate() {
    const randomArray = [String.fromCharCode(Math.floor(Math.random() * 10 + 1) + 64), Math.floor(Math.random() * (11 - 1) + 1)];
    return randomArray;
  }
  function randomAlignment() {
    if (Math.floor(Math.random() * 10) % 2 === 0) return 'vertical';
    return 'horizontal';
  }
  function create2DArray() {
    for (let i = 0; i < yAxis; i++) {
      gridsArray[i] = [];
      for (let j = 0; j < xAxis; j++) {
        gridsArray[i][j] = [String.fromCharCode(j + 65), i + 1];
      }
    }
    return gridsArray;
  }
  create2DArray();
  function placeShip(ship, alignment = randomAlignment(), startCoordinate = randomPositionCoordinate(), length = ship.length) {
    const alphabets = [null, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    ship.position = [];
    function checkIfShipPlacementExceedsBoardSize() {
      if (ship.position.length !== length) {
        return true;
      }
      return false;
    }
    function checkIfShipPlacementOverlapsAnother() {
      const allOccupiedPositions = [];
      let check = false;
      gridsArray.forEach(subArray => {
        subArray.forEach(item => {
          if (item[1].length > 1) {
            allOccupiedPositions.push(item[0]);
          }
        });
      });
      for (let x = 0; x < ship.position.length; x++) {
        for (let i = 0; i < allOccupiedPositions.length; i++) {
          if (ship.position[x].join() === allOccupiedPositions[i].join()) {
            check = true;
            break;
          }
        }
      }
      return check;
    }
    function fill2DArray() {
      ship.position.forEach(coordinate => {
        const x = coordinate[0].charCodeAt(0) - 64;
        const y = coordinate[1];
        gridsArray[y - 1][x - 1] = [coordinate, ship];
      });
    }
    function placeVertical() {
      const numberOfLoops = startCoordinate[1] + length;
      for (let y = startCoordinate[1]; y < numberOfLoops; y++) {
        if (y > 10 || y < 1 || alphabets.indexOf(startCoordinate[0]) > 10 || alphabets.indexOf(startCoordinate[0]) < 1) return;
        ship.position.push([startCoordinate[0], y]);
      }
    }
    function placeHorizontal() {
      const numberOfLoops = alphabets.indexOf(startCoordinate[0]) + length;
      for (let x = alphabets.indexOf(startCoordinate[0]); x < numberOfLoops; x++) {
        if (x > 10 || x < 1 || startCoordinate[1] > 10 || startCoordinate[1] < 1) return;
        ship.position.push([alphabets[x], startCoordinate[1]]);
      }
    }
    alignment === 'vertical' ? placeVertical() : placeHorizontal();
    if (checkIfShipPlacementExceedsBoardSize() === true && gameboardOwner === 'Stalloyde') {
      ship.position = [];
      return 'Error. Ship placement exceeds board size';
    }
    if (checkIfShipPlacementOverlapsAnother() === true && gameboardOwner === 'Stalloyde') {
      ship.position = [];
      return 'Error. Ship position overlaps another';
    }
    if (gameboardOwner === 'Computer' && checkIfShipPlacementExceedsBoardSize() === true || checkIfShipPlacementOverlapsAnother() === true) {
      placeShip(ship);
    }
    fill2DArray();
    return ship.position;
  }
  function receiveAttack(coordinate) {
    let hitResults;
    let currentShip;
    const filledCells = [];
    gridsArray.forEach(subArray => {
      subArray.forEach(item => {
        if (item[1].length > 1) {
          filledCells.push(item);
        }
      });
    });
    filledCells.forEach(cell => {
      if (cell[0].join() === coordinate.join()) {
        currentShip = cell[1];
        hitShots.push(coordinate);
        hitResults = currentShip.hit();
      }
    });
    if (hitResults === `isSunk:true`) {
      currentShip.isSunk = true;
      return currentShip.isSunk;
    }
    if (!hitResults) {
      missedShots.push(coordinate);
      return 'Missed!';
    }
    return hitResults;
  }
  function areAllShipsSunk(opponentGameboard, carrierStatus, battleshipStatus, destroyerStatus, submarineStatus, patrolBoatStatus) {
    if (carrierStatus && battleshipStatus && destroyerStatus && submarineStatus && patrolBoatStatus) {
      return true;
    }
  }
  return {
    gameboardOwner,
    gridsArray,
    create2DArray,
    placeShip,
    receiveAttack,
    hitShots,
    missedShots,
    randomPositionCoordinate,
    areAllShipsSunk
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameboardFactory);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UI_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI/UI */ "./src/UI/UI.js");


/***/ }),

/***/ "./src/player/player.js":
/*!******************************!*\
  !*** ./src/player/player.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function playerFactory(name = 'Computer') {
  function randomAttackCoordinate() {
    const randomArray = [String.fromCharCode(Math.floor(Math.random() * 10 + 1) + 64), Math.floor(Math.random() * (11 - 1) + 1)];
    return randomArray;
  }
  function attack(opponentGameboard, coordinate = randomAttackCoordinate()) {
    const shotAttempts = opponentGameboard.hitShots.concat(opponentGameboard.missedShots);
    for (let x = 0; x <= shotAttempts.length - 1; x++) {
      if (shotAttempts[x].join() === coordinate.join()) {
        if (name !== 'Computer') return 'Cannot attack same coordinates twice';
        if (name === 'Computer') return attack(opponentGameboard);
      }
    }
    const result = opponentGameboard.receiveAttack(coordinate);
    return {
      result,
      coordinate
    };
  }
  return {
    name,
    attack,
    randomAttackCoordinate
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (playerFactory);

/***/ }),

/***/ "./src/ships/ship.js":
/*!***************************!*\
  !*** ./src/ships/ship.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function shipsFactory(name, length) {
  const shipName = name;
  let health = length;
  let isSunk = false;
  function sunk() {
    isSunk = true;
    return `isSunk:${isSunk}`;
  }
  function hit() {
    health -= 1;
    if (health === 0) {
      return sunk();
    }
    return `health:${health}`;
  }
  return {
    shipName,
    health,
    length,
    hit,
    sunk,
    isSunk
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shipsFactory);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Roboto-Light.ttf */ "./src/fonts/Roboto-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: military;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  font-family: military, system-ui, -apple-system, BlinkMacSystemFont,\n    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',\n    sans-serif;\n}\n\n.game-start-modal {\n  display: flex;\n  align-items: center;\n  position: absolute;\n  background-color: rgb(248, 245, 228);\n  width: 100%;\n  height: 100%;\n  padding: 1em;\n}\n\n.menu-container > div {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  align-items: center;\n  padding: 1em;\n}\n\n.menu-container > div > div {\n  display: grid;\n  grid-template-rows: repeat(2, 1fr);\n  justify-content: center;\n  padding: 0.5em;\n  height: 60px;\n}\n\nh4 {\n  text-align: left;\n}\n\n.sample-grid {\n  border: 1px solid black;\n  background-color: rgb(82, 95, 168);\n  height: 15px;\n  width: 15px;\n}\n\n.sample-grid-container {\n  display: flex;\n}\n\nbutton {\n  width: 100px;\n  height: 40px;\n  border-radius: 10px;\n}\n\nselect {\n  width: fit-content;\n}\n\nbutton:hover,\nselect {\n  cursor: pointer;\n  transform: scale(1.05);\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 1fr 10fr 1fr;\n  height: 100vh;\n  padding: 3em;\n  text-align: center;\n  background-color: rgb(248, 245, 228);\n}\n\n.header,\n.footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.game-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n  padding: 1em;\n  text-align: center;\n}\n\n.computer-gameboard-container {\n  position: relative;\n}\n\n.player-gameboard-container,\n.computer-gameboard-container {\n  display: grid;\n  grid-template-columns: 0.5fr 4fr;\n  grid-template-rows: 1fr 10fr 1fr;\n  margin: auto auto;\n  padding: 1em;\n}\n\n.player-gameboard-container > h2,\n.computer-gameboard-container > h2 {\n  display: grid;\n  grid-column: 1/3;\n  grid-row: 3/4;\n  align-items: center;\n}\n\n.x-axis-label {\n  display: grid;\n  grid-column: 2/3;\n  grid-template-columns: repeat(10, 50px);\n  align-items: center;\n}\n\n.y-axis-label {\n  display: grid;\n  grid-row: 2/3;\n  grid-template-rows: repeat(10, 50px);\n  align-items: center;\n}\n\n.player-grid-container,\n.computer-grid-container {\n  display: grid;\n  grid-template-columns: repeat(10, 50px);\n  grid-template-rows: repeat(10, 50px);\n}\n\n.Computer-grid,\n.Player-grid {\n  display: flex;\n  border: 1px solid black;\n  background-color: rgb(82, 95, 168);\n  justify-content: center;\n  align-items: center;\n  font-size: 1.5em;\n  font-weight: bold;\n}\n\n.Computer-grid:hover,\n.Player-grid:hover {\n  cursor: crosshair;\n  opacity: 0.6;\n}\n\n.position-placed {\n  background-color: gray;\n}\n\n.hit {\n  background-color: red;\n}\n\n.end-game-modal {\n  display: block;\n  position: absolute;\n  top: 40%;\n  left: 45%;\n  height: max-content;\n  width: max-content;\n  background-color: rgb(29, 29, 29);\n  padding: 1em;\n  border-radius: 20px;\n}\n\n.winner-announcement {\n  padding: 1.5em;\n  font-size: 1.5em;\n  font-weight: bold;\n  color: azure;\n}\n\n.new-game-btn {\n  border-radius: 10px;\n  font-size: 1.5em;\n  padding: 1em;\n  height: max-content;\n  width: max-content;\n  font-weight: bold;\n}\n\n.new-game-btn:hover {\n  cursor: pointer;\n  transform: scale(1.05);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,4CAAkC;AACpC;;AAEA;EACE,sBAAsB;EACtB,UAAU;EACV,SAAS;EACT;;cAEY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,oCAAoC;EACpC,WAAW;EACX,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,uBAAuB;EACvB,cAAc;EACd,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;EACvB,kCAAkC;EAClC,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;;EAEE,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,gCAAgC;EAChC,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,oCAAoC;AACtC;;AAEA;;EAEE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;;EAEE,aAAa;EACb,gCAAgC;EAChC,gCAAgC;EAChC,iBAAiB;EACjB,YAAY;AACd;;AAEA;;EAEE,aAAa;EACb,gBAAgB;EAChB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,uCAAuC;EACvC,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,oCAAoC;EACpC,mBAAmB;AACrB;;AAEA;;EAEE,aAAa;EACb,uCAAuC;EACvC,oCAAoC;AACtC;;AAEA;;EAEE,aAAa;EACb,uBAAuB;EACvB,kCAAkC;EAClC,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;;EAEE,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,mBAAmB;EACnB,kBAAkB;EAClB,iCAAiC;EACjC,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,sBAAsB;AACxB","sourcesContent":["@font-face {\n  font-family: military;\n  src: url(./fonts/Roboto-Light.ttf);\n}\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  font-family: military, system-ui, -apple-system, BlinkMacSystemFont,\n    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',\n    sans-serif;\n}\n\n.game-start-modal {\n  display: flex;\n  align-items: center;\n  position: absolute;\n  background-color: rgb(248, 245, 228);\n  width: 100%;\n  height: 100%;\n  padding: 1em;\n}\n\n.menu-container > div {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  align-items: center;\n  padding: 1em;\n}\n\n.menu-container > div > div {\n  display: grid;\n  grid-template-rows: repeat(2, 1fr);\n  justify-content: center;\n  padding: 0.5em;\n  height: 60px;\n}\n\nh4 {\n  text-align: left;\n}\n\n.sample-grid {\n  border: 1px solid black;\n  background-color: rgb(82, 95, 168);\n  height: 15px;\n  width: 15px;\n}\n\n.sample-grid-container {\n  display: flex;\n}\n\nbutton {\n  width: 100px;\n  height: 40px;\n  border-radius: 10px;\n}\n\nselect {\n  width: fit-content;\n}\n\nbutton:hover,\nselect {\n  cursor: pointer;\n  transform: scale(1.05);\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 1fr 10fr 1fr;\n  height: 100vh;\n  padding: 3em;\n  text-align: center;\n  background-color: rgb(248, 245, 228);\n}\n\n.header,\n.footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.game-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n  padding: 1em;\n  text-align: center;\n}\n\n.computer-gameboard-container {\n  position: relative;\n}\n\n.player-gameboard-container,\n.computer-gameboard-container {\n  display: grid;\n  grid-template-columns: 0.5fr 4fr;\n  grid-template-rows: 1fr 10fr 1fr;\n  margin: auto auto;\n  padding: 1em;\n}\n\n.player-gameboard-container > h2,\n.computer-gameboard-container > h2 {\n  display: grid;\n  grid-column: 1/3;\n  grid-row: 3/4;\n  align-items: center;\n}\n\n.x-axis-label {\n  display: grid;\n  grid-column: 2/3;\n  grid-template-columns: repeat(10, 50px);\n  align-items: center;\n}\n\n.y-axis-label {\n  display: grid;\n  grid-row: 2/3;\n  grid-template-rows: repeat(10, 50px);\n  align-items: center;\n}\n\n.player-grid-container,\n.computer-grid-container {\n  display: grid;\n  grid-template-columns: repeat(10, 50px);\n  grid-template-rows: repeat(10, 50px);\n}\n\n.Computer-grid,\n.Player-grid {\n  display: flex;\n  border: 1px solid black;\n  background-color: rgb(82, 95, 168);\n  justify-content: center;\n  align-items: center;\n  font-size: 1.5em;\n  font-weight: bold;\n}\n\n.Computer-grid:hover,\n.Player-grid:hover {\n  cursor: crosshair;\n  opacity: 0.6;\n}\n\n.position-placed {\n  background-color: gray;\n}\n\n.hit {\n  background-color: red;\n}\n\n.end-game-modal {\n  display: block;\n  position: absolute;\n  top: 40%;\n  left: 45%;\n  height: max-content;\n  width: max-content;\n  background-color: rgb(29, 29, 29);\n  padding: 1em;\n  border-radius: 20px;\n}\n\n.winner-announcement {\n  padding: 1.5em;\n  font-size: 1.5em;\n  font-weight: bold;\n  color: azure;\n}\n\n.new-game-btn {\n  border-radius: 10px;\n  font-size: 1.5em;\n  padding: 1em;\n  height: max-content;\n  width: max-content;\n  font-weight: bold;\n}\n\n.new-game-btn:hover {\n  cursor: pointer;\n  transform: scale(1.05);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



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

/***/ "./src/fonts/Roboto-Light.ttf":
/*!************************************!*\
  !*** ./src/fonts/Roboto-Light.ttf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "333da16a3f3cc391d087.ttf";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvVUkvVUkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcHMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaGlwc0ZhY3RvcnkgZnJvbSAnLi4vc2hpcHMvc2hpcCc7XG5pbXBvcnQgZ2FtZWJvYXJkRmFjdG9yeSBmcm9tICcuLi9nYW1lYm9hcmQvZ2FtZWJvYXJkJztcbmltcG9ydCBwbGF5ZXJGYWN0b3J5IGZyb20gJy4uL3BsYXllci9wbGF5ZXInO1xuaW1wb3J0ICcuLi9zdHlsZS5jc3MnO1xuXG5mdW5jdGlvbiBhcHBlbmRIVE1MRWxlbWVudHMoKSB7XG4gIGNvbnN0IGdhbWVTdGFydE1vZGFsID0gYFxuICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgPGgxPkJhdHRsZXNoaXA8L2gxPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiZ2FtZS1jb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwicGxheWVyLWdhbWVib2FyZC1jb250YWluZXJcIj5cbiAgICAgIDxoMj5QbGF5ZXIgQm9hcmQ8L2gyPlxuICAgICAgPGRpdiBjbGFzcz1cIngtYXhpcy1sYWJlbFwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInktYXhpcy1sYWJlbFwiPiA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb21wdXRlci1nYW1lYm9hcmQtY29udGFpbmVyXCI+XG5cbiAgICAgIDxoMj5Db21wdXRlciBCb2FyZDwvaDI+XG4gICAgICA8ZGl2IGNsYXNzPVwieC1heGlzLWxhYmVsXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwieS1heGlzLWxhYmVsXCI+PC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJnYW1lLXN0YXJ0LW1vZGFsXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJyaWVyLW1lbnVcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoND5DYXJyaWVyOjwvaDQ+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJjYXJyaWVyLXNhbXBsZS1ncmlkXCIgY2xhc3M9XCJzYW1wbGUtZ3JpZC1jb250YWluZXJcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNhcnJpZXItYWxpZ25tZW50XCI+QWxpZ25tZW50PC9sYWJlbD5cbiAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cImNhcnJpZXItYWxpZ25tZW50XCI+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImhvcml6b250YWxcIj5Ib3Jpem9udGFsPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInZlcnRpY2FsXCI+VmVydGljYWw8L29wdGlvbj5cbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNhcnJpZXIteC1heGlzLWNvb3JkaW5hdGVcIj54LUF4aXM8L2xhYmVsPlxuICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwiY2Fycmllci14LWF4aXMtY29vcmRpbmF0ZVwiPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBXCI+QTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJCXCI+Qjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDXCI+Qzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJEXCI+RDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFXCI+RTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJGXCI+Rjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJHXCI+Rzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJIXCI+SDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJJXCI+STwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJKXCI+Sjwvb3B0aW9uPlxuICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2Fycmllci15LWF4aXMtY29vcmRpbmF0ZVwiPnktQXhpczwvbGFiZWw+XG4gICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJjYXJyaWVyLXktYXhpcy1jb29yZGluYXRlXCI+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj4xPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj4yPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj4zPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj40PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjVcIj41PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjZcIj42PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjdcIj43PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjhcIj44PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjlcIj45PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEwXCI+MTA8L29wdGlvbj5cbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBsYWNlLWNhcnJpZXJcIj5QbGFjZSBDYXJyaWVyPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYXR0bGVzaGlwLW1lbnVcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoND5CYXR0bGVzaGlwOjwvaDQ+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJiYXR0bGVzaGlwLXNhbXBsZS1ncmlkXCIgY2xhc3M9XCJzYW1wbGUtZ3JpZC1jb250YWluZXJcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImJhdHRsZXNoaXAtYWxpZ25tZW50XCI+QWxpZ25tZW50PC9sYWJlbD5cbiAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cImJhdHRsZXNoaXAtYWxpZ25tZW50XCI+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImhvcml6b250YWxcIj5Ib3Jpem9udGFsPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInZlcnRpY2FsXCI+VmVydGljYWw8L29wdGlvbj5cbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImJhdHRsZXNoaXAteC1heGlzLWNvb3JkaW5hdGVcIj54LUF4aXM8L2xhYmVsPlxuICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwiYmF0dGxlc2hpcC14LWF4aXMtY29vcmRpbmF0ZVwiPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBXCI+QTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJCXCI+Qjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDXCI+Qzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJEXCI+RDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFXCI+RTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJGXCI+Rjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJHXCI+Rzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJIXCI+SDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJJXCI+STwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJKXCI+Sjwvb3B0aW9uPlxuICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiYmF0dGxlc2hpcC15LWF4aXMtY29vcmRpbmF0ZVwiPnktQXhpczwvbGFiZWw+XG4gICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJiYXR0bGVzaGlwLXktYXhpcy1jb29yZGluYXRlXCI+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj4xPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj4yPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj4zPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj40PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjVcIj41PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjZcIj42PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjdcIj43PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjhcIj44PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjlcIj45PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEwXCI+MTA8L29wdGlvbj5cbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdj48YnV0dG9uIGNsYXNzPVwicGxhY2UtYmF0dGxlc2hpcFwiPlBsYWNlIEJhdHRsZXNoaXA8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXN0cm95ZXItbWVudVwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGg0PkRlc3Ryb3llcjo8L2g0PlxuICAgICAgICAgICAgICA8ZGl2IGlkPVwiZGVzdHJveWVyLXNhbXBsZS1ncmlkXCIgY2xhc3M9XCJzYW1wbGUtZ3JpZC1jb250YWluZXJcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRlc3Ryb3llci1hbGlnbm1lbnRcIj5BbGlnbm1lbnQ8L2xhYmVsPlxuICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwiZGVzdHJveWVyLWFsaWdubWVudFwiPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJob3Jpem9udGFsXCI+SG9yaXpvbnRhbDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ2ZXJ0aWNhbFwiPlZlcnRpY2FsPC9vcHRpb24+XG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkZXN0cm95ZXIteC1heGlzLWNvb3JkaW5hdGVcIj54LUF4aXM8L2xhYmVsPlxuICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwiZGVzdHJveWVyLXgtYXhpcy1jb29yZGluYXRlXCI+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFcIj5BPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkJcIj5CPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNcIj5DPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkRcIj5EPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkVcIj5FPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkZcIj5GPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkdcIj5HPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkhcIj5IPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIklcIj5JPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkpcIj5KPC9vcHRpb24+XG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkZXN0cm95ZXIteS1heGlzLWNvb3JkaW5hdGVcIj55LUF4aXM8L2xhYmVsPlxuICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwiZGVzdHJveWVyLXktYXhpcy1jb29yZGluYXRlXCI+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj4xPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj4yPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj4zPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj40PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjVcIj41PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjZcIj42PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjdcIj43PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjhcIj44PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjlcIj45PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEwXCI+MTA8L29wdGlvbj5cbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdj48YnV0dG9uIGNsYXNzPVwicGxhY2UtZGVzdHJveWVyXCI+UGxhY2UgRGVzdHJveWVyPC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VibWFyaW5lLW1lbnVcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoND5TdWJtYXJpbmU6PC9oND5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cInN1Ym1hcmluZS1zYW1wbGUtZ3JpZFwiIGNsYXNzPVwic2FtcGxlLWdyaWQtY29udGFpbmVyXCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJzdWJtYXJpbmUtYWxpZ25tZW50XCI+QWxpZ25tZW50PC9sYWJlbD5cbiAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInN1Ym1hcmluZS1hbGlnbm1lbnRcIj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaG9yaXpvbnRhbFwiPkhvcml6b250YWw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidmVydGljYWxcIj5WZXJ0aWNhbDwvb3B0aW9uPlxuICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwic3VibWFyaW5lLXgtYXhpcy1jb29yZGluYXRlXCI+eC1BeGlzPC9sYWJlbD5cbiAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInN1Ym1hcmluZS14LWF4aXMtY29vcmRpbmF0ZVwiPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBXCI+QTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJCXCI+Qjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDXCI+Qzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJEXCI+RDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFXCI+RTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJGXCI+Rjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJHXCI+Rzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJIXCI+SDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJJXCI+STwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJKXCI+Sjwvb3B0aW9uPlxuICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwic3VibWFyaW5lLXktYXhpcy1jb29yZGluYXRlXCI+eS1BeGlzPC9sYWJlbD5cbiAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInN1Ym1hcmluZS15LWF4aXMtY29vcmRpbmF0ZVwiPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+MTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+Mjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+Mzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0XCI+NDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1XCI+NTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI2XCI+Njwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI3XCI+Nzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI4XCI+ODwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI5XCI+OTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMFwiPjEwPC9vcHRpb24+XG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXY+PGJ1dHRvbiBjbGFzcz1cInBsYWNlLXN1Ym1hcmluZVwiPlBsYWNlIFN1Ym1hcmluZTwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBhdHJvbC1ib2F0LW1lbnVcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoND5QYXRyb2wgQm9hdDo8L2g0PlxuICAgICAgICAgICAgICA8ZGl2IGlkPVwicGF0cm9sLWJvYXQtc2FtcGxlLWdyaWRcIiBjbGFzcz1cInNhbXBsZS1ncmlkLWNvbnRhaW5lclwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGF0cm9sLWJvYXQtYWxpZ25tZW50XCI+QWxpZ25tZW50PC9sYWJlbD5cbiAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInBhdHJvbC1ib2F0LWFsaWdubWVudFwiPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJob3Jpem9udGFsXCI+SG9yaXpvbnRhbDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ2ZXJ0aWNhbFwiPlZlcnRpY2FsPC9vcHRpb24+XG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXRyb2wtYm9hdC14LWF4aXMtY29vcmRpbmF0ZVwiPngtQXhpczwvbGFiZWw+XG4gICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJwYXRyb2wtYm9hdC14LWF4aXMtY29vcmRpbmF0ZVwiPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBXCI+QTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJCXCI+Qjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDXCI+Qzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJEXCI+RDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFXCI+RTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJGXCI+Rjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJHXCI+Rzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJIXCI+SDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJJXCI+STwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJKXCI+Sjwvb3B0aW9uPlxuICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGF0cm9sLWJvYXQteS1heGlzLWNvb3JkaW5hdGVcIj55LUF4aXM8L2xhYmVsPlxuICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwicGF0cm9sLWJvYXQteS1heGlzLWNvb3JkaW5hdGVcIj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPjE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPjI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPjM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNFwiPjQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNVwiPjU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNlwiPjY8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiN1wiPjc8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiOFwiPjg8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiOVwiPjk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTBcIj4xMDwvb3B0aW9uPlxuICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2PjxidXR0b24gY2xhc3M9XCJwbGFjZS1wYXRyb2wtYm9hdFwiPlBsYWNlIFBhdHJvbCBCb2F0PC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJmb290ZXJcIj4gU3RhbGxveWRlIEAgMjAyMzwvZGl2PlxuYDtcbiAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgKz0gZ2FtZVN0YXJ0TW9kYWw7XG59XG5cbmZ1bmN0aW9uIGNsZWFyUGFnZSgpIHtcbiAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBgYDtcbn1cblxuZnVuY3Rpb24gZ2FtZSgpIHtcbiAgY29uc3QgcGxheWVyID0gcGxheWVyRmFjdG9yeSgnWW91Jyk7XG4gIGNvbnN0IGNvbXB1dGVyID0gcGxheWVyRmFjdG9yeSgpO1xuICBjb25zdCBwbGF5ZXJHYW1lYm9hcmQgPSBnYW1lYm9hcmRGYWN0b3J5KHBsYXllcik7XG4gIGNvbnN0IGNvbXB1dGVyR2FtZWJvYXJkID0gZ2FtZWJvYXJkRmFjdG9yeShjb21wdXRlcik7XG5cbiAgY29uc3QgcGxheWVyQ2FycmllciA9IHNoaXBzRmFjdG9yeSgnY2FycmllcicsIDUpO1xuICBjb25zdCBwbGF5ZXJCYXR0bGVzaGlwID0gc2hpcHNGYWN0b3J5KCdiYXR0bGVzaGlwJywgNCk7XG4gIGNvbnN0IHBsYXllckRlc3Ryb3llciA9IHNoaXBzRmFjdG9yeSgnZGVzdHJveWVyJywgMyk7XG4gIGNvbnN0IHBsYXllclN1Ym1hcmluZSA9IHNoaXBzRmFjdG9yeSgnc3VibWFyaW5lJywgMyk7XG4gIGNvbnN0IHBsYXllclBhdHJvbEJvYXQgPSBzaGlwc0ZhY3RvcnkoJ3BhdHJvbEJvYXQnLCAyKTtcblxuICBjb25zdCBjb21wdXRlckNhcnJpZXIgPSBzaGlwc0ZhY3RvcnkoJ2NhcnJpZXInLCA1KTtcbiAgY29uc3QgY29tcHV0ZXJCYXR0bGVzaGlwID0gc2hpcHNGYWN0b3J5KCdiYXR0bGVzaGlwJywgNCk7XG4gIGNvbnN0IGNvbXB1dGVyRGVzdHJveWVyID0gc2hpcHNGYWN0b3J5KCdkZXN0cm95ZXInLCAzKTtcbiAgY29uc3QgY29tcHV0ZXJTdWJtYXJpbmUgPSBzaGlwc0ZhY3RvcnkoJ3N1Ym1hcmluZScsIDMpO1xuICBjb25zdCBjb21wdXRlclBhdHJvbEJvYXQgPSBzaGlwc0ZhY3RvcnkoJ3BhdHJvbEJvYXQnLCAyKTtcblxuICBjb25zdCBwbGF5ZXJHYW1lYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcucGxheWVyLWdhbWVib2FyZC1jb250YWluZXInXG4gICk7XG4gIGNvbnN0IGNvbXB1dGVyR2FtZWJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnLmNvbXB1dGVyLWdhbWVib2FyZC1jb250YWluZXInXG4gICk7XG5cbiAgY29uc3QgY2FycmllckFsaWdubWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJyaWVyLWFsaWdubWVudCcpO1xuICBjb25zdCBjYXJyaWVyWEF4aXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2Fycmllci14LWF4aXMtY29vcmRpbmF0ZScpO1xuICBjb25zdCBjYXJyaWVyWUF4aXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2Fycmllci15LWF4aXMtY29vcmRpbmF0ZScpO1xuICBjb25zdCBjYXJyaWVyU2FtcGxlR3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJyaWVyLXNhbXBsZS1ncmlkJyk7XG5cbiAgY29uc3QgYmF0dGxlc2hpcEFsaWdubWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXR0bGVzaGlwLWFsaWdubWVudCcpO1xuICBjb25zdCBiYXR0bGVzaGlwWEF4aXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAnYmF0dGxlc2hpcC14LWF4aXMtY29vcmRpbmF0ZSdcbiAgKTtcbiAgY29uc3QgYmF0dGxlc2hpcFlBeGlzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgJ2JhdHRsZXNoaXAteS1heGlzLWNvb3JkaW5hdGUnXG4gICk7XG4gIGNvbnN0IGJhdHRsZXNoaXBTYW1wbGVHcmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgJ2JhdHRsZXNoaXAtc2FtcGxlLWdyaWQnXG4gICk7XG5cbiAgY29uc3QgZGVzdHJveWVyQWxpZ25tZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc3Ryb3llci1hbGlnbm1lbnQnKTtcbiAgY29uc3QgZGVzdHJveWVyWEF4aXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzdHJveWVyLXgtYXhpcy1jb29yZGluYXRlJyk7XG4gIGNvbnN0IGRlc3Ryb3llcllBeGlzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc3Ryb3llci15LWF4aXMtY29vcmRpbmF0ZScpO1xuICBjb25zdCBkZXN0cm95ZXJTYW1wbGVHcmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc3Ryb3llci1zYW1wbGUtZ3JpZCcpO1xuXG4gIGNvbnN0IHN1Ym1hcmluZUFsaWdubWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtYXJpbmUtYWxpZ25tZW50Jyk7XG4gIGNvbnN0IHN1Ym1hcmluZVhBeGlzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1hcmluZS14LWF4aXMtY29vcmRpbmF0ZScpO1xuICBjb25zdCBzdWJtYXJpbmVZQXhpcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtYXJpbmUteS1heGlzLWNvb3JkaW5hdGUnKTtcbiAgY29uc3Qgc3VibWFyaW5lU2FtcGxlR3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtYXJpbmUtc2FtcGxlLWdyaWQnKTtcblxuICBjb25zdCBwYXRyb2xCb2F0QWxpZ25tZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhdHJvbC1ib2F0LWFsaWdubWVudCcpO1xuICBjb25zdCBwYXRyb2xCb2F0WEF4aXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAncGF0cm9sLWJvYXQteC1heGlzLWNvb3JkaW5hdGUnXG4gICk7XG4gIGNvbnN0IHBhdHJvbEJvYXRZQXhpcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICdwYXRyb2wtYm9hdC15LWF4aXMtY29vcmRpbmF0ZSdcbiAgKTtcbiAgY29uc3QgcGF0cm9sQm9hdFNhbXBsZUdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAncGF0cm9sLWJvYXQtc2FtcGxlLWdyaWQnXG4gICk7XG5cbiAgY29uc3QgcGxhY2VDYXJyaWVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYWNlLWNhcnJpZXInKTtcbiAgY29uc3QgcGxhY2VCYXR0bGVzaGlwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYWNlLWJhdHRsZXNoaXAnKTtcbiAgY29uc3QgcGxhY2VEZXN0cm95ZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxhY2UtZGVzdHJveWVyJyk7XG4gIGNvbnN0IHBsYWNlU3VibWFyaW5lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYWNlLXN1Ym1hcmluZScpO1xuICBjb25zdCBwbGFjZVBhdHJvbEJvYXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxhY2UtcGF0cm9sLWJvYXQnKTtcblxuICBjb25zdCB4QXhpc0xhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLngtYXhpcy1sYWJlbCcpO1xuICBjb25zdCB5QXhpc0xhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnktYXhpcy1sYWJlbCcpO1xuXG4gIGZ1bmN0aW9uIGFwcGVuZFhBeGlzTGFiZWwoKSB7XG4gICAgeEF4aXNMYWJlbC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBmb3IgKGxldCB4ID0gMTsgeCA8IDExOyB4KyspIHtcbiAgICAgICAgY29uc3QgeExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHhMYWJlbC50ZXh0Q29udGVudCA9IGAke1N0cmluZy5mcm9tQ2hhckNvZGUoeCArIDY0KX1gO1xuICAgICAgICBpdGVtLmFwcGVuZENoaWxkKHhMYWJlbCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBhcHBlbmRZQXhpc0xhYmVsKCkge1xuICAgIHlBeGlzTGFiZWwuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgZm9yIChsZXQgeSA9IDE7IHkgPCAxMTsgeSsrKSB7XG4gICAgICAgIGNvbnN0IHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB5TGFiZWwudGV4dENvbnRlbnQgPSB5O1xuICAgICAgICBpdGVtLmFwcGVuZENoaWxkKHlMYWJlbCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBhcHBlbmRTaGlwKHNoaXBQb3NpdGlvbiwgZ2FtZWJvYXJkVG9BcHBlbmRTaGlwVG8pIHtcbiAgICBsZXQgZ3JpZE5vZGVzO1xuXG4gICAgaWYgKGdhbWVib2FyZFRvQXBwZW5kU2hpcFRvID09PSBjb21wdXRlckdhbWVib2FyZCkge1xuICAgICAgZ3JpZE5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLkNvbXB1dGVyLWdyaWRgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ3JpZE5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLlBsYXllci1ncmlkYCk7XG4gICAgfVxuXG4gICAgZ3JpZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNvb3JkaW5hdGUgPSBub2RlLmdldEF0dHJpYnV0ZSgnY29vcmRpbmF0ZScpO1xuICAgICAgc2hpcFBvc2l0aW9uLmZvckVhY2goKHBvc2l0aW9uKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBjb29yZGluYXRlID09PSBwb3NpdGlvbi5qb2luKCkgJiZcbiAgICAgICAgICBnYW1lYm9hcmRUb0FwcGVuZFNoaXBUby5nYW1lYm9hcmRPd25lciAhPT0gJ0NvbXB1dGVyJ1xuICAgICAgICApIHtcbiAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoJ3Bvc2l0aW9uLXBsYWNlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNvb3JkaW5hdGUgPT09IHBvc2l0aW9uLmpvaW4oKSAmJlxuICAgICAgICAgIGdhbWVib2FyZFRvQXBwZW5kU2hpcFRvLmdhbWVib2FyZE93bmVyID09PSAnQ29tcHV0ZXInXG4gICAgICAgICkge1xuICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZCgnY29tcHV0ZXItcG9zaXRpb24tcGxhY2VkJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYXBwZW5kR3JpZChjb250YWluZXJUb0FwcGVuZE9uLCBnYW1lYm9hcmRUb0NyZWF0ZUdyaWRGcm9tKSB7XG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVDb29yZGluYXRlcyh4LCB5KSB7XG4gICAgICByZXR1cm4gYCR7U3RyaW5nLmZyb21DaGFyQ29kZSh4ICsgNjQpfSwke3l9YDtcbiAgICB9XG5cbiAgICBjb25zdCBncmlkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBnYW1lYm9hcmRUb0NyZWF0ZUdyaWRGcm9tID09PSBwbGF5ZXJHYW1lYm9hcmRcbiAgICAgID8gZ3JpZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItZ3JpZC1jb250YWluZXInKVxuICAgICAgOiBncmlkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbXB1dGVyLWdyaWQtY29udGFpbmVyJyk7XG5cbiAgICBjb250YWluZXJUb0FwcGVuZE9uLmFwcGVuZENoaWxkKGdyaWRDb250YWluZXIpO1xuXG4gICAgZm9yIChsZXQgeSA9IDE7IHkgPCAxMTsgeSsrKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMTsgeCA8IDExOyB4KyspIHtcbiAgICAgICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGlmIChnYW1lYm9hcmRUb0NyZWF0ZUdyaWRGcm9tLmdhbWVib2FyZE93bmVyID09PSAnQ29tcHV0ZXInKSB7XG4gICAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICAgICAgYCR7Z2FtZWJvYXJkVG9DcmVhdGVHcmlkRnJvbS5nYW1lYm9hcmRPd25lcn0tZ3JpZGBcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChgUGxheWVyLWdyaWRgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdyaWQuc2V0QXR0cmlidXRlKCdjb29yZGluYXRlJywgZ2VuZXJhdGVDb29yZGluYXRlcyh4LCB5KSk7XG4gICAgICAgIGdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlR3JpZHModGFyZ2V0Tm9kZSwgbnVtYmVyT2ZHcmlkcykge1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgbnVtYmVyT2ZHcmlkczsgeCsrKSB7XG4gICAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ3NhbXBsZS1ncmlkJyk7XG4gICAgICB0YXJnZXROb2RlLmFwcGVuZENoaWxkKGdyaWQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUFsaWdubWVudENoYW5nZShhbGlnbm1lbnRFbGVtZW50LCBzYW1wbGVHcmlkRWxlbWVudCkge1xuICAgIGlmIChhbGlnbm1lbnRFbGVtZW50LnZhbHVlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIHNhbXBsZUdyaWRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgfSBlbHNlIGlmIChhbGlnbm1lbnRFbGVtZW50LnZhbHVlID09PSAndmVydGljYWwnKSB7XG4gICAgICBzYW1wbGVHcmlkRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjb21wdXRlck1vdmUoKSB7XG4gICAgY29uc3QgQWltZWRDZWxsID0gY29tcHV0ZXIuYXR0YWNrKHBsYXllckdhbWVib2FyZCkuY29vcmRpbmF0ZTtcbiAgICBjb25zdCBwbGF5ZXJHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLlBsYXllci1ncmlkJyk7XG5cbiAgICBwbGF5ZXJHcmlkLmZvckVhY2goKGdyaWQpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldGVkQ2VsbCA9IGdyaWQuZ2V0QXR0cmlidXRlKCdjb29yZGluYXRlJyk7XG4gICAgICBpZiAoXG4gICAgICAgIHRhcmdldGVkQ2VsbCA9PT0gQWltZWRDZWxsLmpvaW4oKSAmJlxuICAgICAgICBncmlkLmNsYXNzTGlzdC5jb250YWlucygncG9zaXRpb24tcGxhY2VkJylcbiAgICAgICkge1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICBncmlkLmlubmVySFRNTCA9ICdYJztcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICB0YXJnZXRlZENlbGwgPT09IEFpbWVkQ2VsbC5qb2luKCkgJiZcbiAgICAgICAgIWdyaWQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwb3NpdGlvbi1wbGFjZWQnKVxuICAgICAgKVxuICAgICAgICBncmlkLmlubmVySFRNTCA9ICdPJztcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYXllck1vdmUoKSB7XG4gICAgZnVuY3Rpb24gaGFuZGxlU2hvdEF0dGVtcHQoZSkge1xuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnQ29tcHV0ZXItZ3JpZCcpKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldGVkQ2VsbCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnY29vcmRpbmF0ZScpO1xuICAgICAgICBwbGF5ZXIuYXR0YWNrKGNvbXB1dGVyR2FtZWJvYXJkLCBbdGFyZ2V0ZWRDZWxsXSk7XG5cbiAgICAgICAgaWYgKGUudGFyZ2V0LmlubmVySFRNTCA9PT0gJycpIHtcbiAgICAgICAgICBlLnRhcmdldC5pbm5lckhUTUwgPSAnTyc7XG4gICAgICAgICAgY29tcHV0ZXJNb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21wdXRlci1wb3NpdGlvbi1wbGFjZWQnKSkge1xuICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICAgIGUudGFyZ2V0LmlubmVySFRNTCA9ICdYJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBjb21wdXRlckdhbWVib2FyZC5hcmVBbGxTaGlwc1N1bmsoXG4gICAgICAgICAgICBwbGF5ZXJHYW1lYm9hcmQuZ2FtZWJvYXJkT3duZXIsXG4gICAgICAgICAgICBjb21wdXRlckNhcnJpZXIuaXNTdW5rLFxuICAgICAgICAgICAgY29tcHV0ZXJCYXR0bGVzaGlwLmlzU3VuayxcbiAgICAgICAgICAgIGNvbXB1dGVyRGVzdHJveWVyLmlzU3VuayxcbiAgICAgICAgICAgIGNvbXB1dGVyU3VibWFyaW5lLmlzU3VuayxcbiAgICAgICAgICAgIGNvbXB1dGVyUGF0cm9sQm9hdC5pc1N1bmtcbiAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVNob3RBdHRlbXB0KTtcbiAgICAgICAgICBlbmRHYW1lKHBsYXllckdhbWVib2FyZC5nYW1lYm9hcmRPd25lcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgcGxheWVyR2FtZWJvYXJkLmFyZUFsbFNoaXBzU3VuayhcbiAgICAgICAgICAgIGNvbXB1dGVyR2FtZWJvYXJkLmdhbWVib2FyZE93bmVyLFxuICAgICAgICAgICAgcGxheWVyQ2Fycmllci5pc1N1bmssXG4gICAgICAgICAgICBwbGF5ZXJCYXR0bGVzaGlwLmlzU3VuayxcbiAgICAgICAgICAgIHBsYXllckRlc3Ryb3llci5pc1N1bmssXG4gICAgICAgICAgICBwbGF5ZXJTdWJtYXJpbmUuaXNTdW5rLFxuICAgICAgICAgICAgcGxheWVyUGF0cm9sQm9hdC5pc1N1bmtcbiAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVNob3RBdHRlbXB0KTtcbiAgICAgICAgICBlbmRHYW1lKGNvbXB1dGVyR2FtZWJvYXJkLmdhbWVib2FyZE93bmVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVTaG90QXR0ZW1wdCk7XG4gIH1cblxuICBhcHBlbmRYQXhpc0xhYmVsKCk7XG4gIGFwcGVuZFlBeGlzTGFiZWwoKTtcbiAgYXBwZW5kR3JpZChjb21wdXRlckdhbWVib2FyZENvbnRhaW5lciwgY29tcHV0ZXJHYW1lYm9hcmQpO1xuICBhcHBlbmRHcmlkKHBsYXllckdhbWVib2FyZENvbnRhaW5lciwgcGxheWVyR2FtZWJvYXJkKTtcblxuICBjcmVhdGVHcmlkcyhjYXJyaWVyU2FtcGxlR3JpZCwgNSk7XG4gIGNyZWF0ZUdyaWRzKGJhdHRsZXNoaXBTYW1wbGVHcmlkLCA0KTtcbiAgY3JlYXRlR3JpZHMoZGVzdHJveWVyU2FtcGxlR3JpZCwgMyk7XG4gIGNyZWF0ZUdyaWRzKHN1Ym1hcmluZVNhbXBsZUdyaWQsIDMpO1xuICBjcmVhdGVHcmlkcyhwYXRyb2xCb2F0U2FtcGxlR3JpZCwgMik7XG5cbiAgY2FycmllckFsaWdubWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgaGFuZGxlQWxpZ25tZW50Q2hhbmdlKGNhcnJpZXJBbGlnbm1lbnQsIGNhcnJpZXJTYW1wbGVHcmlkKTtcbiAgfSk7XG5cbiAgYmF0dGxlc2hpcEFsaWdubWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgaGFuZGxlQWxpZ25tZW50Q2hhbmdlKGJhdHRsZXNoaXBBbGlnbm1lbnQsIGJhdHRsZXNoaXBTYW1wbGVHcmlkKTtcbiAgfSk7XG5cbiAgZGVzdHJveWVyQWxpZ25tZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICBoYW5kbGVBbGlnbm1lbnRDaGFuZ2UoZGVzdHJveWVyQWxpZ25tZW50LCBkZXN0cm95ZXJTYW1wbGVHcmlkKTtcbiAgfSk7XG5cbiAgc3VibWFyaW5lQWxpZ25tZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICBoYW5kbGVBbGlnbm1lbnRDaGFuZ2Uoc3VibWFyaW5lQWxpZ25tZW50LCBzdWJtYXJpbmVTYW1wbGVHcmlkKTtcbiAgfSk7XG5cbiAgcGF0cm9sQm9hdEFsaWdubWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgaGFuZGxlQWxpZ25tZW50Q2hhbmdlKHBhdHJvbEJvYXRBbGlnbm1lbnQsIHBhdHJvbEJvYXRTYW1wbGVHcmlkKTtcbiAgfSk7XG5cbiAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWNvbnRhaW5lcicpO1xuICBjb25zdCBjYXJyaWVyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJyaWVyLW1lbnUnKTtcbiAgY29uc3Qgc3VibWFyaW5lTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtYXJpbmUtbWVudScpO1xuICBjb25zdCBkZXN0cm95ZXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc3Ryb3llci1tZW51Jyk7XG4gIGNvbnN0IGJhdHRsZXNoaXBNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhdHRsZXNoaXAtbWVudScpO1xuICBjb25zdCBwYXRyb2xCb2F0TWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXRyb2wtYm9hdC1tZW51Jyk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlU2hpcFBsYWNpbmdCdG5DbGljayhcbiAgICB0YXJnZXRTaGlwLFxuICAgIHRhcmdldFNoaXBBbGlnbm1lbnRWYWx1ZSxcbiAgICB0YXJnZXRTaGlwU3RhcnRQb3NpdGlvbixcbiAgICB0YXJnZXREaXZcbiAgKSB7XG4gICAgcGxheWVyR2FtZWJvYXJkLnBsYWNlU2hpcChcbiAgICAgIHRhcmdldFNoaXAsXG4gICAgICB0YXJnZXRTaGlwQWxpZ25tZW50VmFsdWUsXG4gICAgICB0YXJnZXRTaGlwU3RhcnRQb3NpdGlvblxuICAgICk7XG4gICAgYXBwZW5kU2hpcCh0YXJnZXRTaGlwLnBvc2l0aW9uLCBwbGF5ZXJHYW1lYm9hcmQpO1xuXG4gICAgaWYgKHRhcmdldFNoaXAucG9zaXRpb24ubGVuZ3RoICE9PSAwKSB7XG4gICAgICBtZW51Q29udGFpbmVyLnJlbW92ZUNoaWxkKHRhcmdldERpdik7XG4gICAgfVxuXG4gICAgaWYgKG1lbnVDb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBnYW1lU3RhcnRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLXN0YXJ0LW1vZGFsJyk7XG4gICAgICBjb21wdXRlckdhbWVib2FyZENvbnRhaW5lci5yZW1vdmVDaGlsZChnYW1lU3RhcnRNb2RhbCk7XG4gICAgfVxuICB9XG5cbiAgcGxhY2VDYXJyaWVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGhhbmRsZVNoaXBQbGFjaW5nQnRuQ2xpY2soXG4gICAgICBwbGF5ZXJDYXJyaWVyLFxuICAgICAgY2FycmllckFsaWdubWVudC52YWx1ZSxcbiAgICAgIFtjYXJyaWVyWEF4aXMudmFsdWUsIE51bWJlcihjYXJyaWVyWUF4aXMudmFsdWUpXSxcbiAgICAgIGNhcnJpZXJNZW51XG4gICAgKTtcbiAgfSk7XG5cbiAgcGxhY2VCYXR0bGVzaGlwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGhhbmRsZVNoaXBQbGFjaW5nQnRuQ2xpY2soXG4gICAgICBwbGF5ZXJCYXR0bGVzaGlwLFxuICAgICAgYmF0dGxlc2hpcEFsaWdubWVudC52YWx1ZSxcbiAgICAgIFtiYXR0bGVzaGlwWEF4aXMudmFsdWUsIE51bWJlcihiYXR0bGVzaGlwWUF4aXMudmFsdWUpXSxcbiAgICAgIGJhdHRsZXNoaXBNZW51XG4gICAgKTtcbiAgfSk7XG5cbiAgcGxhY2VEZXN0cm95ZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaGFuZGxlU2hpcFBsYWNpbmdCdG5DbGljayhcbiAgICAgIHBsYXllckRlc3Ryb3llcixcbiAgICAgIGRlc3Ryb3llckFsaWdubWVudC52YWx1ZSxcbiAgICAgIFtkZXN0cm95ZXJYQXhpcy52YWx1ZSwgTnVtYmVyKGRlc3Ryb3llcllBeGlzLnZhbHVlKV0sXG4gICAgICBkZXN0cm95ZXJNZW51XG4gICAgKTtcbiAgfSk7XG5cbiAgcGxhY2VTdWJtYXJpbmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaGFuZGxlU2hpcFBsYWNpbmdCdG5DbGljayhcbiAgICAgIHBsYXllclN1Ym1hcmluZSxcbiAgICAgIHN1Ym1hcmluZUFsaWdubWVudC52YWx1ZSxcbiAgICAgIFtzdWJtYXJpbmVYQXhpcy52YWx1ZSwgTnVtYmVyKHN1Ym1hcmluZVlBeGlzLnZhbHVlKV0sXG4gICAgICBzdWJtYXJpbmVNZW51XG4gICAgKTtcbiAgfSk7XG5cbiAgcGxhY2VQYXRyb2xCb2F0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGhhbmRsZVNoaXBQbGFjaW5nQnRuQ2xpY2soXG4gICAgICBwbGF5ZXJQYXRyb2xCb2F0LFxuICAgICAgcGF0cm9sQm9hdEFsaWdubWVudC52YWx1ZSxcbiAgICAgIFtwYXRyb2xCb2F0WEF4aXMudmFsdWUsIE51bWJlcihwYXRyb2xCb2F0WUF4aXMudmFsdWUpXSxcbiAgICAgIHBhdHJvbEJvYXRNZW51XG4gICAgKTtcbiAgfSk7XG5cbiAgY29tcHV0ZXJHYW1lYm9hcmQucGxhY2VTaGlwKGNvbXB1dGVyQ2Fycmllcik7XG4gIGNvbXB1dGVyR2FtZWJvYXJkLnBsYWNlU2hpcChjb21wdXRlckJhdHRsZXNoaXApO1xuICBjb21wdXRlckdhbWVib2FyZC5wbGFjZVNoaXAoY29tcHV0ZXJEZXN0cm95ZXIpO1xuICBjb21wdXRlckdhbWVib2FyZC5wbGFjZVNoaXAoY29tcHV0ZXJTdWJtYXJpbmUpO1xuICBjb21wdXRlckdhbWVib2FyZC5wbGFjZVNoaXAoY29tcHV0ZXJQYXRyb2xCb2F0KTtcblxuICBhcHBlbmRTaGlwKGNvbXB1dGVyQ2Fycmllci5wb3NpdGlvbiwgY29tcHV0ZXJHYW1lYm9hcmQpO1xuICBhcHBlbmRTaGlwKGNvbXB1dGVyQmF0dGxlc2hpcC5wb3NpdGlvbiwgY29tcHV0ZXJHYW1lYm9hcmQpO1xuICBhcHBlbmRTaGlwKGNvbXB1dGVyRGVzdHJveWVyLnBvc2l0aW9uLCBjb21wdXRlckdhbWVib2FyZCk7XG4gIGFwcGVuZFNoaXAoY29tcHV0ZXJTdWJtYXJpbmUucG9zaXRpb24sIGNvbXB1dGVyR2FtZWJvYXJkKTtcbiAgYXBwZW5kU2hpcChjb21wdXRlclBhdHJvbEJvYXQucG9zaXRpb24sIGNvbXB1dGVyR2FtZWJvYXJkKTtcblxuICBwbGF5ZXJNb3ZlKCk7XG59XG5cbmZ1bmN0aW9uIGVuZEdhbWUob3Bwb25lbnRHYW1lYm9hcmQpIHtcbiAgY29uc3QgZW5kR2FtZU1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGVuZEdhbWVNb2RhbC5jbGFzc0xpc3QuYWRkKCdlbmQtZ2FtZS1tb2RhbCcpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVuZEdhbWVNb2RhbCk7XG5cbiAgY29uc3Qgd2lubmVyQW5ub3VuY2VtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHdpbm5lckFubm91bmNlbWVudC5jbGFzc0xpc3QuYWRkKCd3aW5uZXItYW5ub3VuY2VtZW50Jyk7XG4gIHdpbm5lckFubm91bmNlbWVudC50ZXh0Q29udGVudCA9IGAke29wcG9uZW50R2FtZWJvYXJkfSB3b24hYDtcbiAgZW5kR2FtZU1vZGFsLmFwcGVuZENoaWxkKHdpbm5lckFubm91bmNlbWVudCk7XG5cbiAgY29uc3QgbmV3R2FtZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBuZXdHYW1lQnRuLmNsYXNzTGlzdC5hZGQoJ25ldy1nYW1lLWJ0bicpO1xuICBuZXdHYW1lQnRuLnRleHRDb250ZW50ID0gJ1N0YXJ0IE5ldyBHYW1lJztcbiAgZW5kR2FtZU1vZGFsLmFwcGVuZENoaWxkKG5ld0dhbWVCdG4pO1xuXG4gIG5ld0dhbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xlYXJQYWdlKCk7XG4gICAgYXBwZW5kSFRNTEVsZW1lbnRzKCk7XG4gICAgZ2FtZSgpO1xuICB9KTtcbn1cblxuYXBwZW5kSFRNTEVsZW1lbnRzKCk7XG5nYW1lKCk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuLyogZXNsaW50LWRpc2FibGUgZ3VhcmQtZm9yLWluICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuZnVuY3Rpb24gZ2FtZWJvYXJkRmFjdG9yeShuYW1lKSB7XG4gIGNvbnN0IGdhbWVib2FyZE93bmVyID0gbmFtZS5uYW1lO1xuICBjb25zdCBtaXNzZWRTaG90cyA9IFtdO1xuICBjb25zdCBoaXRTaG90cyA9IFtdO1xuICBjb25zdCBncmlkc0FycmF5ID0gW107XG4gIGNvbnN0IHlBeGlzID0gMTA7XG4gIGNvbnN0IHhBeGlzID0gMTA7XG5cbiAgZnVuY3Rpb24gcmFuZG9tUG9zaXRpb25Db29yZGluYXRlKCkge1xuICAgIGNvbnN0IHJhbmRvbUFycmF5ID0gW1xuICAgICAgU3RyaW5nLmZyb21DaGFyQ29kZShNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCArIDEpICsgNjQpLFxuICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDExIC0gMSkgKyAxKSxcbiAgICBdO1xuXG4gICAgcmV0dXJuIHJhbmRvbUFycmF5O1xuICB9XG5cbiAgZnVuY3Rpb24gcmFuZG9tQWxpZ25tZW50KCkge1xuICAgIGlmIChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgJSAyID09PSAwKSByZXR1cm4gJ3ZlcnRpY2FsJztcbiAgICByZXR1cm4gJ2hvcml6b250YWwnO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlMkRBcnJheSgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHlBeGlzOyBpKyspIHtcbiAgICAgIGdyaWRzQXJyYXlbaV0gPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgeEF4aXM7IGorKykge1xuICAgICAgICBncmlkc0FycmF5W2ldW2pdID0gW1N0cmluZy5mcm9tQ2hhckNvZGUoaiArIDY1KSwgaSArIDFdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZ3JpZHNBcnJheTtcbiAgfVxuXG4gIGNyZWF0ZTJEQXJyYXkoKTtcblxuICBmdW5jdGlvbiBwbGFjZVNoaXAoXG4gICAgc2hpcCxcbiAgICBhbGlnbm1lbnQgPSByYW5kb21BbGlnbm1lbnQoKSxcbiAgICBzdGFydENvb3JkaW5hdGUgPSByYW5kb21Qb3NpdGlvbkNvb3JkaW5hdGUoKSxcbiAgICBsZW5ndGggPSBzaGlwLmxlbmd0aFxuICApIHtcbiAgICBjb25zdCBhbHBoYWJldHMgPSBbbnVsbCwgJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXTtcbiAgICBzaGlwLnBvc2l0aW9uID0gW107XG5cbiAgICBmdW5jdGlvbiBjaGVja0lmU2hpcFBsYWNlbWVudEV4Y2VlZHNCb2FyZFNpemUoKSB7XG4gICAgICBpZiAoc2hpcC5wb3NpdGlvbi5sZW5ndGggIT09IGxlbmd0aCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja0lmU2hpcFBsYWNlbWVudE92ZXJsYXBzQW5vdGhlcigpIHtcbiAgICAgIGNvbnN0IGFsbE9jY3VwaWVkUG9zaXRpb25zID0gW107XG4gICAgICBsZXQgY2hlY2sgPSBmYWxzZTtcblxuICAgICAgZ3JpZHNBcnJheS5mb3JFYWNoKChzdWJBcnJheSkgPT4ge1xuICAgICAgICBzdWJBcnJheS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW1bMV0ubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgYWxsT2NjdXBpZWRQb3NpdGlvbnMucHVzaChpdGVtWzBdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgc2hpcC5wb3NpdGlvbi5sZW5ndGg7IHgrKykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbE9jY3VwaWVkUG9zaXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHNoaXAucG9zaXRpb25beF0uam9pbigpID09PSBhbGxPY2N1cGllZFBvc2l0aW9uc1tpXS5qb2luKCkpIHtcbiAgICAgICAgICAgIGNoZWNrID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGNoZWNrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpbGwyREFycmF5KCkge1xuICAgICAgc2hpcC5wb3NpdGlvbi5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IHggPSBjb29yZGluYXRlWzBdLmNoYXJDb2RlQXQoMCkgLSA2NDtcbiAgICAgICAgY29uc3QgeSA9IGNvb3JkaW5hdGVbMV07XG4gICAgICAgIGdyaWRzQXJyYXlbeSAtIDFdW3ggLSAxXSA9IFtjb29yZGluYXRlLCBzaGlwXTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBsYWNlVmVydGljYWwoKSB7XG4gICAgICBjb25zdCBudW1iZXJPZkxvb3BzID0gc3RhcnRDb29yZGluYXRlWzFdICsgbGVuZ3RoO1xuICAgICAgZm9yIChsZXQgeSA9IHN0YXJ0Q29vcmRpbmF0ZVsxXTsgeSA8IG51bWJlck9mTG9vcHM7IHkrKykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgeSA+IDEwIHx8XG4gICAgICAgICAgeSA8IDEgfHxcbiAgICAgICAgICBhbHBoYWJldHMuaW5kZXhPZihzdGFydENvb3JkaW5hdGVbMF0pID4gMTAgfHxcbiAgICAgICAgICBhbHBoYWJldHMuaW5kZXhPZihzdGFydENvb3JkaW5hdGVbMF0pIDwgMVxuICAgICAgICApXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICBzaGlwLnBvc2l0aW9uLnB1c2goW3N0YXJ0Q29vcmRpbmF0ZVswXSwgeV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBsYWNlSG9yaXpvbnRhbCgpIHtcbiAgICAgIGNvbnN0IG51bWJlck9mTG9vcHMgPSBhbHBoYWJldHMuaW5kZXhPZihzdGFydENvb3JkaW5hdGVbMF0pICsgbGVuZ3RoO1xuICAgICAgZm9yIChcbiAgICAgICAgbGV0IHggPSBhbHBoYWJldHMuaW5kZXhPZihzdGFydENvb3JkaW5hdGVbMF0pO1xuICAgICAgICB4IDwgbnVtYmVyT2ZMb29wcztcbiAgICAgICAgeCsrXG4gICAgICApIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHggPiAxMCB8fFxuICAgICAgICAgIHggPCAxIHx8XG4gICAgICAgICAgc3RhcnRDb29yZGluYXRlWzFdID4gMTAgfHxcbiAgICAgICAgICBzdGFydENvb3JkaW5hdGVbMV0gPCAxXG4gICAgICAgIClcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIHNoaXAucG9zaXRpb24ucHVzaChbYWxwaGFiZXRzW3hdLCBzdGFydENvb3JkaW5hdGVbMV1dKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhbGlnbm1lbnQgPT09ICd2ZXJ0aWNhbCcgPyBwbGFjZVZlcnRpY2FsKCkgOiBwbGFjZUhvcml6b250YWwoKTtcblxuICAgIGlmIChcbiAgICAgIGNoZWNrSWZTaGlwUGxhY2VtZW50RXhjZWVkc0JvYXJkU2l6ZSgpID09PSB0cnVlICYmXG4gICAgICBnYW1lYm9hcmRPd25lciA9PT0gJ1N0YWxsb3lkZSdcbiAgICApIHtcbiAgICAgIHNoaXAucG9zaXRpb24gPSBbXTtcbiAgICAgIHJldHVybiAnRXJyb3IuIFNoaXAgcGxhY2VtZW50IGV4Y2VlZHMgYm9hcmQgc2l6ZSc7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgY2hlY2tJZlNoaXBQbGFjZW1lbnRPdmVybGFwc0Fub3RoZXIoKSA9PT0gdHJ1ZSAmJlxuICAgICAgZ2FtZWJvYXJkT3duZXIgPT09ICdTdGFsbG95ZGUnXG4gICAgKSB7XG4gICAgICBzaGlwLnBvc2l0aW9uID0gW107XG4gICAgICByZXR1cm4gJ0Vycm9yLiBTaGlwIHBvc2l0aW9uIG92ZXJsYXBzIGFub3RoZXInO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIChnYW1lYm9hcmRPd25lciA9PT0gJ0NvbXB1dGVyJyAmJlxuICAgICAgICBjaGVja0lmU2hpcFBsYWNlbWVudEV4Y2VlZHNCb2FyZFNpemUoKSA9PT0gdHJ1ZSkgfHxcbiAgICAgIGNoZWNrSWZTaGlwUGxhY2VtZW50T3ZlcmxhcHNBbm90aGVyKCkgPT09IHRydWVcbiAgICApIHtcbiAgICAgIHBsYWNlU2hpcChzaGlwKTtcbiAgICB9XG5cbiAgICBmaWxsMkRBcnJheSgpO1xuXG4gICAgcmV0dXJuIHNoaXAucG9zaXRpb247XG4gIH1cblxuICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUpIHtcbiAgICBsZXQgaGl0UmVzdWx0cztcbiAgICBsZXQgY3VycmVudFNoaXA7XG4gICAgY29uc3QgZmlsbGVkQ2VsbHMgPSBbXTtcblxuICAgIGdyaWRzQXJyYXkuZm9yRWFjaCgoc3ViQXJyYXkpID0+IHtcbiAgICAgIHN1YkFycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKGl0ZW1bMV0ubGVuZ3RoID4gMSkge1xuICAgICAgICAgIGZpbGxlZENlbGxzLnB1c2goaXRlbSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZmlsbGVkQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgaWYgKGNlbGxbMF0uam9pbigpID09PSBjb29yZGluYXRlLmpvaW4oKSkge1xuICAgICAgICBjdXJyZW50U2hpcCA9IGNlbGxbMV07XG4gICAgICAgIGhpdFNob3RzLnB1c2goY29vcmRpbmF0ZSk7XG4gICAgICAgIGhpdFJlc3VsdHMgPSBjdXJyZW50U2hpcC5oaXQoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChoaXRSZXN1bHRzID09PSBgaXNTdW5rOnRydWVgKSB7XG4gICAgICBjdXJyZW50U2hpcC5pc1N1bmsgPSB0cnVlO1xuICAgICAgcmV0dXJuIGN1cnJlbnRTaGlwLmlzU3VuaztcbiAgICB9XG5cbiAgICBpZiAoIWhpdFJlc3VsdHMpIHtcbiAgICAgIG1pc3NlZFNob3RzLnB1c2goY29vcmRpbmF0ZSk7XG4gICAgICByZXR1cm4gJ01pc3NlZCEnO1xuICAgIH1cblxuICAgIHJldHVybiBoaXRSZXN1bHRzO1xuICB9XG5cbiAgZnVuY3Rpb24gYXJlQWxsU2hpcHNTdW5rKFxuICAgIG9wcG9uZW50R2FtZWJvYXJkLFxuICAgIGNhcnJpZXJTdGF0dXMsXG4gICAgYmF0dGxlc2hpcFN0YXR1cyxcbiAgICBkZXN0cm95ZXJTdGF0dXMsXG4gICAgc3VibWFyaW5lU3RhdHVzLFxuICAgIHBhdHJvbEJvYXRTdGF0dXNcbiAgKSB7XG4gICAgaWYgKFxuICAgICAgY2FycmllclN0YXR1cyAmJlxuICAgICAgYmF0dGxlc2hpcFN0YXR1cyAmJlxuICAgICAgZGVzdHJveWVyU3RhdHVzICYmXG4gICAgICBzdWJtYXJpbmVTdGF0dXMgJiZcbiAgICAgIHBhdHJvbEJvYXRTdGF0dXNcbiAgICApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2FtZWJvYXJkT3duZXIsXG4gICAgZ3JpZHNBcnJheSxcbiAgICBjcmVhdGUyREFycmF5LFxuICAgIHBsYWNlU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGhpdFNob3RzLFxuICAgIG1pc3NlZFNob3RzLFxuICAgIHJhbmRvbVBvc2l0aW9uQ29vcmRpbmF0ZSxcbiAgICBhcmVBbGxTaGlwc1N1bmssXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWVib2FyZEZhY3Rvcnk7XG4iLCJpbXBvcnQgZ2FtZSBmcm9tICcuL1VJL1VJJztcbiIsImZ1bmN0aW9uIHBsYXllckZhY3RvcnkobmFtZSA9ICdDb21wdXRlcicpIHtcbiAgZnVuY3Rpb24gcmFuZG9tQXR0YWNrQ29vcmRpbmF0ZSgpIHtcbiAgICBjb25zdCByYW5kb21BcnJheSA9IFtcbiAgICAgIFN0cmluZy5mcm9tQ2hhckNvZGUoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAgKyAxKSArIDY0KSxcbiAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMSAtIDEpICsgMSksXG4gICAgXTtcblxuICAgIHJldHVybiByYW5kb21BcnJheTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGF0dGFjayhvcHBvbmVudEdhbWVib2FyZCwgY29vcmRpbmF0ZSA9IHJhbmRvbUF0dGFja0Nvb3JkaW5hdGUoKSkge1xuICAgIGNvbnN0IHNob3RBdHRlbXB0cyA9IG9wcG9uZW50R2FtZWJvYXJkLmhpdFNob3RzLmNvbmNhdChcbiAgICAgIG9wcG9uZW50R2FtZWJvYXJkLm1pc3NlZFNob3RzXG4gICAgKTtcblxuICAgIGZvciAobGV0IHggPSAwOyB4IDw9IHNob3RBdHRlbXB0cy5sZW5ndGggLSAxOyB4KyspIHtcbiAgICAgIGlmIChzaG90QXR0ZW1wdHNbeF0uam9pbigpID09PSBjb29yZGluYXRlLmpvaW4oKSkge1xuICAgICAgICBpZiAobmFtZSAhPT0gJ0NvbXB1dGVyJykgcmV0dXJuICdDYW5ub3QgYXR0YWNrIHNhbWUgY29vcmRpbmF0ZXMgdHdpY2UnO1xuICAgICAgICBpZiAobmFtZSA9PT0gJ0NvbXB1dGVyJykgcmV0dXJuIGF0dGFjayhvcHBvbmVudEdhbWVib2FyZCk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdCA9IG9wcG9uZW50R2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZSk7XG4gICAgcmV0dXJuIHsgcmVzdWx0LCBjb29yZGluYXRlIH07XG4gIH1cblxuICByZXR1cm4geyBuYW1lLCBhdHRhY2ssIHJhbmRvbUF0dGFja0Nvb3JkaW5hdGUgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGxheWVyRmFjdG9yeTtcbiIsImZ1bmN0aW9uIHNoaXBzRmFjdG9yeShuYW1lLCBsZW5ndGgpIHtcbiAgY29uc3Qgc2hpcE5hbWUgPSBuYW1lO1xuICBsZXQgaGVhbHRoID0gbGVuZ3RoO1xuICBsZXQgaXNTdW5rID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gc3VuaygpIHtcbiAgICBpc1N1bmsgPSB0cnVlO1xuICAgIHJldHVybiBgaXNTdW5rOiR7aXNTdW5rfWA7XG4gIH1cblxuICBmdW5jdGlvbiBoaXQoKSB7XG4gICAgaGVhbHRoIC09IDE7XG5cbiAgICBpZiAoaGVhbHRoID09PSAwKSB7XG4gICAgICByZXR1cm4gc3VuaygpO1xuICAgIH1cbiAgICByZXR1cm4gYGhlYWx0aDoke2hlYWx0aH1gO1xuICB9XG5cbiAgcmV0dXJuIHsgc2hpcE5hbWUsIGhlYWx0aCwgbGVuZ3RoLCBoaXQsIHN1bmssIGlzU3VuayB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBzaGlwc0ZhY3Rvcnk7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Sb2JvdG8tTGlnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogbWlsaXRhcnk7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogbWlsaXRhcnksIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LFxcbiAgICAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLFxcbiAgICBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uZ2FtZS1zdGFydC1tb2RhbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDI0NSwgMjI4KTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMWVtO1xcbn1cXG5cXG4ubWVudS1jb250YWluZXIgPiBkaXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMWVtO1xcbn1cXG5cXG4ubWVudS1jb250YWluZXIgPiBkaXYgPiBkaXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgaGVpZ2h0OiA2MHB4O1xcbn1cXG5cXG5oNCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4uc2FtcGxlLWdyaWQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODIsIDk1LCAxNjgpO1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgd2lkdGg6IDE1cHg7XFxufVxcblxcbi5zYW1wbGUtZ3JpZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbnNlbGVjdCB7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbmJ1dHRvbjpob3ZlcixcXG5zZWxlY3Qge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTBmciAxZnI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgcGFkZGluZzogM2VtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMjQ1LCAyMjgpO1xcbn1cXG5cXG4uaGVhZGVyLFxcbi5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmdhbWUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY29tcHV0ZXItZ2FtZWJvYXJkLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5wbGF5ZXItZ2FtZWJvYXJkLWNvbnRhaW5lcixcXG4uY29tcHV0ZXItZ2FtZWJvYXJkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciA0ZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMGZyIDFmcjtcXG4gIG1hcmdpbjogYXV0byBhdXRvO1xcbiAgcGFkZGluZzogMWVtO1xcbn1cXG5cXG4ucGxheWVyLWdhbWVib2FyZC1jb250YWluZXIgPiBoMixcXG4uY29tcHV0ZXItZ2FtZWJvYXJkLWNvbnRhaW5lciA+IGgyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgZ3JpZC1yb3c6IDMvNDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi54LWF4aXMtbGFiZWwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgNTBweCk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ueS1heGlzLWxhYmVsIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXJvdzogMi8zO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDUwcHgpO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBsYXllci1ncmlkLWNvbnRhaW5lcixcXG4uY29tcHV0ZXItZ3JpZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCA1MHB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA1MHB4KTtcXG59XFxuXFxuLkNvbXB1dGVyLWdyaWQsXFxuLlBsYXllci1ncmlkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4MiwgOTUsIDE2OCk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5Db21wdXRlci1ncmlkOmhvdmVyLFxcbi5QbGF5ZXItZ3JpZDpob3ZlciB7XFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXG4gIG9wYWNpdHk6IDAuNjtcXG59XFxuXFxuLnBvc2l0aW9uLXBsYWNlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmVuZC1nYW1lLW1vZGFsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA0MCU7XFxuICBsZWZ0OiA0NSU7XFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5LCAyOSwgMjkpO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLndpbm5lci1hbm5vdW5jZW1lbnQge1xcbiAgcGFkZGluZzogMS41ZW07XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogYXp1cmU7XFxufVxcblxcbi5uZXctZ2FtZS1idG4ge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBwYWRkaW5nOiAxZW07XFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5uZXctZ2FtZS1idG46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQiw0Q0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFNBQVM7RUFDVDs7Y0FFWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsb0NBQW9DO0VBQ3BDLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG9DQUFvQztBQUN0Qzs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHVDQUF1QztFQUN2QyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHVDQUF1QztFQUN2QyxvQ0FBb0M7QUFDdEM7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQ0FBa0M7RUFDbEMsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixpQ0FBaUM7RUFDakMsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtBQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBtaWxpdGFyeTtcXG4gIHNyYzogdXJsKC4vZm9udHMvUm9ib3RvLUxpZ2h0LnR0Zik7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogbWlsaXRhcnksIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LFxcbiAgICAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLFxcbiAgICBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uZ2FtZS1zdGFydC1tb2RhbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDI0NSwgMjI4KTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMWVtO1xcbn1cXG5cXG4ubWVudS1jb250YWluZXIgPiBkaXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMWVtO1xcbn1cXG5cXG4ubWVudS1jb250YWluZXIgPiBkaXYgPiBkaXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgaGVpZ2h0OiA2MHB4O1xcbn1cXG5cXG5oNCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4uc2FtcGxlLWdyaWQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODIsIDk1LCAxNjgpO1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgd2lkdGg6IDE1cHg7XFxufVxcblxcbi5zYW1wbGUtZ3JpZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbnNlbGVjdCB7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbmJ1dHRvbjpob3ZlcixcXG5zZWxlY3Qge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTBmciAxZnI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgcGFkZGluZzogM2VtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMjQ1LCAyMjgpO1xcbn1cXG5cXG4uaGVhZGVyLFxcbi5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmdhbWUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY29tcHV0ZXItZ2FtZWJvYXJkLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5wbGF5ZXItZ2FtZWJvYXJkLWNvbnRhaW5lcixcXG4uY29tcHV0ZXItZ2FtZWJvYXJkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciA0ZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMGZyIDFmcjtcXG4gIG1hcmdpbjogYXV0byBhdXRvO1xcbiAgcGFkZGluZzogMWVtO1xcbn1cXG5cXG4ucGxheWVyLWdhbWVib2FyZC1jb250YWluZXIgPiBoMixcXG4uY29tcHV0ZXItZ2FtZWJvYXJkLWNvbnRhaW5lciA+IGgyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgZ3JpZC1yb3c6IDMvNDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi54LWF4aXMtbGFiZWwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgNTBweCk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ueS1heGlzLWxhYmVsIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXJvdzogMi8zO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDUwcHgpO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBsYXllci1ncmlkLWNvbnRhaW5lcixcXG4uY29tcHV0ZXItZ3JpZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCA1MHB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA1MHB4KTtcXG59XFxuXFxuLkNvbXB1dGVyLWdyaWQsXFxuLlBsYXllci1ncmlkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4MiwgOTUsIDE2OCk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5Db21wdXRlci1ncmlkOmhvdmVyLFxcbi5QbGF5ZXItZ3JpZDpob3ZlciB7XFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXG4gIG9wYWNpdHk6IDAuNjtcXG59XFxuXFxuLnBvc2l0aW9uLXBsYWNlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmVuZC1nYW1lLW1vZGFsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA0MCU7XFxuICBsZWZ0OiA0NSU7XFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5LCAyOSwgMjkpO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLndpbm5lci1hbm5vdW5jZW1lbnQge1xcbiAgcGFkZGluZzogMS41ZW07XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogYXp1cmU7XFxufVxcblxcbi5uZXctZ2FtZS1idG4ge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBwYWRkaW5nOiAxZW07XFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5uZXctZ2FtZS1idG46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiXSwibmFtZXMiOlsic2hpcHNGYWN0b3J5IiwiZ2FtZWJvYXJkRmFjdG9yeSIsInBsYXllckZhY3RvcnkiLCJhcHBlbmRIVE1MRWxlbWVudHMiLCJnYW1lU3RhcnRNb2RhbCIsImRvY3VtZW50IiwiYm9keSIsImlubmVySFRNTCIsImNsZWFyUGFnZSIsImdhbWUiLCJwbGF5ZXIiLCJjb21wdXRlciIsInBsYXllckdhbWVib2FyZCIsImNvbXB1dGVyR2FtZWJvYXJkIiwicGxheWVyQ2FycmllciIsInBsYXllckJhdHRsZXNoaXAiLCJwbGF5ZXJEZXN0cm95ZXIiLCJwbGF5ZXJTdWJtYXJpbmUiLCJwbGF5ZXJQYXRyb2xCb2F0IiwiY29tcHV0ZXJDYXJyaWVyIiwiY29tcHV0ZXJCYXR0bGVzaGlwIiwiY29tcHV0ZXJEZXN0cm95ZXIiLCJjb21wdXRlclN1Ym1hcmluZSIsImNvbXB1dGVyUGF0cm9sQm9hdCIsInBsYXllckdhbWVib2FyZENvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJjb21wdXRlckdhbWVib2FyZENvbnRhaW5lciIsImNhcnJpZXJBbGlnbm1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNhcnJpZXJYQXhpcyIsImNhcnJpZXJZQXhpcyIsImNhcnJpZXJTYW1wbGVHcmlkIiwiYmF0dGxlc2hpcEFsaWdubWVudCIsImJhdHRsZXNoaXBYQXhpcyIsImJhdHRsZXNoaXBZQXhpcyIsImJhdHRsZXNoaXBTYW1wbGVHcmlkIiwiZGVzdHJveWVyQWxpZ25tZW50IiwiZGVzdHJveWVyWEF4aXMiLCJkZXN0cm95ZXJZQXhpcyIsImRlc3Ryb3llclNhbXBsZUdyaWQiLCJzdWJtYXJpbmVBbGlnbm1lbnQiLCJzdWJtYXJpbmVYQXhpcyIsInN1Ym1hcmluZVlBeGlzIiwic3VibWFyaW5lU2FtcGxlR3JpZCIsInBhdHJvbEJvYXRBbGlnbm1lbnQiLCJwYXRyb2xCb2F0WEF4aXMiLCJwYXRyb2xCb2F0WUF4aXMiLCJwYXRyb2xCb2F0U2FtcGxlR3JpZCIsInBsYWNlQ2FycmllckJ0biIsInBsYWNlQmF0dGxlc2hpcEJ0biIsInBsYWNlRGVzdHJveWVyQnRuIiwicGxhY2VTdWJtYXJpbmVCdG4iLCJwbGFjZVBhdHJvbEJvYXRCdG4iLCJ4QXhpc0xhYmVsIiwicXVlcnlTZWxlY3RvckFsbCIsInlBeGlzTGFiZWwiLCJhcHBlbmRYQXhpc0xhYmVsIiwiZm9yRWFjaCIsIml0ZW0iLCJ4IiwieExhYmVsIiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiYXBwZW5kQ2hpbGQiLCJhcHBlbmRZQXhpc0xhYmVsIiwieSIsInlMYWJlbCIsImFwcGVuZFNoaXAiLCJzaGlwUG9zaXRpb24iLCJnYW1lYm9hcmRUb0FwcGVuZFNoaXBUbyIsImdyaWROb2RlcyIsIm5vZGUiLCJjb29yZGluYXRlIiwiZ2V0QXR0cmlidXRlIiwicG9zaXRpb24iLCJqb2luIiwiZ2FtZWJvYXJkT3duZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRHcmlkIiwiY29udGFpbmVyVG9BcHBlbmRPbiIsImdhbWVib2FyZFRvQ3JlYXRlR3JpZEZyb20iLCJnZW5lcmF0ZUNvb3JkaW5hdGVzIiwiZ3JpZENvbnRhaW5lciIsImdyaWQiLCJzZXRBdHRyaWJ1dGUiLCJjcmVhdGVHcmlkcyIsInRhcmdldE5vZGUiLCJudW1iZXJPZkdyaWRzIiwiaGFuZGxlQWxpZ25tZW50Q2hhbmdlIiwiYWxpZ25tZW50RWxlbWVudCIsInNhbXBsZUdyaWRFbGVtZW50IiwidmFsdWUiLCJzdHlsZSIsImRpc3BsYXkiLCJjb21wdXRlck1vdmUiLCJBaW1lZENlbGwiLCJhdHRhY2siLCJwbGF5ZXJHcmlkIiwidGFyZ2V0ZWRDZWxsIiwiY29udGFpbnMiLCJwbGF5ZXJNb3ZlIiwiaGFuZGxlU2hvdEF0dGVtcHQiLCJlIiwidGFyZ2V0IiwiYXJlQWxsU2hpcHNTdW5rIiwiaXNTdW5rIiwid2luZG93IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImVuZEdhbWUiLCJhZGRFdmVudExpc3RlbmVyIiwibWVudUNvbnRhaW5lciIsImNhcnJpZXJNZW51Iiwic3VibWFyaW5lTWVudSIsImRlc3Ryb3llck1lbnUiLCJiYXR0bGVzaGlwTWVudSIsInBhdHJvbEJvYXRNZW51IiwiaGFuZGxlU2hpcFBsYWNpbmdCdG5DbGljayIsInRhcmdldFNoaXAiLCJ0YXJnZXRTaGlwQWxpZ25tZW50VmFsdWUiLCJ0YXJnZXRTaGlwU3RhcnRQb3NpdGlvbiIsInRhcmdldERpdiIsInBsYWNlU2hpcCIsImxlbmd0aCIsInJlbW92ZUNoaWxkIiwiY2hpbGRyZW4iLCJOdW1iZXIiLCJvcHBvbmVudEdhbWVib2FyZCIsImVuZEdhbWVNb2RhbCIsIndpbm5lckFubm91bmNlbWVudCIsIm5ld0dhbWVCdG4iLCJuYW1lIiwibWlzc2VkU2hvdHMiLCJoaXRTaG90cyIsImdyaWRzQXJyYXkiLCJ5QXhpcyIsInhBeGlzIiwicmFuZG9tUG9zaXRpb25Db29yZGluYXRlIiwicmFuZG9tQXJyYXkiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb21BbGlnbm1lbnQiLCJjcmVhdGUyREFycmF5IiwiaSIsImoiLCJzaGlwIiwiYWxpZ25tZW50Iiwic3RhcnRDb29yZGluYXRlIiwiYWxwaGFiZXRzIiwiY2hlY2tJZlNoaXBQbGFjZW1lbnRFeGNlZWRzQm9hcmRTaXplIiwiY2hlY2tJZlNoaXBQbGFjZW1lbnRPdmVybGFwc0Fub3RoZXIiLCJhbGxPY2N1cGllZFBvc2l0aW9ucyIsImNoZWNrIiwic3ViQXJyYXkiLCJwdXNoIiwiZmlsbDJEQXJyYXkiLCJjaGFyQ29kZUF0IiwicGxhY2VWZXJ0aWNhbCIsIm51bWJlck9mTG9vcHMiLCJpbmRleE9mIiwicGxhY2VIb3Jpem9udGFsIiwicmVjZWl2ZUF0dGFjayIsImhpdFJlc3VsdHMiLCJjdXJyZW50U2hpcCIsImZpbGxlZENlbGxzIiwiY2VsbCIsImhpdCIsImNhcnJpZXJTdGF0dXMiLCJiYXR0bGVzaGlwU3RhdHVzIiwiZGVzdHJveWVyU3RhdHVzIiwic3VibWFyaW5lU3RhdHVzIiwicGF0cm9sQm9hdFN0YXR1cyIsInJhbmRvbUF0dGFja0Nvb3JkaW5hdGUiLCJzaG90QXR0ZW1wdHMiLCJjb25jYXQiLCJyZXN1bHQiLCJzaGlwTmFtZSIsImhlYWx0aCIsInN1bmsiXSwic291cmNlUm9vdCI6IiJ9
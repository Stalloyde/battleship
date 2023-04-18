import _, { create } from 'lodash';
import shipsFactory from './ships/ship';
import gameboardFactory from './gameboard/gameboard';
import playerFactory from './player/player';
import { appendShip, playerGameboard, computerGameboard } from './UI/UI';
import './style.css';

const playerGameboardContainer = document.querySelector(
  '.player-gameboard-container'
);
const computerGameboardContainer = document.querySelector(
  '.computer-gameboard-container'
);

const xAxisLabel = document.querySelectorAll('.x-axis-label');
const yAxisLabel = document.querySelectorAll('.y-axis-label');

function appendXAxisLabel() {
  xAxisLabel.forEach((item) => {
    for (let x = 1; x < 11; x++) {
      const xLabel = document.createElement('div');
      xLabel.textContent = `${String.fromCharCode(x + 64)}`;
      item.appendChild(xLabel);
    }
  });
}

function appendYAxisLabel() {
  yAxisLabel.forEach((item) => {
    for (let y = 1; y < 11; y++) {
      const yLabel = document.createElement('div');
      yLabel.textContent = y;
      item.appendChild(yLabel);
    }
  });
}

function appendGrid(containerToAppendOn, gameboardToCreateGridFrom) {
  const gridContainer = document.createElement('div');

  gameboardToCreateGridFrom === playerGameboard
    ? gridContainer.classList.add('player-grid')
    : gridContainer.classList.add('computer-grid');

  containerToAppendOn.appendChild(gridContainer);

  const gridsArray = gameboardToCreateGridFrom.createGrid();
  gridsArray.forEach((item) => {
    const grid = document.createElement('div');
    grid.classList.add(`${gameboardToCreateGridFrom.gameboardOwner}`, 'grid');
    grid.setAttribute('coordinate', item);
    gridContainer.appendChild(grid);
  });
}

appendXAxisLabel();
appendYAxisLabel();
appendGrid(computerGameboardContainer, computerGameboard);
appendGrid(playerGameboardContainer, playerGameboard);

const carrier = playerGameboard.placeShip(
  playerGameboard.allShips.carrier,
  'vertical',
  ['A', 1]
); //A,1...A,2...A,3...A,4...A,5

const battleship = playerGameboard.placeShip(
  playerGameboard.allShips.battleship,
  'vertical',
  ['E', 5]
); //E,5...E,6...E,7...E,8

const destroyer = playerGameboard.placeShip(
  playerGameboard.allShips.destroyer,
  'horizontal',
  ['C', 10]
); //C,10...D,10..D,10

const submarine = playerGameboard.placeShip(
  playerGameboard.allShips.submarine,
  'horizontal',
  ['H', 6]
); //H,6..I,6...J,6

const patrolBoat = playerGameboard.placeShip(
  playerGameboard.allShips.patrolBoat,
  'horizontal',
  ['H', 1]
); //E,1...E,2

appendShip(carrier, playerGameboard);
appendShip(battleship, playerGameboard);
appendShip(destroyer, playerGameboard);
appendShip(submarine, playerGameboard);
appendShip(patrolBoat, playerGameboard);

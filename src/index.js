import _, { create } from 'lodash';
import shipsFactory from './ships/ship';
import gameboardFactory from './gameboard/gameboard';
import playerFactory from './player/player';
import {
  appendShip,
  player,
  computer,
  playerGameboard,
  computerGameboard,
} from './UI/UI';
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
function generateCoordinates(x, y) {
  return `${String.fromCharCode(x + 64)},${y}`;
}

function appendGrid(containerToAppendOn, gameboardToCreateGridFrom) {
  const gridContainer = document.createElement('div');

  gameboardToCreateGridFrom === playerGameboard
    ? gridContainer.classList.add('player-grid')
    : gridContainer.classList.add('computer-grid');

  containerToAppendOn.appendChild(gridContainer);

  for (let y = 1; y < 11; y++) {
    for (let x = 1; x < 11; x++) {
      const grid = document.createElement('div');
      grid.classList.add(`${gameboardToCreateGridFrom.gameboardOwner}`, 'grid');
      grid.setAttribute('coordinate', generateCoordinates(x, y));
      gridContainer.appendChild(grid);
    }
  }
}

appendXAxisLabel();
appendYAxisLabel();
appendGrid(computerGameboardContainer, computerGameboard);
appendGrid(playerGameboardContainer, playerGameboard);

const carrier = playerGameboard.placeShip(
  playerGameboard.allShips.carrier,
  'vertical',
  ['A', 3]
);
const battleship = playerGameboard.placeShip(
  playerGameboard.allShips.battleship,
  'vertical',
  ['E', 5]
);

const destroyer = playerGameboard.placeShip(
  playerGameboard.allShips.destroyer,
  'horizontal',
  ['C', 10]
);

const submarine = playerGameboard.placeShip(
  playerGameboard.allShips.submarine,
  'vertical',
  ['H', 1]
);

const patrolBoat = playerGameboard.placeShip(
  playerGameboard.allShips.patrolBoat,
  'horizontal',
  ['E', 2]
);

appendShip(carrier, playerGameboard);
appendShip(battleship, playerGameboard);
appendShip(destroyer, playerGameboard);
appendShip(submarine, playerGameboard);
appendShip(patrolBoat, playerGameboard);

const computerCarrier = computerGameboard.placeShip(
  computerGameboard.allShips.carrier
);

const computerBattleship = computerGameboard.placeShip(
  computerGameboard.allShips.battleship
);

const computerDestroyer = computerGameboard.placeShip(
  computerGameboard.allShips.destroyer
);

const computerSubmarine = computerGameboard.placeShip(
  computerGameboard.allShips.submarine
);

const computerPatrolBoat = computerGameboard.placeShip(
  computerGameboard.allShips.patrolBoat
);

appendShip(computerCarrier, computerGameboard);
appendShip(computerBattleship, computerGameboard);
appendShip(computerDestroyer, computerGameboard);
appendShip(computerSubmarine, computerGameboard);
appendShip(computerPatrolBoat, computerGameboard);

//player attack computer gameboard
//player.attack(computergameboard's coordinate)
//computer gameboard.receiveAttack

//computer attack player gameboard
//computer.attack(playergameboard's coordinate)
//player gameboard.receinpmveAttack

//how to ensure 1 turn each?

console.log(computer.attack(playerGameboard, ['E,2']));
console.log(playerGameboard.allShips.patrolBoat);
console.log(computer.attack(playerGameboard, ['F,2']));
console.log(playerGameboard.allShips.patrolBoat);

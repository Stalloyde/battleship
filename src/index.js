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

const carrier = shipsFactory('carrier', 5);
const battleship = shipsFactory('battleship', 4);
const destroyer = shipsFactory('destroyer', 3);
const submarine = shipsFactory('submarine', 3);
const patrolBoat = shipsFactory('patrolBoat', 2);

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

const playerCarrier = playerGameboard.placeShip(carrier, 'vertical', ['A', 3]);
const playerBattleship = playerGameboard.placeShip(battleship, 'vertical', [
  'E',
  5,
]);
const playerDestroyer = playerGameboard.placeShip(destroyer, 'horizontal', [
  'C',
  10,
]);
const playerSubmarine = playerGameboard.placeShip(submarine, 'vertical', [
  'H',
  1,
]);
const playerPatrolBoat = playerGameboard.placeShip(patrolBoat, 'horizontal', [
  'E',
  2,
]);

appendShip(playerCarrier, playerGameboard);
appendShip(playerBattleship, playerGameboard);
appendShip(playerDestroyer, playerGameboard);
appendShip(playerSubmarine, playerGameboard);
appendShip(playerPatrolBoat, playerGameboard);

const computerCarrier = computerGameboard.placeShip(carrier);
const computerBattleship = computerGameboard.placeShip(battleship);
const computerDestroyer = computerGameboard.placeShip(destroyer);
const computerSubmarine = computerGameboard.placeShip(submarine);
const computerPatrolBoat = computerGameboard.placeShip(patrolBoat);

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
console.log(computer.attack(playerGameboard, ['F,2']));

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

const playerCarrier = shipsFactory('carrier', 5);
const playerBattleship = shipsFactory('battleship', 4);
const playerDestroyer = shipsFactory('destroyer', 3);
const playerSubmarine = shipsFactory('submarine', 3);
const playerPatrolBoat = shipsFactory('patrolBoat', 2);

const computerCarrier = shipsFactory('carrier', 5);
const computerBattleship = shipsFactory('battleship', 4);
const computerDestroyer = shipsFactory('destroyer', 3);
const computerSubmarine = shipsFactory('submarine', 3);
const computerPatrolBoat = shipsFactory('patrolBoat', 2);

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
    ? gridContainer.classList.add('player-grid-container')
    : gridContainer.classList.add('computer-grid-container');

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

appendXAxisLabel();
appendYAxisLabel();
appendGrid(computerGameboardContainer, computerGameboard);
appendGrid(playerGameboardContainer, playerGameboard);

playerGameboard.placeShip(playerCarrier, 'vertical', ['A', 3]);
playerGameboard.placeShip(playerBattleship, 'vertical', ['E', 5]);
playerGameboard.placeShip(playerDestroyer, 'horizontal', ['C', 10]);
playerGameboard.placeShip(playerSubmarine, 'vertical', ['H', 1]);
playerGameboard.placeShip(playerPatrolBoat, 'horizontal', ['E', 2]);

appendShip(playerCarrier.position, playerGameboard);
appendShip(playerBattleship.position, playerGameboard);
appendShip(playerDestroyer.position, playerGameboard);
appendShip(playerSubmarine.position, playerGameboard);
appendShip(playerPatrolBoat.position, playerGameboard);

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

//player attack computer gameboard
//player.attack(computergameboard's coordinate)
//computer gameboard.receiveAttack

//computer attack player gameboard
//computer.attack(playergameboard's coordinate)
//player gameboard.receinpmveAttack

//how to ensure 1 turn each?

console.log(player.attack(computerGameboard, ['A', 9]));
console.log(player.attack(computerGameboard, ['A', 10]));

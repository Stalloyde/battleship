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
appendShip();

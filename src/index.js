import _, { create } from 'lodash';
import shipsFactory from './ships/ship';
import gameboardFactory from './gameboard/gameboard';
import playerFactory from './player/player';
import './style.css';

const playerGameboardContainer = document.querySelector(
  '.player-gameboard-container'
);
const computerGameboardContainer = document.querySelector(
  '.computer-gameboard-container'
);
const computerGameboard = gameboardFactory();
const playerGameboard = gameboardFactory('Stalloyde');

function appendGrid(containerToAppendOn, gameboardToCreateGridFrom) {
  const gridContainer = document.createElement('div');

  gameboardToCreateGridFrom === playerGameboard
    ? gridContainer.classList.add('player-grid')
    : gridContainer.classList.add('computer-grid');
  containerToAppendOn.appendChild(gridContainer);

  const gridsArray = gameboardToCreateGridFrom.createGrid();
  gridsArray.forEach((item) => {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    grid.id = item;
    gridContainer.appendChild(grid);
  });
}

appendGrid(computerGameboardContainer, computerGameboard);
appendGrid(playerGameboardContainer, playerGameboard);

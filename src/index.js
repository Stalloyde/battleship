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
const patrolBoatXAxis = document.getElementById(
  'patrol-boat-x-axis-coordinate'
);
const patrolBoatYAxis = document.getElementById(
  'patrol-boat-y-axis-coordinate'
);
const patrolBoatSampleGrid = document.getElementById('patrol-boat-sample-grid');

const placeCarrierBtn = document.querySelector('.place-carrier');
const placeBattleshipBtn = document.querySelector('.place-battleship');
const placeDestroyerBtn = document.querySelector('.place-destroyer');
const placeSubmarineBtn = document.querySelector('.place-submarine');
const placePatrolBoatBtn = document.querySelector('.place-patrol-boat');

const playerGameboardContainer = document.querySelector(
  '.player-gameboard-container'
);
const computerGameboardContainer = document.querySelector(
  '.computer-gameboard-container'
);

const xAxisLabel = document.querySelectorAll('.x-axis-label');
const yAxisLabel = document.querySelectorAll('.y-axis-label');

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

  playerGrid.forEach((grid) => {
    const targetedCell = grid.getAttribute('coordinate');
    if (
      targetedCell === AimedCell.join() &&
      grid.classList.contains('position-placed')
    ) {
      grid.classList.add('hit');
      grid.innerHTML = 'X';
    }

    if (
      targetedCell === AimedCell.join() &&
      !grid.classList.contains('position-placed')
    )
      grid.innerHTML = 'O';
  });
}

function playerMove() {
  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('Computer-grid')) {
      const targetedCell = e.target.getAttribute('coordinate');
      player.attack(computerGameboard, [targetedCell]);
      e.target.innerHTML = 'O';
      computerMove(); //bug - computermove() calls even if player click on repeat coordinate
    }

    if (
      e.target.classList.contains('position-placed') &&
      e.target.classList.contains('Computer-grid')
    ) {
      e.target.classList.add('hit');
      e.target.innerHTML = 'X';
    }
  });
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

function handleShipPlacingBtnClick(
  targetShip,
  targetShipAlignmentValue,
  targetShipStartPosition,
  targetDiv
) {
  playerGameboard.placeShip(
    targetShip,
    targetShipAlignmentValue,
    targetShipStartPosition
  );
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
  handleShipPlacingBtnClick(
    playerCarrier,
    carrierAlignment.value,
    [carrierXAxis.value, Number(carrierYAxis.value)],
    carrierMenu
  );
});

placeBattleshipBtn.addEventListener('click', () => {
  handleShipPlacingBtnClick(
    playerBattleship,
    battleshipAlignment.value,
    [battleshipXAxis.value, Number(battleshipYAxis.value)],
    battleshipMenu
  );
});

placeDestroyerBtn.addEventListener('click', () => {
  handleShipPlacingBtnClick(
    playerDestroyer,
    destroyerAlignment.value,
    [destroyerXAxis.value, Number(destroyerYAxis.value)],
    destroyerMenu
  );
});

placeSubmarineBtn.addEventListener('click', () => {
  handleShipPlacingBtnClick(
    playerSubmarine,
    submarineAlignment.value,
    [submarineXAxis.value, Number(submarineYAxis.value)],
    submarineMenu
  );
});

placePatrolBoatBtn.addEventListener('click', () => {
  handleShipPlacingBtnClick(
    playerPatrolBoat,
    patrolBoatAlignment.value,
    [patrolBoatXAxis.value, Number(patrolBoatYAxis.value)],
    patrolBoatMenu
  );
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

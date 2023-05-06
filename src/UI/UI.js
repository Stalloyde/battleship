import shipsFactory from '../ships/ship';
import gameboardFactory from '../gameboard/gameboard';
import playerFactory from '../player/player';
import '../style.css';

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
  const player = playerFactory('Stalloyde');
  const computer = playerFactory();
  const playerGameboard = gameboardFactory(player);
  const computerGameboard = gameboardFactory(computer);

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

  const carrierAlignment = document.getElementById('carrier-alignment');
  const carrierXAxis = document.getElementById('carrier-x-axis-coordinate');
  const carrierYAxis = document.getElementById('carrier-y-axis-coordinate');
  const carrierSampleGrid = document.getElementById('carrier-sample-grid');

  const battleshipAlignment = document.getElementById('battleship-alignment');
  const battleshipXAxis = document.getElementById(
    'battleship-x-axis-coordinate'
  );
  const battleshipYAxis = document.getElementById(
    'battleship-y-axis-coordinate'
  );
  const battleshipSampleGrid = document.getElementById(
    'battleship-sample-grid'
  );

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
  const patrolBoatSampleGrid = document.getElementById(
    'patrol-boat-sample-grid'
  );

  const placeCarrierBtn = document.querySelector('.place-carrier');
  const placeBattleshipBtn = document.querySelector('.place-battleship');
  const placeDestroyerBtn = document.querySelector('.place-destroyer');
  const placeSubmarineBtn = document.querySelector('.place-submarine');
  const placePatrolBoatBtn = document.querySelector('.place-patrol-boat');

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

  function appendShip(shipPosition, gameboardToAppendShipTo) {
    let gridNodes;

    if (gameboardToAppendShipTo === computerGameboard) {
      gridNodes = document.querySelectorAll(`.Computer-grid`);
    } else {
      gridNodes = document.querySelectorAll(`.Player-grid`);
    }

    gridNodes.forEach((node) => {
      const coordinate = node.getAttribute('coordinate');
      shipPosition.forEach((position) => {
        if (
          coordinate === position.join() &&
          gameboardToAppendShipTo.gameboardOwner !== 'Computer'
        ) {
          node.classList.add('position-placed');
        }

        if (
          coordinate === position.join() &&
          gameboardToAppendShipTo.gameboardOwner === 'Computer'
        ) {
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

    gameboardToCreateGridFrom === playerGameboard
      ? gridContainer.classList.add('player-grid-container')
      : gridContainer.classList.add('computer-grid-container');

    containerToAppendOn.appendChild(gridContainer);

    for (let y = 1; y < 11; y++) {
      for (let x = 1; x < 11; x++) {
        const grid = document.createElement('div');

        if (gameboardToCreateGridFrom.gameboardOwner === 'Computer') {
          grid.classList.add(
            `${gameboardToCreateGridFrom.gameboardOwner}-grid`
          );
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

        if (
          computerGameboard.areAllShipsSunk(
            playerGameboard.gameboardOwner,
            computerCarrier.isSunk,
            computerBattleship.isSunk,
            computerDestroyer.isSunk,
            computerSubmarine.isSunk,
            computerPatrolBoat.isSunk
          )
        ) {
          window.removeEventListener('click', handleShotAttempt);
          endGame(playerGameboard.gameboardOwner);
        }

        if (
          playerGameboard.areAllShipsSunk(
            computerGameboard.gameboardOwner,
            playerCarrier.isSunk,
            playerBattleship.isSunk,
            playerDestroyer.isSunk,
            playerSubmarine.isSunk,
            playerPatrolBoat.isSunk
          )
        ) {
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

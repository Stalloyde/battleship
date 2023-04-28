/* eslint-disable no-plusplus */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import shipsFactory from '../ships/ship';

function gameboardFactory(name) {
  const gameboardOwner = name.name;
  const missedShots = [];
  const hitShots = [];
  const gridsArray = [];
  const yAxis = 10;
  const xAxis = 10;

  function randomPositionCoordinate() {
    const randomArray = [
      String.fromCharCode(Math.floor(Math.random() * (10 - 1) + 1) + 64),
      Math.floor(Math.random() * (11 - 1) + 1),
    ];

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

  function placeShip(
    ship,
    alignment = randomAlignment(),
    startCoordinate = randomPositionCoordinate(),
    length = ship.length
  ) {
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

      gridsArray.forEach((subArray) => {
        subArray.forEach((item) => {
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
      ship.position.forEach((coordinate) => {
        const x = coordinate[0].charCodeAt(0) - 64;
        const y = coordinate[1];
        gridsArray[y - 1][x - 1] = [coordinate, ship];
      });
    }

    function placeVertical() {
      const numberOfLoops = startCoordinate[1] + length;
      for (let y = startCoordinate[1]; y < numberOfLoops; y++) {
        if (
          y > 10 ||
          y < 1 ||
          alphabets.indexOf(startCoordinate[0]) > 10 ||
          alphabets.indexOf(startCoordinate[0]) < 1
        )
          return;
        ship.position.push([startCoordinate[0], y]);
      }
    }

    function placeHorizontal() {
      const numberOfLoops = alphabets.indexOf(startCoordinate[0]) + length;
      for (
        let x = alphabets.indexOf(startCoordinate[0]);
        x < numberOfLoops;
        x++
      ) {
        if (
          x > 10 ||
          x < 1 ||
          startCoordinate[1] > 10 ||
          startCoordinate[1] < 1
        )
          return;
        ship.position.push([alphabets[x], startCoordinate[1]]);
      }
    }

    alignment === 'vertical' ? placeVertical() : placeHorizontal();

    if (
      checkIfShipPlacementExceedsBoardSize() === true &&
      gameboardOwner === 'Stalloyde'
    ) {
      return 'Error. Ship placement exceeds board size';
    }

    if (
      checkIfShipPlacementOverlapsAnother() === true &&
      gameboardOwner === 'Stalloyde'
    ) {
      return 'Error. Ship position overlaps another';
    }

    if (
      (gameboardOwner === 'Computer' &&
        checkIfShipPlacementExceedsBoardSize() === true) ||
      checkIfShipPlacementOverlapsAnother() === true
    ) {
      placeShip(ship);
    }

    fill2DArray();
    return ship.position;
  }

  function receiveAttack(coordinate) {
    let hitResults;
    let currentShip;
    const filledCells = [];

    gridsArray.forEach((subArray) => {
      subArray.forEach((item) => {
        if (item[1].length > 1) {
          filledCells.push(item);
        }
      });
    });

    filledCells.forEach((cell) => {
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

  return {
    gameboardOwner,
    gridsArray,
    create2DArray,
    placeShip,
    receiveAttack,
    hitShots,
    missedShots,
    randomPositionCoordinate,
  };
}

export default gameboardFactory;

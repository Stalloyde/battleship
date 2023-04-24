/* eslint-disable no-plusplus */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { create } from 'lodash';
import { check } from 'prettier';
import shipsFactory from '../ships/ship';

function gameboardFactory(name) {
  const gameboardOwner = name.name;
  const missedShots = [];
  const hitShots = [];
  const gridsArray = [];
  const yAxis = 10;
  const xAxis = 10;

  function create2DArray() {
    for (let i = 0; i < yAxis; i++) {
      gridsArray[i] = [];
      for (let j = 0; j < xAxis; j++) {
        gridsArray[i][j] = [];
      }
    }
    return gridsArray;
  }

  create2DArray();

  function placeShip(ship, alignment, startCoordinate, length = ship.length) {
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

      //collates all occupied positions on the 2D array in an array of arrays
      gridsArray.forEach((subArray) => {
        subArray.forEach((item) => {
          if (item.length > 0) {
            allOccupiedPositions.push(item);
          }
        });
      });

      for (let x = 0; x < ship.position.length - 1; x++) {
        for (let i = 0; i < allOccupiedPositions.length - 1; i++) {
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
        gridsArray[y - 1][x - 1] = [coordinate[0], y];
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

    if (checkIfShipPlacementExceedsBoardSize() === true) {
      return 'Error. Ship placement exceeds board size';
    }

    if (checkIfShipPlacementOverlapsAnother() === true) {
      return 'Error. Ship position overlaps another';
    }

    fill2DArray();
    return ship.position;
  }

  const carrier = shipsFactory(5);
  const battleship = shipsFactory(4);
  const destroyer = shipsFactory(3);
  const submarine = shipsFactory(3);
  const patrolBoat = shipsFactory(2);

  const allShips = {
    carrier,
    battleship,
    destroyer,
    submarine,
    patrolBoat,
  };

  function receiveAttack(coordinate) {
    for (const ship in allShips) {
      const currentShip = allShips[ship];
      const currentShipPosition = currentShip.position;

      for (let x = 0; x <= currentShipPosition.length - 1; x++) {
        if (currentShipPosition[x].join() === coordinate.join()) {
          hitShots.push(coordinate);
          return currentShip.hit();
        }
      }
    }
    missedShots.push(coordinate);
    return 'Missed!';
  }

  return {
    gameboardOwner,
    gridsArray,
    create2DArray,
    placeShip,
    receiveAttack,
    allShips,
    hitShots,
    missedShots,
  };
}

export default gameboardFactory;

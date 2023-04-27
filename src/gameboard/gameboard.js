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
        gridsArray[i][j] = [];
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

      //collates all occupied positions on the 2D array in an array of arrays
      gridsArray.forEach((subArray) => {
        subArray.forEach((item) => {
          if (item.coordinate) {
            allOccupiedPositions.push(item.coordinate);
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
        gridsArray[y - 1][x - 1] = {
          coordinate: [coordinate[0], y],
          ship,
        };
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
      (checkIfShipPlacementExceedsBoardSize() === true &&
        gameboardOwner === 'Computer') ||
      (checkIfShipPlacementOverlapsAnother() === true &&
        gameboardOwner === 'Computer')
    ) {
      placeShip(ship);
    }

    fill2DArray();
    return ship.position;
  }

  const carrier = shipsFactory('carrier', 5);
  const battleship = shipsFactory('battleship', 4);
  const destroyer = shipsFactory('destroyer', 3);
  const submarine = shipsFactory('submarine', 3);
  const patrolBoat = shipsFactory('patrolBoat', 2);

  const allShips = {
    carrier,
    battleship,
    destroyer,
    submarine,
    patrolBoat,
  };
  //make use of gridsArray
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
    randomPositionCoordinate,
  };
}

export default gameboardFactory;

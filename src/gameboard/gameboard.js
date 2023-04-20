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

  function createGrid() {
    for (let i = 0; i < yAxis; i++) {
      gridsArray[i] = [];
      for (let j = 0; j < xAxis; j++) {
        gridsArray[i][j] = [];
      }
      //String.fromCharCode(j + 65), i + 1
    }
    console.log(gridsArray);
    return gridsArray;
  }
  function placeShip(ship, alignment, startCoordinate, length = ship.length) {
    const alphabets = [null, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

    ship.position = [];

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

    if (ship.position.length !== length) {
      return 'Error. Ship placement exceeds board size';
    }
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

  // for testing purposes only.. uncomment to pass tests in player.tests
  //tried moving it to player.test.js but that causes currentShipPosition = allShips[ship].position in receiveAttack() to be undefined
  placeShip(allShips.carrier, 'vertical', ['A', 1]); //A,1...A,2...A,3...A,4...A,5
  placeShip(allShips.battleship, 'vertical', ['B', 1]); //B,1...B,2...B,3...B,4
  placeShip(allShips.destroyer, 'vertical', ['C', 1]); //C,1...C,2...C,3
  placeShip(allShips.submarine, 'vertical', ['D', 1]); //D,1...D,2...D,3
  placeShip(allShips.patrolBoat, 'vertical', ['E', 1]); //E,1...E,2

  function receiveAttack(coordinate) {
    for (const ship in allShips) {
      const currentShip = allShips[ship];
      const currentShipPosition = allShips[ship].position;

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
    createGrid,
    placeShip,
    receiveAttack,
    allShips,
    hitShots,
    missedShots,
  };
}

export default gameboardFactory;

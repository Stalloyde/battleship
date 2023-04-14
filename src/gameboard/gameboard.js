/* eslint-disable no-plusplus */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import shipsFactory from '../ships/ship';

function gameboardFactory(name = 'Computer') {
  function createGrid() {
    const gridsArray = [];
    for (let y = 1; y < 11; y++) {
      for (let x = 1; x < 11; x++) {
        gridsArray.push([`x:${String.fromCharCode(x + 64)},y:${y}`]);
      }
    }
    return gridsArray;
  }

  const missedShots = [];
  const hitShots = [];

  function placeShip(ship, alignment, startCoordinate, length = ship.length) {
    if (
      startCoordinate[0] > 7 ||
      startCoordinate[1] > 7 ||
      startCoordinate[0] < 1 ||
      startCoordinate[1] < 1
    ) {
      return 'Error. Ship placement exceeds board size';
    }
    ship.position = [];
    if (alignment === 'vertical') {
      const numberOfLoops = startCoordinate[1] + length;
      for (let y = startCoordinate[1]; y < numberOfLoops; y++) {
        if (y > 10 || y < 1) return 'Error. Ship placement exceeds board size';
        ship.position.push([startCoordinate[0], y]);
      }
    }

    if (alignment === 'horizontal') {
      const numberOfLoops = startCoordinate[0] + length;
      for (let x = startCoordinate[0]; x < numberOfLoops; x++) {
        if (x > 10 || x < 1) return 'Error. Ship placement exceeds board size';
        ship.position.push([x, startCoordinate[1]]);
      }
    }
    return ship.position;
  }

  const carrier = shipsFactory(5);
  const battleship = shipsFactory(4);
  const destroyer = shipsFactory(3);
  const submarine = shipsFactory(3);
  const patrolBoat = shipsFactory(2);

  placeShip(carrier, 'vertical', [1, 1]); //1,1...1,2...1,3...1,4...1,5
  placeShip(battleship, 'vertical', [2, 1]); //2,1...2,2...2,3...2,4...2,5
  placeShip(destroyer, 'vertical', [3, 1]); //3,1...3,2...3,3
  placeShip(submarine, 'vertical', [4, 1]); //4,1...4,2...4,3
  placeShip(patrolBoat, 'vertical', [5, 1]); //5,1...5,2

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
  return { createGrid, placeShip, receiveAttack, hitShots, missedShots };
}

export default gameboardFactory;

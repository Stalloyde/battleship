import shipsFactory from '../ships/ship';

function gameboardFactory() {
  function createGrid() {
    const grid = [
      '1,1',
      '1,2',
      '1,3',
      '1,4',
      '1,5',
      '1,6',
      '1,7',
      '1,8',
      '1,9',
      '1,10',
      '2,1',
      '2,2',
      '2,3',
      '2,4',
      '2,5',
      '2,6',
      '2,7',
      '2,8',
      '2,9',
      '2,10',
      '3,1',
      '3,2',
      '3,3',
      '3,4',
      '3,5',
      '3,6',
      '3,7',
      '3,8',
      '3,9',
      '3,10',
      '4,1',
      '4,2',
      '4,3',
      '4,4',
      '4,5',
      '4,6',
      '4,7',
      '4,8',
      '4,9',
      '4,10',
      '5,1',
      '5,2',
      '5,3',
      '5,4',
      '5,5',
      '5,6',
      '5,7',
      '5,8',
      '5,9',
      '5,10',
      '6,1',
      '6,2',
      '6,3',
      '6,4',
      '6,5',
      '6,6',
      '6,7',
      '6,8',
      '6,9',
      '6,10',
      '7,1',
      '7,2',
      '7,3',
      '7,4',
      '7,5',
      '7,6',
      '7,7',
      '7,8',
      '7,9',
      '7,10',
      '8,1',
      '8,2',
      '8,3',
      '8,4',
      '8,5',
      '8,6',
      '8,7',
      '8,8',
      '8,9',
      '8,10',
      '9,1',
      '9,2',
      '9,3',
      '9,4',
      '9,5',
      '9,6',
      '9,7',
      '9,8',
      '9,9',
      '9,10',
      '10,1',
      '10,2',
      '10,3',
      '10,4',
      '10,5',
      '10,6',
      '10,7',
      '10,8',
      '10,9',
      '10,10',
    ];
    return grid;
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

  function receiveAttack(ship, coordinate) {
    for (let i = 0; i < ship.position.length; i++) {
      if (ship.position[i].join() === coordinate.join()) {
        hitShots.push(coordinate);
        return ship.hit();
      }
    }
    missedShots.push(coordinate);
    return 'Missed!';
  }

  const carrier = shipsFactory(5);
  const battleship = shipsFactory(4);
  const destroyer = shipsFactory(3);
  const submarine = shipsFactory(3);
  const patrolBoat = shipsFactory(2);

  placeShip(carrier, 'vertical', [1, 1]);
  placeShip(battleship, 'vertical', [2, 1]);
  placeShip(destroyer, 'vertical', [3, 1]);
  placeShip(submarine, 'vertical', [4, 1]);
  placeShip(patrolBoat, 'vertical', [5, 1]);

  const allShips = {
    carrier,
    battleship,
    destroyer,
    submarine,
    patrolBoat,
  };

  return { createGrid, placeShip, receiveAttack };
}
export default gameboardFactory;

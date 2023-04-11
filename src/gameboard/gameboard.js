import shipsFactory from '../ships/ship';

function gameboardFactory() {
  function placeShip(ship, length, alignment, startCoordinate) {
    ship.position = [];
    if (alignment === 'vertical') {
      const numberOfLoops = startCoordinate[1] + length;
      for (let y = startCoordinate[1]; y < numberOfLoops; y++) {
        ship.position.push([startCoordinate[0], y]);
      }
    }

    if (alignment === 'horizontal') {
      const numberOfLoops = startCoordinate[0] + length;
      for (let x = startCoordinate[0]; x < numberOfLoops; x++) {
        ship.position.push([x, startCoordinate[1]]);
      }
    }
    return ship.position;
  }

  function createGrid() {
    const grid = [
      '1,1',
      '1,2',
      '1,3',
      '1,4',
      '1,5',
      '1,6',
      '1,7',
      '2,1',
      '2,2',
      '2,3',
      '2,4',
      '2,5',
      '2,6',
      '2,7',
      '3,1',
      '3,2',
      '3,3',
      '3,4',
      '3,5',
      '3,6',
      '3,7',
      '4,1',
      '4,2',
      '4,3',
      '4,4',
      '4,5',
      '4,6',
      '4,7',
      '5,1',
      '5,2',
      '5,3',
      '5,4',
      '5,5',
      '5,6',
      '5,7',
      '6,1',
      '6,2',
      '6,3',
      '6,4',
      '6,5',
      '6,6',
      '6,7',
      '7,1',
      '7,2',
      '7,3',
      '7,4',
      '7,5',
      '7,6',
      '7,7',
    ];
    return grid;
  }

  return { createGrid, placeShip };
}

export default gameboardFactory;

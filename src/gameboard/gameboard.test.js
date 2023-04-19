import shipsFactory from '../ships/ship';
import gameboardFactory from './gameboard';
import playerFactory from '../player/player';

const player = playerFactory('Stalloyde');
const gameboard = gameboardFactory(player);

test('place ship vertical', () => {
  const shipA = shipsFactory(5);
  expect(gameboard.placeShip(shipA, 'vertical', ['A', 1])).toEqual([
    ['A', 1],
    ['A', 2],
    ['A', 3],
    ['A', 4],
    ['A', 5],
  ]);

  expect(gameboard.placeShip(shipA, 'vertical', ['A', 2])).toEqual([
    ['A', 2],
    ['A', 3],
    ['A', 4],
    ['A', 5],
    ['A', 6],
  ]);
});

test('place ship horizontal', () => {
  const shipA = shipsFactory(5);
  expect(gameboard.placeShip(shipA, 'horizontal', ['A', 1])).toEqual([
    ['A', 1],
    ['B', 1],
    ['C', 1],
    ['D', 1],
    ['E', 1],
  ]);

  expect(gameboard.placeShip(shipA, 'horizontal', ['B', 1])).toEqual([
    ['B', 1],
    ['C', 1],
    ['D', 1],
    ['E', 1],
    ['F', 1],
  ]);

  expect(gameboard.placeShip(shipA, 'horizontal', ['C', 10])).toEqual([
    ['C', 10],
    ['D', 10],
    ['E', 10],
    ['F', 10],
    ['G', 10],
  ]);

  expect(gameboard.placeShip(shipA, 'horizontal', ['F', 6])).toEqual([
    ['F', 6],
    ['G', 6],
    ['H', 6],
    ['I', 6],
    ['J', 6],
  ]);
});

// test('no overlapping ship placement', () => {
//   const shipA = shipsFactory(5);
//   const shipB = shipsFactory(5);
//   const positionA = gameboard.placeShip(shipA, 'horizontal', ['F', 6]);
//   const positionB = gameboard.placeShip(shipB, 'horizontal', ['F', 6]);
//   console.log(positionA);
//   console.log(positionB);

//   expect(gameboard.checkIfOverlap());
// });

test('no placement that exceeds board size', () => {
  const shipA = shipsFactory(5);
  expect(gameboard.placeShip(shipA, 'horizontal', ['G', 0])).toBe(
    'Error. Ship placement exceeds board size'
  );

  expect(gameboard.placeShip(shipA, 'horizontal', ['H', 1])).toBe(
    'Error. Ship placement exceeds board size'
  );

  expect(gameboard.placeShip(shipA, 'horizontal', ['H', 8])).toBe(
    'Error. Ship placement exceeds board size'
  );

  expect(gameboard.placeShip(shipA, 'horizontal', ['G', 7])).toBe(
    'Error. Ship placement exceeds board size'
  );

  expect(gameboard.placeShip(shipA, 'vertical', ['E', 7])).toBe(
    'Error. Ship placement exceeds board size'
  );
});

test('receive attack hit', () => {
  expect(gameboard.receiveAttack(['B', 1])).toBe(3);
  expect(gameboard.receiveAttack(['B', 2])).toBe(2);
  expect(gameboard.receiveAttack(['B', 3])).toBe(1);
  expect(gameboard.receiveAttack(['B', 4])).toBe('Your ship has been sunk!');
  expect(gameboard.receiveAttack(['E', 1])).toBe(1);
  expect(gameboard.receiveAttack(['E', 2])).toBe('Your ship has been sunk!');
});

test('receive attack miss', () => {
  expect(gameboard.receiveAttack(['G', 1])).toBe('Missed!');
  expect(gameboard.receiveAttack(['G', 2])).toBe('Missed!');
  expect(gameboard.receiveAttack(['G', 3])).toBe('Missed!');
  expect(gameboard.receiveAttack(['G', 4])).toBe('Missed!');
  expect(gameboard.receiveAttack(['I', 1])).toBe('Missed!');
  expect(gameboard.receiveAttack(['I', 2])).toBe('Missed!');
});

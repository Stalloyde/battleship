import shipsFactory from '../ships/ship';
import gameboardFactory from './gameboard';
import playerFactory from '../player/player';

const player = playerFactory('Stalloyde');
const playerGameboard = gameboardFactory(player);
const computer = playerFactory();
const computerGameboard = gameboardFactory(computer);

test('place ship vertical', () => {
  const shipA = shipsFactory('carrier', 5);
  expect(playerGameboard.placeShip(shipA, 'vertical', ['A', 1])).toEqual([
    ['A', 1],
    ['A', 2],
    ['A', 3],
    ['A', 4],
    ['A', 5],
  ]);

  expect(playerGameboard.placeShip(shipA, 'vertical', ['C', 2])).toEqual([
    ['C', 2],
    ['C', 3],
    ['C', 4],
    ['C', 5],
    ['C', 6],
  ]);
});

test('place ship horizontal', () => {
  const shipA = shipsFactory('carrier', 5);
  expect(playerGameboard.placeShip(shipA, 'horizontal', ['A', 9])).toEqual([
    ['A', 9],
    ['B', 9],
    ['C', 9],
    ['D', 9],
    ['E', 9],
  ]);

  expect(playerGameboard.placeShip(shipA, 'horizontal', ['F', 1])).toEqual([
    ['F', 1],
    ['G', 1],
    ['H', 1],
    ['I', 1],
    ['J', 1],
  ]);

  expect(playerGameboard.placeShip(shipA, 'horizontal', ['C', 10])).toEqual([
    ['C', 10],
    ['D', 10],
    ['E', 10],
    ['F', 10],
    ['G', 10],
  ]);

  expect(playerGameboard.placeShip(shipA, 'horizontal', ['F', 6])).toEqual([
    ['F', 6],
    ['G', 6],
    ['H', 6],
    ['I', 6],
    ['J', 6],
  ]);
});

test('random computer ship placement', () => {
  const shipA = shipsFactory('carrier', 5);
  expect(computerGameboard.placeShip(shipA).length).toBe(5);
});

test('no placement that exceeds board size', () => {
  const shipA = shipsFactory('carrier', 5);
  expect(playerGameboard.placeShip(shipA, 'horizontal', ['G', 0])).toBe(
    'Error. Ship placement exceeds board size'
  );

  expect(playerGameboard.placeShip(shipA, 'horizontal', ['H', 1])).toBe(
    'Error. Ship placement exceeds board size'
  );

  expect(playerGameboard.placeShip(shipA, 'horizontal', ['H', 8])).toBe(
    'Error. Ship placement exceeds board size'
  );

  expect(playerGameboard.placeShip(shipA, 'horizontal', ['G', 7])).toBe(
    'Error. Ship placement exceeds board size'
  );

  expect(playerGameboard.placeShip(shipA, 'vertical', ['E', 7])).toBe(
    'Error. Ship placement exceeds board size'
  );
});

test('receive attack hit', () => {
  const battleship = shipsFactory('battleship', 4);
  const patrolBoat = shipsFactory('patrolBoat', 2);

  playerGameboard.placeShip(battleship, 'vertical', ['B', 1]);
  playerGameboard.placeShip(patrolBoat, 'vertical', ['E', 1]);

  expect(playerGameboard.receiveAttack(['B', 1])).toBe(`health:${3}`);
  expect(playerGameboard.receiveAttack(['B', 2])).toBe(`health:${2}`);
  expect(playerGameboard.receiveAttack(['B', 3])).toBe(`health:${1}`);
  expect(playerGameboard.receiveAttack(['B', 4])).toBe(true);
  expect(playerGameboard.receiveAttack(['E', 1])).toBe(`health:${1}`);
  expect(playerGameboard.receiveAttack(['E', 2])).toBe(true);
});

test('receive attack miss', () => {
  expect(playerGameboard.receiveAttack(['J', 5])).toBe('Missed!');
  expect(playerGameboard.receiveAttack(['G', 2])).toBe('Missed!');
  expect(playerGameboard.receiveAttack(['G', 3])).toBe('Missed!');
  expect(playerGameboard.receiveAttack(['G', 4])).toBe('Missed!');
  expect(playerGameboard.receiveAttack(['I', 10])).toBe('Missed!');
  expect(playerGameboard.receiveAttack(['I', 9])).toBe('Missed!');
});

test('Create 2D array', () => {
  expect(playerGameboard.create2DArray()).toEqual([
    [
      ['A', 1],
      ['B', 1],
      ['C', 1],
      ['D', 1],
      ['E', 1],
      ['F', 1],
      ['G', 1],
      ['H', 1],
      ['I', 1],
      ['J', 1],
    ],
    [
      ['A', 2],
      ['B', 2],
      ['C', 2],
      ['D', 2],
      ['E', 2],
      ['F', 2],
      ['G', 2],
      ['H', 2],
      ['I', 2],
      ['J', 2],
    ],
    [
      ['A', 3],
      ['B', 3],
      ['C', 3],
      ['D', 3],
      ['E', 3],
      ['F', 3],
      ['G', 3],
      ['H', 3],
      ['I', 3],
      ['J', 3],
    ],
    [
      ['A', 4],
      ['B', 4],
      ['C', 4],
      ['D', 4],
      ['E', 4],
      ['F', 4],
      ['G', 4],
      ['H', 4],
      ['I', 4],
      ['J', 4],
    ],
    [
      ['A', 5],
      ['B', 5],
      ['C', 5],
      ['D', 5],
      ['E', 5],
      ['F', 5],
      ['G', 5],
      ['H', 5],
      ['I', 5],
      ['J', 5],
    ],
    [
      ['A', 6],
      ['B', 6],
      ['C', 6],
      ['D', 6],
      ['E', 6],
      ['F', 6],
      ['G', 6],
      ['H', 6],
      ['I', 6],
      ['J', 6],
    ],
    [
      ['A', 7],
      ['B', 7],
      ['C', 7],
      ['D', 7],
      ['E', 7],
      ['F', 7],
      ['G', 7],
      ['H', 7],
      ['I', 7],
      ['J', 7],
    ],
    [
      ['A', 8],
      ['B', 8],
      ['C', 8],
      ['D', 8],
      ['E', 8],
      ['F', 8],
      ['G', 8],
      ['H', 8],
      ['I', 8],
      ['J', 8],
    ],
    [
      ['A', 9],
      ['B', 9],
      ['C', 9],
      ['D', 9],
      ['E', 9],
      ['F', 9],
      ['G', 9],
      ['H', 9],
      ['I', 9],
      ['J', 9],
    ],
    [
      ['A', 10],
      ['B', 10],
      ['C', 10],
      ['D', 10],
      ['E', 10],
      ['F', 10],
      ['G', 10],
      ['H', 10],
      ['I', 10],
      ['J', 10],
    ],
  ]);
});

test('no overlapping ship placement', () => {
  const shipD = shipsFactory('battleship', 4);
  expect(playerGameboard.placeShip(shipD, 'vertical', ['E', 1])).toEqual([
    ['E', 1],
    ['E', 2],
    ['E', 3],
    ['E', 4],
  ]);

  expect(playerGameboard.placeShip(shipD, 'horizontal', ['E', 2])).toBe(
    'Error. Ship position overlaps another'
  );

  expect(playerGameboard.placeShip(shipD, 'vertical', ['E', 4])).toBe(
    'Error. Ship position overlaps another'
  );

  expect(playerGameboard.placeShip(shipD, 'horizontal', ['C', 1])).toBe(
    'Error. Ship position overlaps another'
  );
});

import shipsFactory from '../ships/ship';
import gameboardFactory from './gameboard';
import playerFactory from '../player/player';

const player = playerFactory('Stalloyde');
const playerGameboard = gameboardFactory(player);
const computer = playerFactory();
const computerGameboard = gameboardFactory(computer);

test('place ship vertical', () => {
  const shipA = shipsFactory(5);
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
  const shipA = shipsFactory(5);
  expect(playerGameboard.placeShip(shipA, 'horizontal', ['A', 9])).toEqual([
    ['A', 9],
    ['B', 9],
    ['C', 9],
    ['D', 9],
    ['E', 9],
  ]);

  expect(playerGameboard.placeShip(shipA, 'horizontal', ['B', 1])).toEqual([
    ['B', 1],
    ['C', 1],
    ['D', 1],
    ['E', 1],
    ['F', 1],
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
  const shipA = shipsFactory(5);
  expect(computerGameboard.placeShip(shipA).length).toBe(5);
});

test('no placement that exceeds board size', () => {
  const shipA = shipsFactory(5);
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
  playerGameboard.placeShip(playerGameboard.allShips.carrier, 'vertical', [
    'A',
    1,
  ]);
  playerGameboard.placeShip(playerGameboard.allShips.battleship, 'vertical', [
    'B',
    1,
  ]);
  playerGameboard.placeShip(playerGameboard.allShips.destroyer, 'vertical', [
    'C',
    1,
  ]);
  playerGameboard.placeShip(playerGameboard.allShips.submarine, 'vertical', [
    'D',
    1,
  ]);
  playerGameboard.placeShip(playerGameboard.allShips.patrolBoat, 'vertical', [
    'E',
    1,
  ]);

  expect(playerGameboard.receiveAttack(['B', 1])).toBe(`health:${3}`);
  expect(playerGameboard.receiveAttack(['B', 2])).toBe(`health:${2}`);
  expect(playerGameboard.receiveAttack(['B', 3])).toBe(`health:${1}`);
  expect(playerGameboard.receiveAttack(['B', 4])).toBe(`isSunk:true`);
  expect(playerGameboard.receiveAttack(['E', 1])).toBe(`health:${1}`);
  expect(playerGameboard.receiveAttack(['E', 2])).toBe(`isSunk:true`);
});

test('receive attack miss', () => {
  expect(playerGameboard.receiveAttack(['G', 1])).toBe('Missed!');
  expect(playerGameboard.receiveAttack(['G', 2])).toBe('Missed!');
  expect(playerGameboard.receiveAttack(['G', 3])).toBe('Missed!');
  expect(playerGameboard.receiveAttack(['G', 4])).toBe('Missed!');
  expect(playerGameboard.receiveAttack(['I', 1])).toBe('Missed!');
  expect(playerGameboard.receiveAttack(['I', 2])).toBe('Missed!');
});

test('Create 2D array', () => {
  expect(playerGameboard.create2DArray()).toEqual([
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
  ]);
});

test('Occupy 2D array', () => {
  const shipA = shipsFactory(5);
  playerGameboard.placeShip(shipA, 'vertical', ['A', 3]);

  expect(playerGameboard.gridsArray).toEqual([
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [['A', 3], [], [], [], [], [], [], [], [], []],
    [['A', 4], [], [], [], [], [], [], [], [], []],
    [['A', 5], [], [], [], [], [], [], [], [], []],
    [['A', 6], [], [], [], [], [], [], [], [], []],
    [['A', 7], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
  ]);

  const shipB = shipsFactory(4);
  playerGameboard.placeShip(shipB, 'vertical', ['G', 6]);
  expect(playerGameboard.gridsArray).toEqual([
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [['A', 3], [], [], [], [], [], [], [], [], []],
    [['A', 4], [], [], [], [], [], [], [], [], []],
    [['A', 5], [], [], [], [], [], [], [], [], []],
    [['A', 6], [], [], [], [], [], ['G', 6], [], [], []],
    [['A', 7], [], [], [], [], [], ['G', 7], [], [], []],
    [[], [], [], [], [], [], ['G', 8], [], [], []],
    [[], [], [], [], [], [], ['G', 9], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
  ]);

  const shipC = shipsFactory(3);
  playerGameboard.placeShip(shipC, 'horizontal', ['C', 3]);
  expect(playerGameboard.gridsArray).toEqual([
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [['A', 3], [], ['C', 3], ['D', 3], ['E', 3], [], [], [], [], []],
    [['A', 4], [], [], [], [], [], [], [], [], []],
    [['A', 5], [], [], [], [], [], [], [], [], []],
    [['A', 6], [], [], [], [], [], ['G', 6], [], [], []],
    [['A', 7], [], [], [], [], [], ['G', 7], [], [], []],
    [[], [], [], [], [], [], ['G', 8], [], [], []],
    [[], [], [], [], [], [], ['G', 9], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
  ]);
});

test('no overlapping ship placement', () => {
  const shipD = shipsFactory(4);
  expect(playerGameboard.placeShip(shipD, 'vertical', ['E', 1])).toBe(
    'Error. Ship position overlaps another'
  );

  expect(playerGameboard.gridsArray).toEqual([
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [['A', 3], [], ['C', 3], ['D', 3], ['E', 3], [], [], [], [], []],
    [['A', 4], [], [], [], [], [], [], [], [], []],
    [['A', 5], [], [], [], [], [], [], [], [], []],
    [['A', 6], [], [], [], [], [], ['G', 6], [], [], []],
    [['A', 7], [], [], [], [], [], ['G', 7], [], [], []],
    [[], [], [], [], [], [], ['G', 8], [], [], []],
    [[], [], [], [], [], [], ['G', 9], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
  ]);
});

import shipsFactory from '../ships/ship';
import gameboardFactory from './gameboard';
import playerFactory from '../player/player';

const player = playerFactory('Stalloyde');
const playerGameboard = gameboardFactory(player);

// test('place ship vertical', () => {
//   const shipA = shipsFactory(5);
//   expect(playerGameboard.placeShip(shipA, 'vertical', ['A', 1])).toEqual([
//     ['A', 1],
//     ['A', 2],
//     ['A', 3],
//     ['A', 4],
//     ['A', 5],
//   ]);

//   expect(playerGameboard.placeShip(shipA, 'vertical', ['A', 2])).toEqual([
//     ['A', 2],
//     ['A', 3],
//     ['A', 4],
//     ['A', 5],
//     ['A', 6],
//   ]);
// });

// test('place ship horizontal', () => {
//   const shipA = shipsFactory(5);
//   expect(playerGameboard.placeShip(shipA, 'horizontal', ['A', 1])).toEqual([
//     ['A', 1],
//     ['B', 1],
//     ['C', 1],
//     ['D', 1],
//     ['E', 1],
//   ]);

//   expect(playerGameboard.placeShip(shipA, 'horizontal', ['B', 1])).toEqual([
//     ['B', 1],
//     ['C', 1],
//     ['D', 1],
//     ['E', 1],
//     ['F', 1],
//   ]);

//   expect(playerGameboard.placeShip(shipA, 'horizontal', ['C', 10])).toEqual([
//     ['C', 10],
//     ['D', 10],
//     ['E', 10],
//     ['F', 10],
//     ['G', 10],
//   ]);

//   expect(playerGameboard.placeShip(shipA, 'horizontal', ['F', 6])).toEqual([
//     ['F', 6],
//     ['G', 6],
//     ['H', 6],
//     ['I', 6],
//     ['J', 6],
//   ]);
// });

// test('no placement that exceeds board size', () => {
//   const shipA = shipsFactory(5);
//   expect(playerGameboard.placeShip(shipA, 'horizontal', ['G', 0])).toBe(
//     'Error. Ship placement exceeds board size'
//   );

//   expect(playerGameboard.placeShip(shipA, 'horizontal', ['H', 1])).toBe(
//     'Error. Ship placement exceeds board size'
//   );

//   expect(playerGameboard.placeShip(shipA, 'horizontal', ['H', 8])).toBe(
//     'Error. Ship placement exceeds board size'
//   );

//   expect(playerGameboard.placeShip(shipA, 'horizontal', ['G', 7])).toBe(
//     'Error. Ship placement exceeds board size'
//   );

//   expect(playerGameboard.placeShip(shipA, 'vertical', ['E', 7])).toBe(
//     'Error. Ship placement exceeds board size'
//   );
// });

// test('receive attack hit', () => {
//   playerGameboard.placeShip(playerGameboard.allShips.carrier, 'vertical', [
//     'A',
//     1,
//   ]);
//   playerGameboard.placeShip(playerGameboard.allShips.battleship, 'vertical', [
//     'B',
//     1,
//   ]);
//   playerGameboard.placeShip(playerGameboard.allShips.destroyer, 'vertical', [
//     'C',
//     1,
//   ]);
//   playerGameboard.placeShip(playerGameboard.allShips.submarine, 'vertical', [
//     'D',
//     1,
//   ]);
//   playerGameboard.placeShip(playerGameboard.allShips.patrolBoat, 'vertical', [
//     'E',
//     1,
//   ]);

//   expect(playerGameboard.receiveAttack(['B', 1])).toBe(3);
//   expect(playerGameboard.receiveAttack(['B', 2])).toBe(2);
//   expect(playerGameboard.receiveAttack(['B', 3])).toBe(1);
//   expect(playerGameboard.receiveAttack(['B', 4])).toBe(
//     'Your ship has been sunk!'
//   );
//   expect(playerGameboard.receiveAttack(['E', 1])).toBe(1);
//   expect(playerGameboard.receiveAttack(['E', 2])).toBe(
//     'Your ship has been sunk!'
//   );
// });

// test('receive attack miss', () => {
//   expect(playerGameboard.receiveAttack(['G', 1])).toBe('Missed!');
//   expect(playerGameboard.receiveAttack(['G', 2])).toBe('Missed!');
//   expect(playerGameboard.receiveAttack(['G', 3])).toBe('Missed!');
//   expect(playerGameboard.receiveAttack(['G', 4])).toBe('Missed!');
//   expect(playerGameboard.receiveAttack(['I', 1])).toBe('Missed!');
//   expect(playerGameboard.receiveAttack(['I', 2])).toBe('Missed!');
// });

// test('Create 2D array', () => {
//   expect(playerGameboard.create2DArray()).toEqual([
//     [[], [], [], [], [], [], [], [], [], []],
//     [[], [], [], [], [], [], [], [], [], []],
//     [[], [], [], [], [], [], [], [], [], []],
//     [[], [], [], [], [], [], [], [], [], []],
//     [[], [], [], [], [], [], [], [], [], []],
//     [[], [], [], [], [], [], [], [], [], []],
//     [[], [], [], [], [], [], [], [], [], []],
//     [[], [], [], [], [], [], [], [], [], []],
//     [[], [], [], [], [], [], [], [], [], []],
//     [[], [], [], [], [], [], [], [], [], []],
//   ]);
// });

// test('Occupy 2D array', () => {
//   const shipA = shipsFactory(5);
//   playerGameboard.placeShip(shipA, 'vertical', ['A', 3]);

//   expect(playerGameboard.gridsArray).toEqual([
//     [[], [], [], [], [], [], [], [], [], []],
//     [[], [], [], [], [], [], [], [], [], []],
//     [['A', 3], [], [], [], [], [], [], [], [], []],
//     [['A', 4], [], [], [], [], [], [], [], [], []],
//     [['A', 5], [], [], [], [], [], [], [], [], []],
//     [['A', 6], [], [], [], [], [], [], [], [], []],
//     [['A', 7], [], [], [], [], [], [], [], [], []],
//     [[], [], [], [], [], [], [], [], [], []],
//     [[], [], [], [], [], [], [], [], [], []],
//     [[], [], [], [], [], [], [], [], [], []],
//   ]);

//   const shipB = shipsFactory(4);
//   playerGameboard.placeShip(shipB, 'vertical', ['G', 6]);
//   expect(playerGameboard.gridsArray).toEqual([
//     [[], [], [], [], [], [], [], [], [], []],
//     [[], [], [], [], [], [], [], [], [], []],
//     [['A', 3], [], [], [], [], [], [], [], [], []],
//     [['A', 4], [], [], [], [], [], [], [], [], []],
//     [['A', 5], [], [], [], [], [], [], [], [], []],
//     [['A', 6], [], [], [], [], [], ['G', 6], [], [], []],
//     [['A', 7], [], [], [], [], [], ['G', 7], [], [], []],
//     [[], [], [], [], [], [], ['G', 8], [], [], []],
//     [[], [], [], [], [], [], ['G', 9], [], [], []],
//     [[], [], [], [], [], [], [], [], [], []],
//   ]);

//   const shipC = shipsFactory(3);
//   playerGameboard.placeShip(shipC, 'horizontal', ['C', 3]);
//   expect(playerGameboard.gridsArray).toEqual([
//     [[], [], [], [], [], [], [], [], [], []],
//     [[], [], [], [], [], [], [], [], [], []],
//     [['A', 3], [], ['C', 3], ['D', 3], ['E', 3], [], [], [], [], []],
//     [['A', 4], [], [], [], [], [], [], [], [], []],
//     [['A', 5], [], [], [], [], [], [], [], [], []],
//     [['A', 6], [], [], [], [], [], ['G', 6], [], [], []],
//     [['A', 7], [], [], [], [], [], ['G', 7], [], [], []],
//     [[], [], [], [], [], [], ['G', 8], [], [], []],
//     [[], [], [], [], [], [], ['G', 9], [], [], []],
//     [[], [], [], [], [], [], [], [], [], []],
//   ]);
// });

test('no overlapping ship placement', () => {
  const shipD = shipsFactory(4);
  playerGameboard.placeShip(shipD, 'vertical', ['H', 1]);

  expect(playerGameboard.gridsArray).toEqual([
    [[], [], [], [], [], [], [], ['H', 1], [], []],
    [[], [], [], [], [], [], [], ['H', 2], [], []],
    [[], [], [], [], [], [], [], ['H', 3], [], []],
    [[], [], [], [], [], [], [], ['H', 4], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
  ]);

  expect(playerGameboard.placeShip(shipD, 'horizontal', ['E', 1])).toBe(
    'Error. Ship position overlaps another'
  );

  expect(playerGameboard.gridsArray).toEqual([
    [[], [], [], [], [], [], [], ['H', 1], [], []],
    [[], [], [], [], [], [], [], ['H', 2], [], []],
    [[], [], [], [], [], [], [], ['H', 3], [], []],
    [[], [], [], [], [], [], [], ['H', 4], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
  ]);

  expect(playerGameboard.placeShip(shipD, 'vertical', ['H', 4])).toEqual(
    'Error. Ship position overlaps another'
  );

  expect(playerGameboard.gridsArray).toEqual([
    [[], [], [], [], [], [], [], ['H', 1], [], []],
    [[], [], [], [], [], [], [], ['H', 2], [], []],
    [[], [], [], [], [], [], [], ['H', 3], [], []],
    [[], [], [], [], [], [], [], ['H', 4], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
  ]);
});

import shipsFactory from '../ships/ship';
import gameboardFactory from './gameboard';

const gameboard = gameboardFactory();

test('place ship', () => {
  const shipA = shipsFactory(5);
  expect(gameboard.placeShip(shipA, shipA.length, 'vertical', [1, 1])).toEqual([
    [1, 1],
    [1, 2],
    [1, 3],
    [1, 4],
    [1, 5],
  ]);

  expect(gameboard.placeShip(shipA, shipA.length, 'vertical', [1, 2])).toEqual([
    [1, 2],
    [1, 3],
    [1, 4],
    [1, 5],
    [1, 6],
  ]);

  expect(
    gameboard.placeShip(shipA, shipA.length, 'horizontal', [1, 1])
  ).toEqual([
    [1, 1],
    [2, 1],
    [3, 1],
    [4, 1],
    [5, 1],
  ]);

  expect(
    gameboard.placeShip(shipA, shipA.length, 'horizontal', [2, 1])
  ).toEqual([
    [2, 1],
    [3, 1],
    [4, 1],
    [5, 1],
    [6, 1],
  ]);

  expect(gameboard.placeShip(shipA, shipA.length, 'horizontal', [7, 0])).toBe(
    'Error. Ship placement exceeds board size'
  );

  expect(gameboard.placeShip(shipA, shipA.length, 'horizontal', [0, 7])).toBe(
    'Error. Ship placement exceeds board size'
  );

  expect(gameboard.placeShip(shipA, shipA.length, 'horizontal', [8, 1])).toBe(
    'Error. Ship placement exceeds board size'
  );

  expect(gameboard.placeShip(shipA, shipA.length, 'horizontal', [1, 8])).toBe(
    'Error. Ship placement exceeds board size'
  );

  expect(gameboard.placeShip(shipA, shipA.length, 'horizontal', [7, 7])).toBe(
    'Error. Ship placement exceeds board size'
  );

  expect(gameboard.placeShip(shipA, shipA.length, 'vertical', [5, 7])).toBe(
    'Error. Ship placement exceeds board size'
  );
});

test('receive attack', () => {
  const shipA = shipsFactory(4);
  gameboard.placeShip(shipA, shipA.length, 'horizontal', [1, 1]);
  expect(gameboard.receiveAttack(shipA, [1, 1])).toBe(3);
  expect(gameboard.receiveAttack(shipA, [1, 5])).toBe('Missed!');
  expect(gameboard.receiveAttack(shipA, [2, 1])).toBe(2);
  expect(gameboard.receiveAttack(shipA, [3, 1])).toBe(1);
  expect(gameboard.receiveAttack(shipA, [4, 1])).toBe(
    'Your ship has been sunk!'
  );

  const shipB = shipsFactory(5);
  gameboard.placeShip(shipB, shipB.length, 'vertical', [3, 2]);
  expect(gameboard.receiveAttack(shipB, [3, 2])).toBe(4);
  expect(gameboard.receiveAttack(shipB, [3, 3])).toBe(3);
  expect(gameboard.receiveAttack(shipB, [3, 4])).toBe(2);
  expect(gameboard.receiveAttack(shipA, [1, 5])).toBe('Missed!');
  expect(gameboard.receiveAttack(shipB, [3, 5])).toBe(1);
  expect(gameboard.receiveAttack(shipB, [3, 6])).toBe(
    'Your ship has been sunk!'
  );
});

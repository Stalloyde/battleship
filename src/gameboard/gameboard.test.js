import shipsFactory from '../ships/ship';
import gameboardFactory from './gameboard';

const gameboard = gameboardFactory();

test('place ship', () => {
  const shipA = shipsFactory(5);
  expect(gameboard.placeShip(shipA, 'vertical', [1, 1])).toEqual([
    [1, 1],
    [1, 2],
    [1, 3],
    [1, 4],
    [1, 5],
  ]);

  expect(gameboard.placeShip(shipA, 'vertical', [1, 2])).toEqual([
    [1, 2],
    [1, 3],
    [1, 4],
    [1, 5],
    [1, 6],
  ]);

  expect(gameboard.placeShip(shipA, 'horizontal', [1, 1])).toEqual([
    [1, 1],
    [2, 1],
    [3, 1],
    [4, 1],
    [5, 1],
  ]);

  expect(gameboard.placeShip(shipA, 'horizontal', [2, 1])).toEqual([
    [2, 1],
    [3, 1],
    [4, 1],
    [5, 1],
    [6, 1],
  ]);

  expect(gameboard.placeShip(shipA, 'horizontal', [7, 0])).toBe(
    'Error. Ship placement exceeds board size'
  );

  expect(gameboard.placeShip(shipA, 'horizontal', [0, 7])).toBe(
    'Error. Ship placement exceeds board size'
  );

  expect(gameboard.placeShip(shipA, 'horizontal', [8, 1])).toBe(
    'Error. Ship placement exceeds board size'
  );

  expect(gameboard.placeShip(shipA, 'horizontal', [1, 8])).toBe(
    'Error. Ship placement exceeds board size'
  );

  expect(gameboard.placeShip(shipA, 'horizontal', [7, 7])).toBe(
    'Error. Ship placement exceeds board size'
  );

  expect(gameboard.placeShip(shipA, 'vertical', [5, 7])).toBe(
    'Error. Ship placement exceeds board size'
  );
});

test('receive attack hit', () => {
  expect(gameboard.receiveAttack([2, 1])).toBe(3);
  expect(gameboard.receiveAttack([2, 2])).toBe(2);
  expect(gameboard.receiveAttack([2, 3])).toBe(1);
  expect(gameboard.receiveAttack([2, 4])).toBe('Your ship has been sunk!');
  expect(gameboard.receiveAttack([5, 1])).toBe(1);
  expect(gameboard.receiveAttack([5, 2])).toBe('Your ship has been sunk!');
});

test('receive attack miss', () => {
  expect(gameboard.receiveAttack([7, 1])).toBe('Missed!');
  expect(gameboard.receiveAttack([7, 2])).toBe('Missed!');
  expect(gameboard.receiveAttack([7, 3])).toBe('Missed!');
  expect(gameboard.receiveAttack([7, 4])).toBe('Missed!');
  expect(gameboard.receiveAttack([9, 1])).toBe('Missed!');
  expect(gameboard.receiveAttack([9, 2])).toBe('Missed!');
});

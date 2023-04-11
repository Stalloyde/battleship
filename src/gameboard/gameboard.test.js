import shipsFactory from '../ships/ship';
import gameboardFactory from './gameboard';

test('create grid', () => {
  expect(gameboardFactory().createGrid()).toEqual([
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
  ]);
});

test('place ship', () => {
  const shipA = shipsFactory(5);
  expect(
    gameboardFactory().placeShip(shipA, shipA.length, 'vertical', [1, 1])
  ).toEqual([
    [1, 1],
    [1, 2],
    [1, 3],
    [1, 4],
    [1, 5],
  ]);

  expect(
    gameboardFactory().placeShip(shipA, shipA.length, 'vertical', [1, 2])
  ).toEqual([
    [1, 2],
    [1, 3],
    [1, 4],
    [1, 5],
    [1, 6],
  ]);

  expect(
    gameboardFactory().placeShip(shipA, shipA.length, 'horizontal', [1, 1])
  ).toEqual([
    [1, 1],
    [2, 1],
    [3, 1],
    [4, 1],
    [5, 1],
  ]);

  expect(
    gameboardFactory().placeShip(shipA, shipA.length, 'horizontal', [2, 1])
  ).toEqual([
    [2, 1],
    [3, 1],
    [4, 1],
    [5, 1],
    [6, 1],
  ]);

  const shipB = shipsFactory(2);
  expect(
    gameboardFactory().placeShip(shipB, shipB.length, 'vertical', [1, 1])
  ).toEqual([
    [1, 1],
    [1, 2],
  ]);

  expect(
    gameboardFactory().placeShip(shipB, shipB.length, 'vertical', [1, 2])
  ).toEqual([
    [1, 2],
    [1, 3],
  ]);

  expect(
    gameboardFactory().placeShip(shipB, shipB.length, 'horizontal', [1, 1])
  ).toEqual([
    [1, 1],
    [2, 1],
  ]);

  expect(
    gameboardFactory().placeShip(shipB, shipB.length, 'horizontal', [2, 1])
  ).toEqual([
    [2, 1],
    [3, 1],
  ]);
});

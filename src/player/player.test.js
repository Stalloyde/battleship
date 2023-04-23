import shipsFactory from '../ships/ship';
import playerFactory from './player';
import gameboardFactory from '../gameboard/gameboard';

const player = playerFactory('Stalloyde');
const computer = playerFactory();
const playerGameboard = gameboardFactory(player);
const computerGameboard = gameboardFactory(computer);

computerGameboard.placeShip(computerGameboard.allShips.carrier, 'vertical', [
  'A',
  1,
]);

computerGameboard.placeShip(computerGameboard.allShips.battleship, 'vertical', [
  'B',
  1,
]);

computerGameboard.placeShip(computerGameboard.allShips.destroyer, 'vertical', [
  'C',
  1,
]);

computerGameboard.placeShip(computerGameboard.allShips.submarine, 'vertical', [
  'D',
  1,
]);

computerGameboard.placeShip(computerGameboard.allShips.patrolBoat, 'vertical', [
  'E',
  1,
]);

test('player attack', () => {
  expect(player.attack(computerGameboard, ['A', 1])).toBe(4);
  expect(player.attack(computerGameboard, ['A', 2])).toBe(3);
  expect(player.attack(computerGameboard, ['A', 1])).toBe(
    'Cannot attack same coordinates twice'
  );
});

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

test('computer attack with random coordinate', () => {
  expect([
    'Missed!',
    4,
    3,
    2,
    1,
    'Cannot attack same coordinates twice',
    'Your ship has been sunk!',
  ]).toContain(computer.attack(playerGameboard));

  expect([
    'Missed!',
    4,
    3,
    2,
    1,
    'Cannot attack same coordinates twice',
    'Your ship has been sunk!',
  ]).toContain(computer.attack(playerGameboard));

  expect([
    'Missed!',
    4,
    3,
    2,
    1,
    'Cannot attack same coordinates twice',
    'Your ship has been sunk!',
  ]).toContain(computer.attack(playerGameboard));

  expect([
    'Missed!',
    4,
    3,
    2,
    1,
    'Cannot attack same coordinates twice',
    'Your ship has been sunk!',
  ]).toContain(computer.attack(playerGameboard));

  expect([
    'Missed!',
    4,
    3,
    2,
    1,
    'Cannot attack same coordinates twice',
    'Your ship has been sunk!',
  ]).toContain(computer.attack(playerGameboard));
});

import shipsFactory from '../ships/ship';
import playerFactory from './player';
import gameboardFactory from '../gameboard/gameboard';

const player = playerFactory('Stalloyde');
const computer = playerFactory();
const playerGameboard = gameboardFactory(player);
const computerGameboard = gameboardFactory(computer);

const carrier = shipsFactory('carrier', 5);
const battleship = shipsFactory('battleship', 4);
const destroyer = shipsFactory('destroyer', 3);
const submarine = shipsFactory('submarine', 3);
const patrolBoat = shipsFactory('patrolBoat', 2);

computerGameboard.placeShip(carrier, 'vertical', ['A', 1]);
computerGameboard.placeShip(battleship, 'vertical', ['B', 1]);
computerGameboard.placeShip(destroyer, 'vertical', ['C', 1]);
computerGameboard.placeShip(submarine, 'vertical', ['D', 1]);
computerGameboard.placeShip(patrolBoat, 'vertical', ['E', 1]);

test('player attack', () => {
  expect(player.attack(computerGameboard, ['A', 1])).toEqual({
    coordinate: ['A', 1],
    result: 'health:4',
  });
  expect(player.attack(computerGameboard, ['A', 2])).toEqual({
    coordinate: ['A', 2],
    result: 'health:3',
  });
  expect(player.attack(computerGameboard, ['A', 1])).toBe(
    'Cannot attack same coordinates twice'
  );
});

playerGameboard.placeShip(carrier, 'vertical', ['A', 1]);
playerGameboard.placeShip(battleship, 'vertical', ['B', 1]);
playerGameboard.placeShip(destroyer, 'vertical', ['C', 1]);
playerGameboard.placeShip(submarine, 'vertical', ['D', 1]);
playerGameboard.placeShip(patrolBoat, 'vertical', ['E', 1]);

test('computer attack with random coordinate', () => {
  expect([
    'Missed!',
    `health:${4}`,
    `health:${3}`,
    `health:${2}`,
    `health:${1}`,
    'Cannot attack same coordinates twice',
    `isSunk:${true}`,
  ]).toContain(computer.attack(playerGameboard).result);

  expect([
    'Missed!',
    `health:${4}`,
    `health:${3}`,
    `health:${2}`,
    `health:${1}`,
    'Cannot attack same coordinates twice',
    `isSunk:${true}`,
  ]).toContain(computer.attack(playerGameboard).result);

  expect([
    'Missed!',
    `health:${4}`,
    `health:${3}`,
    `health:${2}`,
    `health:${1}`,
    'Cannot attack same coordinates twice',
    `isSunk:${true}`,
  ]).toContain(computer.attack(playerGameboard).result);

  expect([
    'Missed!',
    `health:${4}`,
    `health:${3}`,
    `health:${2}`,
    `health:${1}`,
    'Cannot attack same coordinates twice',
    `isSunk:${true}`,
  ]).toContain(computer.attack(playerGameboard).result);

  expect([
    'Missed!',
    `health:${4}`,
    `health:${3}`,
    `health:${2}`,
    `health:${1}`,
    'Cannot attack same coordinates twice',
    `isSunk:${true}`,
  ]).toContain(computer.attack(playerGameboard).result);
});

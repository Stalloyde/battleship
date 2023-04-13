import shipsFactory from '../ships/ship';
import playerFactory from './player';

const player = playerFactory('Stalloyde');
const computer = playerFactory();

test('player attack', () => {
  expect(player.attack([1, 1])).toBe(4);
  expect(player.attack([1, 2])).toBe(3);
  expect(player.attack([1, 1])).toBe('Cannot attack same coordinates twice');
});

test('computer attack with random coordinate', () => {
  expect([
    'Missed!',
    4,
    3,
    2,
    1,
    'Cannot attack same coordinates twice',
    'Your ship has been sunk!',
  ]).toContain(computer.attack());
  expect([
    'Missed!',
    4,
    3,
    2,
    1,
    'Cannot attack same coordinates twice',
    'Your ship has been sunk!',
  ]).toContain(computer.attack());
  expect([
    'Missed!',
    4,
    3,
    2,
    1,
    'Cannot attack same coordinates twice',
    'Your ship has been sunk!',
  ]).toContain(computer.attack());
  expect([
    'Missed!',
    4,
    3,
    2,
    1,
    'Cannot attack same coordinates twice',
    'Your ship has been sunk!',
  ]).toContain(computer.attack());
  expect([
    'Missed!',
    4,
    3,
    2,
    1,
    'Cannot attack same coordinates twice',
    'Your ship has been sunk!',
  ]).toContain(computer.attack());
});

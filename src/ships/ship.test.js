import shipsFactory from './ship';

test('hit & sunk', () => {
  const shipA = shipsFactory(5);
  expect(shipA.hit()).toBe(`health:${4}`);
  expect(shipA.hit()).toBe(`health:${3}`);
  expect(shipA.hit()).toBe(`health:${2}`);
  expect(shipA.hit()).toBe(`health:${1}`);
  expect(shipA.hit()).toBe(`isSunk:${true}`);
});

import shipsFactory from './ship';

test('hit & sunk', () => {
  const shipA = shipsFactory(5);
  expect(shipA.hit()).toBe(4);
  expect(shipA.hit()).toBe(3);
  expect(shipA.hit()).toBe(2);
  expect(shipA.hit()).toBe(1);
  expect(shipA.hit()).toBe('Your ship has been sunk!');
});

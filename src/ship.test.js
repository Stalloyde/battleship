import shipsFactory from './ship';

test('hit', () => {
  expect(shipsFactory(5).hit()).toBe(4);
  expect(shipsFactory(7).hit()).toBe(6);
  expect(shipsFactory(1).hit()).toBe('Your ship has been sunk!');
});

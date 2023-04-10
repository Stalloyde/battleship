function shipsFactory(length) {
  let health = length;

  function hit() {
    health -= 1;
    if (health <= 0) {
      return sunk();
    }
    return health;
  }

  function sunk() {
    return 'Your ship has been sunk!';
  }
  return { length, hit, sunk };
}

export default shipsFactory;

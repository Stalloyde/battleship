function shipsFactory(length) {
  let health = length;

  function sunk() {
    return 'Your ship has been sunk!';
  }

  function hit() {
    health -= 1;
    if (health <= 0) {
      return sunk();
    }
    return health;
  }

  return { length, hit, sunk };
}

export default shipsFactory;

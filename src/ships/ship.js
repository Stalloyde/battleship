function shipsFactory(length) {
  let health = length;
  let isSunk = false;

  function sunk() {
    isSunk = true;
    return isSunk;
  }

  function hit() {
    health -= 1;
    if (health === 0) {
      sunk();
      return `isSunk:${isSunk}`;
    }

    return `health:${health}`;
  }

  return { health, length, hit, sunk, isSunk };
}

export default shipsFactory;

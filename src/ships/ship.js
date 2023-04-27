function shipsFactory(name, length) {
  const shipName = name;
  let health = length;
  let isSunk = false;

  function sunk() {
    isSunk = true;
    return `isSunk:${isSunk}`;
  }

  function hit() {
    health -= 1;

    if (health === 0) {
      return sunk();
    }
    return `health:${health}`;
  }

  return { shipName, health, length, hit, sunk, isSunk };
}

export default shipsFactory;

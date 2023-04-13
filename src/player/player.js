import gameboardFactory from '../gameboard/gameboard';
import shipsFactory from '../ships/ship';

const playerGameboard = gameboardFactory('Stalloyde');
const computerGameboard = gameboardFactory();

function playerFactory(name = 'Computer') {
  function attackActionOnOpponentGameBoard(coordinate, opponentGameboard) {
    const shotAttempts = opponentGameboard.hitShots.concat(
      opponentGameboard.missedShots
    );

    for (let x = 0; x <= shotAttempts.length - 1; x++) {
      if (shotAttempts[x].join() === coordinate.join()) {
        return 'Cannot attack same coordinates twice';
      }
    }
    return opponentGameboard.receiveAttack(coordinate);
  }

  function attack(coordinate) {
    if (name !== 'Computer') {
      return attackActionOnOpponentGameBoard(coordinate, computerGameboard);
    }
    return attackActionOnOpponentGameBoard(coordinate, playerGameboard);
  }

  return { name, attack };
}

export default playerFactory;

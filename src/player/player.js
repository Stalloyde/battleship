import { random } from 'lodash';
import gameboardFactory from '../gameboard/gameboard';
import shipsFactory from '../ships/ship';

function playerFactory(name = 'Computer') {
  function randomCoordinate() {
    const randomArray = [
      Math.floor(Math.random() * (10 - 1) + 1),
      Math.floor(Math.random() * (10 - 1) + 1),
    ];
    return randomArray;
  }

  function attack(opponentGameboard, coordinate = randomCoordinate()) {
    const shotAttempts = opponentGameboard.hitShots.concat(
      opponentGameboard.missedShots
    );

    for (let x = 0; x <= shotAttempts.length - 1; x++) {
      if (shotAttempts[x].join() === coordinate.join()) {
        return 'Cannot attack same coordinates twice';
      }
    }

    if (name !== 'Computer') {
      return opponentGameboard.receiveAttack(coordinate);
    }
    return opponentGameboard.receiveAttack(coordinate);
  }

  return { name, attack };
}

export default playerFactory;

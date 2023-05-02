import { random } from 'lodash';
import gameboardFactory from '../gameboard/gameboard';
import shipsFactory from '../ships/ship';

function playerFactory(name = 'Computer') {
  function randomAttackCoordinate() {
    const randomArray = [
      String.fromCharCode(Math.floor(Math.random() * (10 - 1) + 1) + 64),
      Math.floor(Math.random() * (11 - 1) + 1),
    ];
    return randomArray;
  }

  function attack(opponentGameboard, coordinate = randomAttackCoordinate()) {
    const shotAttempts = opponentGameboard.hitShots.concat(
      opponentGameboard.missedShots
    );

    for (let x = 0; x <= shotAttempts.length - 1; x++) {
      if (shotAttempts[x].join() === coordinate.join()) {
        if (name !== 'Computer') return 'Cannot attack same coordinates twice';
        if (name === ' Computer') return attack(opponentGameboard, coordinate);
      }
    }
    const result = opponentGameboard.receiveAttack(coordinate);
    return { result, coordinate };
  }

  return { name, attack, randomAttackCoordinate };
}

export default playerFactory;

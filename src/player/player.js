import { random } from 'lodash';
import gameboardFactory from '../gameboard/gameboard';
import shipsFactory from '../ships/ship';

const playerGameboard = gameboardFactory('Stalloyde');
const computerGameboard = gameboardFactory('Computer');

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

  function randomCoordinate() {
    const randomArray = [
      Math.floor(Math.random() * (10 - 1) + 1),
      Math.floor(Math.random() * (10 - 1) + 1),
    ];
    return randomArray;
  }

  function attack(coordinate) {
    if (name !== 'Computer') {
      return attackActionOnOpponentGameBoard(coordinate, computerGameboard);
    }
    return attackActionOnOpponentGameBoard(randomCoordinate(), playerGameboard);
  }

  return { name, attack };
}

export default playerFactory;

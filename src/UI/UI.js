import shipsFactory from '../ships/ship';
import gameboardFactory from '../gameboard/gameboard';
import playerFactory from '../player/player';

const player = playerFactory('Stalloyde');
const computer = playerFactory();
export const playerGameboard = gameboardFactory(player);
export const computerGameboard = gameboardFactory(computer);

export function appendShip() {
  playerGameboard.placeShip(playerGameboard.allShips.carrier, 'vertical', [
    `A,1`,
  ]); //A,1...A,2...A,3...A,4...A,5
  const carrierPosition = playerGameboard.allShips.carrier.position;
  const a = document.querySelectorAll(`.${player.name}`);
  console.log(carrierPosition);
  a.forEach((coordinate) => {
    if (coordinate === carrierPosition[0]) {
      console.log(coordinate);
      coordinate.style.backgroundColor = 'black';
    }
  });
}
// playerGameboard.placeShip(
//   playerGameboard.allShips.battleship,
//   'vertical',
//   [`B, 1`]
// ); //B,1...B,2...B,3...B,4...B,5

// playerGameboard.placeShip(
//   playerGameboard.allShips.destroyer,
//   'vertical',
//   [`C, 1`]
// ); //C,1...C,2...C,3

// playerGameboard.placeShip(
//   playerGameboard.allShips.submarine,
//   'vertical',
//   [`D, 1`]
// ); //D,1...D,2...D,3

// playerGameboard.placeShip(
//   playerGameboard.allShips.patrolBoat,
//   'vertical',
//   [`E, 1`]
// ); //E,1...E,2

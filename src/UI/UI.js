import shipsFactory from '../ships/ship';
import gameboardFactory from '../gameboard/gameboard';
import playerFactory from '../player/player';

export const player = playerFactory('Stalloyde');
export const computer = playerFactory();
export const playerGameboard = gameboardFactory(player);
export const computerGameboard = gameboardFactory(computer);

export function appendShip(ship, gameboardToAppendShipTo) {
  const shipPosition = ship;
  const gridNodes = document.querySelectorAll(
    `.${gameboardToAppendShipTo.gameboardOwner}`
  );

  gridNodes.forEach((node) => {
    const coordinate = node.getAttribute('coordinate');
    shipPosition.forEach((position) => {
      if (coordinate === position.join()) {
        node.classList.add('position-placed');
      }
    });
  });
}

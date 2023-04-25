import shipsFactory from '../ships/ship';
import gameboardFactory from '../gameboard/gameboard';
import playerFactory from '../player/player';

const player = playerFactory('Stalloyde');
const computer = playerFactory();
export const playerGameboard = gameboardFactory(player);
export const computerGameboard = gameboardFactory(computer);

export function appendShip(ship, gameboardToAppendShipTo) {
  function getCurrentlyAppendingShipPosition() {
    for (const item in gameboardToAppendShipTo.allShips) {
      const shipPositionString =
        gameboardToAppendShipTo.allShips[item].position.join();
      const toBeAppendedShipPositionString = ship.join();

      if (shipPositionString === toBeAppendedShipPositionString) {
        return gameboardToAppendShipTo.allShips[item].position;
      }
    }
  }

  const shipPosition = getCurrentlyAppendingShipPosition();
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

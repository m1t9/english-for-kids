import CONSTANTS from '../data/constants';

export default function setGameColor(mode) {
  const cards = document.querySelectorAll(`.${CONSTANTS.CARD}`);

  if (mode) {
    cards.forEach((card) => {
      card.classList.add(CONSTANTS.GAME_MODE);
    });
  } else {
    cards.forEach((card) => {
      card.classList.remove(CONSTANTS.GAME_MODE);
    });
  }
}

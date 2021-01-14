import { startGameButton } from '../model/buttons';
import { getNoRepeatTemplate } from '../templates/tableTemplates';
import CONSTANTS from '../data/constants';

const main = document.querySelector(CONSTANTS.MAINDIV);
const buttonsPannel = document.querySelector(`.${CONSTANTS.BUTTONS_PANNEL}`);

let firstAdd = false;

export function underline(category) {
  const currenntCategory = document.querySelector(`.${CONSTANTS.UNDERLINE}`);
  const newCategory = document.querySelector(`[data-category="${category}"`);

  if (category !== CONSTANTS.REPEAT) {
    currenntCategory.classList.remove(CONSTANTS.UNDERLINE);
    newCategory.classList.add(CONSTANTS.UNDERLINE);
  }
}

export function setPannel(pannel, board, category) {
  const cardsPannel = pannel;

  const addCondition = (board.currentCategory === CONSTANTS.REPEAT
    && board.repeatWords.length !== 0);

  const addButtonsPannel = board.currenntCategory !== CONSTANTS.MAINBOARD
    && board.gameMode && board.currentCategory !== CONSTANTS.REPEAT;

  const noRepeat = board.currentCategory === CONSTANTS.REPEAT
    && board.repeatWords.length === 0;

  let localCategory;

  if (!category) {
    localCategory = board.currentCategory;
  } else {
    localCategory = category;
  }

  cardsPannel.innerHTML = '';

  if (addButtonsPannel) {
    buttonsPannel.append(startGameButton);
  } else if (addCondition && board.gameMode) {
    buttonsPannel.append(startGameButton);
  } else if (noRepeat) {
    cardsPannel.innerHTML = getNoRepeatTemplate();
  }

  board.initGameCards(localCategory);

  board.gameCards.forEach((newCard) => {
    cardsPannel.append(newCard);
  });

  main.append(cardsPannel);
  underline(localCategory);
}

export function setMainPannel(pannel, board) {
  const cardsPannel = pannel;

  cardsPannel.innerHTML = '';

  if (!firstAdd) {
    board.menuCards.forEach((card) => {
      card.addEventListener('click', () => {
        setPannel(cardsPannel, board, card.getAttribute(CONSTANTS.DATA_CARD));
      });
      cardsPannel.append(card);
    });
  }

  board.menuCards.forEach((card) => {
    if (board.gameMode) {
      card.classList.add(CONSTANTS.GAME_MODE);
    }

    cardsPannel.append(card);
  });

  firstAdd = true;
  underline(CONSTANTS.MAINBOARD);
  startGameButton.remove();
}

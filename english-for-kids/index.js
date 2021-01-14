import MainBoard from './model/MainBoard';
import CONSTANTS from './data/constants';
import createTable from './model/table';
import removeAfterGameContent from './utils/removeAfterGameContent';
import setGameColor from './utils/setGameColor';
import { createElementWrap } from './utils/wrappers';
import { setMainPannel, setPannel } from './controller/updatePanel';
import { startGameButton } from './model/buttons';
import { initGame } from './controller/game';
import './css/styles.scss';

const board = new MainBoard();
const main = document.querySelector(CONSTANTS.MAINDIV);
const buttonsPannel = document.querySelector(`.${CONSTANTS.BUTTONS_PANNEL}`);
const cardsPannel = createElementWrap(CONSTANTS.DIV, CONSTANTS.CARDS_PANNEL);
const gameButton = document.querySelector('#switch_btn');
const menuButton = document.querySelectorAll('.menu__item');
const burger = document.getElementById('menu__toggle');

main.append(cardsPannel);
setMainPannel(cardsPannel, board);

menuButton.forEach((item) => {
  item.addEventListener('click', () => {
    const category = item.getAttribute(CONSTANTS.DATA_CATEGORY);

    const repeatHead = document.querySelector(`.${CONSTANTS.REPEAT_HEAD}`);

    if (repeatHead) {
      repeatHead.remove();
    }

    if (category === CONSTANTS.MAINBOARD) {
      board.currentCategory = category;
      removeAfterGameContent();
      setMainPannel(cardsPannel, board);
      main.append(cardsPannel);
      setGameColor(board.gameMode);

      burger.checked = false;
    } else if (category === CONSTANTS.STATISTICS_CATEGORY) {
      createTable(board);
      document.querySelector(`#${CONSTANTS.OVERLAY}`).classList.add(CONSTANTS.SHOW_OVERLAY);

      burger.checked = false;
    } else {
      removeAfterGameContent();
      board.currentCategory = category;
      setPannel(cardsPannel, board);
      burger.checked = false;
    }
  });
});

document.getElementById(CONSTANTS.OVERLAY).addEventListener('click', () => {
  burger.checked = false;
});

startGameButton.addEventListener('click', () => {
  setPannel(cardsPannel, board);
  initGame(cardsPannel, board);
  startGameButton.remove();
});

gameButton.addEventListener('click', () => {
  board.gameMode = !board.gameMode;

  if (board.gameMode) {
    const addButtonRepeat = (board.currentCategory === CONSTANTS.REPEAT
      && board.repeatWords.length !== 0);
    const addButton = board.currentCategory !== CONSTANTS.MAINBOARD
      && board.currentCategory !== CONSTANTS.REPEAT;

    setGameColor(true);

    if (addButton || addButtonRepeat) {
      buttonsPannel.append(startGameButton);
    }
  } else {
    startGameButton.remove();
    removeAfterGameContent();
    setGameColor(false);
  }

  if (board.currentCategory !== CONSTANTS.MAINBOARD) {
    setPannel(cardsPannel, board);
  }
});

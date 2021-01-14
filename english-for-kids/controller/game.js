import { repeatButton } from '../model/buttons';
import cardsData from '../data/cards';
import { createElementWrap } from '../utils/wrappers';
import { setMainPannel } from './updatePanel';
import {
  getLoseResultTemplate,
  getWinResultTemplate,
  getCorrectStarTemplate,
  getWrongStarTemplate,
} from '../templates/gameTemplates';
import CONSTANTS from '../data/constants';
import VOLUME from '../data/volume';

const main = document.querySelector('main');
const correctSound = new Audio('./assets/audio/click2.mp3');
const wrongSound = new Audio('./assets/audio/wrong2.mp3');
const winSound = new Audio('./assets/audio/success.mp3');
const loseSound = new Audio('./assets/audio/failure8bit2.mp3');
const starWin = document.createElement('img');
const starsContainer = createElementWrap(
  CONSTANTS.DIV,
  CONSTANTS.STARS_CONTAINER,
);
const mainTimeStep = 500;
const finishTimeStep = 4000;
const playSoundTimeStep = 750;

let currentBoard;
let currentPannel;
let questions = [];
let step = 0;
let answers = [];
let statistics = '';

starWin.className = CONSTANTS.STAR_WIN;
correctSound.volume = VOLUME.CORRECT_VOLUME;
wrongSound.volume = VOLUME.WRONG_VOLUME;
winSound.volume = VOLUME.WIN_VOLUME;
loseSound.volume = VOLUME.LOSE_VOLUME;

function saveStat(clickedWord, correct) {
  statistics.forEach((item) => {
    if (item.word === clickedWord) {
      const localItem = item;
      if (correct) {
        localItem.right += 1;
      } else {
        localItem.wrong += 1;
      }
    }
  });
  localStorage.setItem(CONSTANTS.STATISTICS_OBJ, JSON.stringify(statistics));
}

function removeList() {
  const cards = document.querySelectorAll(`.${CONSTANTS.FRONT}`);

  setTimeout(
    () => {
      cards.forEach((card) => {
        const newEl = card.cloneNode(true);
        card.parentNode.replaceChild(newEl, card);
      });
    }, mainTimeStep,
  );
}

function checkWin() {
  let result;

  if (step === questions.length) {
    if (answers.includes(false)) {
      const errorsCount = answers.filter((item) => !item).length;
      result = getLoseResultTemplate(errorsCount);

      setTimeout(
        () => {
          loseSound.play();
        }, mainTimeStep,
      );
    } else {
      result = getWinResultTemplate();
      setTimeout(
        () => {
          winSound.play();
        }, mainTimeStep,
      );

      step = 0;
    }

    const finishOverlay = createElementWrap(
      CONSTANTS.DIV,
      CONSTANTS.FINISH_OVERLAY,
      `${result}`,
    );

    step = 0;
    answers = [];
    removeList();
    starsContainer.remove();

    main.append(finishOverlay);

    setTimeout(
      () => {
        const cards = document.querySelectorAll(`.${CONSTANTS.CARD}`);

        finishOverlay.remove();
        currentBoard.currentCategory = CONSTANTS.MAINBOARD;
        currentBoard.gameMode = true;
        setMainPannel(currentPannel, currentBoard);

        cards.forEach((card) => {
          card.classList.add(CONSTANTS.GAME_MODE);
        });

        main.append(currentPannel);
      }, finishTimeStep,
    );

    repeatButton.remove();

    const repeatHead = document.querySelector(`.${CONSTANTS.REPEAT_HEAD}`);
    if (repeatHead) {
      repeatHead.remove();
    }

    return true;
  }

  return false;
}

function playSound() {
  const audio = new Audio(`${CONSTANTS.SOUND_DIR}${questions[step]}.mp3`);
  audio.volume = 0.3;

  setTimeout(
    () => {
      audio.play();
    }, playSoundTimeStep,
  );
}

export function checkAnswer(answ) {
  if (answ === questions[step]) {
    saveStat(answ, true);
    correctSound.play();
    step += 1;
    answers.push(true);

    if (checkWin()) {
      return true;
    }

    playSound();
    starsContainer.innerHTML += getCorrectStarTemplate();

    if (starsContainer.childNodes.length > 7) {
      starsContainer.removeChild(starsContainer.firstChild);
    }

    return true;
  }

  saveStat(questions[step], false);
  wrongSound.play();
  answers.push(false);
  playSound();
  starsContainer.innerHTML += getWrongStarTemplate();

  if (starsContainer.childNodes.length > 7) {
    starsContainer.removeChild(starsContainer.firstChild);
  }

  return false;
}

function game() {
  const cards = document.querySelectorAll(`.${CONSTANTS.FRONT}`);
  playSound();

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      const currentCard = card;

      if (checkAnswer(card.getAttribute(CONSTANTS.DATA_CARD))) {
        currentCard.parentNode.classList.add(CONSTANTS.INACTIVE_LINK);
      }
    });
  });
}

function shuffle(initArray) {
  const array = initArray;
  let currentIndex = array.length;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

export function initGame(cardsPannel, board) {
  const ifRepeat = board.currentCategory === CONSTANTS.REPEAT;
  repeatButton.remove();
  main.append(repeatButton);
  main.append(starsContainer);

  statistics = JSON.parse(localStorage.getItem(CONSTANTS.STATISTICS_OBJ));
  repeatButton.addEventListener('click', playSound);

  currentPannel = cardsPannel;
  starsContainer.innerHTML = '';
  questions = [];
  currentBoard = board;

  if (ifRepeat) {
    board.repeatWords.forEach((item) => {
      questions.push(item.word);
    });
  } else {
    cardsData[board.currentCategory].forEach((item) => {
      questions.push(item.word);
    });
  }

  questions = shuffle(questions);

  step = 0;
  answers = [];

  game();
}

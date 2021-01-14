import { createElementWrap } from '../utils/wrappers';
import cards from '../data/cards';
import data from '../data/statisticsData';
import removeAfterGameContent from '../utils/removeAfterGameContent';
import { getNoRepeatTemplate, getRepeatHeader } from '../templates/tableTemplates';
import CONSTANTS from '../data/constants';
import createTableHead from '../utils/createTableHead';
import {
  startGameButton,
  resetStatisticsButton,
  repeatHardButton,
} from './buttons';
import { hardWordsCompare, calcPercent } from '../utils/tableUtils';

const table = createElementWrap(CONSTANTS.TABLE, CONSTANTS.STATISTICS_OBJ);
const tbody = createElementWrap(CONSTANTS.TBODY);
const tableOverlay = createElementWrap(CONSTANTS.DIV, CONSTANTS.TABLE_OVERLAY);
const thead = createElementWrap(CONSTANTS.THEAD);
const trHead = createElementWrap(CONSTANTS.TR);
const main = document.querySelector(CONSTANTS.MAINDIV);
const btnStatDiv = createElementWrap(CONSTANTS.DIV, CONSTANTS.STAT_DIV);
const overlay = document.querySelector(`#${CONSTANTS.OVERLAY}`);
const body = document.querySelector(CONSTANTS.BODY);

// Init values
let compareAttr = CONSTANTS.CATEGORY;
let lastHeader = CONSTANTS.CATEGORY;
let currentHeader = CONSTANTS.CATEGORY;

let inverse = true;
let currentBoard;

btnStatDiv.append(resetStatisticsButton);
btnStatDiv.append(repeatHardButton);
tableOverlay.append(btnStatDiv);

function comparator(a, b) {
  const itemA = a[compareAttr];
  const itemB = b[compareAttr];

  let comparsion = 0;

  if ((inverse && itemA > itemB) || (!inverse && itemA < itemB)) {
    comparsion = 1;
  } else if ((inverse && itemA < itemB) || (!inverse && itemA > itemB)) {
    comparsion = -1;
  }

  return comparsion;
}

function createTableBody(stat) {
  let statistics;

  if (!stat) {
    statistics = JSON.parse(localStorage.getItem(CONSTANTS.STATISTICS_OBJ));
  } else {
    statistics = stat;
  }

  statistics.sort(comparator).forEach((item) => {
    const tr = createElementWrap(CONSTANTS.TR, CONSTANTS.TABLE_ROW);

    Object.keys(item).forEach((key) => {
      if (key === CONSTANTS.CORRECT_PER) {
        item[key] = calcPercent(item.wrong, item.right);
      }
      tr.append(createElementWrap(CONSTANTS.TD, null, item[key].toString()));
    });

    localStorage.setItem(CONSTANTS.STATISTICS_OBJ, JSON.stringify(statistics));
    tbody.append(tr);
  });

  table.append(tbody);
  tableOverlay.append(table);
  body.append(tableOverlay);
}

resetStatisticsButton.addEventListener('click', () => {
  localStorage.setItem(CONSTANTS.STATISTICS_OBJ, JSON.stringify(data));
  tbody.innerHTML = '';
  createTableBody();
});

export function sortTable(value) {
  const statistics = JSON.parse(localStorage.getItem(CONSTANTS.STATISTICS_OBJ));

  compareAttr = value;
  return statistics.sort(comparator);
}

repeatHardButton.addEventListener('click', () => {
  const currenntCategory = document.querySelector(`.${CONSTANTS.UNDERLINE}`);
  const patsCompareAttr = compareAttr;
  const statistics = JSON.parse(localStorage.getItem(CONSTANTS.STATISTICS_OBJ));
  const hardWords = statistics.filter((item) => +(item.wrong) > 0).sort(hardWordsCompare);
  const cardsPannel = document.querySelector(`.${CONSTANTS.CARDS_PANNEL}`);

  let hardCards = [];

  currenntCategory.classList.remove(CONSTANTS.UNDERLINE);
  document.querySelector(`[data-category="${CONSTANTS.STATISTICS_CATEGORY}"`).classList.add(CONSTANTS.UNDERLINE);
  removeAfterGameContent();
  compareAttr = 'wrong';
  inverse = !inverse;

  hardWords.forEach((item) => {
    Object.keys(cards).forEach((key) => {
      cards[key].forEach((card) => {
        if (item.word === card.word) {
          hardCards.push(card);
        }
      });
    });
  });

  hardCards = hardCards.slice(0, 8);

  cardsPannel.innerHTML = '';
  currentBoard.setRepeatWords(hardCards);
  currentBoard.initGameCards(CONSTANTS.REPEAT);

  currentBoard.gameCards.forEach((newCard) => {
    cardsPannel.append(newCard);
  });

  main.append(createElementWrap(CONSTANTS.DIV, CONSTANTS.REPEAT_HEAD_CLASS, getRepeatHeader()));
  main.append(cardsPannel);

  if (hardCards.length === 0) {
    cardsPannel.innerHTML = getNoRepeatTemplate();
  }

  tableOverlay.remove();
  thead.innerHTML = '';
  trHead.innerHTML = '';
  tbody.innerHTML = '';
  overlay.classList.remove(CONSTANTS.SHOW_OVERLAY);

  if (currentBoard.gameMode && hardCards.length !== 0) {
    document.querySelector(`.${CONSTANTS.BUTTONS_PANNEL}`).append(startGameButton);
  } else {
    startGameButton.remove();
  }

  inverse = !inverse;
  compareAttr = patsCompareAttr;
});

export default function createTable(board) {
  currentBoard = board;

  createTableBody();
  createTableHead(trHead);

  thead.append(trHead);
  table.append(thead);

  document.querySelectorAll(`.${CONSTANTS.TABLE_HEAD}`).forEach((item) => {
    item.setAttribute(`data-${CONSTANTS.ACTIVE}`, false);
  });

  document.querySelector(`[data-${CONSTANTS.TABLE_HEAD}="${lastHeader}"]`).dataset.active = true;

  if (inverse) {
    document.querySelector(`[data-${CONSTANTS.TABLE_HEAD}="${lastHeader}"]`).dataset.operation = CONSTANTS.ASC;
  } else {
    document.querySelector(`[data-${CONSTANTS.TABLE_HEAD}="${lastHeader}"]`).dataset.operation = CONSTANTS.DESC;
  }

  const tr = document.querySelectorAll(CONSTANTS.TH);

  tr.forEach((item) => {
    item.addEventListener('click', () => {
      inverse = !inverse;

      currentHeader = item.getAttribute(`data-${CONSTANTS.TABLE_HEAD}`);
      tbody.innerHTML = '';

      if (currentHeader !== lastHeader) {
        inverse = true;
        document.querySelector(`[data-${CONSTANTS.ACTIVE}="true"]`).dataset.active = false;
      }

      if (inverse) {
        item.setAttribute(`data-${CONSTANTS.OPERATION}`, CONSTANTS.ASC);
      } else {
        item.setAttribute(`data-${CONSTANTS.OPERATION}`, CONSTANTS.DESC);
      }

      item.dataset.active = true;
      lastHeader = item.getAttribute(`data-${CONSTANTS.TABLE_HEAD}`);
      createTableBody(sortTable(item.getAttribute(`data-${CONSTANTS.TABLE_HEAD}`)));
    });
  });
}

overlay.addEventListener('click', () => {
  tableOverlay.remove();
  thead.innerHTML = '';
  trHead.innerHTML = '';
  tbody.innerHTML = '';
  overlay.classList.remove(CONSTANTS.SHOW_OVERLAY);
});

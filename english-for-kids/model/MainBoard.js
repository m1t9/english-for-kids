import categories from '../data/categories';
import cards from '../data/cards';
import data from '../data/statisticsData';
import { createCardWrap, createElementWrap } from '../utils/wrappers';
import CONSTANTS from '../data/constants';
import VOLUME from '../data/volume';

export default class MainBoard {
  constructor() {
    this.menuCards = [];
    this.gameCards = [];
    this.initMenuCards();
    this.gameMode = false;
    this.currentCategory = CONSTANTS.MAINBOARD;
    this.initStatistics();
    this.repeatWords = [];
  }

  initStatistics() {
    this.statistics = localStorage.getItem(CONSTANTS.STATISTICS_OBJ);

    if (!this.statistics) {
      this.statistics = data;
      localStorage.setItem(
        CONSTANTS.STATISTICS_OBJ,
        JSON.stringify(this.statistics),
      );
    } else {
      this.statistics = JSON.parse(this.statistics);
    }
  }

  initMenuCards() {
    this.menuCards = [];
    this.currentCategory = CONSTANTS.MAINBOARD;

    categories.forEach((category) => {
      const card = createCardWrap(
        category.image,
        category.categoryName,
        null,
        false,
      );

      this.menuCards.push(card);
    });
  }

  initGameCards(category) {
    const leaveTime = 100;

    let pos = 1;
    let currentCards;

    this.gameCards = [];
    this.currentCategory = category;

    if (category === CONSTANTS.REPEAT) {
      currentCards = this.repeatWords;
    } else {
      currentCards = cards[category];
    }

    currentCards.forEach((picBlock) => {
      const card = createElementWrap(
        CONSTANTS.DIV,
        CONSTANTS.CARD,
      );

      const cardFront = createCardWrap(
        picBlock.image,
        picBlock.word,
        pos,
        this.gameMode,
      );

      cardFront.className = CONSTANTS.FRONT;

      const cardBack = createCardWrap(
        picBlock.image,
        picBlock.translation,
        pos,
      );

      cardBack.className = CONSTANTS.BACK;

      const arrow = createElementWrap(
        CONSTANTS.DIV,
        CONSTANTS.ARROW_FLIP,
      );

      if (!this.gameMode) {
        cardFront.append(arrow);
      }

      card.append(cardFront, cardBack);

      if (!this.gameMode) {
        cardFront.addEventListener('click', (e) => {
          if (e.target.className === CONSTANTS.ARROW_FLIP) {
            card.classList.toggle(CONSTANTS.FLIPPED);
          } else {
            const audio = new Audio(`${CONSTANTS.SOUND_DIR}${cardFront.getAttribute(CONSTANTS.DATA_CARD)}.mp3`);
            audio.volume = VOLUME.CLICK_VOLUME;
            audio.play();
          }

          this.saveWatch(cardFront.getAttribute(CONSTANTS.DATA_CARD), category);
        });

        card.addEventListener('mouseleave', () => {
          setTimeout(
            () => {
              card.classList.remove(CONSTANTS.FLIPPED);
            }, leaveTime,
          );
        });
      }

      this.gameCards.push(card);
      pos += 1;
    });
  }

  setCategory(category) {
    this.currentCategory = category;
  }

  setRepeatWords(hardCards) {
    this.repeatWords = hardCards;
  }

  saveWatch(clickedWord) {
    this.statistics = localStorage.getItem(CONSTANTS.STATISTICS_OBJ);
    this.statistics = JSON.parse(this.statistics);

    this.statistics.forEach((item) => {
      if (item.word === clickedWord) {
        const localItem = item;
        localItem.watch += 1;
      }
    });

    localStorage.setItem(
      CONSTANTS.STATISTICS_OBJ,
      JSON.stringify(this.statistics),
    );
  }
}

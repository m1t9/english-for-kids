import { createElementWrap } from '../utils/wrappers';
import CONSTANTS from '../data/constants';

const startGameButton = createElementWrap(
  CONSTANTS.DIV,
  CONSTANTS.START_GAME_CLASS,
  'Start new game',
);

const repeatButton = createElementWrap(
  CONSTANTS.DIV,
  CONSTANTS.REPEAT_WORD_CLASS,
  'Repeat word',
);

const updateButton = createElementWrap(
  CONSTANTS.DIV,
  CONSTANTS.UPDATE_CLASS,
  'main',
);

const resetStatisticsButton = createElementWrap(
  CONSTANTS.DIV,
  CONSTANTS.RESET_CLASS,
  'RESET',
);

const repeatHardButton = createElementWrap(
  CONSTANTS.DIV,
  CONSTANTS.REPEAT_HARD_CLASS,
  'REPEAT HARD',
);

export {
  startGameButton,
  repeatButton,
  updateButton,
  resetStatisticsButton,
  repeatHardButton,
};

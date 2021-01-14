import { createElementWrap } from './wrappers';
import CONSTANTS from '../data/constants';

export default function createTableHead(trHead) {
  trHead.append(createElementWrap(CONSTANTS.TH, CONSTANTS.TABLE_HEAD, 'Categories ', 'category'));
  trHead.append(createElementWrap(CONSTANTS.TH, CONSTANTS.TABLE_HEAD, 'Words ', 'word'));
  trHead.append(createElementWrap(CONSTANTS.TH, CONSTANTS.TABLE_HEAD, 'Translation ', 'translation'));
  trHead.append(createElementWrap(CONSTANTS.TH, CONSTANTS.TABLE_HEAD, 'Watched ', 'watch'));
  trHead.append(createElementWrap(CONSTANTS.TH, CONSTANTS.TABLE_HEAD, 'Correct ', 'right'));
  trHead.append(createElementWrap(CONSTANTS.TH, CONSTANTS.TABLE_HEAD, 'Wrong ', 'wrong'));
  trHead.append(createElementWrap(CONSTANTS.TH, CONSTANTS.TABLE_HEAD, '% ', 'correctPer'));
}

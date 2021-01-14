import CONSTANTS from '../data/constants';
import {
  cardFrontGameOn,
  cardFrontGameOff,
  cardBackGameOn,
  cardBackGameOff,
} from '../templates/wrapperTemplates';

export function createElementWrap(elementName, className, innerText, attribute, classList) {
  const element = document.createElement(elementName);

  if (className) {
    element.className = className;
  }

  if (innerText) {
    element.innerHTML = innerText;
  }

  if (attribute) {
    element.setAttribute(`data-${className}`, attribute);
  }

  if (classList) {
    element.classList.add(classList);
  }

  return element;
}

export function createCardWrap(image, text, position, gameMode) {
  const card = createElementWrap(
    CONSTANTS.DIV,
    CONSTANTS.CARD,
    gameMode ? cardFrontGameOn(image) : cardFrontGameOff(image),
    `${text}`,
  );
  card.append(createElementWrap(
    'p',
    gameMode ? cardBackGameOn(position) : cardBackGameOff(position),
    text,
  ));

  return card;
}

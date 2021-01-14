export function getLoseResultTemplate(errorsCount) {
  return `Sorry :(<br>${errorsCount} ${errorsCount === 1 ? 'error' : 'errors'} <img src="./assets/icons/sad.gif">`;
}

export function getWinResultTemplate() {
  return 'Сorrectly! :) <img src="./assets/icons/giphy.gif">';
}

export function getCorrectStarTemplate() {
  return '<img src="./assets/icons/pixel-star-win.png">';
}

export function getWrongStarTemplate() {
  return '<img src="./assets/icons/pixel-star-lose.png">';
}

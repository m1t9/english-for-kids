export function cardFrontGameOn(image) {
  return `<img src="${image}" class="card_image_game">`;
}

export function cardFrontGameOff(image) {
  return `<img src="${image}" class="card_image">`;
}

export function cardBackGameOn(position) {
  return `card-title-${position} hidden`;
}

export function cardBackGameOff(position) {
  return `card-title-${position}`;
}

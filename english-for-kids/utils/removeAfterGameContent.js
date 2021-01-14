import { repeatButton } from '../model/buttons';
import CONSTANTS from '../data/constants';

export default function removeAfterGameContent() {
  const starsContainer = document.querySelector(`.${CONSTANTS.STARS_CONTAINER}`);

  if (starsContainer) {
    starsContainer.remove();
  }

  repeatButton.remove();
}

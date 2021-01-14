export function hardWordsCompare(a, b) {
  const itemA = a.wrong;
  const itemB = b.wrong;

  let comparsion = 0;

  if (itemA < itemB) {
    comparsion = 1;
  } else if (itemA > itemB) {
    comparsion = -1;
  }

  return comparsion;
}

export function calcPercent(wrong, correct) {
  let persentRight;

  if (correct === 0) {
    persentRight = 0;
  } else {
    persentRight = (correct / (correct + wrong)) * 100;
  }

  return persentRight.toFixed(1);
}

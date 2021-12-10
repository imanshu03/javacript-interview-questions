// find unique path with obstacles

const array = [
  [0, 0, 0, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 1],
];

function getUniquePath(array, startX, startY, endX, endY) {
  let result = 0;

  if (array[startX][startY] === 1) return 0;

  if (startX === endX && startY === endY) return 1;

  if (startX < endX) {
    result += getUniquePath(array, startX + 1, startY, endX, endY);
  }

  if (startY < endY) {
    result += getUniquePath(array, startX, startY + 1, endX, endY);
  }

  return result;
}

console.log(getUniquePath(array, 0, 0, 2, 2));

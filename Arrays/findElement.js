function findElement(array, key) {
  let maxCol = array[0].length;
  let maxRow = array.length;

  if (key < array[0][0] && key > array[maxRow - 1][maxCol - 1]) return [-1, -1];

  let i = 0,
    j = maxCol - 1;

  while (i < maxRow && j >= 0) {
    if (array[i][j] === key) {
      return [i, j];
    }

    if (array[i][j] > key) j -= 1;

    if (array[i][j] < key) i += 1;
  }

  return [-1, -1];
}

const res = findElement(
  [
    [10, 20, 30, 40],
    [15, 25, 35, 45],
    [24, 29, 37, 48],
    [32, 33, 39, 50],
  ],
  29
);
console.log(res);

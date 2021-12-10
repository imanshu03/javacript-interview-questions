function sortArray(arr) {
  let i = -1,
    temp;

  for (let idx = 0; idx < arr.length; idx++) {
    if (arr[idx] === 0) {
      i += 1;
      temp = arr[idx];
      arr[idx] = arr[i];
      arr[i] = temp;
    }
  }

  return arr;
}

function sort2Array(arr) {
  let i = -1,
    temp;

  for (let idx = 0; idx < arr.length; idx++) {
    if (arr[idx] === 0) {
      i += 1;
      temp = arr[idx];
      arr[idx] = arr[i];
      arr[i] = temp;
    }
  }

  for (let idx = i + 1; idx < arr.length; idx++) {
    if (arr[idx] === 1) {
      i += 1;
      temp = arr[idx];
      arr[idx] = arr[i];
      arr[i] = temp;
    }
  }

  return arr;
}

console.log(sortArray([0, 1, 1, 0, 0, 1]));

console.log(sort2Array([0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]));

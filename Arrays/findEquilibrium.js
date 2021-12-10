function findEquilibrum(list) {
  let leftSum = 0;
  let rightSum = 0;
  let totalSum = list.reduce((res, e) => (res += e), 0);

  for (let i = 1; i < list.length - 1; i++) {
    leftSum += list[i - 1];
    rightSum = totalSum - leftSum - list[i];
    if (leftSum === rightSum) return i;
  }

  return -1;
}

console.log(findEquilibrum([-7, 1, 5, 2, -4, 3, 0]));

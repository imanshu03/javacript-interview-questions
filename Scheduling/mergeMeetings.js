const input1 = [
  [9, 10],
  [1, 3],
  [6, 8],
  [2, 4]
];

const input2 = [
  [6, 8],
  [1, 9],
  [2, 4],
  [4, 7]
];

function mergeMeetings(arr) {
  if (arr.length <= 1) return [-1, -1];
  const sortedSlots = [...arr.sort((a, b) => a[0] - b[0])];
  const result = [];
  let prevSlot = sortedSlots[0];
  for (let slot of sortedSlots.splice(1)) {
    if (prevSlot[1] >= slot[0]) {
      prevSlot = [prevSlot[0], Math.max(prevSlot[1], slot[1])];
    } else {
      result.push(prevSlot);
      prevSlot = slot;
    }
  }
  result.push(prevSlot);
  console.log("merged slots---", result);
}

mergeMeetings(input2);

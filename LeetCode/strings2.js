const findDistance = (s, key) => {
  let string = [];
  let idx = [];

  for (let i in s) {
    if (s[i] === key) {
      idx.push(i);
    }
    string.push(s[i]);
  }

  console.log(idx);

  if (idx.length === 0 || string.length === 0) return [];

  let ptr1 = 0,
    ptr2 = 0;

  return string.map((char, i) => {
    if (char === key) {
      ptr1 = ptr2;
      if (ptr2 < idx.length - 1) ptr2 += 1;
      return 0;
    }
    if (ptr1 === ptr2) {
      return Math.abs(idx[ptr1] - i);
    } else {
      const dist1 = Math.abs(idx[ptr1] - i);
      const dist2 = Math.abs(idx[ptr2] - i);
      return dist1 <= dist2 ? dist1 : dist2;
    }
  });
};

function findDistance2(string, key) {
  let arr = [...string];

  let i = arr.indexOf(key);
  let j = i;

  return arr.map((char, idx) => {
    if(char === key) {
      i = j;
      let temp = string.slice(i+1).indexOf(key)
      if(temp !== -1 ) j += temp;
      return 0;
    } else {
      if( i === j) {
        return Math.abs(idx-i);
      } else {
        const dist1 = Math.abs(idx - i);
        const dist2 = Math.abs(idx - j);
        return Math.min(dist1,dist2);
      }
    }
  });
}

console.log(findDistance("expediaindia", "a"));
console.log(findDistance2("expediaindia", "a"));

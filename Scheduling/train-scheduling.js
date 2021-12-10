function minPlatformsRequire(arr, dep) {
  let arrivals = [...arr].sort((a, b) => a - b);
  let departure = [...dep].sort((a, b) => a - b);

  console.log(arrivals);
  console.log(departure);

  let i = 1,
    j = 0;
  let result = 1,
    platforms = 1;

  while (i < arrivals.length || j < arrivals.length) {
    if (arrivals[i] <= departure[j]) {
      platforms += 1;
      i += 1;
    } else {
      platforms -= 1;
      j += 1;
    }

    result = Math.max(result, platforms);
  }

  return result;
}

let arr = [900, 940, 950, 1100, 1500, 1800];
let dep = [910, 1200, 1120, 1130, 1900, 2000];

console.log(minPlatformsRequire(arr, dep));

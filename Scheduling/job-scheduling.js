const profits1 = [10, 15, 20, 1, 5];
const deadlines1 = [1, 2, 2, 3, 3];

const profits2 = [12, 5, 20, 15, 35, 30, 25];
const deadlines2 = [1, 2, 2, 3, 3, 4, 4];

function getProfitByJobs(data, idx, hist) {
  if (idx >= data.length) return 0;
  let [profit, deadline] = data[idx];
  let maxProfit = 0;
  if (hist[deadline - 1] === null) {
    hist[deadline - 1] = profit;
    maxProfit = profit;
  } else {
    let i = deadline - 2;
    while (hist[i] !== null && i >= 0) i--;
    if (i >= 0 && hist[i] === null) {
      hist[i] = profit;
      maxProfit = profit;
    }
  }
  return maxProfit + getProfitByJobs(data, idx + 1, hist);
}

function getMaxProfit(profitsArr, deadlinesArr, jobs) {
  const combArr = profitsArr
    .map((el, idx) => [el, deadlinesArr[idx]])
    .sort((a, b) => b[0] - a[0]);

  const jobHist = Array(jobs).fill(null);

  return getProfitByJobs(combArr, 0, jobHist);
}

console.log(getMaxProfit(profits1, deadlines1, 3));
console.log(getMaxProfit(profits2, deadlines2, 4));

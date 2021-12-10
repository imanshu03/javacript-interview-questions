function Job(start, finish, profit) {
  this.start = start;
  this.finish = finish;
  this.profit = profit;
}

const data = [new Job(2, 5, 20), new Job(1, 2, 20), new Job(6, 9, 70), new Job(2, 50, 400)];

function findMaxProfit(arr, n) {
  arr.sort((a, b) => a.finish - b.finish);
  const dp = Array(n).fill(0);
  dp[0] = arr[0].profit;

  for (let i = 1; i < n; i++) {
    let including = arr[i].profit;
    let lnConflict = -1;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j].finish <= arr[i].start) {
        lnConflict = j;
        break;
      }
    }

    if (lnConflict !== -1) {
      including += dp[lnConflict];
    }
    dp[i] = Math.max(including, dp[i - 1]);
  }

  let ans = dp[n-1];
  delete dp;
  return ans;
}

console.log(findMaxProfit(data, data.length));

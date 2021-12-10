// travelling salesman problem, find minimum cost to travel to all cities once

const input1 = [
    [-1, 10, 15, 20],
    [10, -1, 35, 25],
    [15, 35, -1, 30],
    [20, 25, 30, -1],
  ];
  
  const input2 = [
    [-1, 30, 25, 10],
    [15, -1, 20, 40],
    [10, 20, -1, 25],
    [30, 10, 20, -1],
  ];
  
  function getMinimumCost(costs, cur, history = []) {
    history.push(cur);
    console.log(history);
    let travelCosts = costs[cur];
    if (history.length === travelCosts.length) {
      return travelCosts[history[0]];
    }
  
    let nextCity = -1;
    let min = Infinity;
  
    for (let i = 0; i < travelCosts.length; i++) {
      if (travelCosts[i] !== -1 && !history.includes(i)) {
        min = Math.min(travelCosts[i], min);
        nextCity = min !== travelCosts[i] ? nextCity : i;
      }
    }
    console.log(min);
    return min + getMinimumCost(costs, nextCity, history);
  }
  
  console.log(getMinimumCost(input1, 1));
  
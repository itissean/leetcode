// Tests
const prices = [7, 1, 5, 3, 6, 4];
const prices2 = [7, 6, 4, 3, 1];
const prices3 = [1, 2];

/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  const len = prices.length;
  let profit = 0;
  let min = prices[0];
  let i = 0;
  for (i; i < len; i++) {
    if (prices[i] < min) min = prices[i];
    profit = Math.max(profit, prices[i] - min)
  }
  return profit;
};

console.log('Input: ', prices, 'Output: ', maxProfit(prices));
console.log('Input: ', prices2, 'Output: ', maxProfit(prices2));
console.log('Input: ', prices3, 'Output: ', maxProfit(prices3));

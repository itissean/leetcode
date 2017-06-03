// Tests
const n = 13;
const k = 2;

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(n, k) {
  const arr = Array.from({length: n}, (v, i) => i + 1).map(x => x.toString()).sort();
  return parseInt(arr[k - 1]);
};

console.log(findKthNumber(n, k));

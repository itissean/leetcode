// Tests
const nums = [5, 6, 3, 7, 1, 3, 1, 7, 5];

/**
 * Given an array of integers, every element appears twice except for one. Find that single one.
 * @param  {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
  const map = {};
  for (const num of nums) {
    if (typeof map[num] === 'undefined') {
      map[num] = 1;
    } else {
      map[num]++;
    }
  }
  let keys = Object.keys(map);
  for (const key of keys) {
    if (map[key] === 1) return key;
  }
  return -1;
}

console.log(singleNumber(nums));

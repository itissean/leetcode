// Tests
const nums = [5, 4, 3, 2, 3, 3, 5, 3, 3];

/**
 * Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
 * @param  {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
  let threshold = nums.length / 2;
  const map = {};
  for (const num of nums) {
    if (typeof map[num] === 'undefined') {
      map[num] = 1;
    } else {
      map[num]++;
    }
    if (map[num] > threshold) {
      return num;
    }
  }
  return -1;
}

console.log(majorityElement(nums));

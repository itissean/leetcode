// Tests
const nums = [0, 1, 3, 50, 75];
const lower = 0;
const upper = 99;

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
function findMissingRanges(nums, lower, upper) {
  const result = [];
  nums = [lower - 1, ...nums, upper + 1];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1] + 1) {
      continue;
    }
    if (nums[i] === nums[i - 1] + 2 ) {
      result.push((nums[i - 1] + 1).toString());
    } else {
      result.push([nums[i - 1] + 1, nums[i] - 1].join('->'));
    }
  }
  return result;
};

console.log(findMissingRanges(nums, lower, upper));

// Tests
const nums = [2, 7, 11, 15];
const target = 18;

/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * @param  {number[]} nums
 * @param  {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length; j++) {
          if (i === j) {
              continue;
          } else if ((nums[i] + nums[j]) === target) {
              result.push(i);
              result.push(j);
              return result;
          }
      }
  }
  return result;
};

console.log(twoSum(nums, target));

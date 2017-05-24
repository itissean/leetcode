// Tests
const nums = [0, 1, 0, 3, 12];

/**
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
  let mark = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      const temp = nums[i];
      nums[i] = 0;
      nums[mark] = temp;
      mark++;
    }
  }
};

moveZeroes(nums);

console.log(nums);

// Tests
const nums = [1,2,3,4];

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
  const len = nums.length;
  const result = [];
  for (let i = 0; i < len; i++) {
    const factors = [];
    for (let j = 0; j < len; j++) {
      if (i !== j) {
        factors.push(nums[j]);
      }
    }
    result.push(factors.reduce((x, y) => x * y));
  }
  return result;
};

console.log(productExceptSelf(nums));

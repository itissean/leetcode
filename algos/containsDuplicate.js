// Tests
const nums = [1, 2, 3, 4, 5];
const nums2 = [1, 2, 3, 3];
const nums3 = [1];
const nums4 = [3, 3];

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
  const set = new Set();
  for (const num of nums){
    if (set.has(num)) return true;
    set.add(num);
  }
  return false;
};

console.log(containsDuplicate(nums));
console.log(containsDuplicate(nums2));
console.log(containsDuplicate(nums3));
console.log(containsDuplicate(nums4));

// Tests
const haystack = "diamonddog";
const needle = "dog";

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle === '') return 0;
  let hayStackLength = haystack.length;
  let needleLength = needle.length;
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack[i] === needle[0]) {
      let j = i;
      let k = 0;
      while (k < needleLength) {
        if (haystack[j] !== needle[k]) {
          break;
        }
        k++;
        j++;
      }
      if (k === needleLength) return i;
    }
  }
  return -1;
};

console.log(strStr(haystack, needle));

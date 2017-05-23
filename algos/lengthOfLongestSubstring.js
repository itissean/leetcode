// Tests
const s = 'abcabcdbb';

function lengthOfLongestSubstring(s) {
  let longest = 0;
  let len = s.length;
  let i = 0;
  let j = 0;
  let map = {};
  while (i < len && j < len) {
    if (typeof map[s[j]] === 'undefined') {
      map[s[j]] = 1;
      j++;
      longest = j - i > longest ? j - i : longest;
    } else {
      delete map[s[i]];
      i++;
    }
  }
  return longest;
}

console.log(lengthOfLongestSubstring(s));

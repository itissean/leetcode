const strs = ['foxhole', 'fox', 'foxtrot'];
const strs1 = ["abca","abc"];

/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  if (!strs || strs.length === 0) {
    return '';
  }
  const shortest = strs.reduce((x, y) => x.length < y.length ? x : y);
  const result = [];
  let i;
  for (i = 0; i < shortest.length; i++) {
    const char = [];
    let j;
    for (j = 0; j < strs.length; j++) {
      if (shortest[i] === strs[j][i]) {
        char.push(shortest[i]);
      }
    }
    if (char.length === strs.length) {
      result.push(char[0]);
    } else {
      return result.join('');
    }
  }
  return result.join('');
};

console.log(longestCommonPrefix(strs));
console.log(longestCommonPrefix(strs1));

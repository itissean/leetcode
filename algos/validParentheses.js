// Tests
const s = '({{[]}})[]{[]}';
const s1 = '[}{}()]';
const s2 = '[{]}';

/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  if (s.length < 2) {
    return false;
  }
  const parenMap = {
    ']': '[',
    ')': '(',
    '}': '{',
  }
  const stack = [];
  for (const char of s) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else if (parenMap[char] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      return false;
    }
  }
  if (stack.length > 0) {
    return false;
  }
  return true;
};

console.log('Input: ', s, 'Output: ', isValid(s));
console.log('Input: ', s1, 'Output: ', isValid(s1));
console.log('Input: ', s2, 'Output: ', isValid(s2));

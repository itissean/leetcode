// Tests
const s = 'hello world';

/**
 * Write a function that takes a string as input and returns the string reversed.
 * @param  {string} s
 * @return {string}
 */
function reverseString(s) {
  const sArray = Array.from(s);
  let start = 0;
  let end = s.length -1;
  while (start < end) {
    let temp = sArray[start];
    sArray[start] = sArray[end];
    sArray[end] = temp;
    start++;
    end--;
  }
  return sArray.join('');
}

console.log(reverseString(s));

class MinStack {
  /**
   * Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
   */
  constructor() {
    this.stack = [];
  }
  /**
   * @param  {number} num
   * @return {void}
   */
  push(num) {
    let min = this.stack.length > 0 ? Math.min(num, this.getMin()) : num;
    this.stack.push({
      min,
      num
    });
    return null;
  }
  /**
   * @return {void}
   */
  pop() {
    this.stack.pop();
    return null;
  }
  /**
   * @return {number}
   */
  top() {
    return this.stack[this.stack.length - 1].num;
  }
  /**
   * @return {number}
   */
  getMin() {
    return this.stack[this.stack.length - 1].min;
  }
}

const minStack = new MinStack();
minStack.push(3);
minStack.push(5);
minStack.push(9);
minStack.push(2);
minStack.pop();
console.log(minStack.getMin());

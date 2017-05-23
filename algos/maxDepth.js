// Tests
const root = new TreeNode(1);
const left1 = new TreeNode(2);
const right1 = new TreeNode(3);
const left2 = new TreeNode(4);
const left3 = new TreeNode(5);
const left4 = new TreeNode(6);

root.left = left1;
root.right = right1;
left1.left = left2;
left2.left = left3;
left3.left = left4;

/**
 * TreeNode.
 * @param       {number} val
 * @constructor
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};
/**
 * Given a binary tree, find its maximum depth.
 * @param {TreeNode} root
 * @return {number}
 */
function maxDepth(root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

console.log(maxDepth(root));

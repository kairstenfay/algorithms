// Can you write a function to traverse a binary tree in-order and print out the value of each node as it passes?

//   4
//    \
//     5
//    /
//   6

// The example would output [4, 6, 5] since there is no left child for 4, and 6 is visited in-order before 5.

// The definition of a tree node is as follows:

// function Node(val) {
//   this.val = val;
//   this.left = null;
//   this.right = null;
// }

// Follow up: you'll likely get the recursive solution first, could you do it iteratively?

function inorderTraversal(root) {
    return _inorderTraversal(root, []);
}

function _inorderTraversal(node, nodesSoFar) {
    if (!node.val) return nodesSoFar;

    if (node.left) _inorderTraversal(node.left, nodesSoFar);
    nodesSoFar.push(node.val);
    if (node.right) _inorderTraversal(node.right, nodesSoFar);

    return nodesSoFar;
}

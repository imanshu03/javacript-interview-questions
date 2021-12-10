const { TraversalTree } = require('./binaryTree');

const tree = new TraversalTree();

tree.buildTreeRecursive(null, [3, 1, 8, 2, 4, 7, 9], 0);
tree.print();

// tree.inOrderTraversal();
// tree.preOrderTraversal();
// tree.postOrderTraversal();

tree.insertNode(5);
tree.print();

tree.spiral();

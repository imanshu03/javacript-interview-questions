const { Tree } = require('./binaryTree');

const binaryTree = new Tree();

binaryTree.buildTree([...'351248']);
binaryTree.print();

binaryTree.insertNode(12);
binaryTree.print();

binaryTree.deleteNode(1);
binaryTree.print();

const rBinaryTree = new Tree();

rBinaryTree.buildTreeRecursive(null, [3, 1, 2, 4, 5, null, 6], 0);
binaryTree.print();

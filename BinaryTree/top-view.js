const { TraversalTree } = require("./binaryTree");

let tree = new TraversalTree();
tree.buildTree([..."1234567"]);
tree.topView();

tree = new TraversalTree();
tree.buildTree([..."123N4NNN5N6"]);
tree.topView();

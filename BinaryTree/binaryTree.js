class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.hd = 0;
  }
}

class Tree {
  constructor() {
    this.root = null;
    this.height = 0;
  }

  buildTree(nodesArray) {
    console.log("Building Tree...");
    if (!this.root) {
      this.root = new Node(parseInt(nodesArray[0]));
    }
    let queue = [];
    let i = 1;
    queue.push(this.root);

    while (queue.length > 0 && i < nodesArray.length) {
      let curNode = queue.shift();

      let curVal = nodesArray[i];
      if (curVal && curVal !== "N") {
        let newNode = new Node(parseInt(curVal));
        curNode.left = newNode;
        queue.push(curNode.left);
      }
      i++;

      curVal = nodesArray[i];
      if (curVal && curVal !== "N") {
        let newNode = new Node(parseInt(curVal));
        curNode.right = newNode;
        queue.push(curNode.right);
      }
      i++;
    }

    queue = null;
  }

  buildTreeRecursive(root, nodes, idx) {
    if (idx === 0) {
      console.log("Building Tree rescursively...");
      this.root = new Node(nodes[idx]);
      root = this.root;
    }
    let leftIdx = 2 * idx + 1;
    let rightIdx = 2 * idx + 2;
    if (leftIdx < nodes.length && nodes[leftIdx]) {
      root.left = new Node(nodes[leftIdx]);
      this.buildTreeRecursive(root.left, nodes, leftIdx);
    }
    if (rightIdx < nodes.length && nodes[rightIdx]) {
      root.right = new Node(nodes[rightIdx]);
      this.buildTreeRecursive(root.right, nodes, rightIdx);
    }
  }

  insertNode(key) {
    console.log("Inserting node...");
    if (!this.root) {
      this.root = new Node(key);
      return;
    }
    let queue = [];
    queue.push(this.root);
    let newNode = new Node(key);

    while (queue.length > 0) {
      let curNode = queue.shift();

      if (curNode.left) {
        queue.push(curNode.left);
      } else {
        curNode.left = newNode;
        queue = null;
        return;
      }

      if (curNode.right) {
        queue.push(curNode.right);
      } else {
        curNode.right = newNode;
        queue = null;
        return;
      }
    }
  }

  deleteNode(key) {
    console.log("Deleting node...");
    let ptr = this.root;
    if (!ptr) return;

    if (!ptr.left && !ptr.right) {
      if (ptr.data === key) this.root = null;
      return;
    }

    let parent = null,
      curNode = null,
      deleteNode = null;

    let queue = [];
    queue.push(ptr);

    while (queue.length > 0) {
      curNode = queue.shift();

      if (curNode.data === key) deleteNode = curNode;

      if (curNode.left) {
        parent = curNode;
        queue.push(curNode.left);
      }

      if (curNode.right) {
        parent = curNode;
        queue.push(curNode.right);
      }
    }

    queue = null;

    if (!deleteNode) return;

    if (parent.left === curNode) {
      parent.left = null;
    } else {
      parent.right = null;
    }

    if (deleteNode === curNode) {
      deleteNode = null;
    } else {
      deleteNode.data = curNode.data;
      curNode = null;
    }
  }

  print() {
    console.log("Printing root...");
    console.log(this.root);
  }
}

class TraversalTree extends Tree {
  breathFirstTraversal() {
    if (!this.root) return;

    console.log("BFS...");
    let queue = [];
    queue.push(this.root);

    while (queue.length > 0) {
      let curNode = queue.shift();
      console.log(curNode.data);

      if (curNode.left) queue.push(curNode.left);
      if (curNode.right) queue.push(curNode.right);
    }

    queue = null;
  }

  inOrderTraversal(root = null) {
    let ptr = root || this.root;
    if (ptr === this.root) console.log("DFS - Inorder recursive...");
    if (ptr.left) this.inOrderTraversal(ptr.left);
    console.log(ptr.data);
    if (ptr.right) this.inOrderTraversal(ptr.right);
  }

  preOrderTraversal(root = null) {
    let ptr = root || this.root;
    if (ptr === this.root) console.log("DFS - Preorder recursive...");
    console.log(ptr.data);
    if (ptr.left) this.preOrderTraversal(ptr.left);
    if (ptr.right) this.preOrderTraversal(ptr.right);
  }

  postOrderTraversal(root = null) {
    let ptr = root || this.root;
    if (ptr === this.root) console.log("DFS - Postorder recursive...");
    if (ptr.left) this.postOrderTraversal(ptr.left);
    if (ptr.right) this.postOrderTraversal(ptr.right);
    console.log(ptr.data);
  }

  spiral() {
    if (!this.root) return;
    let ltr = [];
    let rtl = [];
    let output = "";
    rtl.push(this.root);

    console.log("Sprial traversal...");

    while (ltr.length || rtl.length) {
      while (rtl.length) {
        let curNode = rtl.pop();
        output += curNode.data + " ";

        if (curNode.right) ltr.push(curNode.right);
        if (curNode.left) ltr.push(curNode.left);
      }

      while (ltr.length) {
        let curNode = ltr.pop();
        output += curNode.data + " ";

        if (curNode.left) rtl.push(curNode.left);
        if (curNode.right) rtl.push(curNode.right);
      }
    }

    console.log(output);
  }

  topView() {
    let queue = [];
    let map = new Map();

    queue.push(this.root);
    while (queue.length > 0) {
      let curNode = queue.shift();
      const hd = curNode.hd;

      if (!map.has(hd)) {
        map.set(hd, curNode.data);
      }

      if (curNode.left) {
        curNode.left.hd = hd - 1;
        queue.push(curNode.left);
      }

      if (curNode.right) {
        curNode.right.hd = hd + 1;
        queue.push(curNode.right);
      }
    }
    console.log(map);
    const result = [...map.entries()]
      .sort((a, b) => a[0] - b[0])
      .map((el) => el[1])
      .join(" ");
    console.log(result);
  }
}

module.exports = {
  Tree,
  TraversalTree,
};

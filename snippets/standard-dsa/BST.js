class Node {
  val;
  left = null;
  right = null;

  constructor(val) {
    this.val = val;
  }
}

class BST {
  root;
  size = 0;

  constructor() {
    this.root = null;
  }

  insert(val) {
    this.root = this.__insert(this.root, val);
  }

  __insert(root, val) {
    if (root == null) {
      ++this.size;
      root = new Node(val);
      return root;
    }
    if (val < root.val) {
      root.left = this.__insert(root.left, val);
    } else if (val > root.val) {
      root.right = this.__insert(root.right, val);
    }
    return root;
  }

  traverse(type) {
    this.__traverse(this.root, type);
  }

  __traverse(root, type) {
    if (root != null) {
      if (type == "pre") console.log(root.val);
      this.__traverse(root.left, type);
      if (type == "in") console.log(root.val);
      this.__traverse(root.right, type);
      if (type == "post") console.log(root.val);
    }
  }

  getRoot() {
    return this.root;
  }

  getSize() {
    return this.size;
  }

  chechIfExists(key) {
    let root = this.root;
    while (root != null) {
      if (key > root.val) root = root.right;
      else if (key < root.val) root = root.left;
      else return true;
    }
    return false;
  }
}

const bst = new BST();
bst.insert(1);
bst.insert(23);
bst.insert(32);
bst.insert(12);
bst.insert(765);
bst.insert(739);
bst.insert(92);
bst.insert(5);
bst.insert(27);
bst.traverse("post");
console.log(bst.chechIfExists(22 + 1));

enum TraverseEnum {
  pre = "pre",
  post = "post",
  in = "in",
}

class Node<T> {
  val: T;
  left: null | Node<T> = null;
  right: null | Node<T> = null;

  constructor(val: T) {
    this.val = val;
  }
}

export default class BST<T> {
  private root: null | Node<T>;
  private size: number = 0;

  constructor() {
    this.root = null;
  }

  insert(val: T) {
    this.root = this.__insert(this.root, val);
  }

  private __insert(root: Node<T> | null, val: T): Node<T> | null {
    if (root == null) {
      root = new Node<T>(val);
      return root;
    }
    if (val < root.val) {
      root.left = this.__insert(root.left, val);
    } else if (val > root.val) {
      root.right = this.__insert(root.right, val);
    }
    return root;
  }

  traverse(type: TraverseEnum) {
    this.__traverse(this.root, type);
  }
  private __traverse(root: Node<T> | null, type: string) {
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
}

const bst = new BST<number>();
bst.insert(1);
bst.insert(23);
bst.insert(32);
bst.insert(12);
bst.insert(765);
bst.insert(739);
bst.insert(92);
bst.insert(5);
bst.insert(27);
bst.traverse(TraverseEnum.post);

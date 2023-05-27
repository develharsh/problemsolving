class Node {
  val;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

class LinkedList {
  head;
  len = 0;

  constructor() {
    this.head = null;
  }

  push(...vals) {
    this.len += vals.length;
    vals.forEach((val) => {
      if (this.head === null) {
        this.head = new Node(val);
        return;
      }
      let start = this.head;
      while (start.next) {
        start = start.next;
      }
      start.next = new Node(val);
    });
    return this;
  }

  traverse() {
    let start = this.head;
    while (start) {
      console.log(start.val);
      start = start.next;
    }
    return this;
  }

  replaceHead(val) {
    const node = new Node(val);
    node.next = this.head;
    this.head = node;
    return this;
  }

  deleteByVal(val) {
    if (this.head === null) return this;
    if (this.head.val === val) {
      this.head = this.head.next;
      return this;
    }
    let start = this.head;
    while (start.next) {
      if (start.next.val === val) {
        start.next = start.next.next;
        break;
      }
      start = start.next;
    }
    return this;
  }

  newLine() {
    console.log("\n");
    return this;
  }

  reverse() {
    if (this.head === null || this.head.next === null) return this;
    let prev = null,
      curr = this.head,
      next = null;
    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    this.head = prev;

    return this;
  }

  length() {
    return this.len;
  }
}

let ll = new LinkedList();
ll.push(10, 11, 12, 13, 14, 15)
  // .replaceHead(16)
  .traverse()
  // .deleteByVal(15)
  .newLine()
  .reverse()
  .traverse();

console.log(ll.length());

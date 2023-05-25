class Node<T> {
  val: T;
  next: null | Node<T> = null;

  constructor(val: T) {
    this.val = val;
  }
}

export default class LinkedList<T> {
  private head: null | Node<T>;
  private len: number = 0;

  constructor() {
    this.head = null;
  }

  push(...vals: T[]) {
    this.len += vals.length;
    vals.forEach((val: T) => {
      if (this.head === null) {
        this.head = new Node<T>(val);
        return;
      }
      let start: Node<T> | null = this.head;
      while (start.next) {
        start = start.next;
      }
      start.next = new Node<T>(val);
    });
    return this;
  }

  traverse() {
    let start: Node<T> | null = this.head;
    while (start) {
      console.log(start.val);
      start = start.next;
    }
    return this;
  }

  replaceHead(val: T) {
    const node = new Node<T>(val);
    node.next = this.head;
    this.head = node;
    return this;
  }

  deleteByVal(val: T) {
    if (this.head === null) return this;
    if (this.head.val === val) {
      this.head = this.head.next;
      return this;
    }
    let start: Node<T> = this.head;
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
      curr: null | Node<T> = this.head,
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

let ll = new LinkedList<number>();
ll.push(10, 11, 12, 13, 14, 15)
  // .replaceHead(16)
  .traverse()
  // .deleteByVal(15)
  .newLine()
  .reverse()
  .traverse();

console.log(ll.length());

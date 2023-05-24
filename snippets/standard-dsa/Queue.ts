class Node<T> {
  val: T;
  next: null | Node<T> = null;

  constructor(val: T) {
    this.val = val;
  }
}

class Queue<T> {
  private top: null | Node<T>;
  private len: number = 0;

  constructor() {
    this.top = null;
  }

  push(...vals: T[]) {
    this.len += vals.length;
    vals.forEach((val: T) => {
      if (this.top === null) {
        this.top = new Node<T>(val);
        return;
      }
      let start: Node<T> | null = this.top;
      while (start.next) {
        start = start.next;
      }
      start.next = new Node<T>(val);
    });
    return this;
  }

  pop() {
    if (this.top === null) {
      return this;
    }
    this.top = this.top.next;
    --this.len;
    return this;
  }

  empty(loop: boolean) {
    if (loop) {
      let start: null | Node<T> = this.top;
      while (start) {
        console.log(start.val);
        start = start.next;
      }
    }
    this.top = null;
    this.len = 0;
    return this;
  }
}

let qu = new Queue();
qu.push(1, 2, 3, 4).pop().empty(false);

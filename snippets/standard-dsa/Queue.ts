class Node<T> {
  val: T;
  next: null | Node<T> = null;

  constructor(val: T) {
    this.val = val;
  }
}

export default class Queue<T> {
  private front: null | Node<T>;
  private rear: null | Node<T>;
  private len: number = 0;

  constructor() {
    this.front = this.rear = null;
  }

  enQueue(...vals: T[]) {
    this.len += vals.length;
    vals.forEach((val: T) => {
      const temp = new Node<T>(val);
      if (this.rear === null) {
        this.front = this.rear = temp;
        return this;
      }
      this.rear.next = temp;
      this.rear = temp;
    });
    return this;
  }

  deQueue() {
    if (this.front === null) {
      return this;
    }
    this.front = this.front.next;
    if (this.front === null) this.rear = null;
    --this.len;
    return this;
  }

  empty(loop: boolean) {
    if (loop) {
      let start: null | Node<T> = this.front;
      while (start) {
        console.log(start.val);
        start = start.next;
      }
    }
    this.front = this.rear = null;
    this.len = 0;
    return this;
  }
}

let qu = new Queue();
qu.enQueue(1, 2, 3, 4).deQueue().empty(true);

class Node {
  val;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

class Queue {
  front;
  rear;
  len = 0;

  constructor() {
    this.front = this.rear = null;
  }

  enQueue(...vals) {
    this.len += vals.length;
    vals.forEach((val) => {
      const temp = new Node(val);
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

  empty(loop) {
    if (loop) {
      let start = this.front;
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

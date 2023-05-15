class LLNode<T> {
  data: T;
  prev: LLNode<T> | null = null;
  next: LLNode<T> | null = null;

  constructor(
    data: T,
    prev: LLNode<T> | null = null,
    next: LLNode<T> | null = null
  ) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class LinkedList<T> {
  head: LLNode<T> | null = null;
  tail: LLNode<T> | null = null;
  private comparator: (a: T, b: T) => boolean;

  constructor(comparator: (a: T, b: T) => boolean = (a: T, b: T) => a === b) {
    this.comparator = comparator;
  }

  append(data: T): void {
    if (!this.head) {
      this.head = new LLNode(data);
    } else {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = new LLNode(data);
    }
  }

  delete(data: T): void {
    if (!this.head) return;

    // Check if the head node is the node to be removed
    if (this.comparator(this.head.data, data)) {
      this.head = this.head.next;
      return;
    }

    let current = this.head.next;
    let previous = this.head;

    /**
     * Search for the node to be removed and keep track of its previous node
     *
     * If it were a double linked list, we could simply search the node
     * and it would have a pointer to the previous node
     **/
    while (current) {
      if (this.comparator(current.data, data)) {
        current = null;
      } else {
        previous = current;
        current = current.next;
      }
    }

    /**
     * set previous.next to the target.next, if the node target is not found,
     * the 'previous' will point to the last node,
     * since the last node hasn't next, nothing will happen
     **/
    previous.next = previous.next ? previous.next.next : null;
  }

  search(data: T): LLNode<T> | null {
    let current = this.head;
    while (current) {
      if (this.comparator(current.data, data)) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  traverse() {
    let current = this.head;
    while (current != null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList<number>();

ll.append(10);
ll.append(20);
ll.append(30);
ll.append(40);
ll.append(50);

console.log(ll.search(20));

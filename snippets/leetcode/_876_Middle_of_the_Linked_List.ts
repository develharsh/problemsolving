class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
//Solution
//https://leetcode.com/problems/middle-of-the-linked-list
function middleNode(head: ListNode | null): ListNode | null {
  if (head === null) return null;
  if (head.next === null) return head;

  let fast: ListNode | null = head;

  let slow: ListNode | null = head;

  while (fast?.next) {
    fast = fast?.next?.next; // 2x
    if (slow.next) slow = slow.next; // x
  }

  // If fast -> finishes last point, then slow -> is in the middle
  return slow;
}

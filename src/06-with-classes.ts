export class LinkedListNode<T> {
  value: T;
  next?: LinkedListNode<T>;

  constructor(value: T) {
    this.value = value;
  }

  add(value: T): LinkedListNode<T> {
    this.next = new LinkedListNode(value);
    return this.next;
  }
}

const firstNode = new LinkedListNode('first');
const secondNode = firstNode.add('second');
const thirdNode = new LinkedListNode(42);
const fourthNode = thirdNode.add(17);

type LinkedListNode<T> = {
  value: T;
  next?: LinkedListNode<T>;
};

const firstNode: LinkedListNode<string> = {
  value: 'first',
};

const secondNode: LinkedListNode<string> = {
  value: 'second',
};

const thirdNode: LinkedListNode<number> = {
  value: 42,
};

const fourthNode: LinkedListNode<number> = {
  value: 17,
};

firstNode.next = secondNode;
thirdNode.next = fourthNode;

export {};

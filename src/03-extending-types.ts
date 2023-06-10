type LinkedListNode<T extends string | number | boolean> = {
  value: T;
  next?: LinkedListNode<T>;
};

const firstNode: LinkedListNode<string> = {
  value: 'first',
};

const secondNode: LinkedListNode<'second'> = {
  value: 'second',
};

const thirdNode: LinkedListNode<number> = {
  value: 42,
};

const fourthNode: LinkedListNode<17> = {
  value: 17,
};

firstNode.next = secondNode;
thirdNode.next = fourthNode;
fourthNode.next = {
  value: 17,
};

export {};

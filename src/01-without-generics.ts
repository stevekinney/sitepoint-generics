type LinkedListNode = {
  value: string;
  next?: LinkedListNode;
};

const firstNode: LinkedListNode = {
  value: 'first',
};

const secondNode: LinkedListNode = {
  value: 'second',
};

firstNode.next = secondNode;

export {};

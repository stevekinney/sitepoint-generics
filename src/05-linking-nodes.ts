type LinkedListNode<T> = {
  value: T;
  next?: LinkedListNode<T>;
};

export const createLinkedListNode = <T>(value: T): LinkedListNode<T> => {
  return { value };
};

export const addLinkedListNode = <T>(
  node: LinkedListNode<T>,
  value: T,
): LinkedListNode<T> => {
  node.next = createLinkedListNode(value);
  return node.next;
};

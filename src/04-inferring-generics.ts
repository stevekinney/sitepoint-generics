type LinkedListNode<T extends string | number | boolean> = {
  value: T;
  next?: LinkedListNode<T>;
};

export const identity = <T>(x: T): T => {
  return x;
};

export const foo = identity<string>('foo');
export const two = identity(2);

const createLinkedListNode = <T extends string | number | boolean>(
  value: T,
): LinkedListNode<T> => {
  return { value };
};

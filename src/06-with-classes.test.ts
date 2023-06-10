import { it, expect } from 'vitest';

import { LinkedListNode } from './06-with-classes';

it('should create a linked list node', () => {
  let node = new LinkedListNode('first');
  expect(node).toEqual({ value: 'first' });
});

it('should add a linked list node', () => {
  let firstNode = new LinkedListNode('first');
  let secondNode = firstNode.add('second');

  expect(firstNode).toEqual({ value: 'first', next: { value: 'second' } });
  expect(secondNode).toEqual({ value: 'second' });
});

it('should add a linked list node with a number', () => {
  let firstNode = new LinkedListNode(42);
  let secondNode = firstNode.add(17);

  expect(firstNode).toEqual({ value: 42, next: { value: 17 } });
  expect(secondNode).toEqual({ value: 17 });
});

it('should add a linked list node with a boolean', () => {
  let firstNode = new LinkedListNode(true);
  let secondNode = firstNode.add(false);

  expect(firstNode).toEqual({ value: true, next: { value: false } });
  expect(secondNode).toEqual({ value: false });
});

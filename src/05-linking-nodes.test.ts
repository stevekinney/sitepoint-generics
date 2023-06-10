import { it, expect } from 'vitest';

import { addLinkedListNode, createLinkedListNode } from './05-linking-nodes';

it('should create a linked list node', () => {
  let node = createLinkedListNode('first');
  expect(node).toEqual({ value: 'first' });
});

it('should add a linked list node', () => {
  let firstNode = createLinkedListNode('first');
  let secondNode = addLinkedListNode(firstNode, 'second');

  expect(firstNode).toEqual({ value: 'first', next: { value: 'second' } });
  expect(secondNode).toEqual({ value: 'second' });
});

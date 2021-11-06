// Write code to remove duplicates from an unsorted linked list.
// How would you solve this problem if a temporary buffer is not allowed.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("a");
const e = new Node("d");
const f = new Node("a");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

const removeDuplicates = (root) => {
  if (root === null) return null;

  let dups = {},
    node = root,
    prev = null;

  while (node) {
    if (node.val in dups) {
      prev.next = node.next;
    } else {
      prev = node;
      dups[node.val] = true;
    }
    node = node.next;
  }

  return root;
};

removeDuplicates(a);

// How would you solve this problem if a temporary buffer is not allowed.
const removeDuplicatesNoBuffer = (root) => {
  if (root === null) return null;
  let pointerA = root;

  while (pointerA) {
    let pointerB = pointerA;
    while (pointerB.next) {
      if (pointerB.next.val === pointerA.val) {
        pointerB.next = pointerB.next.next;
      } else {
        pointerB = pointerB.next;
      }
    }
    pointerA = pointerA.next;
  }

  return root;
};

removeDuplicatesNoBuffer(a);

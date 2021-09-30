// There are many ways to create a linked list, here's one

class Node {
  constructor({ val, next }) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor(node) {
    this.head = node;
    this.size = 1;
  }
  // add a value to the link list: O(n)
  add(val) {
    if (!this.hasNode()) return null;

    let curr = this.head;

    while (curr.next) {
      curr = curr.next;
    }

    curr.next = new Node({ val, next: null });

    this.size++;

    return true;
  }
  // add an array of values to the linked list: O(n)
  addAll(vals) {
    let curr = null;

    if (this.hasNode()) {
      curr = this.getLastNode();
    } else {
      curr = new Node({ val: null, next: this.head });
    }

    for (const val of vals) {
      curr.next = new Node({ val, next: null });
      curr = curr.next;
      this.size++;
    }

    return true;
  }
  // remove first occurrance of a val: O(n)
  remove(val) {
    if (!this.hasNode()) return null;

    let curr = this.head;
    let prev = null;

    while (curr) {
      if (curr.val === val) {
        this.size--;

        if (prev === null) {
          return (this.head = curr.next);
        }

        return (prev.next = curr.next);
      }

      prev = curr;
      curr = curr.next;
    }

    return true;
  }
  // remove all occurrances of a value: O(n)
  removeAll(val) {
    if (!this.hasNode()) return null;

    let curr = this.head;
    let prev = null;

    while (curr) {
      if (curr.val === val) {
        if (prev === null) {
          this.head === curr.next;
        } else {
          prev.next = curr.next;
        }
      } else {
        prev = curr;
      }

      curr = curr.next;
    }

    return true;
  }
  // get the first value of the linked list: O(1)
  getFirst() {
    return this.head.val;
  }
  // get the last item value of the linked list: O(n)
  getLast() {
    if (!this.hasNode()) return null;

    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }

    return curr.val;
  }
  // get the last node of the linked list: O(n)
  getLastNode() {
    if (!this.hasNode()) return null;

    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }

    return curr;
  }
  // get value at a specific index: O(idx)
  get(idx) {
    if (idx < 0 || idx > this.size) return null;
    if (idx === 0) return this.head.val;

    let curr = this.head;
    let count = 0;

    while (count < idx) {
      count++;
      curr = curr.next;
    }

    return curr.val;
  }
  // get the first index of a value: O(n)
  getIndexOf(val) {
    if (!this.hasNode()) return null;
    let curr = this.head;
    let index = 0;

    while (curr) {
      if (curr.val === val) return index;
      index++;
      curr = curr.next;
    }

    return null;
  }
  // check if head exists: O(1)
  hasNode() {
    if (this.head) {
      return true;
    }
    return false;
  }
  // check if linked list contains a specific value: O(n)
  contains(val) {
    let curr = this.head;

    while (curr) {
      if (curr.val === val) {
        return true;
      }
      curr = curr.next;
    }

    return false;
  }
  // set the val at a specific index: O(idx)
  set(idx, val) {
    if (idx > this.size) return null;

    let curr = this.head;
    let count = 0;

    while (count < idx) {
      count++;
      curr = curr.next;
    }

    curr.val = val;

    return true;
  }

  // convert linked list to array: O(n)
  toArray() {
    let arr = [];
    let curr = this.head;

    while (curr) {
      arr.push(curr.val);
      curr = curr.next;
    }

    return arr;
  }
}

const node = new Node({ val: "hello", next: null });
const ll = new LinkedList(node);

ll.addAll(["world", "world", "world", "world", "!"]);

console.log(ll.toArray());
console.log(ll.getIndexOf("!"));
console.log(ll.removeAll("world"));
console.log(ll.toArray());

class Queue {
  constructor(val) {
    this.queue = val ? [val] : [];
  }

  enqueue(val) {
    this.queue.push(val);
  }

  dequeue() {
    return this.queue.shift();
  }

  peek() {
    return this.queue[0];
  }

  rear() {
    return this.queue[this.queue.length - 1];
  }

  reverse() {
    return this.queue.reverse();
  }

  get length() {
    return this.queue.length;
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

const queue = new Queue();
queue.enqueue("h");
queue.enqueue("e");
queue.enqueue("l");
queue.enqueue("l");
queue.enqueue("o");
console.log(queue.length); // 5
console.log(queue.dequeue()); // h
console.log(queue.peek()); // e
console.log(queue.rear()); // o
console.log(queue.reverse()); // [ 'o', 'l', 'l', 'e' ]
console.log(queue.length); // 4
console.log(queue.isEmpty()); // false

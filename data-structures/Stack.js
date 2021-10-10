class Stack {
  constructor(val) {
    this.stack = val ? [val] : [];
  }

  push(val) {
    this.stack.push(val);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  get length() {
    return this.stack.length;
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}

const stack = new Stack();
stack.push("h");
stack.push("e");
stack.push("l");
stack.push("l");
stack.push("o");
console.log(stack.length); // 5
console.log(stack.pop()); // o
console.log(stack.peek()); // l
console.log(stack.length); // 4
console.log(stack.isEmpty()); // false

/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (this.head === null) this.head = newNode;

    if (this.tail !== null) this.tail.next = newNode;

    this.tail = newNode;
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    let previousHead;

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    }

    previousHead = this.head;
    this.head = newNode;
    this.head.next = previousHead;
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    // handle empty list
    if (this.length === 0) {
      throw new Error("Cannot remove item from empty list.")
    }

    let current = this.head;
    let newTail; 
    let originalTail = this.tail.val;

    // handle list one node long
    if (this.length === 1) {
      this.head = null; 
      this.tail = null;
      this.length -= 1;
      return originalTail;
    }
    
    while (current !== this.tail) {
      newTail = current.val;
      current = current.next;
    }

    this.tail.val = newTail;
    this.length -= 1;
    return originalTail;

  }

  /** shift(): return & remove first item. */

  shift() {
    // handle empty list
    if (this.length === 0) {
      throw new Error("Cannot remove item from empty list.")
    }

    let current = this.head;
    let newHead;
    let originalHead = this.head.val;

    if (this.length === 1) {
      this.head = null; 
      this.tail = null;
      this.length -= 1;
      console.log({originalHead})
      return originalHead;
    }

    while (current !== null) {
      newHead = current.next;
      current = current.next;
    }

    this.head.val = newHead;
    this.length -= 1;
    return originalHead;
    // make head point to the first item's next node
    // return original first item

    // handle list with length of 1
    // handle longer list

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {
    
  }
}

module.exports = LinkedList;

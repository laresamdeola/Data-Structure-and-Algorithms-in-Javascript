class Node {
  constructor(element) {
    this.element = element;
    this.next = next;
  }
}

class LinkedList {
  this.head = null;
  this.size = 0;

add(element) {
  var node = new Node(element);
  var current;

  if (this.head == null) {
    this.head = node;
  } else {
    current = this.head;

    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
  this.size++;
}

insertAt(element, index) {
  if (index < 0 || index > this.size) {
    throw "Exception: enter a valid index";
  } else {
    var node = new Node(element);
    var curr, prev;

    curr = this.head;

    if (index == 0) {
      node.next = this.head;
      this.head = node;
    } else {
      curr = this.head;
      var it = 0;

      while (it < index) {
        it++;
        prev = curr;
        curr = curr.next;
      }
      node.next = curr;
      prev.next = node;
    }
    this.size++;
  }
}
}
class Node {
  constructor(element) {
    this.element = element;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // method to add an element to linkedlist
  add(element) {
    var node = new Node(element);
    var current;

    if(this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      
      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  insert(element, index) {
    if (index < 0 || index > this.size) {
      throw "Exception: enter a valid index";
    } else {
      var node = new Node(element);
      var current, previous;

      current = this.head;

      if(index == 0) {
        node.next = this.head;
        this.head = node;
      } else {
        current = this.head;
        var it = 0;

        while(it < index) {
          it++;
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }
      this.size++;
    }
  }
}
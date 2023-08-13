class Array {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  //access elements in the array
  get(index) {
    if(index <= this.length) {
      const item = this.data[index];
      return item;
    } else {
      throw "Exception: Index out of range";
    }
  }

  // pop method - to remove the last element in the array
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  // method to check if array is empty
  isEmpty() {
    this.length > 0 ? return false : return true;
  }

  // method to add an element to the array
  push(value) {
    this.data[this.length] = value;
    this.length++;
    return this;
  }

  // method to delete an item from an array
  delete(index) {
    const item = this.data[index];
    delete this.data[index];
    shiftItems(index);
    this.length--;
  }

  shiftItems(index) {
    for(let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
  }

  containsZero() {
    const zero = [];
    for(let i = 0; i < this.length; i++) {
      if(this.data[i] === 0) {
        zero.push(this.data[i]);
        break;
      }
    }
    zero.length > 0 ? return true : return false;
  }
}


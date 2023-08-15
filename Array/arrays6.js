class Array {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  // method to access the items in the array
  get(index) {
    if(index <= this.length) {
      return this.data[index];
    } else {
      throw "Exception: Index out of bounds";
    }
  }

  // method to remove the last element in the array
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return this;
  }

  //method to add an element to the array
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this;
  }

  // method to delete an item from the array
  delete(index) {
    delete this.data[index];
    this.shiftItems(index);
    this.length--;
    return this;
  }

  shiftItems(index) {
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
  }
}
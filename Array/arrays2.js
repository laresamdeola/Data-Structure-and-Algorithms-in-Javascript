class Array {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  // method to access array elements
  access(index) {
    return this.data[index];
  }

  // method to push elements into array
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  // method to remove the last element in the array
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  // method to delete an item at any index in the array
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    for(let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}
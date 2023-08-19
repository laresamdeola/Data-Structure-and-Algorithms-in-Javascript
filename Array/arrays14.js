class Array {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  // method to access array elements
  get(index) {
    return this.data[index];
  }

  // method to delete the last element in the array
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.element - 1];
    this.length--;
    return this;
  }

  // method to add item to the end of the array
  push(value) {
    this.data[this.length] = value;
    this.length++;
    return this;
  }

  // method to delete an element at any index in the array
  delete(index) {
    delete this.data[index];
    this.shiftItems(index);
    this.length--;
    return this;
  }

  // create the shift element method to shift array elements to the right
  shiftItems(index) {
    for(let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
  }
}
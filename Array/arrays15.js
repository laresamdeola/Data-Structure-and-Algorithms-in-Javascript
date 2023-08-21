class Array {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  // method to access array elements
  get(index) {
    return this.data[index];
  }

  // method to delete last element in the array
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return this;
  }

  // method to add an element to the last index of the array
  push(value) {
    this.data[this.length] = value;
    this.length++;
    return this;
  }

  // method to delete from any index in array
  delete(index) {
    delete this.data[index];
    this.shiftItems(index);
    this.length--;
    return this;
  }

  // the shift method - moves array items to the right
  shiftItems(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
  }
}
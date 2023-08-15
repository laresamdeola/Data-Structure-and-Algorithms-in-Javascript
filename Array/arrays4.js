class Arrays {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  // access elements in the array
  access(index) {
    if(index <= this.length) {
      return this.data[index];
    } else {
      throw "Exception: Index out of range";
    }
  }

  // remove the last element in an array
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  // add element to the array
  push(value) {
    //const item = this.data[index];
    this.data[this.length] = value;
    this.length++;
    return this;
  }

  // delete an index in the array
  delete(index) {
    const item = this.data[index];
    delete this.data[index];
    shiftItems(index);
    this.length--;
    return this;
  }

  shiftItems(index) {
    for(let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
  }
}
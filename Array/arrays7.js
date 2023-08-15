class Array {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  //method to access elements in the array
  get(index) {
    if(index <= this.length) {
      return this.data[index];
    } else {
      return "Index out of range. Enter a value lower or equal to the length of the array";
    }
  }

  // method to remove the last item
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return this;
  }

  // method to add an item to the last of the array
  push(value) {
    this.data[this.length] = value;
    this.length++;
    return this;
  }

  // method to add elements to the beginning of the array
  shift(value) {
    this.data[0] = value;
    this.shiftItems(value);
    this.length++;
    return this;
  }

  // to shift array to the left
  shiftItems(value) {
    for(let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
  }
}
class Array {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // method to get an element from the array
  access(index) {
    if(index <= this.length) {
      return this.data[index];  
    } else throw "Exception: index out of range";
  }

  // method to add elements at the end of the array
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return item;
  }

  // method to remove the last item in the array
  pop() {
    const lastItem = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return lastItem;
  }

  // method to check if array is empty
  isEmpty() {
    if(this.length <= 0) {
      return true
    } else return false;
  }

  // method to delete an item from an array in a particular index
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  // method to shift the items of the array to the right
  shiftItems(index) {
    for(let i = index; i < this.length-1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}
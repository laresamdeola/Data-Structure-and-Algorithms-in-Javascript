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
    this.data[this.length-1] = item;
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
}
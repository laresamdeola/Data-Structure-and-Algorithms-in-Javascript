class Array {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // method to access array elements
  access(index) {
    return this.data[index];
  }

  // method to add elements to the array - this would append the elements at the end of the array
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  // method to remove the last item from the array - this would remove the last element of the array
  pop() {
    const lastItem = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return lastItem;
  }

  // method to check if array contains only positive integers
  positiveInteger() {
    this.data.forEach(datum => {
      if(datum < 0) {
        return false;
      } else return true;
    });
  }
}
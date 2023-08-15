class Array {
  constructor(){
    this.data = {};
    this.length = 0
  }

  // method to get an item
  access(index) {
    if(index <= this.length) {
      return this.data[index];
    } else {
      return null;
    }
  }

  // method to remove the last item in the array
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  // method to add new item to the array
  push(value) {
    this.data[this.length] = value;
    this.length++;
    return this;
  }

  // method to delete an item from the array
  delete(index) {
    const item = this.data[index];
    delete this.data[index];
    shiftItems(index);
    this.length--;
    return item;
  }

  shiftItems(index) {
    for(let i = index; i < this.length; i++) {
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length - 1];
  }
}
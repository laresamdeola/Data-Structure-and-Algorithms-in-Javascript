class Array {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  // method to access array elements
  get(index) {
    return this.data[index];
  }

  // method to remove the last element in an array
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  // method to insert an element into the last index in an array
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

  // the method to move array elements to the right
  shiftItems(index) {
    for(let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
  }
}

const newArray9 = new Array();
newArray9.push(2);
newArray9.push(4);
newArray9.push(16);
newArray9.push(256);
//console.log(newArray9);
//newArray9.delete(1);
console.log(newArray9);
newArray9.pop();
console.log(newArray9)
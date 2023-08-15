class Array {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  //method to access array elements
  get(index) {
    return this.data[index];
  }

  //method to remove last element in the array
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return this;
  }

  // method to add item to the end of the list
  push(value) {
    this.data[this.length] = value;
    this.length++;
    return this;
  }

  // delete an item at any index in the array
  delete(index) {
    //this.data[index] = item;
    const item = this.data[index];
    delete this.data[index];
    this.shiftItems(index);
    this.length--;
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length; i++) {
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
newArray9.delete(3);
console.log(newArray9)
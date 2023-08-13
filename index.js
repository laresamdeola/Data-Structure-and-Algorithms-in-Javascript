class Array {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  //access elements in the array
  get(index) {
    if(index <= this.length) {
      const item = this.data[index];
      return item;
    } else {
      throw "Exception: Index out of range";
    }
  }

  // pop method - to remove the last element in the array
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  // method to check if array is empty
  isEmpty() {
    let message;
    this.length > 0 ? message = false : message = true;
    return message;
  }

  // method to add an element to the array
  push(value) {
    this.data[this.length] = value; 
    this.length++;
    return this;
  }

  // method to delete an item from an array
  delete(index) {
    const item = this.data[index];
    delete this.data[index];
    shiftItems(index);
    this.length--;
  }

  shiftItems(index) {
    for(let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
  }

  containsZero() {
    const zero = [];
    let message;
    for(let i = 0; i < this.length; i++) {
      if(this.data[i] === 0) {
        zero.push(this.data[i]);
        break;
      }
    }
    zero.length > 0 ? message = true : message = false;
    return message;
  }
}

const newArray = new Array();
newArray.push(1);
newArray.push(0);
newArray.push(2);
newArray.push(99);
newArray.push(2);
console.log(newArray);
console.log(newArray.get(1));
//console.log(newArray.pop());
//console.log(newArray);
console.log(newArray.containsZero());
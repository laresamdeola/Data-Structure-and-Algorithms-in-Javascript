class Array {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  // method to access array elements
  get(index) {
    try {
      if(index <= this.length) {
        return this.data[index];
      } 
    } catch(error) {
      console.log(error);
    }
  }

  // method to delete last item in array
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return this;
  }

  // method to add an element to the end of the array
  push(value) {
    this.data[this.length] = value;
    this.length++;
    return this;
  }

  // method to delete an element from any index in array
  delete(index) {
    delete this.data[index];
    this.shiftItems(index);
    this.length--;
    return this;
  }

  // create a method to move array elements to the right when an element is deleted
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
console.log(newArray9);
newArray9.push(89);
newArray9.delete(1);
//console.log(newArray9.get(3));
console.log(newArray9);
//newArray9.pop();
//console.log(newArray9)
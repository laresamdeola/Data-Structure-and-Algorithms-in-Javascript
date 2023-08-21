class Array {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  // method to access array elements
  get(index) {
    return this.data[index];
  }

  // method to delete last element in the array
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return this;
  }

  // method to add an element to the last index of the array
  push(value) {
    this.data[this.length] = value;
    this.length++;
    return this;
  }

  // method to delete from any index in array
  delete(index) {
    delete this.data[index];
    this.shiftItems(index);
    this.length--;
    return this;
  }

  // the shift method - moves array items to the right
  shiftItems(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
  }
}

/*
const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apples', 9)
console.log(myHashTable._hash('apples'))
console.log(myHashTable)
*/

const newArray = new Array();
newArray.push(25);
newArray.push(26);
newArray.push(27);
newArray.push(28);
newArray.push(29);
console.log(newArray);
newArray.pop();
console.log(newArray);
newArray.delete(2);
console.log(newArray);
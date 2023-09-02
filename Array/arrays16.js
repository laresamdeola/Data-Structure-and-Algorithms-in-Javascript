class Array {
  constructor(){
    this.data = {}
    this.length = 0
  }

  // method to fetch a single element from array
  get(index){
    return this.data[index];
  }

  // method to remove the last item in the array
  pop(){
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return this;
  }

  // method to add an item to the array
  push(value){
    this.data[this.length] = value;
    this.length++;
    return this;
  }

  // method to delete value from array
  delete(index){
    delete this.data[index];
    this.shiftItems(index);
    this.length--;
    return this;
  }

  shiftItems(index){
    for (let i = index; i < this.length; i++){
      this.data[i] = this.data[ i + 1];
    }
    delete this.data[this.length - 1];
  }
}
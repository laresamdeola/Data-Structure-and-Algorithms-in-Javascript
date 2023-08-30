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
}
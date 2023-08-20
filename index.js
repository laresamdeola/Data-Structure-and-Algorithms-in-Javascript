class HashTable {
  constructor(size) {
    if(size) {
      this.data = new Array(size);
    } else {
      this.data = new Array();
    }
  }

  // create a hash function
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  // create a set method to set the key - value pairs
  set(key, value) {
    let address = this._hash(key);
    if(!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this;
  }

  // create a get method
  get(key) {
    let address = this._hash(key);
    let currentBucket = this.data[address];
    if(currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if(currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apples', 9)
console.log(myHashTable._hash('apples'))
console.log(myHashTable)
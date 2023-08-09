class HashTable {
  constructor(size) {
    if(size) {
      this.data = new Array(size);
    } else {
      this.data = [];
    }
  }

  // create a hash method
  _hash(key) {
    let hash = 0;
    for(let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 1) % this.data.length;
    }
    return hash;
  }

  // create a set method
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
    let current = this.data[address];
    if(current) {
      for(let i = 0; i < current.length; i++) {
        if(curent[i][0] === key) {
          return current[i][1]
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
myHashTable.get('apples')
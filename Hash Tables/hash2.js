class HashTable {
  constructor(size) {
    if(size) {
      this.data = new Array(size);
    } else {
      this.data = [];
    }
    this.keysLength = 0;
    this.valuesLength = 0;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if(!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key,value]);
    return this.data;
  }

  get(key) {
    let address = this._hash(key);
    const bucket = this.data[address];
    if(bucket) {
      for(let i = 0; i < bucket.length; i++) {
        if(bucket[i][0] === key) {
       return bucket[i][1];   
        }
      }
    }
    return undefined;
  }

  keys() {
    let keysArray = [];
    for(let i = 0; i < this.data.length; i++) {
      keysArray.push(this.data[i][0][0]);
    }
    this.keysLength = keysArray.length;
    return keysArray;
  }

  values() {
    let valuesArray = [];
    for(let i = 0; i < this.data.length; i++) {
      valuesArray.push(this.data[i][0][1]);
    }
    this.valuesLength = valuesLength.length;
    return valuesArray;
  }

  lengthOfKeys() {
    this.keys();
    return this.keysLength;
  }

  lengthOfValues() {
    this.values();
    return this.valuesLength;
  }
}class HashTable {
  constructor(size) {
    if(size) {
      this.data = new Array(size);
    } else {
      this.data = [];
    }
    this.keysLength = 0;
    this.valuesLength = 0;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if(!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key,value]);
    return this.data;
  }

  get(key) {
    let address = this._hash(key);
    const bucket = this.data[address];
    if(bucket) {
      for(let i = 0; i < bucket.length; i++) {
        if(bucket[i][0] === key) {
       return bucket[i][1];   
        }
      }
    }
    return undefined;
  }

  keys() {
    let keysArray = [];
    for(let i = 0; i < this.data.length; i++) {
      if(this.data[i]){
        keysArray.push(this.data[i][0][0]);
      }
    }
    this.keysLength = keysArray.length;
    return keysArray;
  }

  values() {
    let valuesArray = [];
    for(let i = 0; i < this.data.length; i++) {
      if(this.data[i]){
        valuesArray.push(this.data[i][0][1]);
      }
    }
    this.valuesLength = valuesArray.length;
    return valuesArray;
  }

  lengthOfKeys() {
    this.keys();
    return this.keysLength;
  }

  lengthOfValues() {
    this.values();
    return this.valuesLength;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
console.log(myHashTable.get('grapes'));
myHashTable.set('apples', 9)
console.log(myHashTable);
console.log(myHashTable.get('apples'));
console.log(myHashTable.lengthOfKeys())
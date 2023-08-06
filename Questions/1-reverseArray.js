// Reverse Array Elements

const reverse = (str) => { 
  return str.split('').reverse().join('')
}

const reverse2 = (str) => {
  const strArray = str.split("");
  const backwards = [];

  for(let i = str.length-1; i >= 0; i--) {
    backwards.push(str[i]);
  }

  return backwards.join("");
}

console.log(reverse2("damilare"));
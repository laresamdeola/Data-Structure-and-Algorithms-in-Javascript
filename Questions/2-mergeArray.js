// Merge Sorted arrays

const mergeSortedArrays = (arr1, arr2) => {
  const merge = arr1.concat(arr2);
  return merge.sort();
}

console.log(mergeSortedArrays([2, 4, 6, 7], [4, 7, 8]));
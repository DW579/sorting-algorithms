function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function merge(arr1, arr2) {
  
  var result = [];
  var idx1 = 0;
  var idx2 = 0;

  while (idx1 < arr1.length && idx2 < arr2.length) {
    result.push(arr1[idx1] < arr2[idx2] ? arr1[idx1++] : arr2[idx2++]);
  }

  return result.concat(arr1.slice(idx1)).concat(arr2.slice(idx2));

}

function partition(arr, left, right){
  var pivotValue = arr[left];
  var partitionIndex = left;

  for(var i = left+1; i <= right; i++){
    if(arr[i] < pivotValue){
      partitionIndex++;
      swap(arr, i, partitionIndex);
    }
  }
  
  swap(arr, left, partitionIndex);
  return partitionIndex;
}
   

module.exports = {
  swap,
  merge,
  partition
}
'use strict'

const swap = require('./helpers').swap;
const merge = require('./helpers').merge;
const partition = require('./helpers').partition;

function mergeSort(arr) {

}

function quickSort(arr, left=0, right=arr.length - 1){

  if(left < right){
   var partitionIndex = partition(arr, left, right);
   quickSort(arr, left, partitionIndex - 1);
   quickSort(arr, partitionIndex + 1, right);
  }
  
  return arr;
}

module.exports = {
  mergeSort,
  quickSort
};
'use strict'

const swap = require('./helpers').swap;

function bubbleSort(arr){
  
  for (var i = arr.length; i > 0; i--) {
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  
  return arr;

}

function selectionSort(arr) {

  for (var i = 0; i < arr.length; i++) {
    var min = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    if (i !== min) swap(arr, i, min);
  }

  return arr;

}

function insertionSort(arr) {

  for (var i = 0; i < arr.length; i++) {
    var currentValue = arr[i];
    for (var j = i - 1; j > -1 && arr[j] > currentValue; j--) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = currentValue;
  }

  return arr;

}

module.exports = {
  bubbleSort,
  selectionSort,
  insertionSort
};
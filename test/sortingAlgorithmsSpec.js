'use strict'

let expect = require('chai').expect

describe("#bubbleSort", function(){

  let bubbleSort = require("../sortingAlgorithms").bubbleSort;

  it("sorts an array of positive numbers", function(){
    expect(bubbleSort([3.1,4.5,1,2,5])).to.deep.equal([1,2,3.1,4.5,5]);
  });

  it("sorts an array of negative numbers", function(){
    expect(bubbleSort([-4,-9,-2,-8,-2,0])).to.deep.equal([-9,-8,-4,-2,-2,0]);
  });

  it("sorts an array of positive and negative numbers", function(){
    expect(bubbleSort([-3,4,1,-9,22])).to.deep.equal([-9,-3,1,4,22]);
  });
  it("works with arrays that are already sorted", function(){
    expect(bubbleSort([1,2,3,4,5])).to.deep.equal([1,2,3,4,5]);
  });

});

describe("#insertionSort", function(){

  let insertionSort = require("../sortingAlgorithms").insertionSort;

  it("sorts an array of positive numbers", function(){
    expect(insertionSort([3.1,4.5,1,2,5])).to.deep.equal([1,2,3.1,4.5,5]);
  });

  it("sorts an array of negative numbers", function(){
    expect(insertionSort([-4,-9,-2,-8,-2,0])).to.deep.equal([-9,-8,-4,-2,-2,0]);
  });

  it("sorts an array of positive and negative numbers", function(){
    expect(insertionSort([-3,4,1,-9,22])).to.deep.equal([-9,-3,1,4,22]);
  });
  it("works with arrays that are already sorted", function(){
    expect(insertionSort([1,2,3,4,5])).to.deep.equal([1,2,3,4,5]);
  });

});

describe("#selectionSort", function(){

  let selectionSort = require("../sortingAlgorithms").selectionSort;

  it("sorts an array of positive numbers", function(){
    expect(selectionSort([3.1,4.5,1,2,5])).to.deep.equal([1,2,3.1,4.5,5]);
  });

  it("sorts an array of negative numbers", function(){
    expect(selectionSort([-4,-9,-2,-8,-2,0])).to.deep.equal([-9,-8,-4,-2,-2,0]);
  });

  it("sorts an array of positive and negative numbers", function(){
    expect(selectionSort([-3,4,1,-9,22])).to.deep.equal([-9,-3,1,4,22]);
  });
  it("works with arrays that are already sorted", function(){
    expect(selectionSort([1,2,3,4,5])).to.deep.equal([1,2,3,4,5]);
  });

});

describe("#quickSort", function(){

  let quickSort = require("../sortingAlgorithms").quickSort;

  it("sorts an array of positive numbers", function(){
    expect(quickSort([3.1,4.5,1,2,5])).to.deep.equal([1,2,3.1,4.5,5]);
  });

  it("sorts an array of negative numbers", function(){
    expect(quickSort([-4,-9,-2,-8,-2,0])).to.deep.equal([-9,-8,-4,-2,-2,0]);
  });

  it("sorts an array of positive and negative numbers", function(){
    expect(quickSort([-3,4,1,-9,22])).to.deep.equal([-9,-3,1,4,22]);
  });
  it("works with arrays that are already sorted", function(){
    expect(quickSort([1,2,3,4,5])).to.deep.equal([1,2,3,4,5]);
  });

});

describe("#mergeSort", function(){

  let mergeSort = require("../sortingAlgorithms").mergeSort;

  it("sorts an array of positive numbers", function(){
    expect(mergeSort([3.1,4.5,1,2,5])).to.deep.equal([1,2,3.1,4.5,5]);
  });

  it("sorts an array of negative numbers", function(){
    expect(mergeSort([-4,-9,-2,-8,-2,0])).to.deep.equal([-9,-8,-4,-2,-2,0]);
  });

  it("sorts an array of positive and negative numbers", function(){
    expect(mergeSort([-3,4,1,-9,22])).to.deep.equal([-9,-3,1,4,22]);
  });
  it("works with arrays that are already sorted", function(){
    expect(mergeSort([1,2,3,4,5])).to.deep.equal([1,2,3,4,5]);
  });

});

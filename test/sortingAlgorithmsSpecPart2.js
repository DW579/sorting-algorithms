'use strict'

let expect = require('chai').expect

describe("Part 2", function() {

  describe("#merge", function() {

    let merge = require("../algorithms/helpers").merge;

    it("merges two sorted arrays into a new array", function() {
      expect(merge([1,3,5,7],[2,4,6,8])).to.deep.equal([1,2,3,4,5,6,7,8]);
      expect(merge([1,2,3,4],[5,6,7,8])).to.deep.equal([1,2,3,4,5,6,7,8]);
      expect(merge([2,5,7,8],[1,3,9,10])).to.deep.equal([1,2,3,5,7,8,9,10]);
    });

  });

  describe("#mergeSort", function(){

    let mergeSort = require("../algorithms/sortingAlgorithmsPart2").mergeSort;

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

  describe("#quickSort", function(){

    let quickSort = require("../algorithms/sortingAlgorithmsPart2").quickSort;

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

});
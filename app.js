require("./common-array");
require("./insertion-sort");
require("./selection-sort");

var algorithm = "insertion";
//var algorithm = "selection";

//[ 6, 5, 4, 3, 2, 1 ].customSort(algorithm);
[ 6, 5, 4, 3, 2, 1 ].customSort("insertion");
[ 6, 5, 4, 3, 2, 1 ].customSort("selection");
/*
[
    { word: "cat", toString() { return this.word; } }
   ,{ word: "jet", toString() { return this.word; } }
   ,{ word: "dog", toString() { return this.word; } }
   ,{ word: "hat", toString() { return this.word; } }
   ,{ word: "car", toString() { return this.word; } }
   ,{ word: "bat", toString() { return this.word; } }
].customSort(algorithm, function(index1, index2) {
    return this[index1].word < this[index2].word ? true : false;
});*/

//Array.strToArray("string").customSort(algorithm);

/*console.log("\nInsertion Sort:");
console.log("Average: ~(n^2)/4 compares and ~(n^2)/4 exchanges");
console.log("Worst:   ~(n^2)/2 compares and ~(n^2)/2 exchanges");
console.log("Best:         n-1 compares and        0 exchanges");

[ 6, 5, 4, 3, 2, 1 ].insertionSort();
[ 1, 2, 3, 4, 5, 6 ].insertionSort();
[ 2, 3, 6, 5, 1, 4 ].insertionSort();
[ 6, 5, 4, 3, 2, 1 ].selectionSort();*/

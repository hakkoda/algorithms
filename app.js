require("./common-array");
require("./insertion-sort");
require("./selection-sort");

console.log("\nInsertion Sort:");
console.log("Average: ~(n^2)/4 compares and ~(n^2)/4 exchanges");
console.log("Worst:   ~(n^2)/2 compares and ~(n^2)/2 exchanges");
console.log("Best:         n-1 compares and        0 exchanges");

[ 6, 5, 4, 3, 2, 1 ].insertionSort();
[ 1, 2, 3, 4, 5, 6 ].insertionSort();
[ 2, 3, 6, 5, 1, 4 ].insertionSort();

Array.strToArray("string").insertionSort();

[
    { word: "cat", toString() { return this.word; } }
   ,{ word: "jet", toString() { return this.word; } }
   ,{ word: "dog", toString() { return this.word; } }
   ,{ word: "hat", toString() { return this.word; } }
   ,{ word: "car", toString() { return this.word; } }
   ,{ word: "bat", toString() { return this.word; } }
].insertionSort(function(index1, index2) {
    return this[index1].word < this[index2].word ? true : false;
});

[ 6, 5, 4, 3, 2, 1 ].selectionSort();

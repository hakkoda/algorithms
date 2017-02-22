"use strict";

Array.prototype.insertionSort = function(callback) {
    const n = this.length;
    for (let i = 1; i < n; i++) {
        for (let j = i; j > 0 && this.less(j, j-1, callback); j--) {
            this.exchange(j, j-1);
        }
    }
};

Array.insertionSortDemo = function(callback) {
    var array = [9,8,7,6,5,4,3,2,1,0];
    array.displayArray("\n", "start");
    const n = array.length;
    for (let i = 1; i < n; i++) {
        for (let j = i; j > 0 && array.less(j, j-1, callback); j--) {
            array.exchange(j, j-1);
            process.stdout.write("     ");
            Array.displayWithHighlight(array, [ j, j-1 ]);
        }
    }
    array.displayArray("\n", "final");
};

"use strict";

Array.prototype.quickSort = function(callback) {
    this.quickSortInner(0, this.length-1, quickCompare);
};

Array.prototype.quickSortInner = function(lo, hi, callback) {
    if (hi <= lo) {
        return;
    }

    var j = this.partition(lo, hi, callback)
    this.quickSortInner(lo, j-1, callback);
    this.quickSortInner(j+1, hi, callback);
};

Array.prototype.partition = function(lo, hi, callback) {
    var i = lo;
    var j = hi+1;
    var v = this[lo];
    while (true) {
        while (this.less(this[++i], v, callback)) {
            if (i === hi) {
                break;
            }
        }
        while (this.less(v, this[--j], callback)) {
            if (j === lo) {
                break;
            }
        }
        if (i >= j) {
            break;
        }
        this.exchange(i, j);
    }
    this.exchange(lo, j);
    return j;
};

function quickCompare(value1, value2) {
    var result = false;
    if (value1 > value2) { result = false; }
    if (value1 < value2) { result = true; }
    return result;
}

Array.quickSortDemo = function(callback) {
    console.log("\nQuicksort Demo");
    var array = [9,8,7,6,5,4,3,2,1,0];
    array.displayArray("\n", "              start");

    // sort stuff...
    array.quickSort();
    
    array.displayArray("\n", "              final");
};
